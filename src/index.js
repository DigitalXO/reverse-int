module.exports = function reverse (n) {
    n = n + "";
  //  n.replace(/'-'/g, '')
        return n.replace(/[^+\d]/g, '').split("").reverse().join("");
    
}
