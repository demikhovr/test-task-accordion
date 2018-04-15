'use strict';

(function () {
  const accordion = document.querySelector(`.accordion`);
  let activeItem;
  let itemContentWrapper;
  let itemContent;
  let itemContentHeight;

  /**
   * Обработчик клика по аккордеону
   * @param {Object} evt
   */
  function headerClickHandler(evt) {
    evt.preventDefault();

    const target = evt.target;

    if (target.classList.contains(`accordion__item-header`)) {
      if (activeItem) {
        hideItem(activeItem);
      }

      if (activeItem !== target.closest(`.accordion__item`)) {
        activeItem = target.closest(`.accordion__item`);
        showItem(activeItem);
      } else {
        activeItem = null;
      }
    }
  }

  /**
   * Показывает содержимое элемента аккордеона
   * @param {Node} item
   */
  function showItem(item) {
    itemContentWrapper = item.querySelector(`.accordion__item-content-wrapper`);
    itemContent = item.querySelector(`.accordion__item-content`);
    itemContentHeight = itemContent.offsetHeight;

    item.classList.add(`accordion__item--active`);
    itemContentWrapper.style.height = `${itemContentHeight}px`;
  }

  /**
   * Скрывает содержимое элемента аккордеона
   * @param {Node} item
   */
  function hideItem(item) {
    itemContentWrapper = item.querySelector(`.accordion__item-content-wrapper`);

    item.classList.remove(`accordion__item--active`);
    itemContentWrapper.style.height = 0;
  }

  accordion.addEventListener(`click`, headerClickHandler);

}());