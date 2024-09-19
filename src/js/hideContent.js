export default class HideContent {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.widget = document.createElement('div');
  }
  init() {
    this.widget.classList.add('txt-widget');

    this.widget.innerHTML = '<div class="btn-container">\n'
        + '                      <button class = "button">Hide/Show</button>\n'
        + '                        <div class="txt-area hide">\n'
        + '                           <p class="text"> </p>\n'
        + '                        </div>\n'
        + '                      </div>\n'
        + '                        <div class="copy-area">\n'
        + '                           <p class="copy">Copy</p>\n'
        + '                        </div>\n'

    this.parentEl.prepend(this.widget);
    const txt = document.querySelector('.text');
    txt.textContent = 'Здесь могла быть ваша реклама. Но раз рекламы нет, оставлю тут IT-шутку.\n Выведена новая порода собак для сисадминов - сервернар. Собака откликается исключительно на консольные команды с правами администратора))'
  }
}