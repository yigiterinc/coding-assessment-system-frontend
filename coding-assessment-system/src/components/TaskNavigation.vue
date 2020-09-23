<template>
    <div class="task-navigation-container">
        <task-link v-for="(task, index) in tasks" :key="index" :number="index"></task-link>
    </div>
</template>

<script>
    import TaskLink from '@/components/TaskLink.vue'

    export default {
        name: "TaskNavigation",
        components: {
            TaskLink
        },
        data() {
            return {
                tasks: [1,2,3]
            }
        }
    }
</script>

<style scoped>
.task-navigation-container {
    padding-top: 20vh;
    width: 3vw;
    text-align: center;
    background: #0d0d0d;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
</style>