// const baseUrl = 'http://192.168.1.21:8080';
// export default {
//     "login": "/api/admin/index/login", //登录接口
// }

const baseUrl = 'http://api.domain'


/*获取配电箱列表 ?pmId=1*/
export const getDistributionSelection = baseUrl+'/api/admin/monitor/getDistributionSelection'

/*获取支路信息列表 ?distributionId=1*/
export const getDistributionBranch = baseUrl+'/api/admin/monitor/getDistributionBranch'

/*获取支路信息列表 ?distributionId=1*/
export const getBranchParams = baseUrl+'/api/admin/monitor/getBranchParams'



/*获取支路信息列表 ?distributionId=1*/
export const getMonitorParamTypes = baseUrl+'/api/admin/monitor/getMonitorParamTypes'
