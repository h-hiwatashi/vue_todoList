(function(){
    'use strict';
    var likeComponent = Vue.extend({
        template: '<button>like</button>'
    });

    var app2 = new Vue({
        el: '#app2',
        components: {
            'like-component': likeComponent
        }
    });

})();