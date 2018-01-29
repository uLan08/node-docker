import Koa from 'koa'
import Router from 'koa-router'
import dotenv from 'dotenv'
import os from 'os'
import getos from 'getos'

dotenv.load()

const config = {
	port: process.env['PORT'] || 8080
}

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
	app.listen(config.port)
})