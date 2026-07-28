// Channel Configuration
const channels = [
  {
    name: "NTV Kenya",
    type: "stream",
    streamUrl: "https://www.youtube.com/embed/ZRDj5GXNezw",
    videoId: "_wQ79STCPxQ",
    logo: "https://static.ntvkenya.co.ke/assets/brand-logos/ntv-logo-white.png",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Citizen TV",
    type: "stream",
    //channelUrl: "UChBQgieUidXV1CmDxSdRm3g",
    streamUrl: "https://www.youtube.com/embed/gyhQilvSkDg?si=wRjEQs-N5gxll4z5",
    videoId: "gzw1hoiBK6Q",
    logo: "https://static.wikia.nocookie.net/logopedia/images/7/70/Citizen_TV_%28Kenya%29_logo.png",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Citizen Xtra",
    type: "m3u8",
    streamUrl: "https://live-onesignal.royalmedia.co.ke/live/jgB35emfPsiW5aFjKJjbjg.m3u8",
    logo: "https://yt3.googleusercontent.com/qNOl0qel8802XzWSyi0E03JPOF0krKnA7Z3UAdN93LCPsd5w0WqvdoziaLix6oTYVaJQkLy-kw=s900-c-k-c0x00ffffff-no-rj",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "KTN Home",
    type: "youtube",
    channelUrl: "UCKVsdeoHExltrWMuK0hOWmg",
    videoId: "aszsHfAKjfk",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/KTN.2014-present_logo.jpg/250px-KTN.2014-present_logo.jpg",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "K24 TV",
    type: "m3u8",
    streamUrl: "https://hdmovix.cc/api/live/proxy?url=https%3A%2F%2Flivecdn.premiumfree.tv%2Fafxpstr%2FK24Backup%2Findex.m3u8",
    logo: "images/k24-live.jpeg",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "K24 Digital",
    type: "m3u8",
    streamUrl: "https://livecdn.premiumfree.tv/afxpstr/K24Main/index.m3u8",
    logo: "https://play-lh.googleusercontent.com/v6X50R44BL7RIWzu_GayZ8dxx3y_tOyodJ7oTSTBun0H2f-EG5nHampE4wzRRoeYFzmhkbJqihiKF6YvAXp4OdI",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "KBC Channel 1",
    type: "youtube",
    channelUrl: "UCypNjM5hP1qcUqQZe57jNfg",
    logo: "https://livetvcentral.com/imgs/tvs/3304.jpg",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Parliament TV",
    type: "youtube",
    channelUrl: "UCXuseB7juWB7DIgTJcwtHFQ",
    videoId: "aszsHfAKjfk",
    logo: "images/parliamenttv.jpeg",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "TV 47",
    type: "youtube",
    channelUrl: "UC_zA9UIWE1fB-jfFk_DBSYw",
    logo: "images/tv47.png",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Ebru Africa",
    type: "stream",
    streamUrl: "https://embed.twitch.tv?autoplay=true&channel=ebrutvkenya&height=100%25&layout=video&parent=istvkenya.live&width=100%25&embed-chat=false",
    logo: "images/ebru-tv-live.jpg",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Lookuptv",
    type: "stream",
    streamUrl: "//ok.ru/videoembed/2352940981899",
    logo: "images/lookuptv-live.png",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Horizon TV",
    type: "stream",
    streamUrl: "https://player.twitch.tv/?channel=horizontvkenya&parent=istvkenya.live",
    logo: "images/horizon-tv-live.jpeg",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Capuchin TV",
    type: "stream",
    streamUrl: "https://goliveafrica.media/live/1/CapuchinTelevisionNetwork?embed=1",
    logo: "images/capuchin-tv-live.jpeg",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "HopeTV",
    type: "stream",
    streamUrl: "https://iframe.dacast.com/live/c27b4ca6-1dc4-2e19-9e94-2282b041e658/c4cf5692-c80d-c79c-b10a-830c04147959?autoplay=1&loop=1&mute=0",
    logo: "images/hope-tv-live.jpg",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Family TV",
    type: "m3u8",
    streamUrl: "https://207639.global.ssl.fastly.net/652949a03567cd3c766a21f0/live_6c33b9a069cf11eebe6363d9db657015/index.m3u8",
    logo: "images/family-tv-live.jpeg",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Younib TV",
    type: "m3u8",
    streamUrl: "https://goliveafrica.media:9998/live/6257fbe7383d6/index.m3u8",
    logo: "https://livetvke.com/images/younibtv.jpg",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Dodoma TV",
    type: "m3u8",
    streamUrl: "https://goliveafrica.media:9998/live/625965017ed69/index.m3u8",
    logo: "https://lh3.googleusercontent.com/a-/AD_cMMR0lBpD9uFFx7JAzF5clpcHZKC9TFbtDT9Hbmejlg=s96-c",
    category: "National",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Inooro TV",
    type: "m3u8",
    streamUrl: "https://live-onesignal.royalmedia.co.ke/live/T-MxRsFebq6zx7k2QFMbLw.m3u8",
    logo: "https://keonline.eu-central-1.linodeobjects.com/uploads/logo/nf0fohGccEB5orpXeraqamkEo3Q8sNPrYWtGvIaW.jpg",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Kameme TV",
    type: "youtube",
    channelUrl: "UCd9nkc2XA77NMxBvQz35I2Q",
    logo: "images/kamemetv.png",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Ramogi TV",
    type: "m3u8",
    streamUrl: "https://live-onesignal.royalmedia.co.ke/live/-gEXRHc6nSl5aFegh5MrOg.m3u8",
    logo: "images/raamogi-tv-live.jpg",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "KASS TV",
    type: "stream",
    streamUrl: "https://goliveafrica.media/live/1/kasstv&embed=1",
    logo: "https://lh3.googleusercontent.com/3XKtcKiWjlpm6BcBqN50QIx2yqvSRh4ppKmonV2c-kHmjT-6ThHlXc5Nn_UjtNOZXn-W=s200",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Lolwe TV",
    type: "stream",
    streamUrl: "https://goliveafrica.media/live/1/LOLWETV?embed=1&mute=0",
    logo: "https://lolwetv.co.ke/wp-content/uploads/2023/10/MASTER-LOGO-OCT-EDIT-1.png",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "MOF TV",
    type: "m3u8",
    streamUrl: "https://goliveafrica.media:9998/live/6425a6efa15c8/index.m3u8",
    logo: "https://goliveafrica.media/videos/userPhoto/photo715.png?cache=1706551902_1706551902",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Morning Cloud TV",
    type: "m3u8",
    streamUrl: "https://livecdn.live247stream.com/mc/tv/playlist.m3u8",
    logo: "https://play-lh.googleusercontent.com/d7dLYMN1AvimTjpi6Uh3rRKvDipnoT01dHNICPcF2aAAalsZQvSmdJwudH2En3xDoAmc3XOB8lpPuwxof8lZGg",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Truth TV",
    type: "m3u8",
    streamUrl: "https://goliveafrica.media:9998/live/6a479dc9e258a/index.m3u8",
    logo: "https://lh3.googleusercontent.com/a-/AD5-WCkPUIDkiRJryQwNFge3wDHHHmH3gN7EAgLHnBge=s96-c",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Meru TV",
    type: "m3u8",
    streamUrl: "https://goliveafrica.media:9998/live/628e5c1991061/index.m3u8",
    logo: "images/meru-tv-live.png",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Elevate TV",
    type: "m3u8",
    streamUrl: "https://goliveafrica.media:9998/live/6a296d78b155e/index.m3u8",
    logo: "https://lh3.googleusercontent.com/a-/ALV-UjURX8Z-0JG41zTDxJdHQ2BmyZhITEmQ2-GIzUEKWnk9Iw=s96-c",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Weru TV",
    type: "stream",
    streamUrl: "https://ok.ru/videoembed/330582007485?nochat=1&autoplay=0",
    logo: "images/weru-tv-live.jpeg",
    category: "Local",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "CGTN+",
    type: "m3u8",
    streamUrl: "https://amg00405-rakutentv-cgtndocumentary-rakuten-0ql8j.amagi.tv/master480p.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/CGTN.png",
    category: "News",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Aljazeera",
    type: "youtube",
    channelUrl: "UCNye-wNBqNL5ZzHSJj3l8Bg",
    videoId: "gCNeDWCI0vo",
    logo: "https://logos-world.net/wp-content/uploads/2023/04/Al-Jazeera-Logo-500x281.png",
    category: "News",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "CNN",
    type: "m3u8",
    streamUrl: "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/960px-CNN_International_logo.svg.png",
    category: "News",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "France 24",
    type: "m3u8",
    streamUrl: "https://a-cdn.klowdtv.com/live2/france24_720p/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/0/02/France_24_2013.svg",
    category: "News",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Euro news",
    type: "m3u8",
    streamUrl: "https://aegis-cloudfront-1.tubi.video/b1c4d439-03a5-4c40-ae9d-90a183e010c9/euronews-en-avc1_2000000=8-mp4a_143200_eng=2.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Euronews_Logo_2025.svg/250px-Euronews_Logo_2025.svg.png",
    category: "News",
    Rating: "N/A",
    infoPage: "N/A"
  },
    {
    name: "CGTN biz",
    type: "m3u8",
    streamUrl: "https://amg01314-amg01314c6-distrotv-us-10220.playouts.now.amagi.tv/playlist/amg01314-cgtn-cgtnglobalbiz-distrotvus/playlist.m3u8?ads.dpname=distrotv&ads.app_domain=&ads.app_name=DistroTV&ads.app_store_url=&ads.coppa=0&ads.dnt=0&ads.c_producer=CGTN&ads.device_model=&ads.did=&ads.ifa_type=localStorage&ads.url=https%3A%2F%2Fwww.google.com%2F&ads.content_livestream=1&ads.ic=IAB3&ads.iu=&ads.idtype=Web&ads.lmt=&ads.gpp=&ads.gpp_sid=&ads.prodq=0&ads.inv_partner_domain=http%3A%2F%2Fdistro.tv&ads.schain=1&ads.islive=1&ads.streamtype=live&ads.vf=zhW0MpP7jy8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/CGTN.png",
    category: "News",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Africa news.",
    type: "m3u8",
    streamUrl: "https://c3c275b999764df8a2dd55ffe2996818.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6576/bitok/eyJzdGlkIjoiOTU0NDAyODQtOTU0My00Yzc2LThmZjQtNDRhY2YwYmQxYTYwIiwibWt0IjoicGwiLCJjaCI6NjYwNiwicHRmIjo1fQ==/26036/africanews-en.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Africanews._alternative_logo_2016.png/250px-Africanews._alternative_logo_2016.png",
    category: "News",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Barca TV",
    type: "m3u8",
    streamUrl: "https://amg17560-fcb-amg17560c1-rakuten-uk-4891.playouts.now.amagi.tv/playlist/amg17560-fcbarcelona-topbarcaenglish-rakutenuk/playlist.m3u8",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/73cde5990fa4d395e807a2780b68b333.webp",
    category: "Sports",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Madrid TV",
    type: "m3u8",
    streamUrl: "https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/master.m3u8",
    logo: "https://yt3.googleusercontent.com/TyNbisxuIwzUBjjNkUg8mOqR9_L2eKYShayM5A-kjpFeb0p47QCail4wuUn5KfCbDmB8yQ8RnD4=s900-c-k-c0x00ffffff-no-rj",
    category: "Sports",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Canal motor TV",
    type: "m3u8",
    streamUrl: "https://digicom.hls.iptvdc.com/canalmotor/index.m3u8",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wFMC2V2Qqo3pADMqNbuRDSjxvenPKMS3jA&s",
    category: "Motorsport",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "BeIN sports xtra",
    type: "m3u8",
    streamUrl: "https://hdmovix.cc/api/live/proxy?url=https%3A%2F%2Fbein-xtra-bein.amagi.tv%2Fplaylist.m3u8",
    logo: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/shop/mar/bein-sports.png",
    category: "Sports",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "FIFA+",
    type: "m3u8",
    streamUrl: "https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8",
    logo: "https://cdn.mos.cms.futurecdn.net/Tdvb4DPB6XfaMgAdxV4aZB.png",
    category: "Sports",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "UFC",
    type: "m3u8",
    streamUrl: "https://linear-894.frequency.stream/mt/plex-br/894/hls/master/playlist_1920x1080.m3u8",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/cdaae9d13a4961f1c6603a4a6b0bbbd2.webp",
    category: "Sports",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "DAZN Ringside",
    type: "m3u8",
    streamUrl: "https://aegis-cloudfront-1.tubi.video/bfad29e2-5bee-44f3-8256-127324e8b106/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/7/7c/DAZN.svg",
    category: "Sports",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "PFL TV",
    type: "m3u8",
    streamUrl: "https://d856dff4.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U3BvcnRzVHJpYmFsLWdiX1BGTE1NQV9ITFM/playlist.m3u8",
    logo: "https://pflmma-prod.s3.us-east-1.amazonaws.com/assets/img/base/shield-logo-international.png",
    category: "Sports",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Redbull TV",
    type: "m3u8",
    streamUrl: "https://dms.redbull.tv/v5/destination/rbtv/linear-borb/personal_computer/http/ke/en/playlist.m3u8",
    logo: "https://i.ytimg.com/vi/Ao-Rbi8qq7c/maxresdefault.jpg",
    category: "Sports",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Redbull Motorsport",
    type: "m3u8",
    streamUrl: "https://play.redbull.com/main/v1/rbtv/en/ke/personal_computer/http/rrn:content:video-channels:fd4ed3c9-1800-477b-9909-53255da06632.m3u8",
    logo: "https://i.ytimg.com/vi/Ao-Rbi8qq7c/maxresdefault.jpg",
    category: "Motorsport",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Motorsport 1",
    type: "m3u8",
    streamUrl: "https://amg02873-kravemedia-mtrspt1-distrotv-mnsrl.amagi.tv/playlist/amg02873-kravemedia-mtrspt1-distrotv/playlist.m3u8",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/32d3e5276a20e66e81a4cb59242f37df.webp",
    category: "Motorsport",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Drive Channel",
    type: "m3u8",
    streamUrl: "https://d39yjeivnywvts.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-ww9fq2xfgtfog/playlist.m3u8",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/42cb09180fe07eee094bcdf4b3f76feb.webp",
    category: "Motorsport",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "We love cars",
    type: "m3u8",
    streamUrl: "https://30a-tv.com/feeds/vidaa/cars.m3u8",
    logo: "https://www.usnews.com/object/image/00000191-d821-d8b8-adf7-f97944b10000/chevrolet-corvette-zr1-coupe-001.jpg?update-time=1725907944302&size=listiclePhoto",
    category: "Motorsport",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Motorvision",
    type: "m3u8",
    streamUrl: "https://amg00115-amg00115c1-nascar-northamerica-6927.playouts.now.amagi.tv/playlist1080p-cc.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/1/18/Motorvision_TV_2016_II.png",
    category: "Motorsport",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Nascar",
    type: "m3u8",
    streamUrl: "https://mvg-mv-xumo.otteravision.com/mvg/mv/mv.m3u8",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/de4fba8103e3122c5964ebad24e041b0.webp",
    category: "Motorsport",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Fite TV",
    type: "m3u8",
    streamUrl: "https://d3d85c7qkywguj.cloudfront.net/scheduler/scheduleMaster/263/variant/22099681.m3u8",
    logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/be74b3f4-088f-4981-a2fa-c8b64335dc92/dfhlbvm-7a0d30a1-e894-4301-8519-aa3acc144c52.png/v1/fill/w_894,h_894,q_70,strp/fite_plus_logo_svg_by_hellmen45_dfhlbvm-pre.jpg",
    category: "Sports",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Racer INT",
    type: "m3u8",
    streamUrl: "https://amg00378-mavtv-amg00378c3-plex-us-1322.playouts.now.amagi.tv/mavtv-smn-xm/playlistR1080p.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Racer_Magazine_logo.svg",
    category: "Motorsport",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Billiard TV",
    type: "m3u8",
    streamUrl: "https://9a81dd4ee3884d0dbcacafaf0d81327a.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/RakutenTV-eu_BilliardsTV/playlist.m3u8",
    logo: "https://probilliardseries.com/wp-content/uploads/2024/08/billiardtv-jpg-1.webp",
    category: "Sports",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Romanza Africa",
    type: "m3u8",
    streamUrl: "https://livecdn.premiumfree.tv/afxpstr/Romanza/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Romanza%2B%C3%81frica_logo.jpg",
    category: "Entertainment",
    Rating: "PG",
    infoPage: "N/A"
  },
  {
    name: "Mr Bean TV",
    type: "m3u8",
    streamUrl: "https://amg00627-amg00627c40-rakuten-uk-5725.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanpopupcc-rakutenuk/playlist.m3u8",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iPv5_OSm8NCvb9ZQULPMDzlqYzExEFAW1Q&s",
    category: "Entertainment",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "People are awesome",
    type: "m3u8",
    streamUrl: "https://jukin-peopleareawesome-2-ca.samsung.wurl.tv/playlist.m3u8",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/e55d3f6f2a75879017f1850561af0d1c.webp",
    category: "Entertainment",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Chopper town",
    type: "m3u8",
    streamUrl: "https://linear-11.frequency.stream/dist/glewedtv/11/hls/master/playlist.m3u8",
    logo: "https://freecast.com/_next/image?url=https%3A%2F%2Fd3e3bui7xn67l.cloudfront.net%2Fcms_media%2Fmedia%2Flive%2Fchannel%2Fb2223358-4c8f-4192-a7e0-4c80b666f7bd.256x256.jpg&w=256&q=75",
    category: "Entertainment",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "National Geographic",
    type: "m3u8",
    streamUrl: "https://hdmovix.cc/api/live/proxy?url=http%3A%2F%2F40.160.24.53%2FNAT_GEO%2Findex.m3u8",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-national-geographic-logo-icon-download-in-svg-png-gif-file-formats--major-websites-set-pack-logos-icons-461820.png?f=webp",
    category: "Entertainment",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Fail Army",
    type: "m3u8",
    streamUrl: "https://failarmy-international-in.samsung.wurl.tv/playlist.m3u8",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/f990725f0f639b3385929a43d9e454a7.webp",
    category: "Entertainment",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Nat Geo Wild",
    type: "m3u8",
    streamUrl: "https://hdmovix.cc/api/live/proxy?url=http%3A%2F%2F206.212.244.63%2F122%2Findex.m3u8",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-national-geographic-logo-icon-download-in-svg-png-gif-file-formats--major-websites-set-pack-logos-icons-461820.png?f=webp",
    category: "Entertainment",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Paramount",
    type: "m3u8",
    streamUrl: "https://hdmovix.cc/api/live/proxy?url=http%3A%2F%2F40.160.24.55%2FPARAMOUNT_CHANNEL%2Findex.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Paramount_Pictures_2022_%28Blue%29.svg/960px-Paramount_Pictures_2022_%28Blue%29.svg.png",
    category: "Entertainment",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Just for Laughs",
    type: "m3u8",
    streamUrl: "https://distributionsjustepourrire-justforlaughsgags-1-be.samsung.wurl.tv/playlist.m3u8",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNmQpa8NPoHlt0qllQrNCmEALB2bPFJRZRA&s",
    category: "Entertainment",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Anger mngmt",
    type: "m3u8",
    streamUrl: "https://aegis-cloudfront-1.tubi.video/0a019247-55a2-4b3e-8b62-b84c9cbd5b12/playlist.m3u8",
    logo: "https://cdn2.f-cdn.com/contestentries/2350529/73641972/658574c092def_thumb900.jpg",
    category: "Entertainment",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "CW",
    type: "m3u8",
    streamUrl: "https://d1d726ny1vain2.cloudfront.net/playlist.m3u8",
    logo: "https://streamingbetter.com/wp-content/uploads/2024/01/The-CW-new-logo-1200x675.jpg",
    category: "Entertainment",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "TVJamaica",
    type: "m3u8",
    streamUrl: "https://vod2live.univtec.com/manifest/a99a1804-dc83-411f-8c1c-b62f08cdfa59.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/2/2c/Television_Jamaica_Logo.png/",
    category: "Entertainment",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Jewelry TV",
    type: "m3u8",
    streamUrl: "https://content.jwplatform.com/live/broadcast/oe7UD7Ag.m3u8",
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_ktCd8vUWO7ayVxsdJVTZard-pJaGzcrkWCP5X1cetv0Q=s900-c-k-c0x00ffffff-no-rj",
    category: "Entertainment",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Rakuten Drama",
    type: "m3u8",
    streamUrl: "https://fee09fd665814f51b939b6d106cf5f66.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6093/master.m3u8",
    logo: "https://rakutenadvertising.com/wp-content/uploads/sites/2/2024/05/GMT-6002_2024_Web_Media_RakutenTV.png",
    category: "Entertainment",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Britbox mysteries",
    type: "m3u8",
    streamUrl: "https://aegis-cloudfront-1.tubi.video/c95700f8-e51c-4a36-ad46-56f70fc9f1d9/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/4/40/Britbox_2021_Stacked.svg",
    category: "Entertainment",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Cops TV",
    type: "m3u8",
    streamUrl: "https://a7d6af1c184e465db4f39316a5181c1f.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/RakutenTV-eu_COPS/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/COPS.jpg/250px-COPS.jpg",
    category: "Entertainment",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "nosey",
    type: "m3u8",
    streamUrl: "https://aegis-cloudfront-1.tubi.video/f111d6c2-02bf-45fb-9a90-2e55b18d9f70/playlist.m3u8",
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_1/ekrujg3jauqksps6clsq?ik-sanitizeSvg=true",
    category: "Entertainment",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "AMC Channel",
    type: "m3u8",
    streamUrl: "https://c5ca4726.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UGxleF9TdG9yaWVzQnlBTUNfQ01BRg/playlist.m3u8?ads.wurl_channel=1326&ads.wurl_name=StoriesByAMC&ads.coppa=0&ads.us_privacy=1YNN&ads.psid=&ads.targetopt=1&ads.plex_token=qBJATNESiUtfmBAPkULy&ads.plex_id=6391316371aa92c2f49dc234&ads.ua=Mozilla%2F5.0%20(X11%3B%20Linux%20x86_64%3B%20rv%3A134.0)%20Gecko%2F20100101%20Firefox%2F134.0&ads.app_bundle=com.plexapp.desktop&ads.app_store_url=https%3A%2F%2Fapp.plex.tv&ads.gdpr=0&ads.consent=0&ads.device_type=desktop&ads.device_id_type=",
    logo: "https://shop.amc.com/cdn/shop/files/AMC-ShopByShowTile-360x540-Option1_1080x.jpg?v=1649348443",
    category: "Movies",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Wu Tang collection",
    type: "m3u8",
    streamUrl: "https://livechannel.mdc.akamaized.net/stitch/livechannel/1279/master.m3u8?channel=live_stream_1279",
    logo: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fimages%2Fott_channels%2Farts%2Fwu-tang-collection.jpg",
    category: "Movies",
    Rating: "PG",
    infoPage: "N/A"
  },
  {
    name: "Hollywood classic",
    type: "m3u8",
    streamUrl: "https://amg01076-lightningintern-actionhollywood-samsungau-rs69y.amagi.tv/playlist/amg01076-lightningintern-actionhollywood-samsungau/playlist.m3u8",
    logo: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2F6d941e2d-2852-4b6e-83e0-99a10920ddb3%2FAction_Hollywood_Movies_artwork_horizontal_-_Angela_ChanRDX.jpg",
    category: "Movies",
    Rating: "PG",
    infoPage: "N/A"
  },
  {
    name: "MovieSphere",
    type: "m3u8",
    streamUrl: "https://amg00353-lionsgatefilmsi-moviesphereaus-samsungau-7qzhf.amagi.tv/playlist/amg00353-lionsgatefilmsi-moviesphereaus-samsungau/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/4/40/MovieSphere_2020_logo.jpg/",
    category: "Movies",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Rakuten Action",
    type: "m3u8",
    streamUrl: "https://54045f0c40fd442c8b06df076aaf1e85.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6065/master.m3u8",
    logo: "https://rakutenadvertising.com/wp-content/uploads/sites/2/2024/05/GMT-6002_2024_Web_Media_RakutenTV.png",
    category: "Movies",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Rakuten Comedy",
    type: "m3u8",
    streamUrl: "https://a300af98e00746e2acf2346f43e47bd1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6191/master.m3u8",
    logo: "https://rakutenadvertising.com/wp-content/uploads/sites/2/2024/05/GMT-6002_2024_Web_Media_RakutenTV.png",
    category: "Movies",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Rakuten Comedy 2",
    type: "m3u8",
    streamUrl: "https://9be783d652cd4b099cf63e1dc134c4a3.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6181/master.m3u8",
    logo: "https://rakutenadvertising.com/wp-content/uploads/sites/2/2024/05/GMT-6002_2024_Web_Media_RakutenTV.png",
    category: "Movies",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Rakuten top movies",
    type: "m3u8",
    streamUrl: "https://0145451975a64b35866170fd2e8fa486.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5987/master.m3u8",
    logo: "https://rakutenadvertising.com/wp-content/uploads/sites/2/2024/05/GMT-6002_2024_Web_Media_RakutenTV.png",
    category: "Movies",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Charge tv",
    type: "m3u8",
    streamUrl: "https://fast-channels.sinclairstoryline.com/CHARGE/index.m3u8",
    logo: "https://kodi.tv/images/addons/omega/plugin.video.charge/resources/icon.png",
    category: "Movies",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "ABN Bible ",
    type: "m3u8",
    streamUrl: "https://mediaserver.abnvideos.com/streams/abnbiblemovies.m3u8",
    logo: "https://mir-s3-cdn-cf.behance.net/projects/404/892bcc30871625.Y3JvcCwxMzE0LDEwMjgsMjk2LDQy.jpg",
    category: "Movies",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Dove Channel",
    type: "m3u8",
    streamUrl: "https://linear-896.frequency.stream/dist/xumo/896/hls/master/playlist.m3u8",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/37f04d7a278b2362e52f0e06d1216bed.webp",
    category: "Movies",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Spirit TV",
    type: "m3u8",
    streamUrl: "https://cdnlive.myspirit.tv/LS-ATL-43240-2/index.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/9/94/Spirit_TV_2025.svg",
    category: "Music",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "AfroBeats tv",
    type: "m3u8",
    streamUrl: "https://stream.ecable.tv/afrobeats/index.m3u8",
    logo: "https://mytv256.com/upload/afrobeats%20tv.jpg",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Amusic TV",
    type: "m3u8",
    streamUrl: "https://e46fa4a445464f8a9150fa7d510eb85c.mediatailor.us-west-2.amazonaws.com/v1/manifest/2d2d0d97b0e548f025b2598a69b55bf30337aa0e/npp/9c9441e0-942a-4773-b02e-536d456719ff/0.m3u8",
    logo: "https://pbs.twimg.com/profile_images/916499099037270016/omHUSyJF_400x400.jpg",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "CMC",
    type: "m3u8",
    streamUrl: "https://hwlive.streamingmediahosting.com/14215-live/0_obd393sh/playlist.m3u8",
    logo: "https://digitaladvertisingmedia.com/wp-content/uploads/2019/12/S_USACMC00000-300x225.jpg",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "K-Pop",
    type: "youtube",
    channelUrl: "UCoRXPcv8XK5fAplLbk9PTww",
    videoId: "JVocS7Yftw8",
    logo: "https://yt3.ggpht.com/H97A7dJ3by9fElaC_-nSTMUlXQ_7Ww_lwFiJPvzjIi1aDlf988kN3eaxTzIh6BZUgfU0jZwz=s48-c-k-c0x00ffffff-no-rj",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Trace Carib",
    type: "m3u8",
    streamUrl: "https://channels.trace.plus/Traceprod/CARIBBEAN_hd/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/TRACE_Hits.png",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "That's 80s",
    type: "m3u8",
    streamUrl: "https://lightning-now80s-rakuten.amagi.tv/playlist.m3u8",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/cdcf0e0f226888e2e9e521b911842177.webp",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Now 90s",
    type: "m3u8",
    streamUrl: "https://amg01076-amg01076c19-rakuten-gb-8653.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg01076-lightning-now90s00s-rakutengb/cb4d3e4f7b706f88cf9b3f6cd5f040f3d10565825f3ade346b8822ea2a8b4605d9edeec6f34bff70349e1ed57176340f182fdb51d67a6ec1da71b813727616709986b262c9ee475ae98710282ab27a1e50fe0f05a67c1177dfe60247d469e6375551ac0c360f30d8ed5df96b0694875f967e28ddadc03038745b429c0c08e3a359abffe95d138c0ec68b35703af4d5d6a870bea60e85e58a02da16d2668a4dc3c5a4d48e32a3bca316cc772eb0943a581bbc956b9cd958ccbad0096bdf192c377feb84ca7921671cff6ceb3ba504fe60bab57eeb9c378e7032f42c9741803f8451bc6381cc41baa4b7d3430e6cea941b291ff1b4fbcad73c3da87ebbbab18b4c2acdad546a51933c8c716568d9bdec1187c81ad9e473d4e4394c6891d163928fb785e0a8c21bc876849786ff5727626a0a179e27e1f00af626c771a4c2125b336b4dbf9f53cb9e9913704e4688954696743fbcc88097d01e31a83243ba89f117beaf0a3151b07ebe06e757f06f056263363930/28/1920x1080_4716800/index.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/8/86/NOW_90s.png",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "VEVO Pop",
    type: "m3u8",
    streamUrl: "https://amg00056-amg00056c6-rakuten-uk-3235.playouts.now.amagi.tv/playlist.m3u8",
    logo: "https://cdn.brandfetch.io/idKHVxuoQT/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1764236170765",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "VEVO Hiphop RnB",
    type: "m3u8",
    streamUrl: "https://amg00056-amg00056c26-rakuten-uk-3236.playouts.now.amagi.tv/playlist.m3u8",
    logo: "https://cdn.brandfetch.io/idKHVxuoQT/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1764236170765",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "WWE Channel",
    type: "m3u8",
    streamUrl: "https://dpv6ceilvhyrw.cloudfront.net/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/WWE_Network_logo.jpeg/250px-WWE_Network_logo.jpeg",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Caribbean World Channel",
    type: "m3u8",
    streamUrl: "https://live-us-cdn-1.tvstartupengine.com/live/playlist-prod-da1ba36f-39ba-4347-acce-c3a31de907f3/index.m3u8",
    logo: "https://image.roku.com/developer_channels/prod/dd96e4e395f9b87ded4e034c080aa9cf1bef0b9c251f0b73405fb1189c01b156.png",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "surf Roots tv",
    type: "m3u8",
    streamUrl: "https://livechannel.mdc.akamaized.net/stitch/livechannel/1314/master.m3u8?channel=live_stream_1314",
    logo: "https://surfroots.com/cdn/shop/files/surf_rootssquaremicflag900x900_1200x1200.png",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Caribean 1 TV",
    type: "m3u8",
    streamUrl: "https://livechannel.mdc.akamaized.net/stitch/livechannel/1306/master.m3u8?channel=live_stream_1306",
    logo: "https://gizmeon.mdc.akamaized.net/thumbnails/fastchannel/1750358932957.png",
    category: "Music",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Nickelodeon Junior",
    type: "m3u8",
    streamUrl: "https://tvsen7.aynascope.net/nicklodean/index.m3u8",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhojXucO7YQMjJjynua9IX3BN1AZIFnoNeOqRBN2_9TIaFlMwmbMq6XrWhg5_wIKmAf9PcUxSI2etgz95Pmi12Foqxe4F_ghNctgEhbVflI7n6Lttq6pMdQXNhaf4_ho32HNfy32bV2lURpJfdTuij15RasZ2gqVGC38nMz30XHzBZtcMEGgSpq/s400/nick-jr-logo-2023_3.jpg",
    category: "Kids",
    Rating: "PG",
    infoPage: "N/A"
  },
  {
    name: "Teen Nick",
    type: "m3u8",
    streamUrl: "https://40.160.24.55/TEEN_NICK/index.m3u8",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhojXucO7YQMjJjynua9IX3BN1AZIFnoNeOqRBN2_9TIaFlMwmbMq6XrWhg5_wIKmAf9PcUxSI2etgz95Pmi12Foqxe4F_ghNctgEhbVflI7n6Lttq6pMdQXNhaf4_ho32HNfy32bV2lURpJfdTuij15RasZ2gqVGC38nMz30XHzBZtcMEGgSpq/s400/nick-jr-logo-2023_3.jpg",
    category: "Kids",
    Rating: "PG",
    infoPage: "N/A"
  },
  {
    name: "KIDDO+",
    type: "m3u8",
    streamUrl: "https://streams2.sofast.tv/ptnr-stirr/genre-Education/lang-English/ctgr-Kids/title-KIDDO-ENG/sofastplayout/8258122f-b4c0-416b-a2db-8407847f0c3c_1000015692_HLS/master.m3u8",
    logo: "https://play-lh.googleusercontent.com/Z1LsqXqvYMagG76953Fauhz5uOQehL3V-xCGRDDahc94mZYB-rMwoosoTbpqs_bGqpH8=w240-h480",
    category: "Kids",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Ninja Kids",
    type: "m3u8",
    streamUrl: "https://playworksdigital-ninjakidztv-1-us.xumo.wurl.tv/playlist.m3u8",
    logo: "https://images-na.ssl-images-amazon.com/images/I/71SJhmdG3sS._UL1200_.jpg",
    category: "Kids",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Marvel HQ",
    type: "stream",
    streamUrl: "https://www.youtube.com/embed/7oPYfe03bCsY",
    logo: "https://i.etsystatic.com/42838726/r/il/c3f230/5083723956/il_fullxfull.5083723956_p1qr.jpg",
    category: "Kids",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Sponge Bob TV",
    type: "youtube",
    channelUrl: "UCx27Pkk8plpiosF14qXq-VA",
    videoId: "YzMsBTpLHtE",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrcXNXIy_q6rzLC77a1g7IgAt4JuyRvtFqA&s",
    category: "Kids",
    Rating: "GE",
    infoPage: "N/A"
  },
  {
    name: "Pop Kids",
    type: "m3u8",
    streamUrl: "https://amg01753-narrativeentert-popkids-lggb-xyy5k.amagi.tv/ts-eu-w1-n2/playlist/amg01753-narrativeentert-popkids-lggb/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/0/01/Pop_Kids_circle.png",
    category: "Kids",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "3ABN Kids ",
    type: "m3u8",
    streamUrl: "https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/2/28/3ABN_Kids_Network_2014.svg",
    category: "Kids",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Baby Shark TV ",
    type: "m3u8",
    streamUrl: "https://c0c65b821b3542c3a4dca92702f59944.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/RakutenTV-eu_BabySharkTV/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/c/c7/Pinkfong_Baby_Shark.svg",
    category: "Kids",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Duck TV",
    type: "m3u8",
    streamUrl: "https://mmm-dk.otteravision.com/DexaYJdJXkLqFxTK_DuckTVHDSAMS/DuckTVHDSAMS.stream/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/f/fd/Duck_TV_Plus.svg",
    category: "Kids",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Tiny PoP TV",
    type: "m3u8",
    streamUrl: "https://amg01753-narrativeentert-tinypop-samsunguk-hvvb7.amagi.tv/playlist/amg01753-narrativeentert-tinypop-samsunguk/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/7/7e/Tiny_Pop_2018.svg",
    category: "Kids",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Science Channel",
    type: "stream",
    streamUrl: "https://www.youtube.com/embed/l4MI-Ka1UTo",
    logo: "https://static.wikia.nocookie.net/logopedia/images/f/f6/Science_2017.svg/revision/latest/scale-to-width-down/250?cb=20240724210548",
    category: "Lifestyle",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "MAV TV",
    type: "m3u8",
    streamUrl: "https://amg00378-mavtv-amg00378c3-plex-us-1322.playouts.now.amagi.tv/playlist/amg00378-mavtvfast-motorsportsnetworkint-plexus/playlist.m3u8",
    logo: "https://assets.starsnationaltour.com/data/2024/02/MAVTV-Logo-300x170.webp",
    category: "Motorsport",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Monte Carlo",
    type: "m3u8",
    streamUrl: "https://pkg2.frontlayer.net/pseudolive/fl718492/index.m3u8?session=1749100165",
    logo: "https://static.wikia.nocookie.net/logopedia/images/5/53/LOGO_Monte_Carlo_2017_mayusculas_letra_negra.png/",
    category: "Lifestyle",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Global Fashion TV",
    type: "m3u8",
    streamUrl: "https://pubgfc.teleosmedia.com/linear/globalfashionchannel/globalfashionchannel/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/8/81/FASHION_TV_2001.gif",
    category: "Lifestyle",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Beach TV Florida",
    type: "m3u8",
    streamUrl: "https://5ed325193d4e1.streamlock.net:444/LiveTV/KTVHD/playlist.m3u8",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtMVKEbyTbhDGSYwXVkarL0kk3_uk4vwANQ&s",
    category: "Lifestyle",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Beach TV Panama",
    type: "m3u8",
    streamUrl: "https://5ed325193d4e1.streamlock.net:444/LiveTV/BTVHD/playlist.m3u8",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtMVKEbyTbhDGSYwXVkarL0kk3_uk4vwANQ&s",
    category: "Lifestyle",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Palm Beaches TV",
    type: "m3u8",
    streamUrl: "https://live.feed.thepalmbeaches.tv/index.m3u8",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtMVKEbyTbhDGSYwXVkarL0kk3_uk4vwANQ&s",
    category: "Lifestyle",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Bob Ross channel",
    type: "m3u8",
    streamUrl: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=13449",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/The_Joy_of_Painting_title_screen.jpg/250px-The_Joy_of_Painting_title_screen.jpg",
    category: "Lifestyle",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Weather Spy",
    type: "m3u8",
    streamUrl: "https://jukin-weatherspy-2-in.samsung.wurl.tv/playlist.m3u8",
    logo: "https://www.tubefilter.com/wp-content/uploads/2020/07/weather-spy-1920x1131.jpg",
    category: "Nature",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Love Nature",
    type: "m3u8",
    streamUrl: "https://aegis-cloudfront-1.tubi.video/6d6d0f24-8445-4b4c-bdf6-44f9e38beaa4/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logos/images/c/c2/Love_Nature_4K.png/revision/latest/scale-to-width-down/340?cb=20211105035409&path-prefix=vi",
    category: "Nature",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Wild Earth",
    type: "m3u8",
    streamUrl: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01290-wildearth-oando/playlist.m3u8",
    logo: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2F458264fd-11c7-4568-9177-2373626ff752%2FWildEarth_artwork_Horizontal_logordx.jpg",
    category: "Nature",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "Nature time",
    type: "m3u8",
    streamUrl: "https://amg00090-blueantllc-lovenature-au-samsungau-wggcn.amagi.tv/playlist/amg00090-blueantllc-lovenature-au-samsungau/playlist.m3u8",
    logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-l/76c1f7bf76617738201aa7ad7ca01972.webp",
    category: "Nature",
    Rating: "N/A",
    infoPage: "N/A"
  },
  {
    name: "BBC Earth",
    type: "m3u8",
    streamUrl: "https://aegis-cloudfront-1.tubi.video/bb1fc6ad-9948-42ea-aaf3-20acfcdeecac/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/7/7b/BBC_Earth_circle.png",
    category: "Nature",
    Rating: "N/A",
    infoPage: "N/A"
  },

];

