/**
* SURVEY prompt
*/
module.exports = (tel = '', body = '', from = {}, to = {}, callback) => {

	callback(
		null,
		[
			`\n`,
			`Here is today's survey!`,
			``,
			`How do you feel today (0-5)?`,
			``,
			`How many hours have you slept today (0-24)?`,
			``,
			`How many calories did you consume today (0-5000)?`,
			``,
			`How many hours have you worked out today (0-24)?`,
			``,
			`Please enter your answer in order in 'w,x,y,z' format.`
		].join('\n')
	);

};