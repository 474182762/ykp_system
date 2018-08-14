import axios from 'axios'
import vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })
  // 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})

// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
const __TEST_HOST = '192.168.1.229';
const __PORT = '8080';
var __HOST = __TEST_HOST;
var __DEFAULT_TOKEN = 'test';
//生成通用接口的URL
function generateCommonURL(url) {
    url = 'http://'+__HOST+':'+__PORT+'/'+url;
    return url;
}
function getQueryURL() {
    let url = 'api/common/crud/query';
    return generateCommonURL(url);
}
function getUpdateURL() {
    let url = 'api/common/crud/update';
    return generateCommonURL(url);
}
function getDeleteURL() {
    let url = 'api/common/crud/delete';
    return generateCommonURL(url);
}
function getExcelExportURL() {
    let url = 'api/common/excel/export';
    return generateCommonURL(url);
}
function getExcelImportURL() {
    let url = 'api/common/excel/import';
    return generateCommonURL(url);
}
function getCreateURL() {
    let url = 'api/common/crud/insert';
    return generateCommonURL(url);
}
function getFileName(response) {
    let fileName = response.headers['Content-Disposition'];
    if (fileName!=null) {
        fileName.substr(fileName.lastIndexOf('=')+1);
    }
    return fileName ==null? 'DownloadFile.xlsx':fileName;
}
function downloadFile (url) {
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', "download.xlsx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); //下载完成移除元素
    window.URL.revokeObjectURL(url); //释放掉blob对象
    //window.location.href = url;
}
function JSON2URL(json) {
    let params = Object.keys(json).map(function (key) {
        // body...
        return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    }).join("&");
    return params;
}
export default {
    ajax(url, params) {
        return fetch(url, params);
    },
    commonPost(url,params) {
        params.token=__DEFAULT_TOKEN;
        url = generateCommonURL(url);
        console.log("commonPost.url",url);
        console.log("commponPost.data",params);
        return fetch(url, params);
    },
    excelImport(params) {
        params.token=__DEFAULT_TOKEN;
        let url = getExcelImportURL();
        return fetch(url, params);
    },
    excelExport(params) {
        params.token=__DEFAULT_TOKEN;
        let url = getExcelExportURL();
        let strURL = JSON2URL(params);
        url = url + '?'+strURL;
        console.log("URL",url);
        //window.open(url);
        downloadFile(url);
    },
    commonGet(params) {
        params.token=__DEFAULT_TOKEN;
        let url = getQueryURL();
        return fetch(url, params);
    },
    commonUpdate(params) {
        params.token=__DEFAULT_TOKEN;
        let url = getUpdateURL();
        return fetch(url, params);
    },
    commonDelete(params) {
        params.token=__DEFAULT_TOKEN;
        let url = getDeleteURL();
        return fetch(url, params);
    },
    commonCreate(params) {
        params.token=__DEFAULT_TOKEN;
        let url = getCreateURL();
        return fetch(url, params);
    }
}
