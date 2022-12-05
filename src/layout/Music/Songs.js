import Song1 from "./assets/Song1.mp3";
import Song2 from "./assets/Song2.mp3";
import Song3 from "./assets/Song3.mp3";
import Song4 from "./assets/Song4.webm";
import Song5 from "./assets/y2mate.com - Onepiece Opening 23DREAMIN  ON.mp3";
import Song6 from "./assets/y2mate.com - Vietsub PAINT  I Dont Like Mondays Opening 24  One Piece Opening.mp3";

const songs = [
  "https://rr2---sn-i3b7knse.googlevideo.com/videoplayback?expire=1670246857&ei=aZ2NY5-mKMaevcAP_OqT0AM&ip=222.253.48.227&id=o-AEY-ku4lyg_PGUspzaGAkc76gp3nLElC9fPrDKuNGbHU&itag=140&source=youtube&requiressl=yes&gcr=vn&vprv=1&mime=audio%2Fmp4&ns=tmbk_sD3SHmz_KnATpzZBmEJ&gir=yes&clen=1176615&dur=72.655&lmt=1544842046322358&keepalive=yes&fexp=24001373,24007246&c=MWEB&txp=5432432&n=711hqH1LDGBcqA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAMG1Ax3rwy-v4ik0W16i1l6wsjHcjswXe5zm_aJytK5eAiEAngqRApVUFp7SZuT4VpSXbcRZeOOrw9p1PQLEJ5YUFMU%3D&title=Nh%E1%BA%A1c+One+Piece+-+Theo+%C4%90u%E1%BB%95i+%C4%90am+M%C3%AA+-+Phim+%C4%90%E1%BA%A3o+H%E1%BA%A3i+T%E1%BA%B7c&rm=sn-8qj-nbo677e&req_id=a462550db7cba3ee&redirect_counter=2&cm2rm=sn-8qj-nbo667l&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=H_&mm=30&mn=sn-i3b7knse&ms=nxu&mt=1670225085&mv=m&mvi=2&pl=21&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgaKWeSsACizRV6Z4QGvn5j4tovCN2JgVYh0L1L7TxYbACIQDJSR7hkLajUTFSb3gr_ONBtdcFWkEpsgxV2MJccGy5qQ%3D%3D",
  "https://rr4---sn-npoe7nek.googlevideo.com/videoplayback?expire=1670246761&ei=CZ2NY-DnCvqXvcAPvo2FyAc&ip=117.1.118.51&id=o-ANHw26lC2OiRNxPhgiBVlfqNEBsadt5-zpvX5MrPEJzU&itag=140&source=youtube&requiressl=yes&gcr=vn&vprv=1&mime=audio%2Fmp4&ns=imJqxg8-zVgOV_1sAP6Qmz0J&gir=yes&clen=1123054&dur=69.334&lmt=1545015352370183&keepalive=yes&fexp=24001373,24007246&c=MWEB&txp=5432432&n=WbY0NKQgTff-0g&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgbueyym5wLQhUQIIsTvyW4jkhLuJq8OqrvRZgqKk197MCIQDtSTwzYgxKd7fOIGE5vOAqZ9U4WbWJaFh-osssim4OJw%3D%3D&title=Nh%E1%BA%A1c+One+Piece+-+K%C3%AD+%E1%BB%A8c+-+Phim+%C4%90%E1%BA%A3o+H%E1%BA%A3i+T%E1%BA%B7c&rm=sn-8pxuuxa-i5oek7s,sn-8pxuuxa-i5oe67d,sn-i3bd77l&req_id=9304218040bca3ee&redirect_counter=3&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=3u&mip=113.161.77.122&mm=30&mn=sn-npoe7nek&ms=nxu&mt=1670224843&mv=m&mvi=4&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAKp3fK5cchSSNOg69ZwTnQk3TA2hmwCmUHPiGoCld8ckAiEAkqk0a_7V-ORYt86XlU8GaZ6mB_1ctxSfce5HUkxMAqY%3D",
  "https://rr3---sn-8qj-nboll.googlevideo.com/videoplayback?expire=1670247140&ei=hJ6NY8XbLo_2gAP9_KjgAg&ip=222.253.48.227&id=o-AFfkokKRQtmPbsudK5gWRbPX38UQxcyJdxYO9y98pkv_&itag=140&source=youtube&requiressl=yes&gcr=vn&vprv=1&mime=audio%2Fmp4&ns=tOYnXMKX7PoEoVh5gksNVdEJ&gir=yes&clen=1423823&dur=87.933&lmt=1545099805030180&keepalive=yes&fexp=24001373,24007246&c=MWEB&txp=5432432&n=dtkm6Pt_oOGBNg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALQhMwbd5GzofoADVOyWMENdJwHHiqNZyiPCaWdRbxJWAiAnyH7zPXTer7X-_AmsVrHzi97Rr9s7hOTvXFlkbspNwQ%3D%3D&title=Nh%E1%BA%A1c+One+Piece+-+We+are+-+Ch%C3%BAng+Ta+-+Phim+%C4%90%E1%BA%A3o+H%E1%BA%A3i+T%E1%BA%B7c&redirect_counter=1&rm=sn-8qj-nbo677s&req_id=3042be79d0afa3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=1x&mm=29&mn=sn-8qj-nboll&ms=rdu&mt=1670225380&mv=m&mvi=3&pl=21&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAOSKHmVlhu3tIxHOMS6Kpk2cjv39EkA8nU1310ISMRxqAiEA-oweTbAyaoBGs0TC-z52P3igC3jdIsv7Qoy8i15Loq4%3D",
  "https://rr6---sn-8qj-nbo66.googlevideo.com/videoplayback?expire=1670247217&ei=0Z6NY5K8DoGj2roPq5C-mAw&ip=222.253.48.227&id=o-ALBmyhS8gdiDtDi9wl8VyeOAS5Wtvm4qXm5wbDXARQyT&itag=140&source=youtube&requiressl=yes&gcr=vn&vprv=1&mime=audio%2Fmp4&ns=R_ld4quuilSi_lGMDGXkfFIJ&gir=yes&clen=1322433&dur=81.664&lmt=1544926498103813&keepalive=yes&fexp=24001373,24007246&c=MWEB&txp=5432432&n=l5zvfQsyuGR5Hg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgc9DF4Knhay8b7qzXDKKeVqWE4-qIC4nwMcsrI3mOlYUCIHzj0HwP9Lfl_bfwYwMKMUiRg63IkeXWT1CbQ2p8Bvyp&title=Nh%E1%BA%A1c+One+Piece+-+Ni%E1%BB%81m+Tin+-+Phim+%C4%90%E1%BA%A3o+H%E1%BA%A3i+T%E1%BA%B7c&redirect_counter=1&rm=sn-8qj-nbo677z&req_id=4b00343a0676a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=3Y&mm=29&mn=sn-8qj-nbo66&ms=rdu&mt=1670225380&mv=m&mvi=6&pl=21&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAKuw5X3CSeoSLYt4RiStzFUmGvh42r3_aTzP2bmQOhu1AiAxyuNaZoGcT0b8OPptGKM7VJC2oxPrc83ltD531LlU6w%3D%3D",
  Song1,
  Song2,
  Song3,
  Song4,
  Song5,
  Song6,
];

export { songs };
