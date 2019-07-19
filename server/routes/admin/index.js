module.exports = (app) => {
	const express = require('express')
	const jwt = require('jsonwebtoken')
	const assert = require('http-assert')
	const router = express.Router({
		mergeParams: true
	})

	//创建分类接口
	router.post('/', async (req, res) => {
		// console.log(req.body)
		const model = await req.model.create(req.body)
		res.send(model)
	})

	//查询分类接口
	router.get('/', async (req, res, next) => {
		const AdminUser = require('../../model/AdminUser')
		const token = String(req.headers.authorization || '').split(' ').pop()
		assert(token, 401, '请先登录')
		const {
			id
		} = jwt.verify(token, app.get('secret'))
		assert(id, 401, '无效的token')

		req.user = await AdminUser.findById(id)
		assert(req.user, 401, '请先登录')
		await next()
	}, async (req, res) => {
		const items = await req.model.find()
		res.send(items)
	})






	//通过id获取数据
	router.get('/:id', async (req, res) => {
		const model = await req.model.findById(req.params.id)
		res.send(model)
	})

	//通过id更改
	router.put('/:id', async (req, res) => {
		const model = await req.model.findByIdAndUpdate(req.params.id, req.body)
		res.send(model)
	})

	//删除操作
	router.delete('/:id', async (req, res) => {
		await req.model.findByIdAndDelete(req.params.id, req.body)
		res.send({
			msg: "删除成功"
		})
	})

	app.use("/admin/api/rest/:res", async (req, res, next) => {
		const modelName = require("inflection").classify(req.params.res)
		req.model = require(`../../model/${modelName}`)
		next()
	}, router)



	const multer = require("multer")
	const upload = multer({
		dest: __dirname + "/../../uploads"
	})
	app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
		const file = req.file
		file.url = `http://localhost:9001/uploads/${file.filename}`
		res.send(file)
	})

	app.post("/admin/api/login", async (req, res) => {
		// res.send("ok")
		const {
			username,
			password
		} = req.body;
		const AdminUser = require('../../model/AdminUser')
		const user = await AdminUser.findOne({
			username
		}).select("+password")
		assert(user, 422, "用户不存在")

		const isval = require('bcrypt').compareSync(password, user.password)

		assert(isval, 422, "密码错误")

		// if(!isval){
		// 	return res.status(422).send({
		// 		message:"密码错误"
		// 	})
		// }
		console.log(req.body)
		const jwt = require('jsonwebtoken')
		const token = jwt.sign({
			id: user._id
		}, app.get('secret'))
		res.send({
			token
		})
	})

	//注册
	app.post('/admin/api/reg', async (req, res) => {
		const User = require('../../model/User')
		const user = await User.create({
			username: req.body.username,
			password: req.body.password
		})
		res.send({
			msg: "注册成功"
		});
	});

	//登录
	app.post("/admin/api/deng", async (req, res) => {

		const User = require('../../model/User')
		const user = await User.findOne({
			username: req.body.username
		})
		if (!user) {
			return res.send({
				msg: "用户名不存在"
			})
		}
		const ispasswordVaild = require('bcrypt').compareSync(
			req.body.password,
			user.password
		)
		if (!ispasswordVaild) {
			return res.send({
				msg: "密码错误"
			})
		}
		const jwt = require('jsonwebtoken')
		const token = jwt.sign({
			id: user._id
		}, app.get('secret'))

		res.send({
			msg: "success",
			token
		});
	});



	//浏览器查询分类接口
	app.get('/admin/api/getgoodslist', async (req, res) => {
		const Item = require("../../model/Item")
		const items = await Item.find()
		console.log(items);

		res.send(items)
	})



	app.use(async (err, req, res, next) => {
		res.status(err.statusCode || 500).send({
			message: err.message
		})
	})






}