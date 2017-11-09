<template>

  <div id="app">

<!--     <message>Hello There!</message>
    <message>Hello {{name}}! </message>

    <counter></counter> -->
    <todo-list :todos='todos'></todo-list>

    <create-todo @add-todo='addTodo'></create-todo>

  </div>

</template>

<script>
    import Message from './components/Message.vue';
    import Counter from './components/Counter.vue';
    import TodoList from './components/TodoList.vue';
    import CreateTodo from './components/CreateTodo.vue';

    export default {

        name: 'app',

        components: {Message, Counter, TodoList, CreateTodo},

        data() {

            return {

                todos: [{
                    title: 'Todo A',
                    project: 'Project A',
                    done: false
                }, {
                    title: 'ToDo B',
                    project: 'Project B',
                    done: false
                }, {
                    title: 'ToDo C',
                    project: 'Project C',
                    done: false
                }, {
                    title: 'ToDo D',
                    project: 'Project D',
                    done: false
                }, {
                    title: 'ToDo E',
                    project: 'Project E',
                    done: false
                }]

            }
        },
        methods: {
            deleteTodo(todo) {
                const todoIndex = this.todos.indexOf(todo);

                this.todos.splice(todoIndex, 1)
            },

            addTodo(todo) {
                this.todos.push(todo);
            },
        },

    }

</script>



<style>



</style>
