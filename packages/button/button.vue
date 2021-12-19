<template>
  <button
    :class="[
      'nb-button',
      `nb-button--${type}`,
      plain ? 'is-plain' : '',
      round ? 'is-round' : '',
      circle ? 'is-circle' : '',
      disabled ? 'is-disabled' : '',
      animate ? `nb-animate-${animate}`: '',
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i class="nb-icon-spinner nb-icon-spin" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <!-- tip:根据是否传入内容进行span渲染 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'NbButton',
  data() {
    return {}
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  },
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default',
    },
    // 朴素按钮
    plain: {
      type: Boolean,
      default:false
    },
    // round按钮
    round: {
      type: Boolean,
      default:false
    },
    // 圆形按钮
    circle: {
      type: Boolean,
      default:false
    },
    // icon
    icon: {
      type: String,
      default: ''
    },
    // loading
    loading: {
      type: Boolean,
      default: false
    },
    // animate
    animate: {
      type: String,
      default: ''
    },
    // disabled禁用
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="scss">
  @import './button.scss'
</style>