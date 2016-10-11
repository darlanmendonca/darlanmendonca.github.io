'use strict';

module.exports = {
  lint: [
    './gulpfile.js',
    './test/**/*.js',
    './sources/angular/**/*.js'
  ],
  views: {
    src: './sources/views/**/*.jade',
    dest: './'
  },
  templates: {
    src: './sources/angular/**/*.jade',
    dest: './public/templates/'
  },
  imgs: {
    src: './sources/imgs/*',
    dest: './public/imgs',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './public/styles/'
  },
  scripts: {
    src: [
      './sources/angular/**/*.js',
      '!./sources/angular/**/*.spec.js'
    ],
    dest: './public/scripts/'
  },
  sprites: {
    src: './sources/sprites/*.png',
    dest: './public/imgs/sprites/'
  },
  browserSync: require('browser-sync').create(),
  browserSyncOptions: {
    server: {
      baseDir: './'
    },
    notify: false,
    middleware: [ require('connect-history-api-fallback')() ],
    reloadDelay: 100,
    open: require('yargs').argv.open
  }
};
