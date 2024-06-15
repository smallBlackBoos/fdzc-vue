<script setup>
</script>

<template>
  <!-- 专业设置 -->
  <el-tag type="primary" effect="dark">计算机工程系</el-tag>
  <div class="list">
    <li><a href="">数据科学与大数据技术专业</a></li>
    <li><a href="">计算机科学与技术专业</a></li>
    <li><a href="">计算机科学与技术（专升本）专业</a></li>
    <li><a href="">软件工程专业</a></li>
    <li><a href="">软件工程（专升本）专业</a></li>
    <li><a href="">数字媒体技术专业</a></li>
    <li><a href="">计算机工程系概要</a></li>
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
</style>
