<template>
  <div class="home">
    <img src="../assets/images/kodcu.jpg" class="home-wallpaper">
    <div class="navbar-with-login">
      <navigation-bar></navigation-bar>
    </div>
    <div class="container">
      <br><br><br><br><br><br><br><br><br><br>
      <h1 class="header">Welcome to Code Studio</h1>

      <p class="info">
          Code Studio is a coding skills assessment platform
          <br>
              that is powered by OBSS.
          <br>
        <br>
          You will be provided with the instructions after you enter the assessment room.
          Your test will start after you read the instructions.
        <br><br>Please enter your Session ID to enter the assessment room.
      </p>
      <b-form>
        <b-row>
          <b-col sm="2"></b-col>
          <b-col sm="8">
            <b-form-input v-model="sessionId"
                          type="text"
                          size="md"
                          class="session-id-input">
            </b-form-input>
          </b-col>
          <b-col sm="2"></b-col>
        </b-row>
        <b-button variant="info"
                  size="sm"
                  class="submit-button"
                  @click="onSubmit">Enter Room</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
  import NavigationBar from "../components/NavigationBar";
  export default {
    name: 'Home',
    components: {
      NavigationBar
    },
    props: {

    },
    data() {
      return {
        sessionId: ""
      }
    },
    methods: {
      onSubmit: function () {
        console.log(this.sessionId)
        this.$router.push({ name: 'AssessmentView', params: {sessionId: this.sessionId }})
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/variables/colors";
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

  .home {
    height: 100vh;
    text-align: center;
    position: relative;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.4px;
    font-weight: 400;
    font-size: 20px;
    background-color: rgba(255, 210, 99, 0.35);
    color: $vscode-dark;

    .home-wallpaper  {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
    }

    .header {
      font-weight: 500;
    }

    .info {
      line-height: 170%;
    }

    .container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -70%);
      width: 40vw;
    }

    .submit-button {
      margin-top: 10px;
      margin-right: 20px;
      font-size: 15px;
      height: 45px;
    }
  }
</style>