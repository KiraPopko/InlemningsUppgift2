
///claas- egenskaper
/*
Band
Namn
Infotext
Årtal bandet bildades
Årtal bandet upplöstes för band som inte finns längre
Lista över medlemmar och vilket år de gick med i bandet samt vilket / vilka instrument de spelade i bandet
Lista över tidigare medlemmar med samma info per musiker som för nuvarande medlemmar samt vilket år musiker lämnade bandet*/

export default class Band {
  bandName
  infoTextB
  bandStarted
  bandFinished
  members
  formerMembers
  constructor(bandName, infoTextB, bandStarted, bandFinished, bandAge, members, formerMembers) {
    this.bandName = bandName;
    this.infoText = infoTextB;
    this.bandStarted = bandStarted;
    this.bandFinished = bandFinished;
    this.bandAge = bandAge;
    this.members = members;
    this.formerMembers = formerMembers

  }
  get bandName() {
    return this.bandName;
  }

  set bandName(name) {
    this.bandName = name;
  }

  get infoTextB() {
    return this.infoTextB;
  }

  set infoTextB(aboutBand) {
    this.infoTextB = aboutBand;
  }

  get bandStarted() {
    return this.bandStarted;
  }

  set bandStarted(startYear) {
    this.bandStarted = startYear;

  }

  get bandFinished() {
    return this.bandFinished;
  }

  set bandFinished(endYear) {

    this.bandFinished = endYear

  }
  bandAge() {
    this.bandAge;
  }

  /*set bandAge(ageB) {
    
    //ageB = bandFinished - bandStarted
    // = new Date() - bandStarted
    //const ageB = bandFinished - bandStarted
    //return ageB
  }*/

  get members() {
    return this.members
  }

  set members(newMembers) {
    this.members = newMembers
  }
  get formerMembers() {
    return this.formerMembers
  }
  set formerMembers(oldMembers) {
    this.formerMembers = oldMembers
  }

  dataInfo() {
    return {
      "bandName": this.bandName,
      "infoText": this.infoTextB,
      "Year started": this.bandStarted,
      "Year finished": this.bandFinished,
      "Band age": this.bandAge,
      "Now band member": [this.members],
      "Before band member": [this.formerMembers]

    };
  };
  fromDataInfo(data) {
    this.bandName = data.bandName;
    this.infoTextB = data.infoTextB;
    this.bandStarted = data.bandStarted;
    this.bandFinished = data.bandFinished;
    this.bandAge = data.bandAge;
    this.members = data.members;
    this.formerMembers = data.formerMembers;
  }
}
