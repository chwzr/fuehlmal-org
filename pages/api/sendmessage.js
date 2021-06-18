import bot from '@/lib/telegram';


export default async (req, res) => {
  let r = JSON.parse(req.body)

  let resx = []

  for (const id of r.ids) {
    let x = await bot.sendMessage(id, r.message)
    resx.push(x.data)
  }

  res.json(resx);
};