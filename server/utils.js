const Constants = require('./constants');

class Utils {
    constructor() {
        this.baseURL = Constants.API_BASE_URL;
    }

    static buildURL(name, endpoint) {
        if (this.isURL(name)) {
            return name;
        } else {
            return this.baseUrl + endpoint + '/' + name;
        }
    }

    static isURL(name) {
        return name.split('/').length > 1;
    }
}

module.exports = Utils;