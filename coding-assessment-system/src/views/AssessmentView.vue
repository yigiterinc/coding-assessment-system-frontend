<template>
    <div class="assessment-view-container">
        <task-navigation></task-navigation>
        <top-panel></top-panel>
        <b-row no-gutters class="assessment-row vh-100">
            <b-col cols="5" class="problem-description-col">
                <problem-description></problem-description>
            </b-col>
            <b-col cols="7">
                <code-editor></code-editor>
                <compiler-output></compiler-output>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import CodeEditor from '@/components/CodeEditor'
    import TaskNavigation from '@/components/TaskNavigation'
    import ProblemDescription from '@/components/ProblemDescription'
    import TopPanel from '@/components/TopPanel'
    import CompilerOutput from '@/components/CompilerOutput'

    export default {
        name: "AssessmentView",
        components: {
            CodeEditor,
            TaskNavigation,
            ProblemDescription,
            TopPanel,
            CompilerOutput
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/variables/colors.scss";

    .assessment-view-container {
        min-height: 100%;
        background-color: $vscode-dark;
    }

    .problem-description-col {
        border-right: 1px solid rgba(188, 188, 188, 0.4);
    }

    .assessment-row {
        margin-left: 3vw;
        border-top: 1px solid rgba(188, 188, 188, 0.4);
        border-left: 1px solid rgba(188, 188, 188, 0.4);
    }
</style>