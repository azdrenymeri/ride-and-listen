import { Howl, Howler } from "howler";

export function mainRadio() {
  const radio = new Howl({
    src: "https://us4.internet-radio.com/proxy/wsjf?mp=/stream;",
    html5: true,
    autoplay: true,
    loop: true,
    volume: 0.5,
    format: ['mp3', 'aac']
  });

  return radio;
}
