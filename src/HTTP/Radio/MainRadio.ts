import { Howl, Howler } from "howler";

export function mainRadio() {
  const radio = new Howl({
    src: "http://hestia2.cdnstream.com/1277_192",
    html5: true,
    autoplay: true,
    loop: true,
    volume: 0.5,
    format: ['mp3']
  });

  return radio;
}
