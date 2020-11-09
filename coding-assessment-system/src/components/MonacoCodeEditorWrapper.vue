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
    props: {
      returnType: {
        type: String,
        required: true
      },
      params: {
        type: Array,
        required: true
      }
    },
    data() {
        return {
            options: {
                // Monaco Editor Options
            },
            code: 'class Main {\n' +
                '\tpublic ' + this.returnType + ' solution(int[] arr) {\n' +
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