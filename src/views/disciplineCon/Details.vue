<script setup>
import { onMounted, ref, watch } from "vue";
import router from "@/router";

// 发送请求通过动态参数的id
// 声明一个异步函数
import { articleService } from "@/api/article.js";

const detail = ref("");

// 获取通过动态参数id查询文章
const article = async () => {
  let articleType = router.currentRoute.value.params.id;
  let result = await articleService(articleType);
  detail.value = result.articleContent;
};

article();
</script>

<template>
  {{ detail }}
</template>



<style>

</style>