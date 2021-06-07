// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import redis from '@/lib/redis';

export default async (req, res) => {
  let db = {};
  if (req.body.login) {
    db = await redis.hset('logins', req.body.tuser.id, req.body.tuser);
  }
  if (req.body.auth) {
    db = await redis.hget('logins', '655255940');
  }
  res.json(db);
};
