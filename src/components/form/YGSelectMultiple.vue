<template>
    <el-form-item :label="label" :prop="prop" :label-width="formLabelWidth?formLabelWidth:'120px'" class="yigeng">
        <el-select :value="currentValue" :placeholder="currentPlaceholder" filterable multiple
                   style="width: 100%"
                   @change="haChange">
            <template v-for="opt of currentOptions">
                <el-option :label="opt.label" :value="opt.value"></el-option>
            </template>
        </el-select>
    </el-form-item>
</template>

<script>
    export default {
        data() {
            return {
                currentValue: this.value,
                currentProp: this.prop,
                currentOptions: this.options,
                currentPlaceholder: this.placeholder || '请选择',
            }
        },
        props: ['value', 'label', 'prop', 'options', 'placeholder','formLabelWidth'],
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

<style>
    .yigeng{
        min-height: 36px!important;
        height: 100%!important;
    }
</style>