// Function to get sorted categories
function getCategories() {
  const categories = new Set();
  channels.forEach(channel => {
    categories.add(channel.category);
  });
  
  // Define the desired order
  const categoryOrder = [
    "National",
    "Local",
    "News",
    "Sports",
    "Motorsport",
    "Movies",
    "Music",
    "Kids",
    "Entertainment",
    "Nature",
    "Lifestyle",
  ];
  
  // Get array from set
  const categoriesArray = Array.from(categories);
  
  // Sort categories according to defined order
  categoriesArray.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    
    // If both are in the order list, sort by their position
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    
    // If only A is in the order list, it comes first
    if (indexA !== -1) return -1;
    
    // If only B is in the order list, it comes first
    if (indexB !== -1) return 1;
    
    // If neither is in the order list, sort alphabetically
    return a.localeCompare(b);
  });
  
  return categoriesArray;
}

// Function to get sorted channels
function getSortedChannels() {
  const sortedChannels = [...channels];
  const categoryOrder = getCategories();
  
  sortedChannels.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.category);
    const indexB = categoryOrder.indexOf(b.category);
    
    if (indexA !== indexB) {
      return indexA - indexB;
    }
    
    // If same category, sort by name
    return a.name.localeCompare(b.name);
  });
  
  return sortedChannels;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { channels, getCategories, getSortedChannels };
}
