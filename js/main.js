(function(){
    'use strict';

    //two way data biding(to UI)
    var vm = new Vue({
        el: '#app',
        data: {
            todos:[
                'task 1',
                'task 2',
                'task 3'
            ]
        },
        methods: {
            addItem: function() {
                this.todos.push(this.newItem);
                this.newItem = '';
            },
            deleteItem: function(index) {
                if (confirm('削除してよろしいですか？'))
                this.todos.splice(index, 1);
            }
        }
    });
})();