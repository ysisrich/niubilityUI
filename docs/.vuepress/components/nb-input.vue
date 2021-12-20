<template>
  <div class="nb-input" :class="{'nb-input--suffix': showSuffix}">
    <!-- 如果传了show-password, 判断是否需要切换 密码的显示 如果不传，不判断 -->
    <input
      class="nb-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text':'password') : type"
      :autofocus="autofocus"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :maxlength="max"
      :minlength="min"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    >
    <span class="nb-input__suffix" v-if="showSuffix">
      <i class="nb-input__icon nb-icon-close" v-if="clearable && value" @click="clear"></i>
      <i class="nb-input__icon nb-icon-search" v-if="showSearch" @click="search"></i>
      <span class="nb-input__icon nb-icon-meh-o nb-icon-lg"  v-if="showEmotion" @click="emotion"></span>
      <span class="nb-input__icon nb-icon-send-o nb-icon-lg" style="margin:8px;"  v-if="showEmotion" @click="send"></span>
      <i class="nb-input__icon nb-icon-eye"
        v-if="showPassword"
        @click="handlePassword"
        :class="{'nb-icon-eye-slash':passwordVisible}"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'NbInput',
  data () {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false
    }
  },
  props: {
    max:Number,
    min:Number,
    form: String,
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showSearch:{
      type: Boolean,
      default: false
    },
    showEmotion:{
      type: Boolean,
      default: false
    },
    autofocus:{
      type: Boolean,
      default: false
    },
    readonly:{
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword || this.showSearch || this.showEmotion
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      // 把内容清空
      this.$emit('input', '')
    },
    search(){
      this.$emit('search', this.value)
    },
    emotion(){
      this.$emit('emotion', '')
    },
    send(){
      this.$emit('send', this.value)
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/input.scss';
@import './scss/font-awesome.scss';
</style>
