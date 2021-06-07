// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import redis from '@/lib/redis';

export default async (req, res) => {
  let db = {};
  console.log(req.body)

    console.log(req.body.tuser.id)
    db = await redis.hset('logins', req.body.tuser.id, JSON.stringify(req.body.tuser));


  res.json(db);
};
