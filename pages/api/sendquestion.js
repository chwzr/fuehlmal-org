
const Slimbot = require('slimbot');
import redis from '@/lib/redis';

export default async (req, res) => {
  // let r = JSON.parse(req.body)
  const slimbot = new Slimbot(process.env.TELEGRAM_BOT.replace('bot',''));

  let d = req.body;

  // [
  //   { text: 'Ja', callback_data: 'Ja' },
  //   { text: 'Nein', callback_data: 'Nein' }
  // ]

  let optionalParams = {
  parse_mode: 'Markdown',
    reply_markup: JSON.stringify({
      inline_keyboard: [
        d.answers
      ]
    })
  };

  // let db = await redis.hset('questions', d.answers[0].callback_data.qid, JSON.stringify({ids: d.ids, question: d.question}));
  let rr = []
  // reply when user sends a message, and send him our inline keyboard as well
  for (const id of req.body.ids) {
    try {
      let r = await slimbot.sendMessage(id, d.question, optionalParams);
      rr.push(r)
    } catch (e) {
      rr.push(e)
    }
  }

  res.json({ok: true, rr});
};