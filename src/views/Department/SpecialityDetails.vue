<!-- 专业列表 -->
<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import router from "@/router";
const { currentRoute } = useRouter();

const href = ref("");
// 专业信息
// const specialityInfo = ref([
//   { id: "1", name: "数据科学与大数据技术专业" },
//   { id: "2", name: "计算机科学与技术专业" },
//   { id: "3", name: "计算机科学与技术（专升本）专业" },
//   { id: "4", name: "软件工程专业" },
//   { id: "5", name: "软件工程（专升本）专业" },
//   { id: "6", name: "数字媒体技术专业" },
//   { id: "7", name: "计算机工程系概要" },
// ]);

const specialityDetails = ref({
  name: "专业名",
  nature: "学科性质",
  goal: "培养目标",
  course: "主干课程",
  feature: "专业特色",
  job: "就业方向",
  educationalSystem: "标准学制",
  degree: "学位",
});

// 声明一个异步函数
import { specialityService } from "@/api/speciality.js";
// 获取通过动态参数id查询专业
const speciality = async () => {
  let specialityId = router.currentRoute.value.params.id; // 获取路由参数
  let result = await specialityService(specialityId);
  specialityDetails.value = result.data.data;
  console.log(specialityDetails.value);
};

// dept/speciality/details/:id

watch(
  () => currentRoute.value,
  (toRoute, fromRoute) => {
    speciality(); // 获取专业
  },
  { immediate: true } // 立即执行一次回调函数
);
</script>

<template>
  <!-- 专业设置 -->
  <el-tag type="primary" class="speciality_name" effect="dark">{{ specialityDetails.name }}</el-tag>
  <!-- 待优化 -->
  <!-- <div v-html="specialityDetails.name"></div> -->
  <!-- 专业基本信息 -->
  <div class="info">
    <p>
      <span>学科性质：</span>
      <!-- 本科 -->
      {{ specialityDetails.nature }}
    </p>
    <p>
      <span>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;制：</span>
      {{ specialityDetails.educationalSystem }}
      <!-- 四年 -->
    </p>
  </div>
  <!-- 专业内容 -->
  <div class="content">
    <div class="sort">
      <el-tag type="primary" class="con_tag" effect="dark">培养目标</el-tag>
      <p>{{ specialityDetails.goal }}</p>
    </div>

    <div class="sort">
      <el-tag type="primary" class="con_tag" effect="dark">主干课程</el-tag>
      <p>{{ specialityDetails.course }}</p>
    </div>

    <div class="sort">
      <el-tag type="primary" class="con_tag" effect="dark">专业特色</el-tag>
      <!-- <p>专业特色</p> -->
      <p>{{ specialityDetails.feature }}</p>
    </div>

    <div class="sort">
      <el-tag type="primary" class="con_tag" effect="dark">就业方向</el-tag>
      <!-- <p v-html="specialityDetails.job"></p> -->
      <p>{{ specialityDetails.job }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ol,
ul,
li {
  list-style-type: none;
}

// 标签样式
.el-tag {
  padding: 20px 20px;
  background-color: #015ca1;
  border: 1px solid #015ca1;
  border-radius: 0%;
}

// 专业名样式
.speciality_name {
  font-size: 20px;
  margin-bottom: 3rem;
}

// 内容标签样式
.con_tag {
  padding: 15px 10px;
  font-size: 16px;
}

.content {
  .sort {
    margin-top: 2.5rem;
  }

  // p {
  //   text-indent: 2em;
  //   //   // white-space: pre-line;
  // }
}

.list {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;

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

.info span {
  display: inline-block;
  width: 80px;
  color: #015ca1;
  padding-right: 0.2rem;
  font-weight: bold;
  text-align: justify;
}
</style>