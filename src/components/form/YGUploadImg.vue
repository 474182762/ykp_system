<template>
    <el-form-item :label="label" :prop="currentProp" :label-width="formLabelWidth">
        <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="haChange">
            <img v-if="currentImageUrl" :src="currentImageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </el-form-item>
</template>

<script>
    export default {
        data() {
            return {
                formLabelWidth: '120px',
                currentValue: this.value,
                currentProp: this.prop,
                currentImageUrl: this.imageUrl
            }
        },
        props: ['value', 'label', 'prop', 'imageUrl'],
        methods: {
            haChange(file) {
                let it = this;
                console.log(file);
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                if (!(isJPG && isLt2M)) {
                    return false;
                }
                let reader = new FileReader();   //html5读文件
                reader.readAsDataURL(file); //转BASE64   
                reader.onload = function (e) {    //读取完毕后调用接口
                    it.currentImageUrl = e.target.result;
                }
                this.currentValue = file;
                // this.$emit(this.currentProp, {prop: this.currentProp, value: file});
                this.$emit('ygForm', {prop: this.currentProp, value: file});
                return false;
            },
            handleAvatarSuccess(res, file) {
                console.log(file);
                console.log(res);
                this.currentImageUrl = URL.createObjectURL(file.raw);
            },
        },
        watch: {
            // imageUrl: {
            //     handler(newData, oldData) {
            //         if (newData < 0) {
            //             this.currentImageUrl = '';
            //         } else {
            //             this.currentImageUrl = newData;
            //         }
            //
            //     },
            //     deep: true
            // },
            value: {
                handler(newData, oldData) {
                    this.currentValue = newData;
                    this.currentImageUrl = '';
                },
                deep: true
            },
        }
    }
</script>

<style>
    .el-form-item__content {
        height: 32px;
    }

    .avatar-uploader {
        width: 32px;
        height: 32px;
        display: inline-block;
    }

    .el-upload--text {
        width: 32px;
        height: 32px;
    }

    .avatar {
        width: 32px;
        height: 32px;
    }
</style>
