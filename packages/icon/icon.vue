<template>
    <i :class="[`nb-icon-${type}`,{'nb-icon-spin':spin}]" :style="{ fontSize:`${size}px`,color }" ></i>
</template>

<script>
export default {
    name: 'NbIcon',
    props:{
        type:String,
        size:{
            type:Number,
            default:20
        },
        color:{
            type:String,
            default:'#2c3e50'
        },
        spin:{
            type:Boolean,
            default:false
        }
    },

};
</script>

<style lang="scss" scoped>

</style>