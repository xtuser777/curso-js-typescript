interface PlayerProtocols {
  init(): void;
  listen(): void;
  playToggle(): void;
  stop(): void;
  prev(seconds: number): void;
  forward(seconds: number): void;
}

export default class VideoPlayer implements PlayerProtocols {
  private player: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private prevButton5: HTMLButtonElement;
  private forwardButton5: HTMLButtonElement;
  private prevButton10: HTMLButtonElement;
  private forwardButton10: HTMLButtonElement;

  constructor() {
    this.player = document.querySelector('.video') as HTMLVideoElement;
    this.playButton = document.querySelector('.play') as HTMLButtonElement;
    this.stopButton = document.querySelector('.stop') as HTMLButtonElement;
    this.prevButton5 = document.querySelector('.rr5') as HTMLButtonElement;
    this.forwardButton5 = document.querySelector('.ff5') as HTMLButtonElement;
    this.prevButton10 = document.querySelector('.rr10') as HTMLButtonElement;
    this.forwardButton10 = document.querySelector('.ff10') as HTMLButtonElement;
  }

  init(): void {
    this.listen();
  }

  listen(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.stop();
    });

    this.prevButton5.addEventListener('click', () => {
      this.prev(5);
    });

    this.forwardButton5.addEventListener('click', () => {
      this.forward(5);
    });

    this.prevButton10.addEventListener('click', () => {
      this.prev(10);
    });

    this.forwardButton10.addEventListener('click', () => {
      this.forward(10);
    });
  }

  playToggle(): void {
    if (this.player.paused) {
      this.player.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.player.pause();
      this.playButton.innerText = 'Play';
    }
  }

  stop(): void {
    this.player.pause();
    this.player.currentTime = 0;
    this.playButton.innerText = 'Play';
  }

  prev(seconds: number): void {
    this.player.currentTime = this.player.currentTime -= seconds;
    if (this.player.paused) this.player.play();
  }

  forward(seconds: number): void {
    this.player.currentTime = this.player.currentTime += seconds;
    if (this.player.paused) this.player.play();
  }
}

const player = new VideoPlayer();

player.init();
