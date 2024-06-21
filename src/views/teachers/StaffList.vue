<!-- 专业列表 -->
<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import router from "@/router";
const { currentRoute } = useRouter();

var articleType = null; // 类型
const href = ref("");
// 专业信息
// const speciality = ref([
//   { id: "1", name: "数据科学与大数据技术专业" },
//   { id: "2", name: "计算机科学与技术专业" },
//   { id: "3", name: "计算机科学与技术（专升本）专业" },
//   { id: "4", name: "软件工程专业" },
//   { id: "5", name: "软件工程（专升本）专业" },
//   { id: "6", name: "数字媒体技术专业" },
//   { id: "7", name: "计算机工程系概要" },
// ]);
const staff = ref([]); // 专业信息

// 声明一个异步函数
import { articleTypeListService } from "@/api/article.js";
// 获取通过动态参数articleType查询分类
const articleTypeList = async (articleType) => {
  let result = await articleTypeListService(articleType);
  staff.value = result.data;
  console.log(staff.value);
};

// dept/speciality/details/:id

watch(
  () => currentRoute.value,
  (toRoute, fromRoute) => {
    articleType = router.currentRoute.value.params.articleType; // 获取路径参数（文章类型）
    href.value = router.currentRoute.value.fullPath + "/details/";
    articleTypeList(articleType); // 获取教师列表
  },
  { immediate: true } // 立即执行一次回调函数
);
</script>

<template>
  <!-- 专业设置 -->
  <!-- <el-tag type="primary" effect="dark">计算机工程系</el-tag> -->
  <div class="list">
    <li v-for="item in staff.rows" :key="item.articleId">
      <a :href="href + item.articleId">{{ item.articleTitle }}</a>
    </li>
  </div>
</template>

<style lang="scss" scoped>
ol,
ul,
li {
  list-style-type: none;
}

.el-tag {
  padding: 20px 20px;
  font-size: 20px;
  background-color: #015ca1;
  border: 1px solid #015ca1;
  border-radius: 0%;
}

.list {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;

  li {
    padding: 0.2rem 0;
    width: 25%;
    color: #4b4b4b;
    width: 240px;
    height: 50px;

    a {
      text-decoration: none;
      color: #4b4b4b;
      width: 90%;
      display: block;
    }
  }
}
</style>
@/api/speciality.js