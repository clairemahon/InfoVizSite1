const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sargentgirlsindresses.jpg") {
    myImage.setAttribute("src", "images/couturedress.jpeg");
  } else {
    myImage.setAttribute("src", "images/sargentgirlsindresses.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Style is cool, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Style is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };