export default class Bands2 {
  //årtal skapades, upphörde, lista om bandmedlemmar och vilka instrument, lista över tidigare medlemmar
  name;
  bandformed;
  disbandment;
  bandmembers;
  previousBandmebers;
  info;



  constructor(name, created, id, musicianName, instrument, info) {
    this.name = name;
    this.bandformed = created;
    this.bandmembers = musicianName;
    this.instrument = instrument;
    this.memberId = id;
    this.info = info;
  }

  dataInfo() {
    return {
      "bandId": 'id' + new Date().getTime(),
      "name": this.name,
      "Bandformed": this.bandformed,
      "Disbandment": null,
      "CurrentBandMember": [{ memberId: this.memberId, name: this.bandmembers, instrument: this.instrument, yearJoined: this.bandformed }],
      "PreviousBandmebersIn": [],
      "info": this.info
    }
  }
}