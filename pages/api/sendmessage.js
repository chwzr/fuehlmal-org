import bot from '@/lib/telegram';


export default async (req, res) => {
  // let r = JSON.parse(req.body)

  let resx = []

  for (const id of req.body.ids) {
    let x = await bot.sendMessage(id, req.body.message.replace(/\\\//g, "/"))
    resx.push(x.data)
  }

  res.json(resx);
};