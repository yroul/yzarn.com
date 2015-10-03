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
	  });



	  // Default task(s).
	  grunt.registerTask('default', ['watch:less']);
          grunt.registerTask('compileLess',['less:development']);

};
