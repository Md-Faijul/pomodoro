// -------------------start working parcentage in there
const tryt = document.querySelector(".try");
const parcentage = document.querySelector(".parcentage");
const step = document.querySelector(".step");

// create a function for count down number
function countdown(clickbtn, showmin, showsec, countmin, countsec) {
  clickbtn.addEventListener("click", function () {
    const increase = setInterval(function () {
      countsec--;
      if (countsec < 0) {
        countsec = 59;
        countmin--;
      }
      if (countmin == 0 && countsec == 0) {
        clearInterval(increase);
        const x = audio;
        function sound() {
          x.play();
        }
        sound();
        alert("Short Break  time up");
      }
      showmin.textContent = countmin;
      showsec.textContent = countsec;
    }, 1000);
  });
}

// decleare function
// countdown(setbtn, minite, secent, 5, 0);
// create close the line in there

let countm = 25;
const minite = document.querySelector(".minite");
const secent = document.querySelector(".secent");
const putcount = document.querySelector(".putcount"); // input for get value you want
const setbtn = document.querySelector(".setbtn");
const percent = document.querySelector(".percent");

const putcounts = putcount.value;

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 25;
    percent.textContent = localStorage.clickCounter;
  } else {
    localStorage.clickcount = 1;
  }
  parcentage.innerHTML = localStorage.clickcount;
  parcentage.textContent = localStorage.clickCounter;
}

// decleare function
countdown(setbtn, minite, secent, putcount.value, 0);
setbtn.addEventListener("click", function () {
  clickCounter();
});

// setbtn.addEventListener("click", function () {
//   const pt = putcount.value;
//   const putco = pt;
//   taketime.push(pt);

//   maincount(putco);
//   putcount.value = "";
// });

function maincount(putthat) {
  let count = 00;
  const increase = setInterval(function () {
    count--;
    // parcent function
    function parcent(a, b) {
      return (a * 100) / b;
    }

    // console.log(parcent(putthat, putcount));
    if (count < 0) {
      count = 59;
      putthat--;
    }
    if (putthat == 0 && count == 0) {
      clearInterval(increase);
      const x = audio;
      function sound() {
        x.play();
      }
      sound();
      alert("pomodoro time up");
    }
    minite.textContent = putthat;
    secent.textContent = count;
    percent.textContent = (putthat * 100) / taketime[0];

    // other think
    let min = (putthat * 100) / taketime[0];
    let sec = Math.floor((count * 100) / 60);

    // console.log(sec, min);
    // console.log(putthat);
    // console.log(taketime[0]);

    // random practice
    function divadd() {
      const addclass = document.createElement("div");
      addclass.classList.add("step");
      parcentage.appendChild(addclass);
    }
  }, 1000);
}
