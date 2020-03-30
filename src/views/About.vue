<template>
  <div class="about">
    <h1>This is an about page</h1>

    <x-chart :id="id" :option="option"></x-chart>
  </div>
</template>
<script>
// 导入chart组件
import XChart from "./chart.vue";
// 导入chart组件模拟数据
import options from "../chart-options/options";
export default {
  name: "app",
  data() {
    let option = options.bar;
    return {
      id: "test",
      option: option
    };
  },
  components: {
    XChart
  }
};
</script>
<style>
#test {
  width: 600px;
  height: 400px;
  margin: 40px auto;
}
</style>