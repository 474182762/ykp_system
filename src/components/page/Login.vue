<template>
    <div class="login-wrap">
        <div class="ms-title"></div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username" class="ub">
                    <i class="el-icon-bell Login-icon"></i>
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <i class="Login-icon el-icon-tickets"></i>
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-radio label="记住密码"></el-radio>
                </el-form-item>
                <div class="login-btn">
                    <el-button @click="submitForm('ruleForm')">登 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let authority = '';
                    localStorage.setItem('ms_username', this.ruleForm.username);
                    this.$store.state.userName = this.ruleForm.username;
                    this.$axios.post(this.$url.login, { username: this.ruleForm.username, password: this.ruleForm.password }).then((res) => {
                        if (res.msg) {
                            this.$message({
                                message: res.msg,
                                center: true,
                                type: 'error',
                                duration: 1000
                            });
                        } else if (res.data.token) {
                            this.$router.push({ path: '/', name: 'index' });
                        }

                    }).catch((error) => {
                        console.log(error);
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
    created() {}
}

</script>
<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../../static/img/loginbg.jpg);
    background-repeat: no-repeat;
}

.ms-title {
    width: 590px;
    height: 70px;
    position: absolute;
    top: 128px;
    right: 390px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    background: none;
    background-image: url(../../../static/img/logo.png);
    background-repeat: no-repeat;
    text-indent: -99999999;
}

.ms-login {
    position: absolute;
    right: 467px;
    top: 238px;
    width: 350px;
    height: 285px;
    padding: 40px 33px;
    border-radius: 3px;
    background: rgba(24, 109, 157, 0.21);
}


.Login-icon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 40px;
    height: 44px;
    background: rgba(31, 87, 130, .55);
    color: #D5E5FF;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
}

</style>
<style>
.ms-login .el-input {
    width: 348px;
    height: 42px;
    background: rgba(27, 54, 103, 0.16);
    color: #55EFFF;
    border: 1px solid #3AB1D3;
}

.ms-login .el-input .el-input__inner {
    width: 100%;
    height: 100%;
    background: rgba(27, 54, 103, 0.16);
    color: #55EFFF;
    border: none;
    text-indent: 40px;
}

.ms-login .el-radio__inner {
    width: 16px;
    height: 16px;
    border-radius: none;
    background: none;
    border-color: #96A8C6;
}

.ms-login .el-radio {
    color: #D5E5FF;
    font-size: 16px;
    padding-left: 40px
}

.login-btn {
    width: 317px;
    text-align: center;
    background: #19A680;
    border-radius: 5px;
    height: 44px;
    position: absolute;
    bottom: 62px;
    right: 35px;
}

.login-btn .el-button {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    font-size: 18px;
    color: #fff;
}

</style>
