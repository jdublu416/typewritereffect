// const TypeWriter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// // Type Method

// TypeWriter.prototype.type = function() {
//   //current index of word
//   const current = this.wordIndex % this.words.length;

//   //get full text of the current word
//   const fulltxt = this.words[current];
//   //check if deleting
//   if (this.isDeleting) {
//     //Remove
//     this.txt = fulltxt.substring(0, this.txt.length - 1);
//   } else {
//     //add character
//     this.txt = fulltxt.substring(0, this.txt.length + 1);
//   }
//   //insert the text into the span tag
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   //initialize the speed
//   let typeSpeed = 300;
//   if (this.isDeleting) {
//     typeSpeed /= 2; //you want the deleting to go faster than typing
//   }

//   //If word is complete
//   if (!this.isDeleting && this.txt === fulltxt) {
//     typeSpeed = this.wait; //will pause at end of typing
//     //toggle isDeleting
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     //this is for when the word is done typing
//     this.isDeleting = false;
//     //move to the next word in the array
//     this.wordIndex++;
//     //pause before start typing next word
//     typeSpeed = 500;
//   }
//   setTimeout(() => this.type(), typeSpeed);
// };

// //Init on DOM load

// document.addEventListener("DOMContentLoaded", init);

// //init app

// function init() {
//   const txtElement = document.querySelector(".txt-type");
//   const words = JSON.parse(txtElement.getAttribute("data-words"));
//   const wait = txtElement.getAttribute("data-wait");

//   //Init typewriter
//   new TypeWriter(txtElement, words, wait);
// }

//transform code to an es6 Class

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //current index of word
    const current = this.wordIndex % this.words.length;

    //get full text of the current word
    const fulltxt = this.words[current];
    //check if deleting
    if (this.isDeleting) {
      //Remove
      this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
      //add character
      this.txt = fulltxt.substring(0, this.txt.length + 1);
    }
    //insert the text into the span tag
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //initialize the speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2; //you want the deleting to go faster than typing
    }

    //If word is complete
    if (!this.isDeleting && this.txt === fulltxt) {
      typeSpeed = this.wait; //will pause at end of typing
      //toggle isDeleting
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      //this is for when the word is done typing
      this.isDeleting = false;
      //move to the next word in the array
      this.wordIndex++;
      //pause before start typing next word
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

//Init on DOM load

document.addEventListener("DOMContentLoaded", init);

//init app

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //Init typewriter
  new TypeWriter(txtElement, words, wait);
}
