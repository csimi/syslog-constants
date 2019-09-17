module.exports = (codes, map) => codes.reduce((accumulator, keywords, value) => {
	const code = map(value);
	return keywords.reduce((memo, keyword, index) => ({
		...memo,
		[keyword]: code,
		[code]: index ? memo[code] : keyword,
	}), accumulator);
}, {});
