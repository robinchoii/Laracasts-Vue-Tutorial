<template>

    <div class='small modal' v-show='show'>

        <div class='modal-background'>

            <div class='modal-container'>

                <h1>Success!</h1>

                <div class='todoCard' v-for='todo in todos'>

                    <p>

                        {{todo.title}}

                    </p>

                    <div class='actions'>

                        <button class='ui approve button'>Done</button>

                    </div>
                </div>

            </div>

        </div>

    </div>

</template>

<script type="text/javascript">

    export default {

    }

</script>

<style type="text/css">

    .modal-content {

        padding: 30px;

        text-align: center;
    }

</style>
