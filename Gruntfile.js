module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	  // Project configuration.
	  grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
            less: {
                development: {
                  options: {
                    //paths: ["assets/css"]
                  },
                  files: {
                    "main.css": ["index.css","less/*.less"]
                  }
                }
            },
            watch: {
                less: {
                    files: ['**/*.less'],
                    tasks: ['less:development'],
                    options: {
                        spawn: false,
                    },
                },
            },
            /*mocha : {
                test : {
                    src: ['tests/index.html'],
                    dest: './tests/report.out',
                    options: {
                        reporter: 'XUnit',
                        run : true
                    }  
                }
            }*/
            mocha_phantomjs : {
                all: {
                    src : ['tests/index.html'],
                    options: {
                        reporter: 'xunit',
                        output: 'tests/results/result.xml',
                    }
                },
                 
            }
	  });



	  // Default task(s).
	  grunt.registerTask('default', ['watch:less']);
          grunt.registerTask('compileLess',['less:development']);
          //grunt.registerTask('test', ['mocha:test']);
          grunt.registerTask('test', ['mocha_phantomjs']);


};
