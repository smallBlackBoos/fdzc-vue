<script setup>
import { ref } from "vue";

//最新动态
const currentPage = ref(0);
const pageSize = ref(10);
const newsList = ref({
  total: 80,
  records: [
    { id: 1, date: "2024-06-15", title: "最新动态标题1" },
    { id: 2, date: "2024-06-14", title: "最新动态标题2" },
    { id: 3, date: "2024-06-13", title: "最新动态标题3" },
    { id: 4, date: "2024-06-15", title: "最新动态标题4" },
    { id: 5, date: "2024-06-14", title: "最新动态标题5" },
    { id: 6, date: "2024-06-13", title: "最新动态标题6" },
    { id: 7, date: "2024-06-15", title: "最新动态标题7" },
    { id: 8, date: "2024-06-14", title: "最新动态标题8" },
    { id: 9, date: "2024-06-13", title: "最新动态标题9" },
    { id: 10, date: "2024-06-15", title: "最新动态标题10" },
  ]
});

const handleSizeChange = (val) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`);
};
</script>

<template>
  <!-- 最新动态 -->
  <div class="news-list">
    <div class="news-item" v-for="news in newsList.records" :key="news.id">
      <a href="" class="news-title">{{ news.title }}</a>
      <span class="news-time">{{ news.date }}</span>
    </div>
  </div>

  <!-- 分页条 -->
  <div class="pagination">
    <el-pagination
      background
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      layout="total, prev, pager, next"
      :total="newsList.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="scss" scoped >
.news-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #bebebe; /* 底部边框 */
  transition: background-color 0.3s, color 0.3s; /* 动画效果 */
}

.news-item:last-child {
  border-bottom: none; /* 最后一个项目无边框 */
}

.news-title {
  text-decoration: none;
  color: #0e0e0e;
  font-size: 1.25rem;
}

.news-title:hover {
  color: #fb7e25; /* 悬停字体颜色 */
}

.news-time {
  font-size: 0.9rem;
  color: #024a99; /* 时间颜色 */
}

/* 分页条距离顶部20px */
.pagination {
    margin-top: 20px;
}

/* 分页条居中 */
.el-pagination {
    justify-content: center;

    .is-background .el-pager li{
        border: 1px solid #aaa;
    }
}
</style>