<template>
	<div v-if="question">
		<div v-if="multipleAnswers">
      <b-form-group :label="question.text">
        <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="selectedAnswers"
            name="answer"
        >
          <b-form-checkbox
              v-for="(option, index) in question.options"
              :key="index"
              :value="option"
          >
            {{ option }}
          </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
    </div>
		<div v-else>
      <b-form-group :label="question.text">
        <b-form-radio v-for="(option, index) in question.options"
                      :key="index"
                      v-model="selectedAnswer"
                      name="answer"
                      :value="option">
          {{ option }}
        </b-form-radio>
      </b-form-group>
    </div>
	</div>
</template>

<script>
export default {
	name: "MultichoiceQuestion",
	data() {
		return {
			selectedAnswer: '',
      selectedAnswers: []
		}
	},
	props: {
		question: {
			type: Object,
			required: true
		},
		multipleAnswers: {
			type: Boolean,
			default: false
		}
	},
  watch: {
	  selectedAnswer: function () {
	    this.$emit('option-selected', this.selectedAnswer)
    },
    selectedAnswers: function () {
      this.$emit('option-selected', this.selectedAnswers)
    }
  }
}
</script>

<style scoped>

</style>