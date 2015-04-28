export default (function main() {

    "use strict";

    /**
     * @constant WAIT_TIMEOUT
     * @type {Number}
     */
    const WAIT_TIMEOUT = 10000;

    return {

        /**
         * @property selector
         * @type {Object}
         */
        selector: {
            links:      'link[rel="import"]:not([data-ignore])',
            styles:     'link[type="text/css"]',
            scripts:    'script[type="text/javascript"][src*="../"]',
            inlines:    'style[type="text/css"]',
            components: 'script[type="text/javascript"]:not([src*="../"])',
            templates:  'template'
        },

        /**
         * @method toArray
         * @param {*} arrayLike
         * @return {Array}
         */
        toArray(arrayLike) {
            return Array.from ? Array.from(arrayLike) : Array.prototype.slice.apply(arrayLike);
        },

        /**
         * @method timeoutPromise
         * @param {Function} reject
         * @param {String} errorMessage
         * @param {Number} [timeout=WAIT_TIMEOUT]
         * @return {void}
         */
        timeoutPromise(reject, errorMessage = 'Timeout', timeout = WAIT_TIMEOUT) {
            setTimeout(() => reject(new Error(errorMessage)), timeout);
        },

        /**
         * @method toSnakeCase
         * @param {String} camelCase
         * @param {String} [joiner='-']
         * @return {String}
         */
        toSnakeCase(camelCase, joiner = '-') {
            return camelCase.split(/([A-Z][a-z]{0,})/g).filter(parts => parts).join(joiner).toLowerCase();
        },

        /**
         * @method extractName
         * @param {String} importPath
         * @return {String}
         */
        extractName(importPath) {
            return importPath.split('/').slice(0, -1).pop();
        },

        /**
         * @method extractPath
         * @param {String} importPath
         * @return {String}
         */
        extractPath(importPath) {
            return importPath.split('/').slice(0, -1).join('/');
        },

        /**
         * @method removeExtension
         * @param {String} filePath
         * @return {String}
         */
        removeExtension(filePath) {
            return filePath.split('.').slice(0, -1).join('.');
        }

    };

})();