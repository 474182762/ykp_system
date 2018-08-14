import axios from 'axios'

export default class ApiBase {
  static apiPath = ''

  /**
   * 通用ajax请求,不建议复写此方法
   * @param url
   * @param method
   * @param body
   * @returns {Promise<any>}
   */
  static ajax (url, method, param = {}, body = {}) {
    return new Promise((resolve, reject) => {
      if (this.apiPath && url.indexOf(this.apiPath) === -1) {
        url = this.apiPath + url
      }
      param['time'] = (new Date()).getTime()
      if (method === 'get' || method === 'delete') {
        param = Object.assign(param, body)
        url = this.transUrl(url, param)
        body = {}
      } else {
        url = this.transUrl(url, param)
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
      }
      let token = ''
      let currentUserInfo = window.Tool.getStorage('currentUserInfo')
      if (currentUserInfo && currentUserInfo['token']) {
        token = currentUserInfo['token']
        axios.defaults.headers.common['token'] = token
      }
      axios[method](url, JSON.stringify(body)).then(
        res => {
          let resJson = res.data
          resolve(resJson)
        },
        err => {
          console.log('ajax---error---', err)
          reject(err)
        }
      )
    })
  }

  /**
   * URL路径和参数去重拼接
   * @param url
   * @param param
   * @returns {*}
   */
  static transUrl (url, param) {
    param = Object.assign({}, window.Tool.getUrlParam(url), param)
    let urlParam = window.Tool.toUrlParam(param)
    if (urlParam) {
      if (url.indexOf('?') === -1) {
        url = url + '?'
      }
      if (url.lastIndexOf('&') === url.length - 1 || url.lastIndexOf('?') === url.length - 1) {
        url = url + urlParam
      } else {
        url = url.substring(0, url.indexOf('?')) + '?' + urlParam
      }
    }
    return url
  }

  /**
   * 供API接口调用方法，可复写此方法进行特殊处理
   * @param url
   * @param method
   * @param body
   * @param must
   * @returns {PromiseLike<T> | Promise<T> | *}
   */
  static request (url, method, body = {}, type = 'STORE') {
    if (this.apiPath && url.indexOf(this.apiPath) === -1) {
      url = this.apiPath + url
    }
    let siteId = window.Tool.getStorage('siteId', false) || ''
    let region = window.Tool.getStorage('region', false) || ''
    let param = window.Tool.getUrlParam(url)
    param['siteId'] = siteId
    param['region'] = region
    return new Promise((resolve, reject) => {
      this.ajax(url, method, param, body).then(res => {
        resolve(res)
      }, err => {
        console.log('request----', err)
        if (window.Tool.isMQQBrowser()) {
          alert(method + ':' + url + '---' + location.href + '----' + window.Tool.toString(body) + '....' + window.Tool.toString(err))
          return
        }
        window.Tool.alert('系统异常，请稍后重试', () => {
          reject(err)
        }, () => {
          reject(err)
        }, window.Tool.toString(err))
      })
    })
  }

  /**
   * 用于get请求
   * @param url
   * @param body
   * @returns {PromiseLike<T>|Promise<T>|*}
   */
  static get (url, body = {}) {
    return this.request(url, 'get', body)
  }

  /**
   * 用于delete请求
   * @param url
   * @param body
   * @returns {PromiseLike<T>|Promise<T>|*}
   */
  static delete (url, body = {}) {
    return this.request(url, 'delete', body)
  }

  /**
   * 用于post请求
   * @param url
   * @param body
   * @returns {PromiseLike<T>|Promise<T>|*}
   */
  static post (url, body = {}) {
    return this.request(url, 'post', body)
  }

  /**
   * 用于put请求
   * @param url
   * @param body
   * @returns {PromiseLike<T>|Promise<T>|*}
   */
  static put (url, body = {}) {
    return this.request(url, 'put', body)
  }
}
