export default class Musicians2 { //Musician
  name;
  birthyear;
  instrument;
  info;

  constructor(name, birthyear, instrument, info) {
    this.name = name;
    this.birthyear = birthyear;
    this.instrument = instrument;
    this.info = info;

  }


  birthyearToAge(a) {
    const todaysYear = new Date();
    const BornYear = new Date(a);
    const TodayA = (todaysYear.getFullYear() * 12)
    const YearA = (BornYear.getFullYear() * 12)
    const Age = (Math.floor((TodayA - YearA) / 12));
    return Age;
  }

  dataInfo() {
    return {
      "musicianId": 'id' + new Date().getTime(), ///Why musicianId not in ""
      "name": this.name,
      "birthyear": this.birthyear,
      "Age": this.birthyearToAge(this.birthyear),
      "info": this.info,
      "Instrument": [this.instrument],
      "BandmemberIn": [],
      "PreviousBandmemberIn": []
    };
  }
} 