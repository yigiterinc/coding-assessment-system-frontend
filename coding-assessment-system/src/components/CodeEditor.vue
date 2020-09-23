<template>
    <MonacoEditor
            height="500"
            theme="vs-dark"
            language="javascript"
            :options="options"
            v-model="code"
    ></MonacoEditor>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue';

export default {
    name: "Code Editor",
    components: {
        MonacoEditor
    },
    data() {
        return {
            options: {
                //Monaco Editor Options
            },
            code: 'class Main {\n' +
                '\tpublic int solution(int[] arr) {\n' +
                '\t\t// Write your solution here\n' +
                '\t}\n' +
                '}'
        }
    },
    methods: {
        onChange(value) {
            console.log(value);
        }
    }
};
</script>

<style scoped>

</style>