<template>

  <div id="app">

    <message>Hello There!</message>
    <message>Hello {{name}}! </message>

  </div>

</template>

<script>
    import Message from './components/Message.vue';

    export default {

        name: 'app',

        components: {Message},

        data() {

            return {

                name: "robin"

            }
        }

    }

</script>



<style>



</style>
