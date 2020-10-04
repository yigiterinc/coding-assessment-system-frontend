<template>
	<div class="survey-view">
		<div class="container">
			<!-- We will show a spinner while loading -->
			<div v-if="loading" class="loading">
				Loading...
			</div>

			<div v-if="questions">

				<div v-if="currentQuestion.type === 'OpenEnded'">
					<open-ended-question :question="currentQuestion"></open-ended-question>
				</div>

				<div v-else>
					<multichoice-question :question="currentQuestion"
					                      :multiple-answers="currentQuestion.type === 'MultipleChoiceMultipleAnswer'"
																@option-selected="handleOptionSelected">
					</multichoice-question>
				</div>
			</div>

			<b-button v-if="isLastQuestion" variant="success">Finish Survey</b-button>
			<b-button v-else variant="primary" @click="showNextQuestion()">Next Question</b-button>
		</div>
	</div>
</template>

<script>
	import SurveyUtils from '../util/surveyUtils.js'
	import APIUtils from '../util/apiUtils.js'
	import MultichoiceQuestion from "@/components/MultichoiceQuestion";
	import OpenEndedQuestion from "@/components/OpenEndedQuestion";

	export default {
		name: "SurveyView",
		components: {
			MultichoiceQuestion,
			OpenEndedQuestion
		},
		utils: [SurveyUtils, APIUtils],
		data() {
			return {
				loading: false,
				currentQuestionIndex: -1,
				questions: null,
				answers: []
			}
		},
		computed: {
			currentQuestion: function () {
				return this.questions ? this.questions[this.currentQuestionIndex] : undefined
			},
			isLastQuestion: function () {
				const nextQuestionIndex = Number(this.$route.params.questionNo) + 1
				return nextQuestionIndex >= this.questions.length;
			}
		},
		methods: {
			showNextQuestion: function () {
				if (this.isLastQuestion)  return;
				this.$router.push({ name: 'SurveyView', params: { questionNo: String(Number(this.$route.params.questionNo) + 1) } })
			},
			handleOptionSelected(e) {
				this.answers[this.currentQuestionIndex] = e;
				console.log(this.answers)
			}
		},
		watch: {
			'$route.params.questionNo': function (val) {
					this.currentQuestionIndex = val - 1
			}
		},
		created () {
			this.loading = true
			this.currentQuestionIndex = this.$route.params.questionNo - 1  // -1 because array indices start with 0 and we use 1 on param
			APIUtils.fetchSurveyQuestions();

			this.questions = [
				{
					text: 'How was your overall experience with our platform?',
					options: ['Poor', 'Below average', 'Average', 'Above Average', 'Great'],
					type: SurveyUtils.MultipleChoiceSingleAnswer
				},
				{
					text: 'Who is the creator of Java programming language?',
					options: ['Bjarne Stroustrup', 'Steve Jobs', 'Linus Torvalds', 'Guido van Rossum', 'James Gosling'],
					type: SurveyUtils.MultipleChoiceSingleAnswer
				},
				{
					text: 'Select the valid array declarations in Java',
					options: ['int[] arr = new int[4]', 'int arr[] = new int[3]', 'int[] arr = new int(3)', 'int[] arr = {2,1,3}', 'int[] arr = [2,3,1]'],
					type: SurveyUtils.MultipleChoiceMultipleAnswer
				},
				{
					text: 'Would you like to give us some feedback to help us improve our platform?',
					options: null,  // Options will be null for open ended questions
					type: SurveyUtils.OpenEnded
				}
			]

			this.loading = false
		}
	}
</script>

<style scoped>
.survey-view {
	height: 100vh;
	text-align: center;
	position: relative;
}

.container {
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 40vw;
}
</style>