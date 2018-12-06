/**
* WHOAMI handler, responds if user texts "whoami"
*/
module.exports = (tel = '', body = '', from = {}, to = {}, callback) => {

	callback(
		null,
		[
			`\nYou are messaging from ${from.number} in ${from.city}, ${from.state} ${from.zip}, ${from.country}.`,
			'',
		].join('\n')
	);

};
