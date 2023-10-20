

/*Musiker
Namn
Infotext
Födelseår
Lista över band musikern är med
Lista över tidigare band musiker varit med i
Vilka instrument som musiker spelar
  */
export default class Musiker {
  #name
  #infoText
  #dateBorn
  #listBand
  #listBeforeBand
  #listInstrument

  constructor(namn, infoText, howOld, listBand, beforeBand, instruments) {
    this.#name = namn
    this.#infoText = infoText
    //this.#dateBorn = howOld
    this.#listBand = listBand
    //this.#listBeforeBand = beforeBand
    this.#listInstrument = instruments

  }

  get namn() {
    return this.#name
  }
  get infoText() {
    return this.#infoText
  }

  howOld() {
    //bornDate privat, spara Objekt inte sträng , spara som date objekt
    const today = new Date();
    const year = new Date(this.dateBorn)
    const todayD = (today.getFullYear() * 12);
    const yearBornD = (year.getFullYear() * 12);

    const age = (Math.floor((todayD - yearBornD) / 12));
    return age
  }

  get listBand() {
    nowBand = playNow
    beforeBand = playBefore
  }
  get instruments() {
    return this.#listInstrument
  }
  set namn(newName) {
    this.#name = newName
  }
  set infoText(about) {
    this.#infoText = about
  }
  set listBand(listBand) {
    this.#listBand
  }
  set instruments(instr) {

  }

  dataInfo() {
    return {
      "namn": this.#name,
      "infoText": this.#infoText,
      "listBand": this.#listBand,
      "instruments": this.#listInstrument
      //this.#dateBorn = howOld

      //this.#listBeforeBand = beforeBand
    };
  }
  fromDataInfo(data) {
    this.#name = data.namn;
    this.#infoText = data.infoText;
    this.#listBand = data.listBand;
    this.#listInstrument = data.instruments;
  }
}


