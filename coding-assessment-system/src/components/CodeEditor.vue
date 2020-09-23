<template>
    <MonacoEditor
            width="800"
            height="500"
            theme="vs-dark"
            language="javascript"
            :options="options"
            @change="onChange"
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
            }
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