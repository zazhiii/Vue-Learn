<template>
  <div class="article-page">
    <div
      class="article-item"
      v-for="item in articleList" :key="item.id"
      @click="$router.push(`/article/${item.id}`)"
    >
      <div class="head">
        <div class="con">
          <p class="title">{{ item.title }}</p>
          <p class="other">{{ item.author }} | {{ item.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  async created() {
    // 使用本地模拟数据
    console.log('加载数据~~~')
    this.articleList = [
      { id: 1, title: 'Vue3 入门', author: '张三', date: '2025-08-07' },
      { id: 2, title: '组件通信详解', author: '李四', date: '2025-08-06' },
      { id: 3, title: 'Vue Router 实践', author: '王五', date: '2025-08-05' },
      { id: 4, title: 'Vuex 状态管理', author: '赵六', date: '2025-08-04' },
      { id: 5, title: 'Pinia 新一代状态库', author: '钱七', date: '2025-08-03' },
      { id: 6, title: 'Vue3 响应式原理', author: '孙八', date: '2025-08-02' },
      { id: 7, title: '组合式 API 实战', author: '周九', date: '2025-08-01' },
      { id: 8, title: 'Vue3 性能优化', author: '吴十', date: '2025-07-31' },
      { id: 9, title: 'Vue3 + TS 项目搭建', author: '郑十一', date: '2025-07-30' },
      { id: 10, title: 'Vue3 动画与过渡', author: '王十二', date: '2025-07-29' }
    ]
  },
  data () {
    return {
      articleList: []
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>