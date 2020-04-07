<template>
  <div class="about"></div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      id: "test"
    };
  },
  components: {},
  created() {
    this.init();
  },
  methods: {
    init() {
      // let arr = Array.of(1, 2, 3, 4);
      // console.log(arr);
      // console.log(arr.find(item => item > 2)); // 3

      let arr = [
        { id: 1, name: "a",child:{user:'qingqinng1',age:18}},
        { id: 2, name: "b",child:{user:'qingqinng2',age:18}},
        { id: 3, name: "c",child:{user:'qingqinng3',age:18}},
        { id: 4, name: "d",child:{user:'qingqinng4',age:18}},
        { id: 5, name: "e",child:{user:'qingqinng5',age:18}},
      ];
      console.log(arr.find(item => item.child.age === 18));   //返回符合条件的第一个
    }
  }
};
</script>
<style>
</style>