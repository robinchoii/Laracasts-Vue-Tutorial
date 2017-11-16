<template>

    <div class='modal'>

        <div class='modal-background'>

            <div class='modal-container'>

                <h1>Success!</h1>

                <p>

                    {{todo.title}}

                </p>

                <div>

                    <button  class='ui blue button' @click='successClose'> Done</button>

                </div>

            </div>

        </div>

    </div>

</template>

<script type="text/javascript">
    import Hub from '../Hub.js'

    export default {

        data() {

            return {

                todo: {}

            }

        },

        created() {

            Hub.$on('set-todo', this.onSetTodo)

        },

        methods: {


            successClose() {

                Hub.$emit('success-close');

            },

            onSetTodo(todo) {

                this.todo = todo

            }

        }

    }

</script>

<style type="text/css">

    .modal-background {

    }
    .modal-container {
        border: solid 1px black;
        text-align: center;
        width: 20%;
        margin: 0px auto;
        padding: 30px;
    }

</style>
