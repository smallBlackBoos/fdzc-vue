<script setup>
import { ref } from "vue";
import router from "@/router";

// 发送请求通过动态参数的id
// 声明一个异步函数
import { articleService } from "@/api/article.js";

const detail = ref({
  articleTitle: '标题',
  createTime: '2024-06-15 22:54:51',
  articleContent: '内容'
});

// 获取通过动态参数id查询文章
const article = async () => {
  let articleId = router.currentRoute.value.params.id;
  let result = await articleService(articleId);
  detail.value = result.data.data;
  console.log(detail.value)
};

article();
</script>

<template>
  <!-- 标题 -->
  <h1 class="title">{{ detail.articleTitle }}</h1>
  <!-- 时间 -->
  <div class="time">
    <span>{{ detail.createTime }}</span>
  </div>
  <!-- 内容 -->
  <div class="content" v-html="detail.articleContent"></div>
</template>

<style lang="scss" scoped>
  .title {
    text-align: center;
  }

  .time {
    display: flex;  /* Flexbox布局 */
    justify-content: flex-end; /* 将元素对其到容器右侧 */
    font-size: 0.9rem;
    color: #024a99; /* 时间颜色 */
  }

  .content {
    margin-top: 20px;
  }
</style>