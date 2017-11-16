<template>

  <div id="app">

<!--     <message>Hello There!</message>
    <message>Hello {{name}}! </message>

    <counter></counter> -->
    <todo-list :todos='todos'></todo-list>

    <create-todo @add-todo='onAddTodo'></create-todo>

    <success v-show="success" @success-open='onSuccessOpen' @success-close='onSuccessClose' ></success>
  </div>

</template>

<script>
    import Message from './components/Message.vue';
    import Counter from './components/Counter.vue';
    import TodoList from './components/TodoList.vue';
    import CreateTodo from './components/CreateTodo.vue';
    import Success from './components/Success.vue';
    import Hub from './Hub.js';


    export default {

        name: 'app',

        components: {Message, Counter, TodoList, CreateTodo, Hub, Success},

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
                }],

                success: false,
            }

        },

        created() {

            Hub.$on('add-todo', this.onAddTodo)

            Hub.$on('success-open', this.onSuccessOpen)

            Hub.$on('success-close', this.onSuccessClose)

        },

        methods: {

            onSuccessClose() {

                this.success = false;

            },

            onSuccessOpen(todo) {

                this.success = true;

                Hub.$emit('set-todo', todo)

            },

            onAddTodo(todo) {

                this.todos.push(todo);

            },

        },

    }

</script>



<style>



</style>
