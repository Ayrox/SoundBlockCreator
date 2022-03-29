const default_sounds = require("./DefaultSounds.json");
const fs = require("fs");
const client = require("https");

module.exports = {
  /**
   *
   * @param {String} url
   * @param {String} filepath
   * @returns {Promise}
   */
  downloadImage(url, filepath) {
    client.get(url, (res) => {
      res.pipe(fs.createWriteStream(filepath));
    });
  },

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
  getInfo() {
    var types = [];

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
          name: sound_splitted[0],
          objects: [],
        });
        name = types.filter((type) => type.name == sound_splitted[0])[0];
      }

      object = name.objects.filter(
        (object) => object.name == sound_splitted[1]
      )[0];

      if (!object) {
        name.objects.push({
          name: sound_splitted[1],
          actions: [],
        });
        object = name.objects.filter(
          (object) => object.name == sound_splitted[1]
        )[0];
      }

      object.actions.push({
        name: action,
      });
    });
    String.prototype.repl;
    return types;
  },
};
