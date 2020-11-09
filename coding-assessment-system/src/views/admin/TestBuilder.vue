<template>
  <div class="main-container">
    <div class="panel">
      <!-- c name -->
      <div class="input-container">
        <b-row class="candidate-row">
          <b-col sm="3">
            <p class="text-center mb-0 font-weight-bold">Candidate Name:</p>
          </b-col>
          <b-col sm="6" class="pl-0">
            <b-form-input v-model="candidate.name" id="candidate-name" inline></b-form-input>
          </b-col>
          <b-col sm="3"></b-col>
        </b-row>
        <b-row>
          <b-col sm="3">
          </b-col>
          <b-col sm="6" class="pl-0">
            <i class="small-info">Enter candidate name here, example: John Doe</i>
          </b-col>
          <b-col sm="3">
          </b-col>
        </b-row>
      </div>

      <!-- c email -->
      <div class="input-container">
        <b-row class="candidate-row">
          <b-col sm="3">
            <p class="text-center font-weight-bold mb-0">Candidate Email:</p>
          </b-col>
          <b-col sm="6" class="pl-0">
            <b-form-input v-model="candidate.name" id="candidate-name" inline></b-form-input>
          </b-col>
          <b-col sm="3"></b-col>
        </b-row>
        <b-row>
          <b-col sm="3">
          </b-col>
          <b-col sm="6" class="pl-0">
            <i class="small-info">Enter candidate email here, example: john.doe@obss.com.tr</i>
          </b-col>
          <b-col sm="3">
          </b-col>
        </b-row>
      </div>

      <!-- send report to -->
      <div v-if="reportAddressNamePairs">
        <b-row class="candidate-row">
          <b-col sm="3">
            <p class="text-center font-weight-bold mb-15">Report Email:</p>
          </b-col>
          <b-col sm="9" class="pl-0">
            <b-form-group
                id="checkbox-group-1"
                name="answer"
            >
              <b-form-checkbox
                  v-for="(addressNamePair, index) in reportAddressNamePairs"
                  :key="index"
                  v-model="selectedAddresses"
                  :value="addressNamePair"
                  inline
              >
                {{ addressNamePair }}
              </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
    </div>

    <div class="panel">
      <b-row class="candidate-row">
        <b-col></b-col>
        <b-col class="pl-0" sm="10">
          <p><b>Provide following languages: </b></p>
        </b-col>
        <b-col></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ApiUtils from '@/util/apiUtils.js'

export default {
  name: "TestBuilder",
  utils: [ApiUtils],
  watch: {
    selectedAddresses() {
      console.log(this.selectedAddresses)
    }
  },
  data() {
    return {
      candidate: {
        name: '',
        email: '',
      },
      selectedAddresses: [],
      reportAddressNamePairs: [],
      languageList: ['C++', 'C#', 'Java', 'JavaScript', 'Python']
    }
  },
  created() {
    const reportReceiverList = ApiUtils.fetchReportReceiverList();
    this.reportAddressNamePairs = this.mergeAddressesAndNames(reportReceiverList);
  },
  methods: {
    mergeAddressesAndNames: function (reportReceiverList) {
      let result = [];
      reportReceiverList.forEach(receiver => {
        result.push(receiver.name + ' (' + receiver.email + ' )')
      })

      return result;
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

.main-container {
  padding-top: 10vh;
  font-family: 'Montserrat', sans-serif;
}

.panel {
  height: 30vh;
  width: 70vw;
  border: gray 2px solid;
  margin: 0 auto;
  border-radius: 10px;
  padding: 30px 5px;
}

.candidate-row {
  align-items: center;
  justify-content: center;
}

.small-info {
  font-size: 14px;
}

.input-container {
  margin-bottom: 12px;
}
</style>