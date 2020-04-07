<template>
  <div class="about">
    <canvas id="myCanvas" width="800" height="500" style="border:1px solid #d3d3d3;" ref="myCanvas"></canvas>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      id: "test",
      time:new Date(),
    };
  },
  components: {},
  created() {
    
    this.init();
    this.init1();
  },
  computed:{
    a(){
      return this.time.getSeconds();
    },
    b(){
      return this.time.getMilliseconds();
    }
  },
  mounted() {},
  methods: {
    init() {  

      this.$nextTick(function() {
        var canvas = document.getElementById("myCanvas");
        if (!canvas.getContext) return;
        var ctx = canvas.getContext("2d");

        var img1 = new Image();   // 创建img元素
        img1.onload = function(){
          ctx.drawImage(img1, 200, 30)
        }
        img1.src = 'https://www.runoob.com/images/compatible_chrome.gif'; // 设置图片源地址

        var img2 = new Image();   // 创建img元素
        img2.onload = function(){
          ctx.drawImage(img2,300, 30)
        }
        img2.src = 'https://www.runoob.com/images/compatible_chrome.gif'; // 设置图片源地址

        var img3 = new Image();   // 创建img元素
        img3.onload = function(){
          ctx.drawImage(img3, 400, 80)
        }
        img3.src = 'https://www.runoob.com/images/compatible_chrome.gif'; // 设置图片源地址

        var img4 = new Image();   // 创建img元素
        img4.onload = function(){
          ctx.drawImage(img4, 300, 150)
        }
        img4.src = 'https://www.runoob.com/images/compatible_chrome.gif'; // 设置图片源地址

        var img5 = new Image();   // 创建img元素
        img5.onload = function(){
          ctx.drawImage(img5, 200, 150)
        }
        img5.src = 'https://www.runoob.com/images/compatible_chrome.gif'; // 设置图片源地址

        var img6 = new Image();   // 创建img元素
        img6.onload = function(){
          ctx.drawImage(img6, 100, 80)
        }
        img6.src = 'https://www.runoob.com/images/compatible_chrome.gif'; // 设置图片源地址

        // var imgBorder = new Image();   // 创建img元素
        // imgBorder.onload = function(){
        //   ctx.drawImage(imgBorder, 160,65, 200, 80)
        // }
        // imgBorder.src = 'https://www.runoob.com/images/compatible_chrome.gif'; // 设置图片源地址

        ctx.ellipse(260,100,150,60,0,0,Math.PI*2);
        ctx.fillStyle="blue";
        ctx.strokeStyle="#000";
        ctx.fill();
        ctx.stroke();


            ctx.beginPath();
        ctx.strokeStyle = "rgba(0,0,0,.3)";
        ctx.arc(0, 0, 40, 0, 2 * Math.PI);
        ctx.stroke();
    
        //绘制月球
        // ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds());
        // ctx.translate(40, 0);
        // ctx.drawImage(moon, -3.5, -3.5);
        // ctx.restore();
    
        // requestAnimationFrame(draw);


      });
    },
    init1(){
      //绘制月球轨道
    
    }
  }
};
</script>
<style>
</style>