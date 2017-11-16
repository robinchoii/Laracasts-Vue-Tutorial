<template>

    <div class='box'>

        <p class='done'>Completed Tasks: {{ todos.filter(todo => {return todo.done === true}).length }}</p>

        <p class='done'>Completed Tasks: {{ todos.filter(todo => {return todo.done === false}).length }}</p>

        <todo v-for="todo in todos" :todo='todo' @delete-todo='onDeleteTodo' @complete-todo='onCompleteTodo'></todo>

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

            Hub.$on('delete-todo', this.onDeleteTodo)

            Hub.$on('complete-todo', this.onCompleteTodo)

        },

        methods: {

            onDeleteTodo(todo) {

                const todoIndex = this.todos.indexOf(todo);

                this.todos.splice(todoIndex, 1);
            },

            onCompleteTodo(todo) {

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

