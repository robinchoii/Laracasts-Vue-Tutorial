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

                <span class='right floated edit icon' v-on:click='showForm'>

                    <i class='edit icon'></i>

                </span>

            </div>

        </div>


        <!-- form displayed after edit clicked -->
        <div class='content' v-show='isEditing'>

            <div class='ui form'>

                <div class='field'>

                    <label>Title</label>

                    <input type="text" v-model='todo.name'>

                </div>

                <div class='field'>

                    <label>Project</label>

                    <input type="text" v-model='todo.project'>

                </div>

                <div class='ui two button attached buttons'>
                  <button class='ui basic blue button' v-on:click="hideForm">
                    Update
                  </button>
                </div>

            </div>

        </div>

        <div class='ui bottom attached green basic buttton' v-show='!isEditing && todo.done'>

            Completed

        </div>

        <div class='ui bottom attached green basic button' v-show='!isEditing && !todo.done'>

            Complete

        </div>

    </div>

</template>

<script type="text/javascript">

    export default {

        props: ['todo'],

        data() {

            return {

                isEditing: false,
                name: 'robin'

            }

        },

        methods: {

            showForm() {
                this.isEditing = true

            },

            hideForm() {

                this.isEditing = false

            },
        },

    };


</script>
