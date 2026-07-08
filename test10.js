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

// CSS file for changing background color
document.write(`
<link rel="stylesheet" href="test10.css">
`);

function changeBackground() {
  const body = document.body;
  const currentColor = body.style.backgroundColor || 'white';
  
  // Define your desired colors here
  const colors = ['red', 'green', 'blue', 'yellow'];
  
  let newColorIndex = (colors.indexOf(currentColor) + 1) % colors.length;
  body.style.backgroundColor = colors[newColorIndex];
}