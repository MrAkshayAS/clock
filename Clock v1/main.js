function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById("time").innerHTML = time;
  }
  setInterval(displayTime, 1000);
  

  function btn1() {
    if (founder.style.display != "block") {
      founder.style.display = "block";
    } else {
      founder.style.display = "none";
    }
  }
  function btn2() {
    if (about.style.display != "block") {
      about.style.display = "block";
    } else {
      about.style.display = "none";
    }
  }
  function btn3() {
    if (source.style.display != "block") {
      source.style.display = "block";
    } else {
      source.style.display = "none";
    }
  }