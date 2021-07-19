import redis from '@/lib/redis';


export default async (req, res) => {
  let db = [];
  let dbx = await redis.hgetall('event-answers');

  Object.values(dbx).forEach(v=>{
    db.push(JSON.parse(v))
  })
  res.json(db);
};