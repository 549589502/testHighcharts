<template>
  <div class="about">
    

  </div>
</template>
<script>

export default {
  name: "app",
  data() {
    return {
      id: "test",
    };
  },
  components: {
    
  },
  created(){
    this.helloAsync();
  },
  methods:{
    testAwait(){
      return new Promise((resolve) => {
          setTimeout(function(){
              console.log("testAwait");
              resolve();
          }, 3000);
      });
    },
    
    async helloAsync(){
      await this.testAwait();       //await 关键字仅在 async function 中有效。如果在 async function 函数体外使用 await ，你只会得到一个语法错误
      console.log("helloAsync");
    }
    
  }
};
</script>
<style>

</style>