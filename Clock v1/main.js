function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById("time").innerHTML = time;
  }
  setInterval(displayTime, 1000);
  

  function btn1() {
    if (founder.style.display != "block") {
      founder.style.display = "block";
      about.style.display = "none";
      source.style.display = "none";
    } else {
      founder.style.display = "none";
      // about.style.display = "block";
      // source.style.display = "block";
      
    }
  }
  function btn2() {
    if (about.style.display != "block") {
      about.style.display = "block";
      source.style.display = "none";
      founder.style.display = "none";
    } else {
      about.style.display = "none";
      // founder.style.display = "block";
      // source.style.display = "block";
    }
  }
  function btn3() {
    if (source.style.display != "block") {
      source.style.display = "block";
      about.style.display = "none";
      founder.style.display = "none";
    } else {
      source.style.display = "none";
      // about.style.display = "block";
      // founder.style.display = "block";
    }
  }