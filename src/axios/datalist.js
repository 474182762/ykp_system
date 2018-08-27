/*获取支路参数信息*/

export const branchParams ={
	"data": [
        {
            "paramValues": [
                {
                    "branchId": 2,
                    "paramMax": 10,
                    "paramUnit": "m3",
                    "paramMin": 1,
                    "paramId": 1,
                    "paramValue": 72
                },
                {
                    "branchId": 1,
                    "paramMax": 1000,
                    "paramUnit": "kb",
                    "paramMin": 1,
                    "paramId": 1,
                    "paramValue": 48
                },
                {
                    "branchId": 1,
                    "paramMax": 1000,
                    "paramUnit": "m3",
                    "paramMin": 1,
                    "paramId": 1,
                    "paramValue": 55
                }
            ],
            "paramOrder": 1,
            "paramName": "AB线电压",
            "paramId": 1
        },
        {
            "paramValues": [
                {
                    "branchId": 4,
                    "paramMax": 20,
                    "paramUnit": "m3",
                    "paramMin": -20,
                    "paramId": 2,
                    "paramValue": 55
                },
                {
                    "branchId": 4,
                    "paramMax": 10000,
                    "paramUnit": "m3",
                    "paramMin": -10000,
                    "paramId": 2,
                    "paramValue": 83
                },
                {
                    "branchId": 2,
                    "paramMax": 500,
                    "paramUnit": "kb",
                    "paramMin": 20,
                    "paramId": 2,
                    "paramValue": 20
                }
            ],
            "paramOrder": 2,
            "paramName": "BC线电压",
            "paramId": 2
        },
        {
            "paramValues": [
                {
                    "paramId": 3,
                    "paramValue": 26
                }
            ],
            "paramOrder": 3,
            "paramName": "CA线电压",
            "paramId": 3
        },    
        {
            "paramValues": [
                {
                    "paramId": 5,
                    "paramValue": 68
                }
            ],
            "paramOrder": 5,
            "paramName": "B相电流",
            "paramId": 5
        },
        {
            "paramValues": [
                {
                    "paramId": 6,
                    "paramValue": 62
                }
            ],
            "paramOrder": 6,
            "paramName": "C相电流",
            "paramId": 6
        },
        {
            "paramValues": [
                {
                    "paramId": 7,
                    "paramValue": 4
                }
            ],
            "paramOrder": 7,
            "paramName": "报警类型",
            "paramId": 7
        },
        {
            "paramValues": [
                {
                    "paramId": 8,
                    "paramValue": 37
                }
            ],
            "paramOrder": 8,
            "paramName": "电表报警",
            "paramId": 8
        },
        {
            "paramValues": [
                {
                    "paramId": 9,
                    "paramValue": 75
                }
            ],
            "paramOrder": 9,
            "paramName": "峰值功率",
            "paramId": 9
        }
    ],
    "code": 200,
    "msg": "",
    "errors": null
}

