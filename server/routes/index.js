import koaRouter from 'koa-router';
import apiRoutes from './api';

const router = koaRouter();

// Add the API Routes
router.use('/api', apiRoutes.routes(), apiRoutes.allowedMethods());

export default router;

