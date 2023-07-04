const app = {
  event: null,
  init: () => {
    const msg = `${app.event} event was fired`;
    window.alert(msg);
    console.log(alert);

    app.addListeners();
  },
  addListeners: () => {
    document.querySelector('button#increment').addEventListener('click', app.incrementCount);
    document.querySelector('button#decrement').addEventListener('click', app.decrementCount);
  },
  incrementCount: () => {
    const h3 = document.querySelector('h3#count');
    let num = +h3.textContent.split(':')[1].trim();
    num += 1;
    h3.textContent = 'The count is: ' + num;
  },
  decrementCount: () => {
    const h3 = document.querySelector('h3#count');
    let num = +h3.textContent.split(':')[1].trim();
    num -= 1;
    h3.textContent = 'The count is: ' + num;
  }
};

app.event = 'cordova' in window ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(app.event, app.init);
