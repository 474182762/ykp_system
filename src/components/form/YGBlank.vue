<template>
    <el-col :span="currentSpan">
        <div style="width: 1px;height: 1px"></div>
    </el-col>
</template>

<script>
    export default {
        data() {
            return {
                currentSpan: parseInt(this.span) || 1
            }
        },
        props: ['span'],
    }
</script>

<style scoped>

</style>
