let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpg') {
      myImage.setAttribute ('src','images/cat2.jpeg');
    } else {
      myImage.setAttribute ('src','images/cat.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Kittenville, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Kittenville, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }