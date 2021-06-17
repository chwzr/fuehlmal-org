// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import redis from '@/lib/redis';
import bot from '@/lib/telegram';


export default async (req, res) => {
  let db = {};
  console.log(req.body)

    console.log(req.body.tuser.id)
    let tuser = req.body.tuser
    tuser.addedOn = Date.now();

    let send = await redis.hget('logins', req.body.tuser.id);
    if(send){
      bot.sendMessage(req.body.tuser.id, 
      "Hey! Danke für deinen support :] Hier wirst du alle Informationen zum fühl mal bekommen!")
    }

    db = await redis.hset('logins', req.body.tuser.id, JSON.stringify(tuser));
    

  res.json(db);
};
