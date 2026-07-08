class Counter {
  constructor() {
    this.count = 0;
    this.buttonElement = document.createElement('button');
    this.buttonElement.textContent = 'Click Me';
    this.buttonElement.addEventListener('click', () => this.incrementCount());
    document.body.appendChild(this.buttonElement);
  }

  incrementCount() {
    this.count++;
    this.buttonElement.textContent = `Clicked ${this.count} times`;
  }
}

new Counter();