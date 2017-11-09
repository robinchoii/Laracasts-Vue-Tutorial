<template>

  <div id="app">

<!--     <message>Hello There!</message>
    <message>Hello {{name}}! </message>

    <counter></counter> -->
    <todo-list :todos='todos'></todo-list>

  </div>

</template>

<script>
    import Message from './components/Message.vue';
    import Counter from './components/Counter.vue';
    import TodoList from './components/TodoList.vue';

    export default {

        name: 'app',

        components: {Message, Counter, TodoList},

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
        }

    }

</script>



<style>



</style>
