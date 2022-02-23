import cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';

//Create a JSON file with all the sounds from the table of the website https://minecraft.fandom.com/wiki/Sounds.json
async function fetchSounds() {
  let SoundObject = {};

  const data = await fetch(
    'https://minecraft.fandom.com/wiki/Sounds.json/Java_Edition_values'
  )
    .then((res) => res.text())
    .then((data) => {
      return data;
    });

  //console.log(data);

  let html = cheerio.load(data);

  let table = html('table.wikitable')[0].children[1].children;

  table.forEach((row) => {
    if (row.name === 'tr') {
      let SoundName = null,
        SubData = null;

      const columns = row.children.filter((column) => column.name === 'td');

      SoundName = columns[0] ? columns[0].children[0].data : null;

      SubData = columns[2]
        ? columns[2].children[0]
          ? columns[2].children[0].data
          : null
        : null;

      SoundObject[SoundName] = {
        sounds: [],
      };
      if (SubData !== null) SoundObject[SoundName].subtitle = SubData;

      if (columns[1]) {
        const usedData = columns[1].children.filter(
          (column) => column.name !== 'br'
        );

        usedData.forEach((row) => {
          /**
           * @type {String}
           */
          let line = row.data.split(','),
            LineObject = {},
            path = null,
            pitch = null,
            volume = null,
            weight = null,
            stream = null,
            attenuation_distance = null,
            preload = null,
            type = null;

          path = line[0];

          LineObject.name = path;

          line.forEach((data) => {
            if (data.includes('pitch')) {
              pitch = Number(data.split(' = ')[1]);
              LineObject.pitch = pitch;
            }
            if (data.includes('volume')) {
              volume = Number(data.split(' = ')[1]);
              LineObject.volume = volume;
            }
            if (data.includes('weight')) {
              weight = Number(data.split(' = ')[1]);
              LineObject.weight = weight;
            }
            if (data.includes('stream')) {
              stream = data.split(' = ')[1] === 'true';
              LineObject.stream = stream;
            }
            if (data.includes('attenuation_distance')) {
              attenuation_distance = Number(data.split(' = ')[1]);
              LineObject.attenuation_distance = attenuation_distance;
            }
            if (data.includes('preload')) {
              preload = data.split(' = ')[1] === 'true';
              LineObject.preload = preload;
            }
            if (data.includes('type')) {
              type = data.split(' = ')[1];
              LineObject.type = type;
            }
          });

          SoundObject[SoundName].sounds.push(LineObject);
        });
      }
    }
  });

  console.log(SoundObject);

  SoundObject = JSON.stringify(SoundObject);

  fs.writeFile('./src/utils/DefaultSounds.json', SoundObject, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

fetchSounds();
