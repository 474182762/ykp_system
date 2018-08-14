<template>
    <el-form-item :label="label" :prop="currentProp" :label-width="formLabelWidth?formLabelWidth:'120px'">
        <el-radio-group style="min-width:50px " @change="haChange" v-model="currentValue">
            <template v-for="opt of currentOptions">
                <el-radio :label="opt.value">{{opt.label}}</el-radio>
            </template>
        </el-radio-group>
    </el-form-item>
</template>

<script>
    export default {
        data() {
            return {
                currentValue: this.value,
                currentProp: this.prop,
                currentOptions: this.options
            }
        },
        props: ['value', 'label', 'prop', 'options','formLabelWidth'],
        methods: {
            haChange(value) {
                this.currentValue = value;
                this.$emit('ygForm', {prop: this.currentProp, value: value});
            },
        },
        watch: {
            options: {
                handler(newData, oldData) {
                    this.currentOptions = newData;
                },
                deep: true
            },
            value: {
                handler(newData, oldData) {
                    this.currentValue = newData;
                },
                deep: true
            },
        }
    }
</script>

<style scoped>

</style>
