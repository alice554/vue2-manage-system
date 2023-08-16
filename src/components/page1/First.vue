<template>
  <div class="wrapper">
    <hr />
    <button @click="send">send</button>
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
  methods: {
    send() {
      this.message = "这是传递到 second 中的数据!";
    // send 方法使用 $emit 方法触发 msg 事件，并将组件实例的 message 数据作为数据传递给了事件e
      Bus.$emit("msg", this.message);
    },
  },
};
</script>
    