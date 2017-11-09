<template>

    <div class='box'>

        <p class='done'>Completed Tasks: {{ todos.filter(todo => {return todo.done === true}).length }}</p>

        <p class='done'>Completed Tasks: {{ todos.filter(todo => {return todo.done === false}).length }}</p>

        <todo v-for="todo in todos" :todo='todo'></todo>

    </div>

</template>

<script>
    import Todo from './Todo.vue'

    export default {
        props: ['todos'],

        components: {Todo}
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

