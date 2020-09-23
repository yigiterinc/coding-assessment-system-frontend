<template>
    <div class="top-panel-container">
        Time left: 0h 27m
    </div>
</template>

<script>
    export default {
        name: "TopPanel"
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
        left: 3vw;
        text-align: center;
    }
</style>