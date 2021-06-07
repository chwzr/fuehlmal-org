// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import redis from '@/lib/redis';
import bot from '@/lib/telegram';


export default async (req, res) => {
  let db = {};
  console.log(req.body)

    console.log(req.body.tuser.id)
    db = await redis.hset('logins', req.body.tuser.id, JSON.stringify(req.body.tuser));
    bot.sendMessage(req.body.tuser.id, "Thanks for joining us! We will send you the details about next fühl mal soon via this channel! Rave on!")

  res.json(db);
};
