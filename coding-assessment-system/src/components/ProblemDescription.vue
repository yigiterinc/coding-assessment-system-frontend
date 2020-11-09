<template>
    <div v-if="text" class="problem-description">
        <h2 class="heading">Problem Description</h2>
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default {
      name: "ProblemDescription",
      props: {
        text: {
          type: String,
          required: true
        }
      }
    }
</script>

<style scoped>
    .problem-description {
        padding: 30px;
        color: white;
    }

    .heading {
        margin-bottom: 3vh;
    }
</style>