/*支路信息列表*/
export const distributionBranch ={
	"data": {
		"branchList": [
            {
                "parentOrder": null,
                "branchInfos": [
                    {
                        "branchId": 1,
                        "branchOpenStatus": 0,
                        "branchOrder": "4122",
                        "parentOrder": "",
                        "branchName": "S1-2TM变压器进线",
                        "branchType": 0
                    },
                    {
                        "branchId": 4,
                        "branchOpenStatus": 1,
                        "branchOrder": "4123",
                        "parentOrder": "",
                        "branchName": "电容补偿",
                        "branchType": 1
                    },
                    {
                        "branchId": 2,
                        "branchOpenStatus": 0,
                        "branchOrder": "4124",
                        "parentOrder": "",
                        "branchName": "联络",
                        "branchType": 2
                    }
                ]
            },
            {
                "parentOrder": "3335",
                "branchInfos": [
                    {
                        "branchId": 5,
                        "branchOpenStatus": 0,
                        "branchOrder": "4125",
                        "parentOrder": "3335",
                        "branchName": "商户电表箱",
                        "branchType": 3
                    },
                    {
                        "branchId": 3,
                        "branchOpenStatus": 1,
                        "branchOrder": "4126",
                        "parentOrder": "3335",
                        "branchName": "泛光照明",
                        "branchType": 3
                    }
                ]
            }
        ],
		"temperatures": [{
			"name": "A0项温度",
			"data": "35°C"
		}, {
			"name": "A1项温度",
			"data": "35°C"
		}, {
			"name": "A2项温度",
			"data": "35°C"
        }
        // {
		// 	"name": "A3项温度",
		// 	"data": "35°C"
		// }, {
		// 	"name": "A4项温度",
		// 	"data": "35°C"
        // }
        ],
		"temperature": "25°C",
		"humidity": "52%",
		"powerDescription": "引自高压AH9柜 #03变压器 SCB10-1600KVA/10KV",
		"factors": [{
			"name": "B0项因素",
			"data": 11
		}, {
			"name": "B1项因素",
			"data": 22
		}, {
			"name": "B2项因素",
			"data": 33
        }
        //  {
		// 	"name": "B3项因素",
		// 	"data": 44
		// }, {
		// 	"name": "B4项因素",
		// 	"data": 55
        // }
    ]
	},
	"code": 200,
	"msg": "",
	"errors": null
}

/*配电箱列表*/
export const distributionSelection = {
    "data": [
        {
            "alertStatus": 1,
            "code": "1#",
            "address": "test address",
            "connectStatus": 0,
            "name": "test",
            "id": 1
        },
        {
            "alertStatus": 0,
            "code": "2#",
            "address": "asdfasdf",
            "connectStatus": 1,
            "name": "test2",
            "id": 2
        }
    ],
    "code": 200,
    "msg": "",
    "errors": null
}
/*表计检测*/
export const meterMonitor ={
    "data": [
        {
            "collectorStatus": 0,
            "collectorOnlineRate": 9,
            "collectorId": 1,
            "collectorCode": "234",
            "coms": [
                {
                    "comId": 1,
                    "comName": "com1",
                    "branches": [
                        {
                            "branchId": 1,
                            "minValue": 100,
                            "branchOrder": "1",
                            "branchValue": 736,
                            "maxValue": 10000,
                            "branchName": "S1-2TM变压器进线",
                            "onlineRate": 71,
                            "status": 0
                        },
                        {
                            "branchId": 2,
                            "minValue": 100,
                            "branchOrder": "1",
                            "branchValue": 736,
                            "maxValue": 10000,
                            "branchName": "S1-2TM变压器进线",
                            "onlineRate": 71,
                            "status": 0
                        },
                        {
                            "branchId": 3,
                            "minValue": 100,
                            "branchOrder": "1",
                            "branchValue": 736,
                            "maxValue": 10000,
                            "branchName": "S1-2TM变压器进线",
                            "onlineRate": 71,
                            "status": 0
                        }
                    ]
                },
                {
                    "comId": 2,
                    "comName": "com2",
                    "branches": [
                        {
                            "branchId": 2,
                            "minValue": 100,
                            "branchOrder": "3",
                            "branchValue": 507,
                            "maxValue": 10000,
                            "branchName": "联络",
                            "onlineRate": 87,
                            "status": 1
                        }
                    ]
                }, {
                    "comId": 3,
                    "comName": "com2",
                    "branches": [
                        {
                            "branchId": 2,
                            "minValue": 100,
                            "branchOrder": "3",
                            "branchValue": 507,
                            "maxValue": 10000,
                            "branchName": "联络",
                            "onlineRate": 87,
                            "status": 1
                        }
                    ]
                },
                //  {
                //     "comId": 4,
                //     "comName": "com2",
                //     "branches": [
                //         {
                //             "branchId": 2,
                //             "minValue": 100,
                //             "branchOrder": "3",
                //             "branchValue": 507,
                //             "maxValue": 10000,
                //             "branchName": "联络",
                //             "onlineRate": 87,
                //             "status": 1
                //         }
                //     ]
                // }
            ],
            "collectorName": "采集器1"
        }
        // {
        //     "collectorStatus": 0,
        //     "collectorOnlineRate": 98,
        //     "collectorId": 2,
        //     "collectorCode": "235",
        //     "collectorName": "采集器2"
        // },
        // {
        //     "collectorStatus": 0,
        //     "collectorOnlineRate": 43,
        //     "collectorId": 3,
        //     "collectorCode": "236",
        //     "collectorName": "采集器3"
        // }
    ],
    "code": 200,
    "msg": "",
    "errors": null
}
/*历史数据*/
export const hisrMonitor={
    "data": {
        "suggestion": "设备一天内在线率为98%，处于正常状态",
        "dataList": [
            {
                "branchValue": 68.32373939573962,
                "status": 1,
                "reportTime": "2018-08-22 15:32:24"
            },
            {
                "branchValue": 89.05809169619141,
                "status": 1,
                "reportTime": "2018-08-22 15:32:24"
            },
            {
                "branchValue": 66.62314487482338,
                "status": 1,
                "reportTime": "2018-08-22 15:32:24"
            },
            {
                "branchValue": 54.34606588816341,
                "status": 1,
                "reportTime": "2018-08-22 15:32:24"
            },
            {
                "branchValue": 14.821446986407228,
                "status": 1,
                "reportTime": "2018-08-22 15:32:24"
            },
            {
                "branchValue": 21.38792478845949,
                "status": 1,
                "reportTime": "2018-08-22 15:32:24"
            },
            {
                "branchValue": 53.710495591796004,
                "status": 0,
                "reportTime": "2018-08-22 15:32:24"
            }
        ]
    },
    "code": 200,
    "msg": "",
    "errors": null
}


