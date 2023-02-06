import moment from "moment";
import StringHelper from "./StringHelper";

export type DateTimeFormat = DateFormat | TimeFormat;

export type DateFormat = "DD-MM-YYYY" | "MM-YYYY" | "YYYY-MM-DD" | "DD/MM/YYYY" | "DD-MMM-YYYY" | "YYYY MM" | "YYYY/MM/DD";
export type TimeFormat = "DD-MM-YYYY HH:mm" | "DD-MM-YYYY HH:mm:ss" | "HH:mm" | "HH:mm:ss" | "YYYY-MM-DD HH:mm:ss" | 'DD/MM/YYYY HH:mm';

export type PathOfDateTime = "day" | "month" | "year" | "hour" | "minute" | "second" | "milisecond";

export default class DateTimeHelper {
    static GetDate(value: moment.MomentInput, getTime = false, format?: DateTimeFormat) {
        if (typeof value == 'string') {
            if (StringHelper.IsEmpty(value)) {
                return new Date();
            }
        }
        var date = moment(value, format).toDate();
        if (!getTime) {
            date.setUTCHours(0, 0, 0, 0);
        }
        return date;
    }

    static GetDateLocal(value: moment.MomentInput, getTime = false, format?: DateTimeFormat) {
        if (typeof value == 'string') {
            if (StringHelper.IsEmpty(value)) {
                return new Date();
            }
        }
        var date = moment.utc(value, format).local().toDate();
        if (!getTime) {
            date.setHours(0, 0, 0, 0);
        }
        return date;
    }

    static AddDays(date: Date, addDays: number) {
        var newDate = new Date(date);
        var current = newDate.getDate();
        newDate.setDate(current + addDays);
        return newDate;
    }

    static AddMonths(date: Date, addMonths: number) {
        var newDate = new Date(date);
        var current = newDate.getMonth();
        newDate.setMonth(current + addMonths);
        return newDate;
    }

    static AddYears(date: Date, addYears: number) {
        var newDate = new Date(date);
        var current = newDate.getFullYear();
        newDate.setFullYear(current + addYears);
        return newDate;
    }

    static AddHours(date: Date, addHours: number) {
        var newDate = new Date(date);
        var current = newDate.getHours();
        newDate.setHours(current + addHours);
        return newDate;
    }

    static FormatDateTime(value: moment.MomentInput, format: DateTimeFormat = 'DD-MM-YYYY') {
        if (value == undefined || StringHelper.IsEmpty(value?.toString())) {
            return '';
        }
        return moment(value).format(format);
    }

    static FormatDateTimeUtcToLocal(value: moment.MomentInput, format: DateTimeFormat = 'DD-MM-YYYY') {
        if (value == undefined || StringHelper.IsEmpty(value?.toString())) {
            return '';
        }
        return moment.utc(value).local().format(format);
    }

    static ConvertMinuteToTimestamp(time: number) {
        if (time < 0) {
            return 0;
        }
        var result = time * 60 * 1000;
        return result
    }
}