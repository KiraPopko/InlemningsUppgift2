export default class Musiker2 {

  name;
  infoText;
  birthYear;
  instrument;
  bandNow;
  bandBefore;


  constructor(name, infoText, birthYear, instrument, bandNow) {

    this.name = name;
    this.infoText = infoText;
    this.birthYear = birthYear;
    this.instrument = instrument;
    this.bandNow = bandNow;
    this.bandBefore = this.bandBefore;
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }
  get infoText() {
    return this.infoText
  }

  set infoText(textAbout) {
    this.infoText = textAbout
  }

  get birthYear() {
    this.birthYear;
  }

  set birthYear(newBirthYear) {
    if (isNaN(newBirthYear.length = 4)) {
      this.birthYear = newBirthYear;
    } else {
      console.log("Ett nytt name måste innehålla 4 symboler!");
    }
    //this.birthyear = newBirthYear;
  }

  get instrument() {
    this.instrument

  }
  set instrument(listInst) {
    this.instrument = listInst
  }
  get bandNow() {
    this.bandNow
  }

  set bandNow(now) {
    this.bandNow = now
  }
  get bandBefore() {
    this.bandBefore
  }

  set bandBefore(before) {
    this.bandBefore = before
  }

  // Skapar ett objekt med denna hundens egenskaps information. 
  // Används när vi ska skicka in till "Hundar.json". 
  dataInfo() {
    return {
      "name": this.name,
      "infoText": this.infoText,
      "birthyear": this.birthYear,
      "Instrument musicant playing": [this.instrument],
      "Now band member": [this.bandNow],
      "Before band member": [this.bandBefore]

    };
  }
  fromDataInfo(data) {
    this.name = data["name"];
    this.infoText = data["infoText"];
    this.birthYear = data["birthyear"];
    this.instrument = data["Instrument musicant playing"];
    this.bandNow = data["Now band member"];
    this.bandBefore = data["Before band membe"];
  }
} 