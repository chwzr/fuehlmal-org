// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import redis from '@/lib/redis';

export default async (req, res) => {
  let db = {};

    console.log("get login", req.body.id)
    db = JSON.parse(await redis.hget('logins', req.body.id));
    console.log(db)

  res.json(db);
};
