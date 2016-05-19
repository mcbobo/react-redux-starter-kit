import koaRouter from 'koa-router';
import request from '../lib/koa-request';

const router = koaRouter();

// Search API Call
router.get('/:search', async function (ctx, next) {
  const search = ctx.params.search;
  if (!search) return (ctx.body = JSON.stringify({ error: 'No Results.' }));

  const options = {
    url     : `http://localhost:3000/api/all_search/${escape(search)}`,
    headers : { 'Authorization': 'Token token=c835878b-f6c0-4655-8b09-ec4278c28f7e' }
  };

  let response = await request(options);
  ctx.body = response.body;
});

export default router;
