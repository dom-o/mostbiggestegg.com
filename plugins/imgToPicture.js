var debug = require('debug')('imgToPicture')
var multimatch = require('multimatch')
var cheerio = require('cheerio')

module.exports = imgFix

function imgFix(opts={}) {
  opts.pattern= opts.pattern || '**/*.html'
  opts.imageContainerClassName = opts.imageContainerClassName || '.content img'

  return function (files, metalsmith, done) {
    setImmediate(done)

    Object.keys(files).forEach(function (file) {
      if (multimatch(file, opts.pattern).length) {
        var document = files[file]
        if (!document.contents) { return }
        var $ = cheerio.load(document.contents.toString())
        var images = $(opts.imageContainerClassName)
        images.each(function () {
          var $image = $(this)
          if (!$image.attr('alt')) {
            return done(new Error(`No alt text on ${$image.attr('src')} in ${file}`))
          }

          var $picture = $('<picture>')
          $image.wrap($picture)
          $image.addClass('image')
          for (let i of [{type:'webp',ext:'webp'},{type:'jxl',ext:'jxl'}]) {
            const path = $image.attr('src').replace(/(\.)\w+$/g, '$1'+i['ext'])

            if (!files[path]) {
              debug(`${path} not found.`)
            } else {
              $picture.prepend(`<source type='image/${i['type']}' srcset='${path}' />`)
            }
          }
        })
        document.contents = Buffer.from($.html())
      }
    })

    done()
  }
}
