<script setup>
import { onMounted, ref, watch } from "vue";
import router from "@/router";

// 发送请求通过动态参数的id
// 声明一个异步函数
import { articleInfoService } from "@/api/article.js";

let needTimeArticleType = ['201', '202'];   // 需要时间的文章类型
const showTime = ref(false);                // 默认不显示时间
const details = ref({
  articleTitle: '标题',
  createTime: '2024-06-15 22:54:51',
  articleContent: '内容'
});

// 获取通过动态参数id查询文章
const articleInfo = async () => {
  let id = router.currentRoute.value.params.id;
  let result = await articleInfoService(id);
  details.value = result.data.data;
  let articleType = details.value.articleType;

  if (needTimeArticleType.indexOf(articleType) == -1) {  // 判断当前文章是否需要展示时间
    // 元素在 needTimeArticleType 不存在（即无需时间）
    showTime.value = false;
  } else {
    // 元素在 needTimeArticleType 存在（即需时间）
    showTime.value = true;
  }

  console.log(details.value);
};

articleInfo();
</script>

<template>
  <!-- 标题 -->
  <h1 class="title">{{ details.articleTitle }}</h1>
  
  <!-- 时间 -->
  <div class="time">
    <span v-if="showTime">{{ details.createTime }}</span>
  </div>

  <!-- 内容 -->
  <div class="content" v-html="details.articleContent"></div>
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