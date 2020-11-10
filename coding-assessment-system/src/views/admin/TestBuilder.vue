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

    <!-- Language Select -->
    <div class="panel">
      <b-row class="candidate-row">
        <b-col></b-col>
        <b-col class="pl-0" sm="10">
          <p><b>Provide following languages: </b></p>
          <b-form-group
              id="checkbox-group-1"
              name="answer"
          >
            <b-form-checkbox
                v-for="(language, index) in languageList"
                :key="index"
                v-model="selectedLanguages"
                :value="language"
                inline
            >
              {{ language }}
            </b-form-checkbox>
          </b-form-group>

          <!-- Show picked tasks -->
          <div v-if="tasksPicked">
            {{}}
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </div>

    <div class="panel">
      <div v-for="(task, index) in taskList" :key="index" class="task-container">
        <span>
          <font-awesome-icon v-for="(_, index) in task.numberOfCoffee"
                             icon="coffee"
                             style="margin-right: 10px; color: #4a2c2a"
                             :key="index"/>
        </span>
        <p class="mb-0 short-title"><strong>{{task.shortTitle}}</strong></p>
        <hr class="vertical-hr">
        <p class="short-description">{{ task.shortDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ApiUtils from '@/util/apiUtils.js'

const difficultyToCoffeeMugs = {
  'Easy': 1,
  'Medium': 2,
  'Hard': 3
}

export default {
  name: "TestBuilder",
  utils: [ApiUtils],
  watch: {
    selectedAddresses() {
      console.log(this.selectedAddresses)
    }
  },
  data () {
    return {
      candidate: {
        name: '',
        email: '',
      },
      tasksPicked: false,
      selectedLanguages: [],
      selectedAddresses: [],
      reportAddressNamePairs: [],
      taskList: [{
        "title": "TargetSum",
        "text": "Given an int array nums and an int target, find how many unique pairs in the array such that their sum is equal to target. Return the number of pairs.",
        "shortDescription": "Given an int array nums and an int target, find how many unique pairs which's sum is equal to target",
        "returnType": "int",
        "parameters": ["int[] nums", "int target"],
        "difficulty": "Hard"
      },
      {
        "title": "MergeTwoSortedLists",
        "text": "Merge two sorted LinkedLists so that the resulting LinkedList will also be sorted.",
        "shortDescription": "Merge two sorted LinkedLists",
        "returnType": "ListNode",
        "parameters": ["ListNode l1", "ListNode l2"],
        "difficulty": "Easy"
      }],
      languageList: ['C++', 'C#', 'Java', 'JavaScript', 'Python']
    }
  },
  created() {
    const reportReceiverList = ApiUtils.fetchReportReceiverList();
    this.reportAddressNamePairs = this.mergeAddressesAndNames(reportReceiverList);
    this.taskList.forEach(task => {
      if (task.title.length > 10)
        task.shortTitle = task.title.substring(0, 11) + "..";
      else
        task.shortTitle = task.title;

      task.numberOfCoffee = difficultyToCoffeeMugs[task.difficulty]
    })
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
  width: 70vw;
  border: gray 2px solid;
  margin: 0 auto;
  border-radius: 10px;
  padding: 30px 5px;
  margin-bottom: 30px;
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

.task-container {
  border: gray 1px solid;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 55px;
  position: relative;
  text-align: right;
}

.vertical-hr {
  border: none;
  border-left: 1px solid hsla(200, 10%, 50%, 100);
  height: 40px;
  width: 1px;
  position: absolute;
  left: 250px;
}

.short-title {
  position: absolute;
  left: 100px;
}

.short-description {
  font-size: 14px;
  font-weight: 500;
  flex-grow: 1;
  max-width: 44vw;
  margin: auto 0 auto auto;
}
</style>