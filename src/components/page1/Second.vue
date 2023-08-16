<template>
    <div class="wrapper">
      <hr />
      <!-- 显示该数据 -->
      <p>{{ message }}</p>
    </div>
  </template>
  <script>
  import Bus from "../../utils/bus";
  export default {
    data() {
      return {
        message: "",
      };
    },
    mounted(){
        // 可以确保self指向组件实例
        let self = this;
        // 在需要接受信息的Second.vue组件中设置监听事件:
        Bus.$on('msg',(e) =>{
            // self.message为了在组件的模板中显示该数据
            // e接收Fist中的this.message
            // 把接收到的数据更新到组件的 data 中
            self.message = e;
        });
    },
  };
  </script>