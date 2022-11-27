var debug = require('debug')('imgToPicture');
var multimatch = require('multimatch')
var cheerio = require('cheerio')

module.exports = imgFix;

function imgFix(opts={}) {
  opts.pattern= opts.pattern || '**/*.html'
  opts.imageContainerClassName = opts.imageContainerClassName || '.content img'

  return function (files, metalsmith, done) {
    setImmediate(done)

    Object.keys(files).forEach(function (file) {
      if (multimatch(file, opts.pattern).length) {
        var document = files[file]
        if (!document.contents) { return; }
        var $ = cheerio.load(document.contents.toString())
        var images = $(opts.imageContainerClassName)
        images.each(function () {
          var $image = $(this)
          if (!$image.attr('alt')) {
            return done(new Error(`No alt text on ${this} in ${file}`))
          }

          var $picture = $('<picture>')
          $image.wrap($picture)
          $image.addClass('image')
          $picture.prepend(`<source type='image/webp' srcset='${$image.attr('src').replace(/\.\w+$/g, '.webp')}' /> <source type='image/jxl' srcset='${$image.attr('src').replace(/\.\w+$/g, '.jxl')}' />`)


        })
        document.contents = Buffer.from($.html());
      }
    })

    done()
  }
}
