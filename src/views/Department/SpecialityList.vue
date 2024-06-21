<!-- 专业列表 -->
<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import router from "@/router";
const { currentRoute } = useRouter();

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
const speciality = ref([]); // 专业信息

// 声明一个异步函数
import { specialityListService } from "@/api/speciality.js";
// 获取专业列表
const specialityList = async () => {
  let result = await specialityListService();
  speciality.value = result.data.rows;
  console.log(speciality.value)
};

// dept/speciality/details/:id

watch(
  () => currentRoute.value,
  (toRoute, fromRoute) => {
    href.value = router.currentRoute.value.fullPath + "/";
    specialityList(); // 获取专业列表
  },
  { immediate: true } // 立即执行一次回调函数
);
</script>

<template>
  <!-- 专业设置 -->
  <el-tag type="primary" effect="dark">计算机工程系</el-tag>
  <div class="list">
    <li v-for="item in speciality" :key="item.id">
      <a :href="href + item.id">{{ item.name }}</a>
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