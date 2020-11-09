import SurveyUtils from "@/util/surveyUtils";

export default {
    questions: {
        containsTest: false,
        test: [
            {
                text: 'How was your overall experience with our platform?',
                options: ['Poor', 'Below average', 'Average', 'Above Average', 'Great'],
                type: SurveyUtils.MultipleChoiceSingleAnswer
            },
            {
                text: 'Who is the creator of Java programming language?',
                options: ['Bjarne Stroustrup', 'Steve Jobs', 'Linus Torvalds', 'Guido van Rossum', 'James Gosling'],
                type: SurveyUtils.MultipleChoiceSingleAnswer
            },
            {
                text: 'Given an int array nums and an int target, find how many unique pairs in the array such that their sum is equal to target. Return the number of pairs.',
                options: ['Bjarne Stroustrup', 'Steve Jobs', 'Linus Torvalds', 'Guido van Rossum', 'James Gosling'],
                type: SurveyUtils.MultipleChoiceSingleAnswer
            },
            {
                text: 'Select the valid array declarations in Java',
                options: ['int[] arr = new int[4]', 'int arr[] = new int[3]', 'int[] arr = new int(3)', 'int[] arr = {2,1,3}', 'int[] arr = [2,3,1]'],
                type: SurveyUtils.MultipleChoiceMultipleAnswer
            },
            {
                text: 'Would you like to give us some feedback to help us improve our platform?',
                options: null,  // Options will be null for open ended questions
                type: SurveyUtils.OpenEnded
            }
        ],
        programming: [
            {
                text: 'Given an int array nums and an int target, find how many unique pairs in the array such that their sum is equal to target. Return the number of pairs.\n' +
                    '\n',
                returnType: 'int',
                parameters: ['int[] nums', 'int target']
            }
        ]
    }
}
