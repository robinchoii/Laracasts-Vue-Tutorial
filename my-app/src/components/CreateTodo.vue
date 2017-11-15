<template>

    <div class='ui basic content center aligned segment'>

        <button class='ui basic button icon' @click='openForm' v-show='!isCreating'>

            <i class='plus icon'></i>

        </button>

        <div class='ui centered card' v-show='isCreating'>

            <div class='content'>

                <div class='ui form'>

                    <div class='field'>

                        <label>Title</label>

                        <input type="text" v-model='titleText' ref='title' defaultValue="">

                    </div>

                    <div class='field'>

                        <label>Title</label>

                        <input type="text" v-model='projectText' ref='project' defaultValue="">

                    </div>

                    <div class='ui two button attached buttons'>

                        <button class='ui basic blue button' @click='submitForm()'>Add</button>

                        <button class='ui basic blue button' @click='closeForm()'>Cancel</button>

                    </div>

                </div>


            </div>

        </div>

    </div>

</template>

<script type="text/javascript">
    import Hub from '../Hub.js';

    export default {

        data() {

            return {

                isCreating: false,

                titleText: '',

                projectText: '',
            };
        },

        methods: {
            openForm() {

                this.isCreating = true;

            },

            submitForm() {
                if (this.titleText.length > 0 && this.projectText.length > 0) {

                    const newTitle = this.titleText;

                    const newProject = this.projectText;

                    Hub.$emit('add-todo', {
                        title:newTitle,

                        project: newProject,

                        done: false
                    });

                    this.titleText = '';
                    this.projectText = '';
                }
                this.isCreating = false

            },

            closeForm() {
                console.log('close')
                this.isCreating= false

            }
        }
    }
</script>
