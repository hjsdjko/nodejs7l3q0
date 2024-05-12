import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import ZiliaoleixingController from './Ziliaoleixing'
import XuexiziliaoController from './Xuexiziliao'
import CartController from './Cart'
import OrdersController from './Orders'
import AddressController from './Address'
import StoreupController from './Storeup'
import DiscussxuexiziliaoController from './Discussxuexiziliao'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/ziliaoleixing', ZiliaoleixingController({ config, db }))

	api.use('/xuexiziliao', XuexiziliaoController({ config, db }))

	api.use('/cart', CartController({ config, db }))

	api.use('/orders', OrdersController({ config, db }))

	api.use('/address', AddressController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/discussxuexiziliao', DiscussxuexiziliaoController({ config, db }))

	return api
}
