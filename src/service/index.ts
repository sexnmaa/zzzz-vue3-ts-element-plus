import sRequest from './request'

const request = new sRequest({
  baseURL: 'http://152.136.185.210:5000',
  timeout: 5000
})

export default request
