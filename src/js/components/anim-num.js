import vars from "../_vars";

document.addEventListener('DOMContentLoaded', () => {
  let flag = false;

  const scrollAnim = (sectionSelector, activeSelector, mainSelector) => {

    const section = document.querySelector(sectionSelector);
    const elemPosition = section?.offsetTop / 4;
    const topWindow = window.scrollY;
    const time = 3000;

    if (elemPosition < topWindow) {
      if (!flag) {
        mainSelector?.forEach(elem => {
          elem.classList.add(activeSelector);
          let initialValue = 0;
          let num = +elem.dataset.num;
          let step;

          if (num > 1000 && num < 2000) {
            step = 15;
          } else if (num > 2000 && num < 6000){
            step = 47;
          } else if (num < 1000 && num > 350) {
            step = 6;
          } else if (num < 350) {
            step = 1;
          }

          let t = Math.round(time / (num / step));

          let interval = setInterval(() => {
            initialValue += step;
            if (initialValue <= num) {
              elem.innerHTML = initialValue;
              flag = true;
            } else {
              flag = true;
              clearInterval(interval);
            }
          }, t);

        });
      }
    }
  }

  window.addEventListener('scroll', () => {
    scrollAnim('.static', 'static__num--active', vars.number);
    scrollAnim('.statistics', 'statistics__number--active', vars.statisticsNum);
  });

})
