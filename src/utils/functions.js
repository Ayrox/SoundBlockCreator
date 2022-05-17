const default_sounds = require("./DefaultSounds.json");

module.exports = {
  /**
   *
   * @param {String} str
   */
  toCapitalize: function (str) {
    let strTable = str.replaceAll("_", " ").replaceAll(".", " ").split(" ");
    for (var i = 0; i < strTable.length; i++) {
      strTable[i] = strTable[i].charAt(0).toUpperCase() + strTable[i].slice(1);
    }
    return strTable.join(" ");
  },
  /**
   *
   * @returns {Array}
   */
  getInfo: function () {
    var types = [];
    let id = 0;
    Object.keys(default_sounds).forEach((sound) => {
      let sound_splitted = sound.split(".");
      var i = 0;
      var action = sound_splitted[2] || "default";

      for (let snd of sound_splitted) {
        if (i > 2) {
          action += "." + snd;
        }
        i++;
      }
      let name, object;

      name = types.filter((type) => type.name == sound_splitted[0])[0];
      if (!name) {
        types.push({
          id: id,
          to: sound_splitted[0],
          name: sound_splitted[0],
          children: [],
        });
        id++;
        name = types.filter((type) => type.name == sound_splitted[0])[0];
      }

      object = name.children.filter(
        (object) => object.name == sound_splitted[1]
      )[0];

      if (!object) {
        name.children.push({
          id: id,
          to: name.name + sound_splitted[1],
          name: sound_splitted[1],
          children: [],
        });
        id++;
        object = name.children.filter(
          (object) => object.name == sound_splitted[1]
        )[0];
      }

      object.children.push({
        id: id,
        to: name.name + object.name + action,
        name: action,
      });
      id++;
    });
    String.prototype.repl;
    console.log(types);
    return types;
  },
};
