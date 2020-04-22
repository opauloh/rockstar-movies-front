export class DateHelper {

    constructor() {
        throw new Error('DateHelper has only static methods');
    }

    static yearFromDateText(dateText) {

        if (!/\d{4}-\d{2}-\d{2}/.test(dateText))
            throw new Error('Format must be AAAA-MM-DD');

        return dateText.split("-")[0];
    }
}