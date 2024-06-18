<script setup>
// 声明一个异步的函数
// 定义响应式变量 LeaderItem
const LeaderItem = ref()
import {
    articleInfoService, articleTypeListService
} from "@/api/article.js";
import {ref, reactive} from "vue";
// 定义 LeaderInfo 异步方法
const LeaderInfo = async () => {
    try {
        let result = await articleTypeListService(102);
        // 假设 carouselItems 是一个响应式变量，例如 Vue 中的 ref
        LeaderItem.value = result.data.rows;
        console.log(LeaderItem.value)
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}
LeaderInfo();

</script>
//领导简介
<template>
    <div v-for="item in LeaderItem" :key="item.id">
        <el-tag type="primary" effect="dark"> {{ item.articleTitle }}</el-tag>
        <div class="list">
                <li>
                    <div v-html="item.articleContent"></div>
                </li>
        </div>
    </div>
</template>

<style lang="scss" scoped>
ol,
ul,
li {
    list-style-type: none;
    margin-top: 40px;
}

.el-tag {
    padding: 20px 20px;
    font-size: 20px;
    background-color: #015ca1;
    border: 1px solid #015ca1;
    border-radius: 0%;
}

</style>