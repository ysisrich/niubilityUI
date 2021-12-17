import NbDialog from './dialog.vue';

NbDialog.install = (Vue) => {
  Vue.component(NbDialog.name, NbDialog);
};

export default NbDialog;