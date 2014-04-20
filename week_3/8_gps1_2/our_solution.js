// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Matias Meneses    
//  2.Alec Ashford


// 1. "YOU SIGNED... WHO?!"

var tomHanks = {
    name: "Tom Hanks",
    age: 58,
    quote: "Lt. Dan! You got new legs!"
};

// 2. "Here they Come!"
var adamSandler = {
    name: "Adam Sandler",
    age: 45,
    quote: "That's your home! Are you too good for your home?!"
};

var kristenBell = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you want to build a snowman?"
};


var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "...so you're telling me there's a chance? YEAH!"
};


// 3. "TIME IS MONEY!"

//YOUR CODE HERE!
clientList = [tomHanks, adamSandler, kristenBell, jimCarrey, shooterMcGavin];

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
console.log(shooterMcGavin.constructor === Client);
console.log(shooterMcGavin.age === 48);
console.log(shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.");





// 4. "SHOW 'EM OFF!"

  for (i=0; i<clientList.length; i++) {
  console.log("name: " + clientList[i].name + ", age: " + clientList[i].age + ", quote: " + clientList[i].quote);
}


// ** BONUS **


/*  Your Reflection:
The Pairing session has continued to be a great strategy to bounce ideas off of each 
other gain new insight on a topic for someone else’s point of view. The main problem 
came from my own unpreparedness. I was unable to complete the prior assignments and 
felt that my lack of knowledge of functions made me rely on my partner to navigate. I 
had many questions about function and calling locations within arrays, which the 
“guide” and my partner were helpful in answering. I learned many new skills about 
taking objects and their properties and how they can be used in functions to display 
work. I still feel that hours of work/practice are still needed to truly solidify these 
concepts to make them actionable without assistance. I enjoyed the pairing and learning 
from others, as opposed to just reading the answers. 
*/
