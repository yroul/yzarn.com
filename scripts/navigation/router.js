define(function(require){
    
    var backbone = require('backbone');
    
    
    var Router = backbone.Router.extend({
        initialize : function(opt){
            console.log('router initialize');
        },
        routes: {
            "music": function(){
                console.log('music route invoke.');
            },
            "bio": function(){
                console.log('bio route invoke.');
            },
            "tour": function(){
                console.log('tour route invoke.');
            },
            "contact": function(){
                console.log('contact route invoke.');
            },
        }
    });
    
    return Router;
});