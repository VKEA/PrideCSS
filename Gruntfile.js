const sass = require('dart-sass');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    implementation: sass,
                    sourcemap: false,
                    compress: false,
                    yuicompress: false,
                    style: 'expanded',
                },
                files: {
                    'css/pride.css': 'scss/pride.scss',
                    'css/pride-lite.css': 'scss/pride-lite.scss'
                }
            },
        },
        stylelint: {
            options: {
                configFile: '.stylelintrc.json',
                formatter: 'string',
                ignoreDisables: false,
                failOnError: true,
                outputFile: '',
                reportNeedlessDisables: false,
                fix: true,
                syntax: ''
            },
            src: ['**/*.{css,scss}']
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-stylelint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}