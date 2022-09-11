const btn = document.querySelector(".start");
const minite = document.querySelector(".minite");
const secent = document.querySelector(".secent");
const btn1 = document.querySelector(".start1");
const minite1 = document.querySelector(".minite1");
const secent1 = document.querySelector(".secent1");
const btn2 = document.querySelector(".start2");
const minite2 = document.querySelector(".minite2");
const secent2 = document.querySelector(".secent2");
// main promodoro
let count = 00;
let countm = 25;
// short break
let count1 = 00;
let countm1 = 5;
// long break
let count2 = 00;
let countm2 = 20;
const audio = document.querySelector(".audio");

// how many time its work
let time = 0;
let time1 = 0;
let time2 = 0;

// times
const reading = document.querySelector(".reading");
const breaking = document.querySelector(".breaking");

function countdown(
  clickbtn,
  showmin,
  showsec,
  countmin,
  countsec,
  setmin,
  setsec,
  time,
  settime
) {
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
        countmin = setmin;
        countsec = setsec;
        time++;
      }
      settime.textContent = time;
      showmin.textContent = countmin;
      showsec.textContent = countsec;
    }, 1000);
  });
}
countdown(btn, minite, secent, countm, count, 25, 0, time, reading);
countdown(btn1, minite1, secent1, countm1, count1, 5, 0, time1, breaking);
countdown(btn2, minite2, secent2, countm2, count2, 20, 0);

// btn working in there
const Pomodoro1 = document.querySelector(".Pomodoro1");
const short1 = document.querySelector(".short1");
const long1 = document.querySelector(".long1");
const Pomodoro2 = document.querySelector(".Pomodoro2");
const short2 = document.querySelector(".short2");
const long2 = document.querySelector(".long2");
const Pomodoro3 = document.querySelector(".Pomodoro3");
const short3 = document.querySelector(".short3");
const long3 = document.querySelector(".long3");

const showshort = document.querySelector(".shortBreak");
const container = document.querySelector(".container");
const longbreak = document.querySelector(".longBreak");
// step 1
short1.addEventListener("click", function () {
  container.classList.remove("showshort");
  longbreak.classList.remove("showshort");
  showshort.classList.add("showshort");
});

long1.addEventListener("click", function () {
  container.classList.remove("showshort");
  longbreak.classList.add("showshort");
  showshort.classList.remove("showshort");
});
// step 2
Pomodoro2.addEventListener("click", function () {
  container.classList.add("showshort");
  longbreak.classList.remove("showshort");
  showshort.classList.remove("showshort");
});

long2.addEventListener("click", function () {
  container.classList.remove("showshort");
  longbreak.classList.add("showshort");
  showshort.classList.remove("showshort");
});

// step 3

Pomodoro3.addEventListener("click", function () {
  container.classList.add("showshort");
  longbreak.classList.remove("showshort");
  showshort.classList.remove("showshort");
});

short3.addEventListener("click", function () {
  container.classList.remove("showshort");
  longbreak.classList.remove("showshort");
  showshort.classList.add("showshort");
});

// -------------------start working parcentage in there
// const tryt = document.querySelector(".try");
// const parcentage = document.querySelector(".parcentage");
// const step = document.querySelector(".step");

// let parcount = 0;

// function par() {
//   //   return parcount >= 15 ? working() : dontworking();

//   function dontworking() {}
//   function working() {
//     tryt.addEventListener("click", function () {
//       const addclass = document.createElement("div");
//       addclass.classList.add("step");
//       if (parcount < 10) {
//         parcentage.appendChild(addclass);
//       } else if (parcount > 15) {
//       }
//       parcount++;
//       console.log(parcount);
//     });
//   }
//   // working();
//   if (minite <= 22) {
//     working();
//   }
// }
// par();

// // finish working parcentage there
// if (minite > 22) {
//   function divadd() {
//     const addclass = document.createElement("div");
//     addclass.classList.add("step");
//     parcentage.appendChild(addclass);
//   }

//   if (minite > 22) {
//     divadd();
//   } else if (minite > 20) {
//     divadd();
//   }
//   //   parcount++;
// }
