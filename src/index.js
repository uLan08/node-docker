const Koa = require('koa')
const Router = require('koa-router')
const os = require('os')
const getos = require('getos')

const app = new Koa()

const router = new Router()

getos((err, result) => {
	app.use(router.get('/', (ctx) => {
		ctx.status = 200
		const { dist, codename, release } = result
		const system = `${dist} ${codename || ''} ${release || ''}`
		ctx.body = `<div>Hello World from <b>${os.hostname()}</b>, I am on <b>${system}</b></div<>`	
	}).routes())
	app.use(router.allowedMethods())
	app.listen(8080)
})