
import fs from "fs";
import Bands2 from "./bands2.js";

export default class Bands {
  bandList = [];

  constructor() {
    this.fetchBandsList();

  }

  get bandList() {
    return this.bandList;
  }

  fetchBandsList() {
    const jsonString = fs.readFileSync("bands.json");
    const data = JSON.parse(jsonString);

    for (let i = 0; i < data.length; i++) {
      this.bandList.push(data[i]);
      //this.bandList.push(new Bands2(data[i])); 
    }
  }


  getLength() {
    return this.bandList.length;
  }

  createBand(name, created, id, musicianName, instrument, info) {
    const newBands = new Bands2(name, created, id, musicianName, instrument, info);
    this.bandList.push(newBands.dataInfo());
    return newBands.dataInfo().bandId;
  }
  d

  writeJson() {
    fs.writeFileSync('./bands.json', JSON.stringify(this.bandList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }

  onGoingBand() {
    const temp = [];
    for (let i = 0; i < this.getLength(); i++) {
      if (this.bandList[i].Disbandment === null) {
        temp.push({ bandId: this.bandList[i].bandId, bandName: this.bandList[i].name, index: i })
      }
    }
    return temp;
  }

  displayOngoingBand() {
    const temp = this.onGoingBand();
    if (temp.length != 0) {
      for (let i = 0; i < temp.length; i++) {
        console.log(`${i}. ${temp[i].bandName}`);
      }

    }
    return temp;
  }

  displayCurrentMember(bandIndex) {
    const band = this.bandList[bandIndex].CurrentBandMember;
    const currentMember = [];
    for (let i = 0; i < band.length; i++) {
      console.log(`${i}. ${band[i].name} ${band[i].instrument})`)
      currentMember.push(band[i].memberId);
    }
    return currentMember
  }
  editBandList(index, musicianId, musicanName, instrument, date) {
    this.bandList[index].CurrentBandmMemberIn.push({ musicianId: musicianId, musicanName: musicanName, instrument: instrument, yearJouned: date }) //bandFormed
  }
  currentToPrevious(bandIndex, musicianId, date) {
    const member = this.bandList[bandIndex].CurrentBandMember.find(x => x.memberId === musicianId);
    member['dateLeft'] = date;

    this.bandList[bandIndex].PreviousBandmebersIn.push(member);
    this.bandList[bandIndex].CurrentBandMember.splice(this.bandList[bandIndex].CurrentBandMember.findIndex(x => x.memberId === musicianId), 1);
    if (this.bandList[bandIndex].CurrentBandMember.length === 0) {
      this.bandList[bandIndex].Disbandment = date;
    }
  }

}
