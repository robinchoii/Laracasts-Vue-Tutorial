<template>

    <div class='modal'>

        <div class='modal-background'>

            <div class='modal-container'>

                <div class='modal-content'>

                    <i class="massive checkmark icon"></i>

                    <h1>Success!</h1>

                    <p>

                        {{todo.title}} completed!

                    </p>

                    <div>

                        <button  class='ui blue button' @click='successClose'> Done</button>

                    </div>

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
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity .3s ease;
    }
    .modal-container {
        text-align: center;
        width: 400px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }
    .modal-content {
        font-size: 16px;
        font-weight: 300;
    }
    .checkmark {

        color: green;

    }

</style>
