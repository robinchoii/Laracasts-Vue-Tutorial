<template>

    <div class='ui centered card'>

        <div class='content' v-show="!isEditing">

            <div class='header'>

                {{ todo.title }}

            </div>

            <div class='meta'>

                {{ todo.project }}

            </div>

            <div class='extra content'>
                <span class='right floated edit icon' @click='showForm'>

                    <i class='edit icon'></i>

                </span>

                <span class='right floated trash icon' @click='deleteTodo(todo)'>

                    <i class='trash icon'></i>

                </span>

            </div>

        </div>


        <!-- form displayed after edit clicked -->
        <div class='content' v-show='isEditing'>

            <div class='ui form'>

                <div class='field'>

                    <label>Title</label>

                    <input type="text" v-model='todo.title'>

                </div>

                <div class='field'>

                    <label>Project</label>

                    <input type="text" v-model='todo.project'>

                </div>

                <div class='ui two button attached buttons'>
                  <button class='ui basic blue button' @click="hideForm">
                    Update
                  </button>
                </div>

            </div>

        </div>

        <div class='ui bottom attached green basic button'  v-show='!isEditing && todo.done'>

            Completed

        </div>

        <div class='ui bottom attached red basic button' @click='completeTodo(todo)' v-show='!isEditing && !todo.done'>

            Pending

        </div>

    </div>

</template>

<script type="text/javascript">
    import Hub from '../Hub.js';

    export default {

        props: ['todo'],

        data() {

            return {

                isEditing: false,

            }

        },

        methods: {

            showForm() {
                this.isEditing = true

            },

            hideForm() {

                this.isEditing = false

            },

            deleteTodo(todo) {

                Hub.$emit('delete-todo', todo)

            },

            completeTodo(todo) {

                Hub.$emit('complete-todo', todo)

            }
        },

    };


</script>
