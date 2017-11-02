<template>

    <div>

        <h1>Count: {{count}}</h1>

        <button @click='count += 11'>increase count</button>
    </div>

</template>

<script type="text/javascript">

    export default {

        name: 'app',

        data() {

            return {

            count: 0

            }

        }

    }

</script>

<style type="text/css">



</style>
