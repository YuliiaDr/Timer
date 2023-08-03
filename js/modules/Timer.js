export default class Timer {
  constructor(seconds) {
    this.startSeconds = +seconds;
    this.seconds = +seconds;
    this.secondsElement = document.querySelector('#seconds');
    this.isRunning = false;
  }

  init() {
    this.checkSeconds();
    this.start();
  }

  start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
        this.checkSeconds();
      } else {
        this.isRunning = false;
        clearInterval(this.interval);
      }
    }, 1000);
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  reset() {
    this.seconds = this.startSeconds;
    this.checkSeconds();
  }

  checkSeconds() {
    const formattedSeconds = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
    this.secondsElement.innerHTML = formattedSeconds;
  }
}
