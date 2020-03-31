console.log("I'm ready!");

let hacker1 = "john"
console.log("The driver's name is", hacker1)

let hacker2 = "YYYY"
console.log("The navigator's name is", hacker2)

let driver = hacker1

for(let i=1; i<hacker1.length; i++){
   if(hacker1.length> hacker2.length){
    console.log("The driver has the longest name it has , "+ hacker1.length +"characters.");
    break
  }
  else if(hacker1.length> hacker2.length){
    console.log("The driver has the longest name it has , "+ hacker1.length +"characters.");
    break
  }
  else {
    console.log("wow, you both have equally long names , "+ hacker1.length +" characters!.");
    break
  }
}
  console.log(driver.toUpperCase().split("").join(" "));
  console.log(driver.split("").reverse().join(""));


if(hacker1.length<hacker2.length){console.log(hacker1 +"'s name goes first");}

else if(hacker2.length<hacker1.length){console.log("Yo,"+hacker2+"goes first definitely");}

else {console.log("What?! You both have the same name?");}
