<template>

    <div class='box is-info'>

        <p>

        <slot></slot>

        </p>
        {{age}}
    </div>

</template>

<script>

    export default {
        name: 'app',

        data() {
            return {
                age: 10
            }
        }
    }

</script>

<style>

    .box {
        padding: 10px;
        background: #e3e3e3;
        border: 1px solid #c5c5c5;
        margin-bottom: 10px;
     }


</style>
