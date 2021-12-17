import NbButton from './button.vue';

NbButton.install = (Vue) => {
  Vue.component(NbButton.name, NbButton);
};

export default NbButton;