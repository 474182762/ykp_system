<template>
    <el-form-item :label="label" :prop="prop" :label-width="formLabelWidth?formLabelWidth:'120px'">
        <el-select :value="currentValue" :placeholder="currentPlaceholder" filterable
                   style="width: 100%"
                   @change="haChange">
            <el-option
                v-for="item in currentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            <!--<template v-for="opt of currentOptions">-->
                <!--<el-option :key="opt.value" :label="opt.label" :value="opt.value"></el-option>-->
            <!--</template>-->
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
                    console.log(newData);
                    this.currentValue = newData;
                },
                deep: true
            },

        }
    }
</script>

<style scoped>

</style>
