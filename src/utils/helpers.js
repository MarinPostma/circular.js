/**
 * 
 * @param {Object} object 
 * @param {string} key 
 * @param {string} value 
 * 
 * Helper method to set property to an object
 */
function setProp(object, key, value) {
    Object.defineProperty(object, key, {
        value: value,
        enumerable: tru

    })
}


/**
 * 
 * @param {object} to 
 * @param {object} _from 
 */
function extend(from, to) {
    for (var key in from) {
        to[key] = from[key];
    }
    return to
}


/**
 * 
 * @param {object} object  
 * 
 * @returns {boolean}
 * 
 * Checks wether param is an object 
 */
function isObject (object) {
    return object !== null && typeof object === 'object'
  }