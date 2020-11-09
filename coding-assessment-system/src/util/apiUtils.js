export default {
	fetchQuestions: function () {
		console.log('Will fetch interview questions in future')
	},
	fetchSurveyQuestions: function () {
		console.log('Will fetch survey questions in future :)')
	},
	fetchReportReceiverList: function () {
		console.log('Will fetch list of possible report receivers in future :)');

		const dummyReceiverList = [
			{
				name: 'Yiğit Kemal Erinç',
				email: 'erincyigit@gmail.com'
			},
			{
				name: 'Mehmed Mazlum',
				email: 'mehmed.mazlum@obss.com.tr'
			},
			{
				name: 'Volkan Baran',
				email: 'volkan.baran@obss.com.tr'
			}
		]

		return dummyReceiverList;
	}
}