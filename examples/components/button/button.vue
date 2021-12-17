<template>
  <button
    :class="[
      'nb-button',
      `nb-button--${type}`,
      plain ? 'is-plain' : '',
      round ? 'is-round' : '',
      circle ? 'is-circle' : '',
      disabled ? 'is-disabled' : ''
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i :class="icon" v-if="icon" />
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
  components: {},
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
      // tip：这里icon为数组类型，给它添加一个布尔作为默认值
      type: String,
      default: ''
    },
    // disabled禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watched: {}
}
</script>
<style scoped lang="scss">
  @import './button.scss'
</style>