const http = require('http');
const Koa = require('koa');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const Router = require('koa-router');

const pictures = require('./PicturesService');

const app = new Koa();
const router = new Router();
const picturesService = new pictures;

router.get('/', async (ctx, next) => {
    const query = ctx.request.query;
    console.log(query)
    switch (query.method) {
        case 'getPictures':

            switch (query.content) {
                case 'avatars':
                    const pictures = await picturesService.getAvatars();
                    ctx.response.body = pictures;
                    ctx.response.status = 200;
                    return;
                case 'background':
                    const bgr = await picturesService.getBackground();
                    ctx.response.body = bgr;
                    ctx.response.status = 200;
                    return;
            }
            // let content = ;
            ctx.response.body = 'hello worlds';
            ctx.response.status = 200;
            return;

        case 'ticketById':
            // ctx.response.body = await db.getTaskById(query.id);
            return;

        default:
            ctx.response.status = 404;
            return;
    }
});

router.post('/', koaBody({multipart: true}),

    async (ctx, next) => {

        const query = ctx.request.query;
        const body = ctx.request.body;
        console.log(query)

        switch (query.method) {
            case 'createTicket':
                // let content = await db.createTask(body);
                ctx.response.body = 'hi there';
                ctx.response.status = 200;
                return;

            case 'deleteTicket':
                // const deleted = await db.deleteTask(body);
                // ctx.response.body = deleted;
                // ctx.response.status = 200;
                // await writer.write(JSON.stringify(deleted));
                return;
        }
    });


app
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods());

const port = process.env.PORT || 8888;
const server = http.createServer(app.callback()).listen(port)
