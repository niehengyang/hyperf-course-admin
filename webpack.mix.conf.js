let mix = require('laravel-mix');






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

mix.js('resources/assets/js/admin/admin.js','public/js')
    .js('resources/assets/js/login/login.js','public/js')
    .js('resources/assets/js/home/home.js','public/js')
    // .js('resources/assets/js/ddapp/ddapp.js','public/js')
    .extract(['vue','axios','element-ui'])
    .sass('resources/assets/sass/admin.scss', 'public/css')
    .sass('resources/assets/sass/app.scss','public/css')
    // .sass('resources/assets/sass/ddapp.scss','public/css')
    .sass('resources/assets/sass/home.scss','public/css');