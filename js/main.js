(function(){
    'use strict';

    //two way data biding(to UI)
    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos:[]
        },
        watch: {
            todos: {
                handler: function() {
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                    //alert('保存されました！');
                },
                deep: true
            }
        },
        //更新してもデータが保持されるように編集
        mounted: function() {
            this.todos =JSON.parse(localStorage.getItem('todos')) || [];
        },
        
        methods: {
            addItem: function() {
                var item ={
                    title: this.newItem,
                    isDone: false
                }
                this.todos.push(item);
                this.newItem = '';
            },
            deleteItem: function(index) {
                if (confirm('削除してよろしいですか？'))
                this.todos.splice(index, 1);
            },
            purge: function() {
                if (!confirm('完了済タスクを削除しますか？')){
                    return;
                }
                this.todos=this.countedTask;
            }
        },
        //タスクのカウント
        computed: {
            countedTask: function() {
                return this.todos.filter(function(todo) {
                        return !todo.isDone;
                });
            }
        }
    });
})();