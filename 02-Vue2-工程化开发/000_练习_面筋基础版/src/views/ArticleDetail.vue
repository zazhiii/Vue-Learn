<template>
  <div class="article-detail-page">
    <nav class="nav"><span class="back" @click="$router.push('/article')">&lt;</span> 文章详情</nav>
    <header class="header">
      <h1>{{ article.title }}</h1>
      <p>{{ article.date }} | {{ article.author }}</p>
    </header>
    <main class="body">
      <pre style="white-space: pre-wrap;word-break: break-all;">{{ article.content }}</pre>
    </main>
  </div>
</template>

<script>
export default {
  name: "ArticleDetailPage",
  created() {
      this.articleList.forEach(item => {
        if (item.id === Number(this.$route.params.id)) {
          this.article = item;
        }
      });
  },
  data() {
    return {
      article: { id: 1, title: 'Vue3 入门', author: '张三', date: '2025-08-07' },
      articleList: [
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
    }
  }
}
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
    padding: 0 15px;
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .body {
    padding: 0 15px;
  }
}
</style>