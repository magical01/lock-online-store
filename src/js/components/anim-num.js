import vars from "../_vars";

// document.addEventListener("DOMContentLoaded", () => {
//   const section = document.querySelector('.static');

//   const loadingNum = (num, elem, time, step) => {
//     let initValue = 0;
//     let t = Math.round(time / (num / step));

//     let interval = setInterval(() => {
//       initValue += step;

//       if (initValue == num) {
//         clearInterval(interval);
//       }

//       elem.innerHTML = initValue;
//     }, t);
//   }


//   const scrollAnimation = () => {
//     let flag = false;
//     let windowCenter = (window.innerHeight / 2) + window.scrollY;
//     let scrollOffset = section.offsetTop + (section.offsetHeight / 2);

//     vars.number.forEach(elem => {
//       const time = 3000;
//       let num = elem.dataset.num;
//       let step;

//       if (num > 1000 && num < 2000) {
//         step = 5;
//       } else if (num > 2000 && num < 6000){
//         step = 19;
//       } else {
//         step = 1;
//       }


//       if (windowCenter >= scrollOffset) {
//         elem.textContent = loadingNum(num, elem, time, step);
//         flag = true;
//       }

//     });

//   }




//   window.addEventListener('scroll', () => {
//     scrollAnimation();
//   });
// });


const section = document.querySelector('.static');
let time = 3000;
let flag = false;


window.addEventListener('scroll', () => {
  const cPos = section.offsetTop / 2;
  const topWindow = window.scrollY;

  if (cPos < topWindow) {
    if (!flag) {
      vars.number.forEach(elem => {
        elem.classList.add('static__num--active')
        let initialValue = 0;
        let num = elem.dataset.num;
        let step;
        let t = Math.round(time / (num / step));

        if (num > 1000 && num < 2000) {
          step = 15;
        } else if (num > 2000 && num < 6000){
          step = 47;
        } else if (num < 1000 && num > 350) {
          step = 6;
        } else if (num < 350) {
          step = 1;
        }

        let interval = setInterval(() => {
          initialValue += step;
          if (initialValue <= num) {
            elem.innerHTML = initialValue;
          } else {
            flag = true;
            clearInterval(interval)
          }
        }, 40)
      });
    }
  }
})

