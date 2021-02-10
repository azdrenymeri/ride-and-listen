import { Howl, Howler } from "howler";

export function mainRadio() {
  const radio = new Howl({
    src: "https://uk3.internet-radio.com/proxy/majesticjukebox?mp=/live",
    html5: true,
    autoplay: true,
    loop: true,
    preload: true,
    volume: 0.5,
    format: ['mp3', 'aac']
  });

  return radio;
}
