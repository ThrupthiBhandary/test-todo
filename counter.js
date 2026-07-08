class Counter {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  increment(amount = 1) {
    this.value += amount;
  }

  decrement(amount = 1) {
    this.value -= amount;
  }

  reset() {
    this.value = 0;
  }
}

const counter = new Counter();
counter.increment(); // Increment by default
console.log(counter.value); // Output: 1

counter.decrement(); // Decrement by default
console.log(counter.value); // Output: 0

counter.reset(); // Reset to 0
console.log(counter.value); // Output: 0