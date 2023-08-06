const mix = require('laravel-mix');
const { object } = require('prop-types');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 
mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');

    //include this to fix the error: "Module not found: Error: Can't resolve 'fs' in '\resources\js'"
    mix.webpackConfig({
      resolve: { fallback: { "fs" : false } }
    
    } }
    mix.webpackConfig({
      resolve: {  fallback: {  "https": false,"http": false, "tls": false, "path": false,"net": false, "os" : false,"stream": false, "constants": false } },
    externals: {
      fs: "commonjs fs"
    }
    });