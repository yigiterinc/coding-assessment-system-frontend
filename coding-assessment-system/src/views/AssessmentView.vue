<template>
  <div v-if="questions" class="assessment-view">
    <top-panel></top-panel>
    <div v-if="questions.containsTest">
      <test :questions="questions.test" @test-finished="handleTestFinished"></test>
    </div>
  </div>
</template>

<script>
    import TopPanel from '@/components/TopPanel'
    import APIUtils from "@/util/apiUtils"
    import Test from "@/views/Test"
    
    import DummyMixedInterviewQuestions from "@/assets/data/dummyMixedInterviewQuestions"

    export default {
      name: "AssessmentView",
      components: {
        TopPanel,
        Test
      },
      data() {
        return {
          loading: false,
          questions: null,
          // Converted to true by an event after test is finished, not relevant if there is no test questions in interview
          testFinished: false,
          testAnswers: []
        }
      },
      watch: {
        '$route.params.questionNo': function (val) {
          this.currentQuestionIndex = val - 1
        }
      },
      methods: {
        handleTestFinished: function (e) {
          this.testAnswers = e;
          console.log('Test answers: ', this.testAnswers)
        }
      },
      created () {
        this.loading = true
        this.currentQuestionIndex = this.$route.params.questionNo - 1  // -1 because array indices start with 0 and we use 1 on param

        this.questions = DummyMixedInterviewQuestions.questions;

        // TODO This will actually fetch interview questions
        APIUtils.fetchQuestions();

        this.loading = false
      }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/variables/colors.scss";

  .assessment-view {
    background: $vscode-dark;
  }
</style>