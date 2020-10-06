<template>
	<div>
    <p class="question-text">{{ question.text }}</p>
    <b-form-textarea
        id="textarea"
        v-model="answer"
        class="answer-area"
        placeholder="Enter something..."
        rows="3"
        max-rows="30"
        @input="handleInput"
    ></b-form-textarea>
  </div>
</template>

<script>
export default {
	name: "OpenEndedQuestion",
  props: {
	  question: {
	    required: true,
      type: Object
    }
  },
  data() {
	  return {
	    answer: ''
    }
  },
  methods: {
	  handleInput: function () {
	    this.$emit("open-ended-question-answered", this.answer)
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

  .answer-area {
    height: 25vh !important;
  }
</style>