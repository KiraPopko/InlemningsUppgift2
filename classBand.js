import fs from "fs";

import Band2 from "./classBand2.js"

export default class Band {
  bandList = [];

  constructor() {
    this.fetchBandList();
  }
  get bandList() {
    return this.bandList;
  }

  fetchBandList() {
    const jsonString = fs.readFileSync("band.json");
    const data = JSON.parse(jsonString);

    for (let i = 0; i < data.length; i++) {
      this.bandList.push(new Band2(data[i]));

    }
  }
  writeOutBand() {
    for (let i = 0; i < this.bandList.length; i++) {
      console.log(`${i + 1}).${this.bandList[i].name}`);

    }
  }

  addBandToList(bandName, infoTextB, bandStarted, bandFinished, bandAge, members, formerMembers) {
    this.bandList.push(new Band2(bandName, infoTextB, bandStarted, bandFinished, bandAge, members, formerMembers));
    this.updateJsonFile();
  }
  removeBandFromList(index) {
    this.bandList.splice(index, 1);
    this.updateJsonFile();
  }

  updateJsonFile() {
    let tempList = [];
    for (let i = 0; i < this.bandList.length; i++) {
      tempList.push(this.bandList[i].dataInfo());
    }

    fs.writeFileSync('./band.json', JSON.stringify(tempList, null, " "), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
  getLength() {
    return this.bandList.length;
  }

}
/*function bandToJson(band) {
  const bandData = band.map(b => b.dataInfo())
  return JSON.stringify(bandData)
}

function bandFromJson(json) {
  const bandData = JSON.parse(json);
  return bandData.map(d => {
    let b = new Band("");
    b.fromDataInfo(d);
    return b;
  });
}
//write to file
const bandJsonOut = bandToJson(bandList);
fs.writeFileSync("band.json", bandJsonOut)

// Read hunds from file.
const bandJsonIn = fs.readFileSync("band.json");
const bandIn = bandFromJson(bandJsonIn);
console.log(bandIn.map(b => b.dataInfo()));*/

