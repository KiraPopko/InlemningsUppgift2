import fs from "fs";
import Musicians2 from "./musicians2.js"; // Musician
import Bands from "./bands.js";

export default class Musicians { //Musician
  musicianList = [];

  constructor() {
    this.fetchMusicianList(); //Musician
    this.bands = new Bands(); //bands33
  }

  fetchMusicianList() {
    const jsonString = fs.readFileSync("musicians.json");
    const data = JSON.parse(jsonString);

    for (let i = 0; i < data.length; i++) {
      this.musicianList.push(data[i]);
    }

    //for (let i = 0; i < data.length; i++) {
    // (const n = new Musicians2();
    //n.dataInfo(data[i]);

    //this.musikantList.push(n);)

    //this.musicianList.push(data[i]);
    //this.musicianList.push(new Musicians(data[i]));
    //this.musicianList = data.map(musicianData => new Musicians(musicianData));
  }
  //}

  addMusicianToList(name, birthyear, instrument, info) {
    const newMusicians = new Musicians2(name, birthyear, instrument, info); //newMusician
    this.musicianList.push(newMusicians.dataInfo()); //newMusician
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

    this.bands.writeJson(); //band
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
    this.editMusicianList(musicianIndex, instrument, bandId, bandName);
    this.bands.editBandList(this.bands.bandList.findIndex(x => x.bandId === bandId), this.musicianList[musicianIndex].musicianId, this.musicianList[i].name, instrument, date) //band
    this.bands.writeJson(); //band
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

    this.band.currentToPrevious(bandIndex, musicId, date);
    this.currentToPrevious(this.musicianList.findIndex(x => x.musicianId === musicId), bandId, date);
    this.band.writeJson();
    this.writeJson();

  }

  currentToPrevious(musicianIndex, bandId, date) {
    const musician = this.musicianList[musicianIndex];
    const band = musician.BandmemberIn.find(x => x.bandId === bandId);
    band["timeLeft"] = date;

    musician.PreviousBandmemberIn.push(band);
    musician.BandmemberIn.splice(musician.BandmemberIn.findIndex(x => x.bandId === bandId), 1)
  }

}