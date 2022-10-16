import vars from "../_vars";

document.addEventListener('DOMContentLoaded', () => {
  let countComments = 3;
  let dataLength = '';

  const fetchComments = (count = 3) => {
    fetch('comments.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dataLength = data.length;
      vars.commentsList.innerHTML = '';

      for (let i = 0; i < data.length; i++) {
        if (i < count) {
          vars.commentsList.innerHTML += `
            <li class="tabs-content__item">
              <div class="tabs-content__top">
                <strong class="tabs-content__name">${data[i].name}</strong>
                <span class="tabs-content__date">${data[i].date}</span>
                <div class="tabs-content__rating rating">
                  <div class="rating__group">
                    <input class="rating__star" id="${data[i].id}__5" name="${data[i].id}" type="radio" value="1"
                      aria-label="Ужасно">
                    <label class="rating__label" for="${data[i].id}__5"></label>
                    <input class="rating__star" id="${data[i].id}__4" name="${data[i].id}" type="radio" value="2"
                      aria-label="Сносно">
                    <label class="rating__label" for="${data[i].id}__4"></label>
                    <input class="rating__star" id="${data[i].id}__3" name="${data[i].id}" type="radio" value="3"
                      aria-label="Нормально" checked>
                    <label class="rating__label" for="${data[i].id}__3"></label>
                    <input class="rating__star" id="${data[i].id}__2" name="${data[i].id}" type="radio" value="4"
                      aria-label="Хорошо">
                    <label class="rating__label" for="${data[i].id}__2"></label>
                    <input class="rating__star" id="${data[i].id}__1" name="${data[i].id}" type="radio" value="5"
                      aria-label="Отлично">
                    <label class="rating__label" for="${data[i].id}__1"></label>
                  </div>
                </div>
              </div>
              <div class="tabs-content__bottom">
                <p class="tabs-content__description">${data[i].text}</p>
                <div class="tabs-content__buttons">
                  <button class="tabs-content__answer btn-reset focus-offset">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.277778 0C0.124365 0 0 0.12438 0 0.27781V6.11182C0 6.72555 0.497461 7.22306 1.11111 7.22306H8.15L6.23333 9.1344C6.18075 9.18656 6.15117 9.25757 6.15117 9.33164C6.15117 9.40572 6.18075 9.47673 6.23333 9.52889L6.62778 9.91782C6.67994 9.97042 6.75093 10 6.825 10C6.89907 10 6.97007 9.97042 7.02222 9.91782L9.87778 7.06749C9.95594 6.98942 9.9999 6.88349 10 6.77301V6.56188C9.99872 6.45163 9.95494 6.34614 9.87778 6.2674L7.02222 3.41707C6.97007 3.36447 6.89907 3.33489 6.825 3.33489C6.75093 3.33489 6.67994 3.36447 6.62778 3.41707L6.23333 3.81156C6.18108 3.86276 6.15163 3.93285 6.15163 4.00602C6.15163 4.07919 6.18108 4.14928 6.23333 4.20049L8.15 6.11182H1.11111V0.27781C1.11111 0.12438 0.986746 0 0.833333 0H0.277778Z"
                        fill="#4295E4" />
                    </svg>
                    Ответить
                  </button>
                  <button class="tabs-content__comments btn-reset focus-offset">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.358 0H1.88999C0.847822 0 0 0.847849 0 1.88999V8.28013C0 9.32227 0.847822 10.1701 1.88999 10.1701H2.63165L2.64616 11.8386C2.64746 11.9924 2.73577 12.1322 2.8741 12.1994C2.93032 12.2267 2.99085 12.2401 3.05108 12.2401C3.13903 12.2401 3.22634 12.2115 3.29858 12.1557L5.87121 10.1701H11.358C12.4002 10.1701 13.248 9.32227 13.248 8.28013V1.88999C13.248 0.847849 12.4002 0 11.358 0ZM12.438 8.28015C12.438 8.87567 11.9536 9.36015 11.358 9.36015H5.73311C5.64358 9.36015 5.55657 9.38983 5.48567 9.44453L3.44902 11.0164L3.4381 9.76163C3.43618 9.53934 3.25542 9.36015 3.03313 9.36015H1.88999C1.29448 9.36015 0.809993 8.87567 0.809993 8.28015V1.88999C0.809993 1.29448 1.29448 0.809993 1.88999 0.809993H11.3581C11.9536 0.809993 12.4381 1.29448 12.4381 1.88999V8.28015H12.438Z"
                        fill="#C4CDD5" />
                    </svg>
                    1 комментарий
                  </button>
                </div>
              </div>
            </li>
          `
        }
      }
    });
  }

  fetchComments(countComments);

  vars.btnMore?.addEventListener('click', () => {
    countComments = countComments + 2;

    fetchComments(countComments);

    if (countComments >= dataLength) {
      vars.btnMore.style.display = 'none';
    } else {
      vars.btnMore.style.display = 'inline-flex';
    }

  });

});
