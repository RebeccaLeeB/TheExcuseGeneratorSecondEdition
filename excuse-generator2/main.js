window.onload = () => {
    document.querySelector('#btn').addEventListener("click",() =>{

        document.querySelector("#the-excuse").innerHTML = generateExcuse();
    });
   
};

let generateExcuse = () => {

    let pronoun = ["A ","The ", "This "];
    let subject = ["jogger ","racoon ","dog ","driver ", "teacher"];
    let action = ["took the ","threw a ","yelled at my ", "ran off with my ", "cried profusely at the "];
    let possession = ["homework ", "food ","car ", "kitty cat ", "baby "]
    let where = ["in the park.", "in my house.", "in my driveway.", "in the river.", "in the chimney."];

    
    let proIndex = Math.floor(Math.random() * pronoun.length);
    let subIndex = Math.floor(Math.random() * subject.length);
    let actIndex = Math.floor(Math.random() * action.length);
    let posIndex = Math.floor(Math.random() * possession.length);
    let wheIndex = Math.floor(Math.random() * where.length);
    
    return pronoun[proIndex] + '' + subject[subIndex] + '' + action[actIndex] + '' + possession[posIndex] + '' + where[wheIndex];
};