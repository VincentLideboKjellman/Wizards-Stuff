function progress() {
  let prg = document.querySelector('#progress');
  let percent = document.querySelector('#percentCount');
  let loadingText = document.querySelector('#loadingCount');
  let startText = document.querySelector('.start-text');
  let counter = 5;
  let progress = 30;
  let id = setInterval(frame, 50);

  function frame() {
    if(progress==600 && counter == 100) {
      clearInterval(id);
      setTimeout(() => {
        startText.style.display = 'initial';
        percent.style.display = 'none';
        loadingText.style.display = 'none';
      }, 1500)
    } else {
      progress += 6;
      counter += 1;
      prg.style.width = progress + 'px';
      percent.innerHTML = counter + '%';
    }
  }
}
progress();
