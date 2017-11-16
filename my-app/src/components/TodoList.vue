<template>

    <div class='box'>

        <p class='done'>Completed Tasks: {{ todos.filter(todo => {return todo.done === true}).length }}</p>

        <p class='done'>Completed Tasks: {{ todos.filter(todo => {return todo.done === false}).length }}</p>

        <todo v-for="todo in todos" :todo='todo' @delete-todo='deleteTodo' @complete-todo='completeTodo'></todo>

    </div>

</template>

<script>
    import Todo from './Todo.vue'
    import CreateTodo from './CreateTodo.vue'
    import Hub from '../Hub.js'

    export default {
        props: ['todos'],

        components: { Todo },

        created() {

            Hub.$on('delete-todo', this.deleteTodo)
            Hub.$on('complete-todo', this.completeTodo)

        },

        methods: {
            deleteTodo(todo) {

                const todoIndex = this.todos.indexOf(todo);

                this.todos.splice(todoIndex, 1);
            },

            completeTodo(todo) {

                const todoIndex = this.todos.indexOf(todo);

                this.todos[todoIndex].done = true;

                Hub.$emit('success-open', todo)
            }
        }
    }

</script>

<style>
    .box {
        padding:20px;
     }

     .done {
        margin: 0px auto;
        /*border: 3px solid green;*/
        text-align: center;
     }



</style>

