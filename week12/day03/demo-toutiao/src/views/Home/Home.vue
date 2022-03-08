<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="罗茜头条" fixed />

    <!-- 导入，注册，并使用ArticleInfo组件 -->
    <!-- 在使用组件的时候，如果某个属性名是“小驼峰”形式，则绑定属性的时候，建议改写成“连字符”格式。例如：-->
    <!-- cmtCount建议携程cmt-count -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :disabled="finished">
    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    >
    <Articleinfo
    v-for="item in artlist"
    :key="item.id"
    :title="item.title"
    :author="item.aut_name"
    :cmt-count="item.comm_count"
    :time="item.pubdate"
    :cover="item.cover"
    ></Articleinfo>
    </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 按需导入API接口
import { getArticleListAPI } from '@/api/articleAPI.js'

// 导入需要的组件
import Articleinfo from '@/components/Article/Articleinfo.vue'

export default {
  name: 'Home',
  data () {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 文章的数组
      artlist: [],
      // 是否正在加载下一页数据，如果loading为true，则不会反复触发load事件
      // 每当下一页数据请求回来之后,千万要记得,把loading从true改为false
      loading: true,
      // 所有数据是否加载完毕了，如果没有更多数据了，一定要把finished改成true
      finished: false,
      // 是否正在下拉刷新
      refreshing: false
    }
  },
  created () {
    this.initAriticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initAriticleList (isRefresh) {
      // 发起GET请求，获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      if (isRefresh) {
        // 证明是下拉刷新,新数据在前,旧数据在后
        // this.artlist=[新数据在后,旧数据在前]
        this.artlist = [...res, ...this.artlist]
        this.refreshing = false
      } else {
        // 证明是上拉加载更多;旧数据在前,新数据在后
        // this.artlist = [旧数据在前,新数据在后]
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }
      // 如果是上拉加载更多,那么应该是:

      if (res.length === 0) {
        // 证明没有下一页数据了,直接把finished改成true,表示数据加载完了!
        this.finished = true
      }
    },
    // 只要onload被调用,就应该请求下一页数据
    onLoad () {
      // if (this.loading) return
      console.log('触发了load事件!')
      // 1. 让页码值+1
      this.page++
      // 2. 重新请求接口获取数据
      this.initAriticleList()
    },
    // 下拉刷新的处理函数
    onRefresh () {
      console.log('触发了下拉刷新')
      // 1. 让页码值+1
      this.page++
      // 2. 重新请求接口获取数据
      this.initAriticleList(true)
    }
  },
  // 注册组件
  components: {
    Articleinfo
  }
}
</script>

<style lang="less" scoped>
// .home-container {
//   padding: 46px 0 50px 0;
//   .van-nav-bar {
//     background-color: #007bff;
//   }
//   /deep/.van-nav-bar__title {
//     color: white;
//   }
// }
</style>
