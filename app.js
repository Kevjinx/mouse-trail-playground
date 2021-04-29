window.addEventListener('DOMContentLoaded', event => {
//mousedown = create element with setinterval at clientx and clienty
//mouseup = remove all trail
//set the setinterval inside of eventlistener or...
//...put eventlistener
  setInterval(() => {
    document.addEventListener('mouseover', (e) => {
      let x = e.clientX;
      let y = e.clientY;
      const trail = document.createElement('div');
      trail.setAttribute('class', 'trail');
      trail.style.top = `${y}px`;
      trail.style.left = `${x}px`;
      document.body.appendChild(trail)
    })
  }, 10);


})