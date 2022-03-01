module.exports = {
  toCapitalize: function (str) {
    let strTable = str.replaceAll("_", " ").replaceAll(".", " ").split(" ");
    for (var i = 0; i < strTable.length; i++) {
      strTable[i] = strTable[i].charAt(0).toUpperCase() + strTable[i].slice(1);
    }
    return strTable.join(" ");
  },
};
