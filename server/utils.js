class Utils {
    constructor() { }

    static buildURL(arg, endpoint) {
        if (this.isURL(arg)) {
            return arg;
        } else {
            return endpoint + '/' + arg;
        }
    }

    static isURL(name) {
        return name.split('/').length > 1;
    }
}

module.exports = Utils;