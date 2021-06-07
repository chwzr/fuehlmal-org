import redis from '@/lib/redis';
import bot from '@/lib/telegram';


export default async (req, res) => {
  let db = [];
  let dbx = await redis.hgetall('logins');

  Object.values(dbx).forEach(v=>{
    db.push(JSON.parse(v))
  })
  res.json(db);
};