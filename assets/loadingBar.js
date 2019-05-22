function progress() {
  let prg = document.querySelector('#progress');
  let percent = document.querySelector('#percentCount');
  let startText = document.querySelector('.start-text');
  let counter = 5;
  let progress = 15;
  let id = setInterval(frame, 50);

  function frame() {
    if(progress==300 && counter == 100) {
      clearInterval(id);
      setTimeout(() => {
        startText.style.display = 'initial';
        percent.style.display = 'none';
      }, 1500)
    } else {
      progress += 3;
      counter += 1;
      prg.style.width = progress + 'px';
      percent.innerHTML = counter + '%';
    }
  }
}
progress();
