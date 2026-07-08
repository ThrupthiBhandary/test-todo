class Counter {
  constructor() {
    this.value = 0;
    this.renderCounter();
  }

  increment() {
    this.value++;
    this.renderCounter();
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
      this.renderCounter();
    }
  }

  renderCounter() {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
      counterElement.textContent = `Count: ${this.value}`;
    }
  }
}

const counterInstance = new Counter();

document.getElementById('increment').addEventListener('click', () => {
  counterInstance.increment();
});

document.getElementById('decrement').addEventListener('click', () => {
  counterInstance.decrement();
});