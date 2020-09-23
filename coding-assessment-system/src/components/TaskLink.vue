<template>
    <div class="task-link">
        <p>{{number}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            number: Number
        },
        name: "TaskLink"
    }
</script>

<style scoped>
.task-link {
    color: black;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid rgba(148, 148, 148, 0.8);
    background: #f4f4f4;
}
</style>