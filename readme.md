[![npm version](https://img.shields.io/npm/v/syslog-constants.svg)](https://www.npmjs.com/package/syslog-constants)
[![build status](https://github.com/csimi/syslog-constants/workflows/build/badge.svg)](https://github.com/csimi/syslog-constants/actions)

# About

This package contains the constants necessary for syslog related development.

Based on syslog.h. The keywords for reserved facility codes (11 to 15) were taken from RFC 3164 and Wikipedia.

# Usage

Install using npm:

```
$ npm install syslog-constants
```

Import in your file:

```
const constants = require('syslog-constants');
```

# Properties

Properties are defined in four possible ways (if applicable):

* as a string, named the same as macros in syslog.h: `constants.severity.LOG_ERR` = `3`
* as a string keyword: `constants.severity.err` = `3`
* as a string keyword which was deprecated according to Wikipedia: `constants.severity.error` = `3`
* as a number: `constants.severity[3]` = `LOG_ERR`

## Facility (constants.facility)

* `LOG_KERN` = `kern`
* `LOG_USER` = `user`
* `LOG_MAIL` = `mail`
* `LOG_DAEMON` = `daemon`
* `LOG_AUTH` = `auth`
* `LOG_SYSLOG` = `syslog`
* `LOG_LPR` = `lpr`
* `LOG_NEWS` = `news`
* `LOG_UUCP` = `uucp`
* `LOG_CRON` = `cron`
* `LOG_AUTHPRIV` = `authpriv`
* `LOG_FTP` = `ftp`
* `LOG_NTP` = `ntp`
* `LOG_SECURITY` = `security`
* `LOG_CONSOLE` = `console`
* `LOG_CLOCK` = `clock`
* `LOG_LOCAL0` = `local0`
* `LOG_LOCAL1` = `local1`
* `LOG_LOCAL2` = `local2`
* `LOG_LOCAL3` = `local3`
* `LOG_LOCAL4` = `local4`
* `LOG_LOCAL5` = `local5`
* `LOG_LOCAL6` = `local6`
* `LOG_LOCAL7` = `local7`

## Severity (constants.severity)

* `LOG_EMERG` = `emerg` ( = `panic`)
* `LOG_ALERT` = `alert`
* `LOG_CRIT` = `crit`
* `LOG_ERR` = `err` ( = `error`)
* `LOG_WARNING` = `warning` ( = `warn`)
* `LOG_NOTICE` = `notice`
* `LOG_INFO` = `info`
* `LOG_DEBUG` = `debug`

## Flag (constants.flag)

* `LOG_PID`
* `LOG_CONS`
* `LOG_ODELAY`
* `LOG_NDELAY`
* `LOG_NOWAIT`
* `LOG_PERROR`
