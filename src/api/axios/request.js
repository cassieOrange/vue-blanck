//引入axios
import axios from 'axios'

// 接口配置地址
let hostname = location.hostname;
let target = '//t.lc86.net/2/thirdpartyapply_api';
if(hostname.indexOf('localhost') != -1){
    // 本地开发
    target = '//d.lc86.net/2/thirdpartyapply_api';
}else{
    target = '/2/thirdpartyapply_api';
}


let cancel ,promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
    // 设置默认请求头
    config.headers = {'Content-Type': 'application/x-www-form-urlencoded',}
    // 处理数据
    config.data = JSON.stringify(config.data)

      return config
}, error => {
    return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

axios.defaults.baseURL = target


//设置默认请求头
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

export default {
  //封装，get请求
    get (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'get',
          url,
          params: param,
          cancelToken: new CancelToken(c => {
            cancel = c
          })
        }).then(res => {
          resolve(res)
        })
      })
    },
  //封装，post请求
    post (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'post',
          url,
          data: param,
          cancelToken: new CancelToken(c => {
            cancel = c
          })
        }).then(res => {
          resolve(res)
        })
      })
     }
  }