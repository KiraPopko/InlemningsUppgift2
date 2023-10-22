import fs from "fs";
import Musiker2 from "./classMusiker2.js"

export default class Musiker {
  musikantList = [];

  constructor() {
    this.fetchMusikantList();
  }
  get musikantList() {
    return this.musikantList;
  }

  fetchMusikantList() {
    const jsonString = fs.readFileSync("musikanter.json");
    const data = JSON.parse(jsonString);

    for (let i = 0; i < data.length; i++) {
      this.musikantList.push(new Musiker2(data[i]));

    }
  }
  writeOutMusiker() {
    for (let i = 0; i < this.musikantList.length; i++) {
      console.log(`${i + 1}).${this.musikantList[i].name}`);

    }
  }

  addMusikerToList(name, infoText, birthYear, instrument, bandNow) {
    this.musikantList.push(new Musiker2(name, infoText, birthYear, instrument, bandNow));
    this.#updateJsonFile();
  }
  removeMusikerFromList(index) {
    this.musikantList.splice(index, 1);
    this.#updateJsonFile();
  }

  #updateJsonFile() {
    let tempList = [];
    for (let i = 0; i < this.musikantList.length; i++) {
      tempList.push(this.musikantList[i].dataInfo());
    }
    fs.writeFileSync('./musikanter.json', JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
  getLength() {
    return this.musikantList.length;
  }

}