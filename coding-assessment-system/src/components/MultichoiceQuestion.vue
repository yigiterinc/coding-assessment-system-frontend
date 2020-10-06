<template>
	<div v-if="question">
		<div v-if="multipleAnswers">
      <b-form-group>
        <div class="question-text">
          {{question.text}}
        </div>
        <b-form-checkbox-group
            stacked
            id="checkbox-group-1"
            v-model="selectedAnswers"
            name="answer"
            class="options-container"
        >
          <b-form-checkbox
              v-for="(option, index) in question.options"
              class="option"
              :key="index"
              :value="option"
          >
            {{ option }}
          </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
    </div>
		<div v-else>
      <b-form-group>
        <div class="question-text">
          {{question.text}}
        </div>
        <div class="options-container">
          <b-form-radio v-for="(option, index) in question.options"
                        :key="index"
                        class="option"
                        v-model="selectedAnswer"
                        name="answer"
                        :value="option">
            {{ option }}
          </b-form-radio>
        </div>
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
.question-text {
  width: 100%;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  padding-top: 2vh;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-bottom: 2vh;
  font-weight: 500;
}

.options-container {
  padding-top: 1.5vw;
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: 19px;
}

.option {
  margin-bottom: 10px;
}
</style>