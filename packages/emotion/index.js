import NbEmotion from './emotion.vue';

NbEmotion.install = (Vue) => {
  Vue.component(NbEmotion.name, NbEmotion);
};

export default NbEmotion;