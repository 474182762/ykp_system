<template>
    <div class="searchtoolBox clear">
        <div class="fl">
            <template v-for="data in searchData">
                <template v-if="data.type == 'input'">
                    <div class="generalSearch clear">
                        <span class="fl">{{ data.name }}:</span>
                        <div class="fl">
                            <el-input
                                :style="{ width:data.width+'px'}"
                                :placeholder="data.placeholder"
                                prefix-icon="el-icon-search"
                                v-model="outData[data.field]">
                            </el-input>
                        </div>
                    </div>
                </template>
                <template v-if="data.type == 'searInput'">
                    <div class="generalSearch clear">
                        <span class="fl">{{ data.name }}:</span>
                        <div style="position: relative" class="fl searInput">
                            <i style="position: absolute;top:-8px;left: 4px;z-index: 10;color: #838383"
                               class="el-input__icon el-icon-search"></i>
                            <el-autocomplete
                                :style="{ width:data.width+'px'}"
                                class="inline-input"
                                v-model="outData[data.field]"
                                :fetch-suggestions="querySearch"
                                :placeholder="data.placeholder"
                                @focus="histortClick(data.field)"
                            ></el-autocomplete>
                        </div>
                    </div>
                </template>
                <template v-else-if="data.type == 'select'">
                    <div class="searchItem">
                        <span>{{data.name}}:</span>
                        <el-select v-model="outData[data.field]" :style="{ width:data.width+'px'}">
                            <el-option
                                v-for="item in data.options"
                                :key="item.value"
                                :label="item.key"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </template>
                <template v-else-if="data.type == 'searSelect'">
                    <div class="searchItem">
                        <span>{{data.name}}:</span>
                        <el-select v-model="outData[data.field]" filterable :style="{ width:data.width+'px'}">
                            <el-option-group
                                v-for="group in data.options"
                                :key="group.key"
                                :label="group.label">
                                <el-option
                                    v-for="item in group.options"
                                    :key="item.value"
                                    :label="item.key"
                                    :value="item.value">
                                </el-option>
                            </el-option-group>
                        </el-select>
                    </div>
                </template>
                <template v-else-if="data.type == 'dataPicker'">
                    <div class="searchItem">
                        <span class="fl">{{data.name}}:</span>
                        <div style="margin-left:4px;display: inline-block">
                            <el-date-picker
                                :style="{width:data.width+'px'}"
                                v-model="outData[data.field]"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions2">
                            </el-date-picker>
                        </div>

                    </div>
                </template>
                <template v-else-if="data.type == 'swich'">
                    <div class="searchBox fl">
                        <span style="margin-left: 4px">{{data.name}}:</span>
                        <div style="display: inline-block">
                            <template v-for="opt in data.options">
                                    <span :class="{act:outData[data.field]==opt.value?true:false}"
                                          @click="swichTimeData(opt.value,data.field)">{{opt.key}}</span>
                            </template>
                        </div>
                    </div>
                </template>
            </template>
            <!-- 跟随框按钮 -->
            <template v-for="btn in btnList.left">
                <div class="submitSearch">
                    <button @click="searchClick(btn.action)" :class="btn.className">
                        <i v-if="btn.icon!=''" :class="btn.icon"></i>
                        {{btn.label}}
                    </button>
                </div>
            </template>
        </div>
        <!-- 右侧固定按钮 -->
        <div class="right submitSearch">
            <template v-for="btn in btnList.right">
                <div>
                    <button @click="searchClick(btn.action)" :class="btn.className">
                        <i v-if="btn.icon!=''" :class="btn.icon"></i>
                        {{btn.label}}
                    </button>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            btnList: {
                type: Object,
                default: function () {
                    return {
                        left: [
                            {label: '搜索left', icon: 'el-icon-search', className: '', action: 'search'},
                            {label: '取消left', icon: 'el-icon-search', className: '', action: 'search'}
                        ],
                        right: [
                            {label: '搜索right', icon: 'el-icon-search', className: '', action: 'search'},
                            {label: '取消right', icon: 'el-icon-search', className: '', action: 'search'}
                        ]
                    }
                }
            },
            inSearchData: {
                type: Array,
                default: function () {
                    return [
                        {
                            type: "input",//普通输入框
                            field: "generalInput",
                            placeholder: "请输入事件名称",
                            name: "搜索",
                            width: 242,
                        },
                        {
                            type: "searInput",//带历史记录的输入框
                            field: "searInput",
                            placeholder: "请输入事件名称",
                            name: "搜索",
                            width: 242,
                        },
                        {
                            type: "select",//普通下拉框
                            field: "type",
                            name: "告警类型",
                            width: 81,
                            options: [
                                {key: "全部", value: ""},
                                {key: "类型1", value: "1"},
                                {key: "类型2", value: "2"}
                            ]
                        },
                        {
                            type: "select",//普通下拉框 从ajax获取数据
                            field: "ssssstype",
                            name: "设备名称",
                            width: 100,
                            options: [],
                            ajax: {
                                url: 'http://192.168.1.21:8080/api/web/theme/getGreatTheme?token=123',//url地址
                                data: {},//参数
                                key: 'name',//key的字段
                                value: 'id',//value的字段
                                listName: 'ThemeList'//数据所在的位置 res.data['ThemeList'] or listName: ['ThemeList','list'] res.data['ThemeList']['list']
                            }
                        },
                        {
                            type: "searSelect", //带历史记录下拉框
                            field: "searSelect",
                            name: "历史记录select",
                            width: 100,
                            options: [
                                {label: '历史记录', options: []},
                                {
                                    label: '所有信息',
                                    options: [
                                        {value: 'Chengdu', key: '成都'},
                                        {value: 'Shenzhen', key: '深圳'},
                                        {value: 'Guangzhou', key: '广州'},
                                        {value: 'Dalian', key: '大连'},
                                        {value: 'Shanghai', key: '上海'}
                                    ]
                                }],
                        },
                        {
                            type: "searSelect",//带历史记录下拉框 从ajax获取数据
                            field: "searSelectAjax",
                            name: "历史记录selectAjax",
                            width: 100,
                            options: [
                                {label: '历史记录', options: []},
                                {label: '所有信息', options: null}],
                            ajax: {
                                url: 'http://192.168.1.21:8080/api/web/theme/getGreatTheme?token=123',
                                data: {},
                                key: 'name',//key的字段
                                value: 'id',//value的字段
                                listName: 'ThemeList'//数据所在的位置 res.data['ThemeList'] or listName: ['ThemeList','list'] res.data['ThemeList']['list']
                            }
                        },
                        {
                            type: "dataPicker",//时间范围搜索
                            field: "timeDDD",
                            name: "时间筛选",
                            width: 250,
                        },
                        {
                            type: "swich",//swich搜索
                            field: "timeSwich",
                            name: "时间粒度",
                            options: [
                                {key: "全 部", value: 1},
                                {key: "设 备1", value: 2},
                                {key: "设 备2", value: 3}
                            ]
                        },
                    ]
                },
            }
        },
        data() {
            return {
                searchData: this.inSearchData,
                currHistory: [],//当前点击的输入框记录
                outData: {},//对外输出搜索内容
                historyObj: {},//历史记录总和
                selectList: {},
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
            }
        },
        mounted() {
            const outData = {};
            for (let i in this.searchData) {
                let _data = this.searchData[i];
                if (_data.type == 'select' && _data.ajax != null) {
                    this.$axios.post(_data.ajax.url, _data.ajax.data).then((res) => {
                        let key = _data.ajax.key;
                        let val = _data.ajax.value;
                        let list = res.data;
                        if (_data.ajax.listName != null) {
                            if (typeof _data.ajax.listName == 'object') {
                                for (let key of this.ajax.listName) {
                                    list = list[key];
                                }
                            } else {
                                list = list[_data.ajax.listName];
                            }
                        }
                        if (list != null) {
                            const options = [];
                            options.push({key: '全部', value: ''});
                            for (let item of list) {
                                options.push({key: item[key], value: item[val]});
                            }
                            this.searchData[i].options = options;
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
                } else if (_data.type == 'searSelect' && _data.ajax != null) {
                    this.$axios.post(_data.ajax.url, _data.ajax.data).then((res) => {
                        let key = _data.ajax.key;
                        let val = _data.ajax.value;
                        let list = res.data;
                        if (_data.ajax.listName != null) {
                            if (typeof _data.ajax.listName == 'object') {
                                for (let key of this.ajax.listName) {
                                    list = list[key];
                                }
                            } else {
                                list = list[_data.ajax.listName];
                            }
                        }
                        if (list != null) {
                            const options = [];
                            options.push({key: '全部', value: ''});
                            for (let item of list) {
                                options.push({key: item[key], value: item[val]});
                            }
                            this.searchData[i].options[1].options = options;
                            this.updateSelectList(_data.options[1]['options'], _data.field);
                            let hkey = this.getHistoryKey(_data.field);
                            let hval = localStorage.getItem(hkey);
                            this.historyObj[hkey] = {type: _data.type, list: JSON.parse(hval)};
                            this.searchData[i].options[0].options = JSON.parse(hval);
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
                } else if (_data.type == 'searSelect') {
                    this.updateSelectList(_data.options[1]['options'], _data.field);
                    let key = this.getHistoryKey(_data.field);
                    let val = localStorage.getItem(key);
                    this.historyObj[key] = {type: _data.type, list: JSON.parse(val)};
                    this.searchData[i].options[0].options = JSON.parse(val);
                } else if (_data.type == 'searInput') {
                    let key = this.getHistoryKey(_data.field);
                    let val = localStorage.getItem(key);
                    this.historyObj[key] = {type: _data.type, list: JSON.parse(val)};
                }
                // 初始化输出
                outData[_data.field] = '';

            }
            this.outData = outData;
        },
        methods: {
            //点击搜索按钮
            searchClick(action) {
                let num = 3;
                for (let hObj in this.historyObj) {
                    for (let oObj in this.outData) {
                        if (this.outData[oObj] != '' && this.getHistoryKey(oObj) == hObj) {
                            const hisObj = this.historyObj[hObj];
                            const list = hisObj['list'] || [];
                            if (hisObj.type == 'searInput') {
                                list.splice(0, 0, {value: this.outData[oObj]});
                                if (list.length > num) {
                                    list.splice(num, list.length - num);
                                }
                                localStorage.setItem(hObj, JSON.stringify(list));
                            } else if (hisObj.type == 'searSelect') {
                                for (let sKey in this.selectList) {
                                    if (sKey == oObj) {
                                        for (let j in list) {
                                            if (list[j].value == this.outData[oObj]) {
                                                list.splice(j, 1);
                                            }
                                        }
                                        list.splice(0, 0, {
                                            key: this.selectList[sKey][this.outData[oObj]],
                                            value: this.outData[oObj]
                                        });
                                        if (list.length > num) {
                                            list.splice(num, list.length - num);
                                        }
                                        localStorage.setItem(hObj, JSON.stringify(list));
                                        for (let i in this.searchData) {
                                            if (this.searchData[i].field == oObj) {
                                                this.searchData[i]['options'][0]['options'] = list;
                                            }
                                        }
                                    }
                                }
                            }
                            this.historyObj[hObj]['list'] = list;
                        } else {

                        }
                    }

                }
                const returnData = {
                    action: action,
                    data: Object.assign({}, this.outData)
                };
                this.$emit("outData", returnData);
            },
            //swich
            swichTimeData(vl, field) {
                console.log(vl);
                console.log(this.outData[field]);
                this.outData[field] = vl;
                console.log(field);
                console.log(this.outData[field], 222);

            },
            // input历史记录搜索
            querySearch(queryString, cb) {
                const restaurants = this.currHistory;
                var results = [];
                if (restaurants != null) {
                    results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                }
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            // input历史记录搜索
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            // 获取点击input框的历史记录
            histortClick(field) {
                this.currHistory = this.historyObj[this.getHistoryKey(field)]['list'];
            },
            // 获取历史记录key
            getHistoryKey(field) {
                return window.location.pathname + '/' + field;
            },
            // 改变下拉list
            updateSelectList(options, field) {
                let selObj = {};
                for (let opt of options) {
                    selObj[opt.value] = opt.key;
                }
                this.selectList[field] = selObj;
            }
        },
        watch: {
            inSearchData: {
                handler(newData, oldData) {
                    this.searchData = newData
                },
                deep: true
            }
        }
    }
</script>
<style scoped>
    .searchtoolBox {
        padding-bottom: 24px;
        font-size: 16px;
    }

    .searchtoolBox .right {
        position: absolute;
        right: 40px;
        top: 80px;
    }

    .searchtoolBox .right > div {
        display: inline-block
    }

    .generalSearch {
        float: left;
        display: inline-block;
        font-size: 14px;
        padding-top: 24px;
        margin-right: 40px;
    }

    .generalSearch > div {
        width: 242px;
        overflow: hidden;
    }

    .generalSearch span {
        margin-right: 4px;
        display: inline-block;
        height: 100%;
        color: #3a3a3a;
        font-weight: bold;
        line-height: 28px;
    }

    .searchItem {
        float: left;
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        padding-top: 24px;
        margin-right: 40px;
        display: inline-block;
    }

    .searchItem span {
        display: inline-block;
        color: #838383;
        font-weight: bold;
        height: 28px;
        line-height: 28px;
    }

    .searchItem select {
        height: 28px;
        line-height: 28px;
        border: 1px #838383 solid;
        font-size: 14px;
        font-weight: bold;
        border-radius: 15px;
        color: #3A3A3A;
        padding: 0 5px 0 13px;
    }

    .submitSearch button i {
        margin-right: 5px
    }

    .submitSearch {
        float: left;
        display: inline-block;
        padding-top: 24px;
    }

    .submitSearch button {
        cursor: pointer;
        border: 1px #C3C9D5 solid;
        border-radius: 15px;
        font-size: 14px;
        color: #3A3A3A;
        height: 28px;
        line-height: 28px;
        padding: 0 18px;
        background: #fff;
        outline: none;
    }

    .submitSearch button.bulueBg {
        margin-right: 10px;
        border: none;
        background: #1881BF;
        color: #fff;
    }

    .searchtableBox .batchtoignore div i {
        margin-right: 10px
    }

    .searchtableBox .batchtoignore {
        float: right;
        padding-top: 24px;
    }

    .searchtableBox .batchtoignore div {
        cursor: pointer;
        display: inline-block;
        height: 28px;
        line-height: 28px;
        padding: 0 15px 0 12px;
        font-size: 14px;
        color: #fff;
        border-radius: 15px;
        outline: none;
        border: none;
        background: #1881BF;
    }

    .searchBox {
        font-size: 14px;
        padding-top: 24px;
        margin-right: 35px;
    }

    .searchBox div {
        position: relative;
        top: 9px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        border: 1px #828282 solid;
        line-height: 28px;
        box-sizing: border-box;
        height: 28px;
        border-radius: 15px;
        overflow: hidden;
    }

    .searchBox span {
        display: inline-block;
        height: 100%;
        font-size: 14px;
        color: #838383;
        font-weight: bold;
        line-height: 28px;
    }

    .searchBox div span {
        cursor: pointer;
        text-align: center;
        display: inline-block;
        height: 28px;
        color: #3a3a3a;
        font-weight: bold;
        line-height: 28px;
        border-right: 1px #828282 solid;
        padding: 0 10px;
    }

    .searchBox span:last-of-type {
        border-right: none;
    }

    .searchBox div span.act {
        color: #fff;
        background: #1881BF;
    }
</style>
<style>
    .searchtoolBox .el-range-editor--small.el-input__inner {
        height: 28px;
    }

    .searchtoolBox .el-range-editor--small.el-input__inner {
        line-height: 17px;
    }

    .searchtoolBox .el-range-editor--small .el-range-separator {
        line-height: 16px;
        color: #838383;
    }

    .searchtoolBox .el-input__inner {
        border-color: #838383;
        border-radius: 15px;
        font-size: 14px;
        color: #3A3A3A;
    }

    .searchtoolBox .el-input--small .el-input__inner {
        box-sizing: border-box;
        height: 28px;
        line-height: 28px;
    }

    .searchtoolBox .el-input--small .el-input__icon {
        line-height: 28px;
        color: #838383;

    }

    .searchtoolBox .el-range-editor--small .el-range__close-icon, .el-range-editor--small .el-range__icon {
        line-height: 16px;
    }

    .searchtoolBox .searInput .el-input--small .el-input__inner {
        padding-left: 31px;
    }
</style>