export const chartData={
    "data": [
        {
            "id": 6,
            "paramtype": 2,
            "timeunit": 2,
            "date": "2018-08-22",
            "unit": "kb",
            "time": 22,
            "value": 453,
            "createid": 1,
            "createat": "2018-08-22 17:50:49",
            "updateid": 1,
            "updateat": "2018-08-22 17:50:52",
            "isdeleted": false,
            "abscissaTime": "2018-08-22"
        },
        {
            "id": 7,
            "paramtype": 2,
            "timeunit": 2,
            "date": "2018-08-23",
            "unit": "kb",
            "time": 23,
            "value": 433,
            "createid": 1,
            "createat": "2018-08-22 17:51:07",
            "updateid": 1,
            "updateat": "2018-08-22 17:51:09",
            "isdeleted": false,
            "abscissaTime": "2018-08-23"
        },
        {
            "id": 8,
            "paramtype": 2,
            "timeunit": 2,
            "date": "2018-08-24",
            "unit": "kb",
            "time": 24,
            "value": 333,
            "createid": 1,
            "createat": "2018-08-22 17:51:24",
            "updateid": 1,
            "updateat": "2018-08-22 17:51:26",
            "isdeleted": false,
            "abscissaTime": "2018-08-24"
        },
        {
            "id": 9,
            "paramtype": 2,
            "timeunit": 2,
            "date": "2018-08-25",
            "unit": "kb",
            "time": 25,
            "value": 435,
            "createid": 1,
            "createat": "2018-08-22 17:52:05",
            "updateid": 1,
            "updateat": "2018-08-22 17:52:08",
            "isdeleted": false,
            "abscissaTime": "2018-08-25"
        }
    ],
    "code": 200,
    "msg": "",
    "errors": null
}
export const environmentParams= {
    "data": [
        {
            "name": "湿度",
            "code": 0
        },
        {
            "name": "CO2浓度",
            "code": 1
        },
        {
            "name": "照度",
            "code": 2
        },
        {
            "name": "温度",
            "code": 3
        }
    ],
    "code": 200,
    "msg": "",
    "errors": null
}

