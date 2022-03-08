<template>
  <div class="app-container">
    <h1 v-color="color">App 根组件</h1>
    <p v-color="'red'">测试</p>
    <button @click="color='green'">改变color颜色值</button>
    <hr />

    <Article>   

     <template #title>
        <h3 v-color="color">一首诗</h3>
     </template>

     <template #content="{msg,user}">
       <div>
         <p>啊，大海，全是水</p>
         <p>啊，蜈蚣，全是腿</p>
         <p>啊，辣椒，净辣嘴</p>
         <p>{{msg}}</p>
         <p>{{user.name}}</p>
       </div> 
     </template>

     <template #author>
       <div>作者：小罗</div>
     </template>

    </Article>
    <hr>

    <div class="box" style="display:none">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <!-- 默认情况下，在使用组件的时候，提供的内容都会被填充到名字为default 的插槽之中 -->
        <!-- 如果要把内容填充到指定名称的插槽中，需要使用v-slot:这个指令 -->
        <!-- v-slot:后面要跟上插槽的名字 -->
        <!-- v-slot:指令不能直接用在元素身上，必须用在template标签上 -->
        <!-- template这个标签，它是一个虚拟的标签，只起到包裹性质的作用，但是不会被渲染为任何实质性的html元素 -->

        <template #rosie>
          <p>这是在Left组件的内容区域，声明的p标签</p>
        </template>
      </Left>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'

import Article from '@/components/Article.vue'

export default {
  data(){
    return{
      color:'blue'
    }
  },
  components:{
    Left,
    Article
  },
  directives:{
    // 定义名为color的自定义指令
    // color:{
    //   // 形参中的el表示当前指令所绑定到的那个DOM元素的实例
    //   bind(el,binding){
    //     console.log('触发了v-color的bind函数')
    //     el.style.color=binding.value
    //     console.log(binding)
    //   },
    //   update(el,binding){
    //     console.log('触发了v-color的update函数')
    //     el.style.color=binding.value
    //   }
    // }
    color(el,binding){
      el.style.color=binding.value
    }
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
