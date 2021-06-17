// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import redis from '@/lib/redis';
import bot from '@/lib/telegram';


export default async (req, res) => {
  let db = {};
  console.log(req.body)

    console.log(req.body.tuser.id)
    let tuser = req.body.tuser
    tuser.addedOn = Date.now();

    db = await redis.hset('logins', req.body.tuser.id, JSON.stringify(tuser));
    bot.sendMessage(req.body.tuser.id, "Hey little raver! Thanks for your support. You will get all the information from us here as soon as there is any!")

  res.json(db);
};
