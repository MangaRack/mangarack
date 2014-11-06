'use strict';

module.exports = function (grunt) {
    // Initialize the configuration.
    grunt.initConfig({
        traceur: {
            options: {
                modules: 'inline'
            },
            shared: {
                cwd: 'src',
                dest: 'dist/',
                expand: true,
                src: '**/*.js'
            }
        },
        browserify: {
            shared: {
                files: {
                    'src/test.combined.js': ['src/test.js']
                }
            }
        },
        jscs: {
            main: {options: {config: true}, src: 'Gruntfile.js'},
            src: {options: {config: true}, src: 'src/**/*.js'}
        },
        jshint: {
            main: {options: {jshintrc: true}, src: 'Gruntfile.js'},
            src: {options: {jshintrc: true}, src: 'src/**/*.js'}
        }
    });

    // Initialize the tasks.
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-traceur');

    // Register the task.
    grunt.registerTask('default', ['jshint', 'jscs']);
};
