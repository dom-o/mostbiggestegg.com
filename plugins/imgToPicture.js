const debug = require('debug')('imgToPicture')
const multimatch = require('multimatch')
const cheerio = require('cheerio')

module.exports = imgFix

function imgFix(opts={}) {
  opts.pattern= opts.pattern || '**/*.html'
  opts.imageContainerClassName = opts.imageContainerClassName || '.content img'

  return function (files, metalsmith, done) {
    setImmediate(done)

    Object.keys(files).forEach(function (file) {
      if (multimatch(file, opts.pattern).length) {
        const document = files[file]
        if (!document.contents) { return }
        const $ = cheerio.load(document.contents.toString())
        const images = $(opts.imageContainerClassName)
        images.each(function () {
          const $image = $(this)
          if (!$image.attr('alt')) {
            debug(`No alt text on ${$image.attr('src')} in ${file}`)
          }

          const $picture = $('<picture>')
          $image.wrap($picture)
          $image.addClass('image')
          for (let i of [/*actually webp is annoying {type:'webp',ext:'webp'},*/{type:'jxl',ext:'jxl'}]) {
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
