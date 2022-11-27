const Metalsmith = require('metalsmith'),
  metadata = require('@metalsmith/metadata'),
  markdown = require('@metalsmith/markdown'),
  rootpath = require('metalsmith-rootpath'),
  layouts = require('@metalsmith/layouts'),
  feed = require('./plugins/feed'),
  haps = require('./plugins/haps')
  debug = require('metalsmith-debug');
  imageAspectRatio = require('metalsmith-image-aspect-ratio');

Metalsmith(__dirname)
  .metadata({
    site: {
      url: "https://mostbiggestegg.com/",
      author: "egghorn",
      title:'mostbiggestegg.com',
      description: "egghorn website."
    },
  })
  .use(metadata({
    'pages': 'src/pagelist.yaml',
    'projs': 'src/projlist.yaml',
    'haps-events': 'src/hapslist.yaml'
  }))
  .use(haps())
  .use(markdown())
  .use(rootpath())
  .use(layouts({
    engineOptions: {
      filters: {
        UTCdate: string => (new Date(string)),
        blogDate: string => (new Date(string).toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" })),
        match: (list, prop, val) => list.find(a => a[prop]==val),
        filter: (list, prop, val) => list.filter(a => a[prop] == val),
      }
    }
  }))
  .use(feed({collection: 'pages'}))
  .use(imageAspectRatio({
    pattern: '**/*.html',
    imageExtensions: ['png', 'jpg', 'jpeg', 'gif', 'webp'],
    imagesContainerClassName: '.container img',
  }))
  .use(debug())

  .build(function(err, files) {

    if(err) { throw err; }
  });
