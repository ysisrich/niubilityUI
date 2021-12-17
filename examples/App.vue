<template>
<div id="app">

  <!-- 按钮组件 -->
  <div class="row">
      <nb-button plain>按钮</nb-button>  
      <nb-button type="primary" plain>按钮</nb-button>  
      <nb-button type="success" plain>按钮</nb-button>  
      <nb-button type="info" plain>按钮</nb-button>  
      <nb-button type="warning" plain>按钮</nb-button>  
      <nb-button type="danger" plain>按钮</nb-button>  
  </div>

  <div class="row">
      <nb-button round>按钮</nb-button>  
      <nb-button type="primary" round >圆角按钮</nb-button>  
      <nb-button type="success" round>圆角按钮</nb-button>  
      <nb-button type="info" round>圆角按钮</nb-button>  
      <nb-button type="warning" round>圆角按钮</nb-button>  
      <nb-button type="danger" round>圆角按钮</nb-button>  
  </div>

  <div class="row">
      <nb-button circle icon="nb-icon-star-off"></nb-button>  
      <nb-button circle icon="nb-icon-delete" type="primary"  ></nb-button>  
      <nb-button circle icon="nb-icon-edit" type="success" ></nb-button>  
      <nb-button circle icon="nb-icon-share" type="info" ></nb-button>  
      <nb-button circle icon="nb-icon-search" type="warning" ></nb-button>  
      <nb-button circle icon="nb-icon-user" type="danger" ></nb-button>  
  </div>

  <div class="row">
      <nb-button disabled>按钮</nb-button>  
      <nb-button disabled  type="primary"  >禁用按钮</nb-button>  
      <nb-button disabled  type="success" >禁用按钮</nb-button>  
      <nb-button disabled  type="info" >禁用按钮</nb-button>  
      <nb-button disabled  type="warning" >禁用按钮</nb-button>  
      <nb-button disabled  type="danger" >禁用按钮</nb-button>  
  </div>


  <div class="row">
    <nb-button type="primary" plain @click="handleclick">弹出Dialog</nb-button>

    <nb-dialog
        title="tip"
        top="100px"
        width="30%"
        :visible.sync="dialogVisiable"
      >
        <template v-slot:title>
          <span>提示</span>
        </template>

        <span>这是一段信息</span>
        <template v-slot:footer>
          <nb-button @click="dialogVisiable = false">取消</nb-button>
          <nb-button type="primary" @click="dialogVisiable = false">确定</nb-button>
        </template>
      </nb-dialog>
  </div>

  




</div>
  
</template>

<script>
export default {
  data() {
    return {
      dialogVisiable: false,
    };
  },
  methods:{
    handleclick(){
      console.log(11)
      this.dialogVisiable = true
    }
  }
}
</script>

<style scoped lang="scss">
    .row{
      margin-top: 10px;
      .nb-button{
        margin:10px;
      }
    }
</style>
