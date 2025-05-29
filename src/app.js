import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  console.log("Hello Rigo from the console!");
};


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
//thegreatjogger, thebigracoon, thebigjogger, thebigracoon, ourgreatjogger, ourbigjogger, ourbigjogger, ourbigracoon 

for (const pro of pronoun) {
  for(const ad of adj) {
    for(const no of noun){
      console.log(pro+ad+no+".com");
    }
  }
}