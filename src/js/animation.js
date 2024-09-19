import HideContent from "./hideContent";

export default class Animation {
    constructor() {
      this.container = null;
      this.widget = document.createElement('div');
    }

    bindToDOM(container) {
        this.container = container;
        this.btn = new HideContent(this.container);
      }

    init() {
      this.btn.init();
      this.reactor();
    }
     
    reactor() {
        const press = document.querySelector('.button');
        press.addEventListener('click', (event) => this.hideAndShow(event))
    }

    hideAndShow(event) {
        event.preventDefault();
        const textArea = document.querySelector('.txt-area');
        if(textArea.classList.contains('hidden') || textArea.classList.contains('hide')) {
            textArea.classList.remove('hidden')
            textArea.classList.remove('hide')
            textArea.classList.add('active')
        } else {
            textArea.classList.remove('active')
            textArea.classList.add('hidden')
            setTimeout(() => {
                textArea.classList.add('hide')
            },800)
            
        }
    }

  }