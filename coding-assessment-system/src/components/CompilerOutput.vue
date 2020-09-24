<template>
    <div class="compiler-output">
        <div class="test-output-label">
            Test output
            <b-button class="run-tests-submit" variant="light" size="sm">Run Tests</b-button>
        </div>
        <p class="compiler-output-text">Compiler output: Hello CodeFrontation '20 </p>
    </div>
</template>

<script>
    export default {
        name: "CompilerOutput"
    }
</script>

<style scoped>
    @import "../assets/variables/colors.scss";

    .test-output-label {
        border-bottom: 1px solid rgba(188, 188, 188, 0.4);
        padding-left: 15px;
        margin-bottom: 10px;
        font-size: 18px;
        height: 40px;
        display: flex;
        align-items: center;
    }

    .compiler-output {
        color: white;
        border-top: 1px solid rgba(188, 188, 188, 0.4);
        position: relative;
    }

    .compiler-output-text {
        margin-left: 15px;
        color: #4BB543;
    }

    .compiler-output .run-tests-submit {
        background-color: #1e1e1e !important;
        color: white !important;
        position: absolute;
        right: 20px;
    }

</style>