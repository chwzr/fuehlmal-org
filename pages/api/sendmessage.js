const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env.TELEGRAM_BOT.replace('bot',''));
// import bot from '@/lib/telegram';

export default async (req, res) => {
  // let r = JSON.parse(req.body)

  let resx = []

  let optionalParams = {
    parse_mode: "HTML"
    };

  for (const id of req.body.ids) {
    // let x = await bot.sendMessage(id, req.body.message)
    let r = await slimbot.sendMessage(id, req.body.message, optionalParams);
    resx.push(r)

  }

  res.json(resx);
};