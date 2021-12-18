<template>
  <!-- 对话框的遮罩 .self代表只有点击自己才触发 -->
  <transition name="dialog-fade">
    <div class="nb-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="nb-dialog" :style="{width, marginTop: top}">
        <div class="nb-dialog__header">
          <slot name="title">
            <span class="nb-dialog__title">{{title}}</span>
          </slot>
          <button class="nb-dialog__headerbtn" @click="handleClose">
            <i class="nb-icon-close"></i>
          </button>
        </div>
        <div class="nb-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="nb-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'NbDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/dialog.scss'
</style>
