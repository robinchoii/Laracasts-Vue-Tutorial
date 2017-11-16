<template>

    <div>

        <h1>Counts: {{count}}</h1>

        <button @click='count += 1'>increase count</button>
    </div>

</template>

<script type="text/javascript">

    export default {
        data() {

            return {

            count: 0

            }

        }

    }

</script>

<style type="text/css">



</style>
