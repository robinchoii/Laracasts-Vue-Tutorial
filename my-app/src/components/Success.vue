<template>

    <div class='small modal'>

        <div class='modal-background'>

            <div class='modal-container'>

                <h1>Success!</h1>

                <div>

                    <button @click='successClose'> Done</button>

                </div>

            </div>

        </div>

    </div>

</template>

<script type="text/javascript">
    import Hub from '../Hub.js'

    export default {

        methods: {

            successClose() {

                Hub.$emit('success-close');

            }


        }

    }

</script>

<style type="text/css">

    .modal-container {
        border: solid 1px black;
        text-align: center;
        width: 20%;
        margin: 0px auto;
        padding: 30px;
    }

</style>
