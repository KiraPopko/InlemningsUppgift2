import Musiker from "./classMusiker.js";
import Band from "./classBand.js";

import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

let run = true;
while (run) {
  const musikantList = new Musiker();
  const bandList = new Band();
  console.log(`
    Menu for bands and musicians:
  1. Add a new musician
  2. Add a new band
 `)

  const options = prompt();
  switch (options.trim()) {
    case "1":
      /* console.log("What is the musician name? ");
       const namn = prompt();
       console.log("Give some information about musician? ");
       const infoText = prompt();*/
      console.log("What year was the musiciant born? ");
      /*let newBirthYear
      if (newBirthYear.length === 4) {
        //this.birthYear = newBirthYear;
      } else {
        console.log("Ett nytt namn måste innehålla 4 symboler!");
      }*/
      const birthYear = prompt();

      /*console.log("What kind of musical instrument playing? ")
      const instrument = prompt();
      console.log("Which band playing now? ")
      const bandNow = prompt();*/

      musikantList.addMusikerToList(birthYear);
      break;
    /*musikantList.addMusikerToList(namn, infoText, birthYear, instrument, bandNow);
    break;*/

    case "2":
      console.log("What is the band name? ");
      const bandName = prompt();

      console.log("Give some information about the band? ");
      const infoTextB = prompt();

      console.log("What year band started? ");
      const bandStarted = prompt();

      console.log("Does band still exist? If yeas - y, if no- add end year ")
      const bandFinished = prompt();

      console.log("How old is the band? ")
      const bandAge = (bandFinished - bandStarted)
      console.log(bandAge)

      console.log("Members in the group: ")
      const members = prompt();

      console.log("Former members in the group:  ")
      const formerMembers = prompt();

      bandList.addBandToList(bandName, infoTextB, bandStarted, bandFinished, bandAge, members, formerMembers);
      break;
  }

}

