import {Router} from 'express'
import {default as routev1} from './version1/routes.js'

const versions = Router()
versions.use("/v1", routev1)

export default versions