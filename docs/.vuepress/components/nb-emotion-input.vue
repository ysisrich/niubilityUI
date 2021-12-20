<template>
    <div class="nb-emotion-input-box">
      <nb-input v-model="value" :placeholder="placeholder" showEmotion @emotion="visible = !visible" @send="handleSend"></nb-input>
      <nb-emotion v-show="visible" class="nb-emotion" @click="handleEmotion"></nb-emotion>
    </div>
</template>

<script>
import NbInput from './nb-input.vue';
import NbEmotion from './nb-emotion.vue';

export default {
  name:'NbEmotionInput',
  components:{
    NbInput,NbEmotion
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data(){
      return {
          visible:false,
          list: [
            ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴'],
            ['睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过'],
            ['酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢'],
            ['饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂'],
            ['疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见'],
            ['擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠'],
            ['鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀'],
            ['西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰',],
            ['凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀'],
            ['足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强'],
            ['弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你'],
            ['NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈'],
            ['磕头', '回头', '跳绳', '挥手', '激动', '街舞', '左太极', '右太极']
        ]
      }
  },
  methods:{
    //  选择表情包
    handleEmotion(emo,url){
        this.value +=emo
    },
    handleSend(){
        let html = this.value.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, this.emotion)
        this.$emit('send',html)
    },
    emotion (res) {
        let word = res.replace(/\#|\;/gi,'')
        const list = this.list.flat(Infinity)
        let index = list.indexOf(word)
        return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" style="vertical-align: sub;" align="middle">`   
    }
  }
}
</script>
<style scoped lang="scss">
@import './scss/emotion-input.scss';
</style>