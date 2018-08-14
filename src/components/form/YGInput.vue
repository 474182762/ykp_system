<template>
    <el-form-item :label="label" :prop="prop" :label-width="formLabelWidth?formLabelWidth:'120px'">
        <el-input :value="currentValue" :disabled="currentDisabled" :type="currentType"
                  @change="haChange"></el-input>
    </el-form-item>
</template>

<script>
    export default {
        data() {
            return {
                currentValue: this.value,
                currentProp: this.prop,
                currentDisabled: this.disabled || false,
                currentType: this.type || 'text'
            }
        },
        props: ['value', 'label', 'prop', 'disabled', 'type','formLabelWidth'],
        methods: {
            haChange(value) {
                this.currentValue = value;
                // this.$emit(this.currentProp, {prop: this.currentProp, value: value});
                this.$emit('ygForm', {prop: this.currentProp, value: value});
            },
        },
        watch: {
            value: {
                handler(newData, oldData) {
                    this.currentValue = newData;
                },
                deep: true
            }
        }

    }
</script>

<style scoped>

</style>
