const build = require('./build');

const facility = build([
	['LOG_KERN', 'kern'],
	['LOG_USER', 'user'],
	['LOG_MAIL', 'mail'],
	['LOG_DAEMON', 'daemon'],
	['LOG_AUTH', 'auth'],
	['LOG_SYSLOG', 'syslog'],
	['LOG_LPR', 'lpr'],
	['LOG_NEWS', 'news'],
	['LOG_UUCP', 'uucp'],
	['LOG_CRON', 'cron'],
	['LOG_AUTHPRIV', 'authpriv'],
	['LOG_FTP', 'ftp'],
	['LOG_NTP', 'ntp'],
	['LOG_SECURITY', 'security'],
	['LOG_CONSOLE', 'console'],
	['LOG_CLOCK', 'clock'],
	['LOG_LOCAL0', 'local0'],
	['LOG_LOCAL1', 'local1'],
	['LOG_LOCAL2', 'local2'],
	['LOG_LOCAL3', 'local3'],
	['LOG_LOCAL4', 'local4'],
	['LOG_LOCAL5', 'local5'],
	['LOG_LOCAL6', 'local6'],
	['LOG_LOCAL7', 'local7'],
], (index) => index * 8);

const severity = build([
	['LOG_EMERG', 'emerg', 'panic'],
	['LOG_ALERT', 'alert'],
	['LOG_CRIT', 'crit'],
	['LOG_ERR', 'err', 'error'],
	['LOG_WARNING', 'warning', 'warn'],
	['LOG_NOTICE', 'notice'],
	['LOG_INFO', 'info'],
	['LOG_DEBUG', 'debug'],
], (index) => index);

const flag = build([
	['LOG_PID', 'pid'],
	['LOG_CONS', 'cons'],
	['LOG_ODELAY', 'odelay'],
	['LOG_NDELAY', 'ndelay'],
	['LOG_NOWAIT', 'nowait'],
	['LOG_PERROR', 'perror'],
], (index) => 2 ** index);

module.exports = {
	facility,
	severity,
	flag,
};
