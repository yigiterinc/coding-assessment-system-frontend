<template>
  <div v-if="problemList" class="programming-task-view">
    <task-navigation></task-navigation>
    <programming-task :problem="getCurrentProblem"></programming-task>
  </div>
</template>

<script>
  import ProgrammingTask from "@/components/ProgrammingTask";
  import TaskNavigation from "@/components/TaskNavigation";

  export default {
    name: "ProgrammingTaskView",
    components: {
      ProgrammingTask,
      TaskNavigation
    },
    props: {
      problemList: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentProblemIndex: 0,
        answers: []
      }
    },
    computed: {
      getCurrentProblem() {
        return this.problemList[this.currentProblemIndex]
      }
    },

  }
</script>

<style scoped>

</style>