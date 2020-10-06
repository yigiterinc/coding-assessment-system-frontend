<template>
    <div class="top-panel-container">
        <clock class="clock"></clock> 0h 27m
        <b-button class="submit-button" variant="light" size="sm">Submit</b-button>
    </div>
</template>

<script>
    import Clock from './Clock.vue'

    export default {
        name: "TopPanel",
        components: {
            Clock
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/variables/colors.scss";

    .top-panel-container {
        background-color: $vscode-dark;
        width: 100%;
        height: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        color: white;
        top: 0;
        left: 0;
        text-align: center;
        position: relative;
        border-bottom: 0px solid;
        padding: 10px;
        box-shadow: 0.7px 0.5px ghostwhite;

    }

    .clock {
        margin-right: 10px;
    }

    .top-panel-container .btn-light {
        background-color: $vscode-dark !important;
        color: white !important;
        position: absolute;
        right: 70px;
    }
</style>