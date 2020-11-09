<template>
  <div class="assessment-view-container" v-if="problem">
    <b-row no-gutters class="assessment-row vh-100">
      <b-col cols="5" class="problem-description-col">
        <problem-description :text="problem.text"></problem-description>
      </b-col>
      <b-col cols="7">
        <monaco-code-editor-wrapper :params="problem.parameters"
                                    :return-type="problem.returnType">
        </monaco-code-editor-wrapper>
        <compiler-output></compiler-output>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import ProblemDescription from "@/components/ProblemDescription";
  import MonacoCodeEditorWrapper from "@/components/MonacoCodeEditorWrapper";
  import CompilerOutput from "@/components/CompilerOutput";

  export default {
    name: "ProgrammingTask",
    components: {
      ProblemDescription,
      MonacoCodeEditorWrapper,
      CompilerOutput
    },
    props: {
      problem: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
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