import axios from 'axios'
import Vue from "vue"
import router from './router'
const http = axios.create({
	baseURL: "http://localhost:9001/admin/api"
})

http.interceptors.request.use(function (config) {
	if (localStorage.token) {
		config.headers.Authorization = localStorage.token
	}
	console.log(config)
	return config;


}, function (error) {
	return Promise.reject(error)
})



http.interceptors.response.use(res => {
	return res
}, err => {
	if (err.response.data.message) {
		Vue.prototype.$message({

			type: "error",
			message: err.response.data.message
		})

		console.log(err.response)
		if (err.response.status == 401) {
			router.push('/login')
		}
	}

	return Promise.reject(err)
})

export default http