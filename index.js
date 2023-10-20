import Musiker from "./classMusiker.js";
//import Band from "./classBand.js";
import fs from "fs";

import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

//const Musiker = require("./classMusiker")
const musiker = new Musiker("Adams Vi", "It is infor about Vi", "1989", "Wings", "guitar")

const jsonString = fs.readFileSync("musikanter.json");
const data = JSON.parse(jsonString);

/*const musikanterOut = [
  new Musikant
]*/


//musiker.dateBorn = prompt("Musikers födelse år: ")
//console.log(musiker.howOld())


console.log(musiker.name)

function musikerToJson(musikanter) {
  const musikanterData = musikanter.map(m => m.dataInfo())
  return JSON.stringify(musikanterData)
}

function musikerFromJson(json) {
  const musikanterData = JSON.parse(json);
  return musikanterData.map(d => {
    let m = new Musiker("");
    m.fromDataInfo(d);
    return m;
  });
}
//write to file
const musikanterJsonOut = musikanterToJson(musiker);
fs.writeFileSync("musikanter.json", musikanterJsonOut)

// Read hunds from file.
const musikanterJsonIn = fs.readFileSync("hunds.json");
const musikanterIn = hundsFromJson(musikanterJsonIn);
console.log(musikanterIn.map(m => m.dataInfo()));