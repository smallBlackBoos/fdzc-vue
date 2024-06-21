<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import router from "@/router";
const { currentRoute } = useRouter();

// 发送请求通过动态参数的articType
// 声明一个异步函数
import { articleListService } from "@/api/article.js";

const details = ref({
  articleTitle: '十年成果奖',
  createTime: '2024-06-15 22:54:51',
  articleContent: '内容'
});


// 获取通过动态参数articleType查询文章
const article = async () => {
  let articleType = router.currentRoute.value.params.articleType;

  let params = {
      articleType: articleType,
  };

  let result = await articleListService(params);
  details.value = result.data.rows[0];
};

watch(
  () => currentRoute.value,
  (toRoute, fromRoute) => {
    article();
  },
  { immediate: true } // 立即执行一次回调函数
);
</script>

<template>
  <h1 class="title">{{ details.articleTitle }}</h1>
  <div class="time">
    <span>{{ details.createTime }}</span>
  </div>

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