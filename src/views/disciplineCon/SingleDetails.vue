<script setup>
import { ref } from "vue";
import router from "@/router";

// 发送请求通过动态参数的articType
// 声明一个异步函数
import { articleListService } from "@/api/article.js";

const detail = ref("");

// 获取通过动态参数articleType查询文章
const article = async () => {
  let articleType = router.currentRoute.value.params.articleType;

  let params = {
      articleType: articleType,
  };

  let result = await articleListService(params);
  detail.value = result.rows[0].articleContent;
};

article();
</script>

<template>
  十年成果展
  {{ detail }}
</template>



<style>

</style>