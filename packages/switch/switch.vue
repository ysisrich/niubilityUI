<template>
  <div class="nb-switch" :class="{'is-checked': value}" @click="handleClick">
    <input
      class="nb-switch__input"
      type="checkbox"
      :name="name"
      ref="input"
    >
    <span class="nb-switch__core" ref="core">
      <span class="nb-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'NbSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('change', !this.value)
      // 点击的时候，还需要修改背景色
      // console.log(this.value)
      // 等待value发生了改变，在setColor
      // 数据修改后，等待DOM更新，在修改按钮的颜色
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        // console.log(color)
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    // 修改开关的颜色
    this.setColor()
    // 控制checkbox的checkbox
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss" scoped>
@import './switch.scss'
</style>
