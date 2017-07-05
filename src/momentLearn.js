var moment = require('moment');

/**
 * Use bootstrap datetimepicker to select one date time "2017-07-05 15:46:21"
 * This will use local timezone to generate timestamp,
 * But the remote host will use it's own timezone.
 *
 * Expect: keep the date and time constant, but the tiemzone is defferent.
 *
 * Example:
 *   Local Host Datetime:  2017-07-05T15:46:21+08:00
 *   Remote Host DateTime: 2017-07-05T15:46:21+05:00
 */
function resetTimezone() {
    var selectDatetime = '2017-07-05 15:46:21';
    var axTimezone = -5;
    var localTimezone = moment().format('ZZ') / 100;
    var timeOffset = (localTimezone - axTimezone) * 3600 * 1000;

    var localDateMoment = moment(selectDatetime);
    var axDateMoment = moment(+localDateMoment.format('x') + timeOffset);

    console.log(localDateMoment.utcOffset(localTimezone).format());
    console.log(axDateMoment.utcOffset(axTimezone).format());
}

resetTimezone();


