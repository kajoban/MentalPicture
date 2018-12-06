/**
* list COMMANDS
*/
module.exports = (tel = '', body = '', from = {}, to = {}, callback) => {

	callback(
		null,
		[
			`\n`,
			`survey => Display survey options`,
			``,
			`whoami => Information about incoming SMS`,
            ``,
            `more => Template for additional behaviour`,
            ``,
            `* => Any other text will be taken as a survey response`
		].join('\n')
	);

};