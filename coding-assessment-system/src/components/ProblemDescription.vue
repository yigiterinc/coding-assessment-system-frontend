<template>
    <div class="problem-description">
        <h2 class="heading">Problem Description</h2>
        <p v-for="lor in lorem" :key="lor">
            {{ lor }}
            <br>
        </p>
    </div>
</template>

<script>
    export default {
        name: "ProblemDescription",
        data() {
            return {
                lorem: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum lorem et maximus sodales. Sed lacinia tempor eros et accumsan. Etiam aliquam egestas urna, in molestie sem euismod sit amet. Cras sit amet mattis felis, a dictum leo. Duis eu leo aliquet, lacinia nisi a, tincidunt lacus. Ut tortor ligula, ullamcorper sit amet interdum id, dignissim quis arcu. Fusce sed tincidunt nisi, sit amet egestas enim. In ac est volutpat, efficitur turpis nec, suscipit nisl. Etiam tincidunt libero non scelerisque fringilla. Sed nec venenatis urna. Suspendisse potenti. Sed ut ipsum massa. Nullam sit amet lorem sagittis, mattis neque at, pharetra ligula. Morbi tempor, quam a hendrerit scelerisque, elit lorem pretium mi, eu fermentum quam metus et velit."
                    ,
                    "Praesent id suscipit erat. Vestibulum feugiat congue tempor. Mauris vel massa pulvinar, interdum arcu id, hendrerit tortor. In sem massa, molestie in quam non, semper posuere tellus. Phasellus sed eros quis mi elementum tempor at eu odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ac vehicula justo, ac elementum nibh. Sed porttitor dictum faucibus. Donec vel dictum nibh. Curabitur tincidunt aliquet lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    ,
                    "Nulla ligula elit, sodales sit amet gravida eu, interdum a ante. Nulla lacinia convallis suscipit. Ut ut erat ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum scelerisque accumsan lectus non posuere. Nulla non arcu augue. Sed quis porta turpis. Nulla dapibus sapien imperdiet, sodales purus a, facilisis dui. Aliquam lobortis vitae velit commodo feugiat. Maecenas risus nunc, pretium ac pretium nec, aliquam sed lectus. Donec sollicitudin mollis ipsum, et tempus enim blandit vitae. Integer egestas fringilla nibh, vitae sodales nulla elementum ultricies. Vivamus eget arcu ornare, convallis nunc et, condimentum risus."
                ]
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