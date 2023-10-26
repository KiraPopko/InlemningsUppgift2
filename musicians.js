import fs from "fs";
import Musicians2 from "./musicians2.js";
import Bands from "./bands.js";

export default class Musicians {
  musicianList = [];

  constructor() {
    this.fetchMusicianList();
    //this.bands = new Bands();
  }

  fetchMusicianList() {
    const jsonString = fs.readFileSync("musicians.json");
    const data = JSON.parse(jsonString);

    for (let i = 0; i < data.length; i++) {
      this.musicianList.push(data[i]);
    }
  }


  addMusicianToList(name, birthyear, instrument, info) {
    const newMusicians = new Musicians2(name, birthyear, instrument, info);
    this.musicianList.push(newMusicians.dataInfo());
    this.writeJson();
    //this.updateJsonFile();
  }

  writeJson() {

    fs.writeFileSync('./musicians.json', JSON.stringify(this.musicianList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }


  getLength() {
    return this.musicianList.length;
  }

  displayAllMusicians() {
    for (let i = 0; i < this.getLength(); i++) {
      console.log(`${i}. ${this.musicianList[i].name}`)
    }
  }
  displayOneMusicians(options) {
    console.log(this.musicianList[options])
  }

  createBand(options, bandName, created, instrumet, info) {
    const temptId = this.bands.createBand(bandName, created, this.musicianList[options].musicianId, this.musicianList[options].name, instrumet, info);
    this.editMusicList(options, instrumet, temptId, bandName, created)

    this.bands.writeJson();
    this.writeJson();
  }

  editMusicList(option, instrument, temptId, bandName, created) {
    if (!this.musicianList[option].Instrument.includes(instrument)) {
      this.musicianList[option].Instrument.push(instrument);
    }
    this.musicianList[option].BandmemberIn.push({ bandName: bandName, bandId: temptId, Joined: created });
  }

  addMusicianToBand(musicianIndex, instrument, bandId, bandName) {
    let date = new Date().getFullYear();
    this.editMusicList(musicianIndex, instrument, bandId, bandName);
    this.bands.editBandList(this.bands.bandList.findIndex(x => x.bandId === bandId), this.musicianList[musicianIndex].musicianId, this.musicianList[i].name, instrument, date)
    this.bands.writeJson();
    this.writeJson();
  }

  checkMusikant(name) {

    for (let index = 0; index < this.musicianList.length; index++) {

      const element = this.musicianList[index];
      if (element.name == name) {
        return true
      }
    }
    return false;
  }

  removeMusician(bandId, bandIndex, musicId) {
    const date = new Date().toLocaleString();

    this.bands.currentToPrevious(bandIndex, musicId, date);
    this.bands.currentToPrevious(this.musicianList.findIndex(x => x.musicianId === musicId), bandId, date);


    this.bands.writeJson();
    this.writeJson();

  }

  currentToPrevious(musicianIndex, bandId, date) {
    const musicians = this.musicianList[musicianIndex];
    const bands = musicians.BandmemberIn.find(x => x.bandId === bandId);
    bands["timeLeft"] = date;

    musicians.PreviousBandmemberIn.push(bands);
    musicians.BandmemberIn.splice(musicians.BandmemberIn.findIndex(x => x.bandId === bandId), 1)
  }

}