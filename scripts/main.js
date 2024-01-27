const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/headshot.jpeg") {
    myImage.setAttribute("src", "images/boulder.jpeg");
  } else {
    myImage.setAttribute("src", "images/headshot.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name so I know you've stopped by.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hello there, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello there, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };