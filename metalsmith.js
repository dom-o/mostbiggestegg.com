const Metalsmith = require('metalsmith'),
  metadata = require('@metalsmith/metadata'),
  markdown = require('@metalsmith/markdown'),
  rootpath = require('metalsmith-rootpath'),
  layouts = require('@metalsmith/layouts'),
  imageAspectRatio = require('metalsmith-image-aspect-ratio'),
  updated = require('metalsmith-updated')

  feed = require('./plugins/feed'),
  // haps = require('./plugins/haps'),
  imgToPicture = require('./plugins/imgToPicture'),

  debug = require('metalsmith-debug')


Metalsmith(__dirname)
  .metadata({
    site: {
      url: 'https://mostbiggestegg.com/',
      author: 'egghorn',
      title:'mostbiggestegg.com',
      description: 'egghorn website.',
      build_date: new Date() 
    },
  })
  .use(metadata({
    'pages': 'src/pagelist.yaml',
    'projs': 'src/projlist.yaml',
    // 'haps-events': 'src/hapslist.yaml'
  }))
  // .use(haps())
  .use(markdown())
  .use(updated({
    'updatedFile':'file_last_modified_log.json'
  }))
  .use(rootpath())
  .use(layouts({
    default: 'page.njk',
    pattern: ['**/*.html'],
    engineOptions: {
      filters: {
        UTCdate: string => (new Date(string)),
        blogDate: string => (new Date(string).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })),
        match: (list, prop, val) => list.find(a => a[prop]==val),
        filter: (list, prop, val) => list.filter(a => a[prop] == val),
      }
    }
  }))
  .use(feed({collection: 'pages'}))
  .use(imgToPicture())
  .use(imageAspectRatio({
    pattern: '**/*.html',
    imageExtensions: ['png', 'jpg', 'jpeg', 'gif', 'webp'],
    imagesContainerClassName: '.content img',
  }))
  .use(debug())

  .build(function(err, files) {

    if(err) { throw err }
  })
