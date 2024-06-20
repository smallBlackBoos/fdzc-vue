<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import router from "@/router";
const { currentRoute } = useRouter();

var articleType = null;
const href = ref("");
const currentPage = ref(1);
const pageSize = ref(10);
const showType = ref();
const info = ref({
  total: 80,
  rows: [
    { id: 1, date: "2024-06-15", title: "通知公告标题1" },
    { id: 2, date: "2024-06-14", title: "通知公告标题2" },
    { id: 3, date: "2024-06-13", title: "通知公告标题3" },
    { id: 4, date: "2024-06-15", title: "通知公告标题4" },
    { id: 5, date: "2024-06-14", title: "通知公告标题5" },
    { id: 6, date: "2024-06-13", title: "通知公告标题6" },
    { id: 7, date: "2024-06-15", title: "通知公告标题7" },
    { id: 8, date: "2024-06-14", title: "通知公告标题8" },
    { id: 9, date: "2024-06-13", title: "通知公告标题9" },
    { id: 10, date: "2024-06-15", title: "通知公告标题10" },
  ],
});

// 声明一个异步函数
import { articleListService } from "@/api/article.js";
// 获取通过动态参数articleType查询分类
const articleList = async (articleType) => {
  let result = await articleListService(articleType);
  info.value = result.data;
  console.log(info.value)
};

const handleCurrentChange = (val) => {
  let params = {
    pageNum: val,
    pageSize: pageSize.value,
    articleType: articleType,
  };
  articleList(params); // 通过分类信息获取帖子
};

watch(
  () => currentRoute.value,
  (toRoute, fromRoute) => {
    // http://127.0.0.1:5173/discipline_con/dc/2/details/1
    href.value = router.currentRoute.value.fullPath + "/details/";
    articleType = router.currentRoute.value.params.articleType; // 获取路径参数（文章类型）
    showType.value = articleType;

    let params = {
      pageNum: currentPage.value,
      pageSize: pageSize.value,
      articleType: articleType,
    };
    articleList(params); // 通过分类信息获取帖子
  },
  { immediate: true } // 立即执行一次回调函数
);
</script>

<template>
  <!-- 列表 -->
  <div class="news-list">
    <div class="news-item" v-for="news in info.rows" :key="news.articleId">
      <!-- <a href="/discipline_con/details/1" class="news-title">{{ news.title }}</a> -->
      <a :href="href + news.articleId" class="news-title">{{ news.articleTitle }}</a>
      <span class="news-time">{{ news.createTime }}</span>
    </div>
  </div>

  <!-- 分页条 -->
  <div class="pagination">
    <el-pagination
      background
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      layout="total, prev, pager, next"
      :total="info.total"
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
  width: 70%;
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

  .is-background .el-pager li {
    border: 1px solid #aaa;
  }
}
</style>