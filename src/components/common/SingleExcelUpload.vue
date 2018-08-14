<template>
    <span>
        <el-button size="small" round @click="excelUpload()" style=" background: #1881BF; width:100px">{{getDefaultButtonText()}}</el-button>
        <input v-show="false" id="fileSelect" @change="fileChanged" name="fileSelect" ref="uploadButton"  type="file"/>
    </span>
</template>

<script>
    import api from '../../axios/api.js';
    export default {
        data() {
            return {
                //buttonText:'Excel上传',
                //maxFileSize:10,
                //objectId:'',
                //fields:'',
                actionURL:''
            }
        },
        methods:{
            beforeUploadFile(file) {
                if (file==null) {
                    console.log("error: empty file");
                    return false;
                }
                //cehck object id and fields;
                if (this.objectId==null||this.objectId=='') {
                    this.showError("上传文件对应对象名称缺失");
                    return false;
                }
                if (this.fields==null||this.fields=="") {
                    this.showError("上传文件更新字段缺失");
                }
                let fileName =file.name;
                let extName = this.getFileExtName(fileName);
                const extension = extName === 'xls';
                const extension2 =  extName === 'xlsx';
                let maxSize = this.getDefaultFileSize();
                const isLt2M = file.size / 1024 / 1024 < maxSize;
                if (!extension && !extension2) {
                    this.showWarning('上传模板只能是xls、xlsx格式!');
//                    console.log('上传模板只能是xls、xlsx格式!')
                }
                if (!isLt2M) {
                    this.showWarning('上传模板大小不能超过'+maxSize+'MB!')
//                    console.log('上传模板大小不能超过 10MB!')
                }
                if (extension || extension2 && isLt2M == true) {
                    console.log(file);
                    let fd = new FormData();
                    fd.append('objId', this.objectId);//随文件上传的其他参数
                    fd.append('fields', this.fields);
                    if (this.notNullFields != null) {
                        fd.append('notNullFields',this.notNullFields);
                     }
                    fd.append('file', file);
                    // console.log(fd)
                    this.doExcelImport(fd);
                    return true;
                }
                return extension || extension2 && isLt2M
            },
            getDefaultButtonText() {
                return this.buttonText==null?'导入Excel':this.buttonText;
            },
            getDefaultFileSize() {
                return this.maxFileSize==null? 10:this.maxFileSize;
            },
            showError(msg) {
                this.$message({
                    message: msg,
                    type: 'error'
                });
            },
            showWarning(msg) {
                this.$message({
                    message: msg,
                    type: 'warning'
                });
            },
            getFileExtName(fileName) {
                let pos = fileName==null? -1: fileName.lastIndexOf('.');
                return pos==-1? null: fileName.substring(pos+1);
            },
            doExcelImport (data) {
                api.excelImport(data).then(res=> {
                    if (res.code==200) {
                        this.$emit('success', res);
                    } else {
                        this.$emit('fail',res.msg);
                    }
                    console.log(res);
                }) .catch(error=> {
                    console.log(error);
                    this.$emit('fail',error);
                });
            },
            excelUpload() {
                let btn = this.$refs.uploadButton;
                //console.log("button",btn);
                btn.click();
            },
            fileChanged() {
                let inputDOM = this.$refs.uploadButton;
                // 通过DOM取文件数据
                let file = inputDOM.files[0];
                this.beforeUploadFile(file);
                inputDOM.value='';
            },
        },
        props:['buttonText','objectId','fields','maxFileSize','notNullFields']
    }
</script>

