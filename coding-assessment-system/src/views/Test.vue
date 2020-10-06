<template>
	<div class="test-view">
		<div class="test-container">
			<!-- We will show a spinner while loading -->
			<div v-if="loading">
				Loading...
			</div>

			<div v-if="questions && currentQuestion" class="question-container">
				<div v-if="currentQuestion.type === 'OpenEnded'">
					<open-ended-question :question="currentQuestion"
                               @open-ended-question-answered="handleAnswerInputted"
                              >
          </open-ended-question>
				</div>

				<div v-else>
					<multichoice-question :question="currentQuestion"
					                      :multiple-answers="currentQuestion.type === 'MultipleChoiceMultipleAnswer'"
																@option-selected="handleAnswerInputted">
					</multichoice-question>
				</div>
			</div>
      <div class="button-container">
        <b-button v-if="isLastQuestion" variant="success" @click="this.finishTest">Finish Test</b-button>
        <b-button v-else variant="primary" @click="showNextQuestion()">Next Question</b-button>
      </div>
		</div>
	</div>
</template>

<script>
	import SurveyUtils from '../util/surveyUtils.js'
	import APIUtils from '../util/apiUtils.js'
	import MultichoiceQuestion from "@/components/MultichoiceQuestion";
	import OpenEndedQuestion from "@/components/OpenEndedQuestion";

	export default {
		name: "Test",
		components: {
			MultichoiceQuestion,
			OpenEndedQuestion
		},
		utils: [SurveyUtils, APIUtils],
    props: {
		  questions: {
		    required: true,
        type: []
      }
    },
		data() {
			return {
				loading: false,
				currentQuestionIndex: -1,
				answers: [],
        testFinished: false
			}
		},
		computed: {
			currentQuestion: function () {
				return this.questions ? this.questions[this.currentQuestionIndex] : undefined
			},
			isLastQuestion: function () {
				const nextQuestionIndex = Number(this.$route.params.questionNo) + 1
				return nextQuestionIndex > this.questions.length;
			}
		},
		methods: {
			showNextQuestion: function () {
				if (this.isLastQuestion)  return;
				this.$router.push({ name: 'AssessmentView', params: {
				    sessionId: this.$route.params.sessionId,
            questionNo: String(Number(this.$route.params.questionNo) + 1)
				  }
				})
			},
			handleAnswerInputted: function (e) {
				this.answers[this.currentQuestionIndex] = e;
				console.log(this.answers)
			},
      finishTest: function () {
        this.testFinished = true
      },
		},
		watch: {
			'$route.params.questionNo': function (val) {
					this.currentQuestionIndex = val - 1
			},
      testFinished: function (val) {
			  console.log(val)
        this.$emit('test-finished', this.answers)
      }
		},
		mounted () {
			this.loading = true
			this.currentQuestionIndex = this.$route.params.questionNo - 1  // -1 because array indices start with 0 and we use 1 on param
      console.log(this.currentQuestionIndex, this.questions)
			this.loading = false
		}
	}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

  .test-view {
    height: 100vh;
    text-align: center;
    position: relative;
  }

  .test-container {
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50vh;
    width: 50vw;
    border-radius: 25px;
    border: 2px solid #73ad21;
    font-size: 20px;
    background-color: aliceblue;
    text-align: left !important;
  }

  .button-container {
    position: absolute;
    right: 2vw;
    bottom: 4vh;
  }
</style>