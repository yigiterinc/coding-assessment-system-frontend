<template>
    <div class="compiler-output">
        <div class="test-output-label">
            Test output
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

    .test-output-label {
        border-bottom: 1px solid rgba(188, 188, 188, 0.4);
        padding-left: 20px;
        margin-bottom: 10px;
    }

    .compiler-output {
        color: white;
        border-top: 1px solid rgba(188, 188, 188, 0.4);
    }

    .compiler-output-text {
        margin-left: 10px;
        color: #4BB543;
    }

</style>