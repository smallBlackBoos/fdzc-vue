<script lang="ts" setup>
import {computed, ref} from "vue";
import {useRouter} from "vue-router";

// 轮播大图数组
const carouselItems = ref([{
    articleId: 297,
    articleTitle: "",
    articleDescription: "",
    articleCover: "",
    articleType: ""
}]);
//新闻公告
const newsItems = ref([{
    articleId: 297,
    articleTitle: "",
    articleDescription: "",
    articleCover: "",
    articleType: ""
}])
//名师荟萃
const teacherData = ref([{
    articleId: 297,
    articleTitle: "",
    articleDescription: "",
    articleCover: "",
    articleType: ""
}]);
//特色课程
const subjectData = ref([{
    articleId: 297,
    articleTitle: "",
    articleDescription: "",
    articleCover: "",
    articleType: ""
}]);
//办学成果
const ResultData = ref([{
    articleId: 297,
    articleTitle: "",
    articleDescription: "",
    articleCover: "",
    articleType: ""
}]);

import {
    articleListService
} from "@/api/article.js";

// 定义 IndexList 异步方法
// 轮播大图数组
// 获取通过动态参数articleType查询文章
const carouselList = async () => {
    try {
        let params = {
            pageNum: 1,
            pageSize: 5,
            articleType: 100,
        };
        let result = await articleListService(params);
        // 假设 carouselItems 是一个响应式变量，例如 Vue 中的 ref
        carouselItems.value = result.data.rows;
        console.log(carouselItems.value);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}
carouselList();
//新闻公告
const newsList = async () => {
    try {
        let params = {
            pageNum: 1,
            pageSize: 6,
            articleType: 201,
        };
        let result = await articleListService(params);
        // 假设 carouselItems 是一个响应式变量，例如 Vue 中的 ref
        newsItems.value = result.data.rows;
        console.log(newsItems.value)
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}
newsList();

//名师荟萃
const teacherList = async () => {
    try {
        let params = {
            pageNum: 1,
            pageSize: 4,
            articleType: 501,
        };
        let result = await articleListService(params);
        // 假设 carouselItems 是一个响应式变量，例如 Vue 中的 ref
        teacherData.value = result.data.rows;
        console.log(teacherData.value);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}
teacherList();

//特色课程
const subjectList = async () => {
    try {
        let params = {
            pageNum: 1,
            pageSize: 5,
            articleType: 401,
        };
        let result = await articleListService(params);
        // 假设 carouselItems 是一个响应式变量，例如 Vue 中的 ref
        subjectData.value = result.data.rows;
        console.log(subjectData.value);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}
subjectList();

//办学成果
const resultList = async () => {
    try {
        let params = {
            pageNum: 1,
            pageSize: 4,
            articleType: 405,
        };
        let result = await articleListService(params);
        // 假设 carouselItems 是一个响应式变量，例如 Vue 中的 ref
        ResultData.value = result.data.rows;
        console.log(ResultData.value);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}
resultList();


//路由跳转
const router = useRouter();
const handleClick = (link) => {
    router.push(link);
};
//获取图片完整url
const serverBaseUrl = 'http://47.120.31.153:8085';
const getImageSrc = (path: string) => {
    return `${serverBaseUrl}${path}`;
};
//简介省略过多的字
const truncateDescription = (text, maxLength, addOther) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + addOther;
    } else {
        return text;
    }
};
//每行i个
const getRows = (data, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
        rows.push(data.slice(i, i + itemsPerRow));
    }
    return rows;
};
// 拆分年月日
const formatTime = (time) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}

</script>

<template>
    <el-container>
        <el-header style="height: 450px;padding: 0;">
            <!-- Carousel in Header -->
            <div class="carousel-container">
                <el-carousel height="450px" :autoplay="true">
                    <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
                        <div class="carousel-content">
                            <div class="include">
                                <div class="include-section">
                                    <div class="text-section">
                                        <!--                                     <h3>{{ item.title }}</h3>-->
                                        <p>{{ truncateDescription(item.articleDescription, 150, '...') }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="image-section">
                                <img :src="getImageSrc(item.articleCover)" class="carousel-image" alt=""/>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-header>
        <el-container class="main-container">
            <!--名师荟萃-->
            <el-main class="block block-1">
                <el-row>
                    <el-col>
                        <div>
                            <el-space class="aside-header" alignment="center" style="width: 100%;">
                                <el-text class="aside-title">
                                    名师荟萃
                                </el-text>
                                <el-button type="text" class="more-button" @click="handleClick('/teachers/t/501')">更多
                                    +
                                </el-button>
                            </el-space>
                        </div>
                    </el-col>
                    <el-col>
                        <div class="card-container">
                            <el-row :gutter="30" v-for="(row, rowIndex) in getRows(teacherData,2)"
                                    :key="rowIndex"
                                    style="margin-top: 30px;">
                                <el-col :span="12" v-for="(teacher, colIndex) in row" :key="colIndex">
                                    <el-card class="profile-card"
                                             @click="() => handleClick('/teachers/t/501/details/'+ teacher.articleId)">
                                        <div class="profile-content">
                                            <img :src="getImageSrc(teacher.articleCover)" class="profile-image"
                                                 alt="Profile Image"/>
                                            <div class="profile-text">
                                                <div class="card-name">
                                                    <span>{{ teacher.articleTitle }}</span>
                                                </div>
                                                <div class="card-info">
                                                    <span>{{
                                                            truncateDescription(teacher.articleDescription, 50, '...')
                                                        }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <!-- 新闻公告列表 -->
            <el-aside class="block block-2">
                <el-col>
                    <div>
                        <el-space class="aside-header" alignment="center" style="width: 100%;">
                            <el-text class="aside-title">
                                通知公告
                            </el-text>
                            <el-button type="text" class="more-button" @click="handleClick('/news/n/201')">更多 +
                            </el-button>
                        </el-space>
                    </div>
                    <div class="news-list">
                        <div class="news-item" v-for="news in newsItems" :key="news.articleId"
                             @click="() => handleClick('/news/n/202/details/'+ news.articleId)">
                            <span class="news-time">{{ formatTime(news.createTime) }}</span>
                            <span class="news-title">{{ truncateDescription(news.articleTitle, 17, '...') }}</span>
                        </div>
                    </div>
                </el-col>
            </el-aside>
        </el-container>

        <el-container class="main-container" style="margin-top: -30px">
            <!--特色课程-->
            <el-row class="block block-1">
                <el-col>
                    <div>
                        <el-space class="aside-header" alignment="center" style="width: 100%;">
                            <el-text class="aside-title">
                                学科建设
                            </el-text>
                            <el-button type="text" class="more-button" @click="handleClick('/discipline_con/dc/401')">更多
                                +
                            </el-button>
                        </el-space>
                    </div>
                </el-col>
                <el-col style="margin-top: 30px">
                    <el-carousel :interval="4000" type="card" height="300px">
                        <el-carousel-item v-for="(subject, index) in subjectData" :key="index">
                            <div class="card-container">
                                <el-card class="profile-card"
                                         @click="() => handleClick('/discipline_con/dc/401/details/'+subject.articleId)"
                                         shadow="hover">
                                    <div class="profile-content">
                                        <img :src="getImageSrc(subject.articleCover)" class="profile-image"
                                             alt="Profile Image"/>
                                        <div class="profile-text">
                                            <div class="card-name">
                                                <span>{{ subject.articleTitle }}</span>
                                            </div>
                                            <div class="card-info">
                                                <span>{{
                                                        truncateDescription(subject.articleDescription, 50, '...')
                                                    }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
        </el-container>
        <el-container class="main-container" style="margin-top: -100px">
            <!--办学成功-->
            <el-row class="block block-1">
                <el-col>
                    <div>
                        <el-space class="aside-header" alignment="center" style="width: 100%;">
                            <el-text class="aside-title">
                                办学成果
                            </el-text>
                            <el-button type="text" class="more-button" @click="handleClick('/discipline_con/dc/405')">更多
                                +
                            </el-button>
                        </el-space>
                    </div>
                </el-col>
                <el-container>
                    <el-col>
                        <div class="card-container">
                            <el-row :gutter="10" v-for="(row, rowIndex) in getRows(ResultData, 4)"
                                    :key="rowIndex"
                                    style="margin-top: 30px;">
                                <el-col :span="6" v-for="(result, colIndex) in row" :key="colIndex">
                                    <el-card class="profile-card2"
                                             @click="() => handleClick('/discipline_con/dc/405/details/'+result.articleId)">
                                        <div class="profile-content">
                                            <!--                                            <img :src="teacher.image" class="profile-image" alt="Profile Image"/>-->
                                            <div class="profile-text">
                                                <div class="card-name">
                                                    <span>{{ result.articleTitle }}</span>
                                                </div>
                                                <div class="card-info">
                                                    <span>{{
                                                            truncateDescription(result.articleDescription, 70, '...')
                                                        }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-container>
            </el-row>
        </el-container>
    </el-container>
</template>
<style scoped lang="scss">
//主体框架
.main-container {
    flex: 1;
    position: sticky;
    display: flex;
}

/* 对于较大屏幕 */
@media (min-width: 1200px) {
    .main-container {
        margin: 30px 50px; /* 大屏幕外边距 */
    }
    .aside-col {
        margin-top: 50px; /* 桌面设备上的间距 */
    }
}

/* 对于中等屏幕 */
@media (min-width: 768px) and (max-width: 1199px) {
    .main-container {
        margin: 20px 20px; /* 中等屏幕外边距 */
    }
    .aside-col {
        margin-top: 60px; /* 桌面设备上的间距 */
    }
}

/* 对于较小屏幕 */
@media (max-width: 767px) {
    .main-container {
        margin: 0 10px; /* 小屏幕外边距 */
    }
    .aside-col {
        margin-top: 50px; /* 桌面设备上的间距 */
    }
}

//块状占比不同
.block {
    flex: 1; /* 默认每个子元素平分容器空间 */
    padding: 10px; /* 子元素内边距 */
    //background-color: #FFFFFF; /* 子元素背景颜色 */
    margin: 30px; /* 子元素之间的间距 */
}

.block-1 {
    flex: 3; /* 这将使这个块占用双倍于其他块的空间 */

}

.block-2 {
    flex: 1; /* 这个块将占用正常比例的空间 */
}

.block-row {
    padding-bottom: 100px;
}

//新闻公告栏样式
.aside-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.aside-title {
    font-size: 20px;
    font-weight: bold;
    background: linear-gradient(to right, #2980B9, #0768B4);
    -webkit-background-clip: text;
    color: transparent;
    background-clip: text;
}

.more-button {
    color: #2980B9;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.news-list {
    max-height: 600px;
    overflow-y: auto;
}

.news-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    transition: background-color 0.3s, color 0.3s;
}

.news-item:last-child {
    border-bottom: none;
}

.news-item:hover {
    background: linear-gradient(to right, #2980B9, #0768B4);
    color: #FFFFFF;
}

.news-time {
    font-size: 10px;
    padding: 30px 0px;
    position: relative; /* 相对定位 */
    color: #888; /* 时间文字颜色 */
    margin-right: 5px; /* 时间和标题之间的间距 */
}


.news-title {
    font-size: 16px;
    color: #333;
    margin-left: 10px;
    flex-grow: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
}


.news-item:hover .news-time,
.news-item:hover .news-title {
    color: #FFFFFF;
}

//卡片效果
//名师荟萃、特色课程
.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
}

.profile-card {
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    overflow: hidden; /* 防止内部内容溢出 */
    width: calc(100% - 20px); /* 调整卡片宽度，减去间距 */
}

.profile-card::before,
.profile-card::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #409eff;
    transition: width 0.3s ease-out;
}

.profile-card::before {
    top: 0;
    left: 0;
}

.profile-card::after {
    bottom: 0;
    right: 0;
}

.profile-card:hover::before {
    width: 100%;
}

.profile-card:hover::after {
    width: 100%;
}

.profile-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 卡片文本 */
.profile-text {
    display: flex;
    flex-direction: column;
}

.card-name {
    font-size: 1.5em; /* 调整字体大小 */
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
    background: linear-gradient(to right, #2980B9, #0768B4);
    -webkit-background-clip: text;
    color: transparent;
    background-clip: text; /* 渐变色字体 */
    transition: background 0.3s ease;
}

.card-info {
    text-align: center;
    margin-top: 5px;
    color: #888;
    overflow: hidden; /* 文本溢出时隐藏 */
    text-overflow: ellipsis; /* 文本溢出时显示省略号 */
    //white-space: nowrap; /* 强制不换行 */
}


//教学成果
.profile-card2 {
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    width: calc(100% - 20px); /* 调整卡片宽度，减去间距 */
}

.profile-card2::before,
.profile-card2::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: transparent; /* 背景颜色透明 */
    transition: width 0.3s ease-out, background-color 0.3s ease-out; /* 添加背景颜色过渡 */
    transform: scale(1);
}

.profile-card2::before {
    top: 0;
    left: 0;
}

.profile-card2::after {
    bottom: 0;
    right: 0;
}

.profile-card2:hover::before,
.profile-card2:hover::after {
    width: 100%;
    //background-color: #409eff; /* 鼠标悬停时背景颜色变为渐变蓝色 */
}

.profile-card2:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #2980B9, #0768B4);
    color: #fff; /* 鼠标悬停时字体颜色变为白色 */
}

/* 卡片内容 */
.profile-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    background-color: white; /* 卡片背景色 */
    border-radius: 10px; /* 圆角 */
    overflow: hidden; /* 防止内部内容溢出 */
}

/* 卡片图片 */
.profile-image {
    width: 3.5cm; /* 设置图片宽度 */
    height: 4.5cm; /* 设置图片高度 */
    object-fit: cover;
    margin-right: 20px;
    transition: transform 0.3s ease;
}

.profile-card:hover .profile-image {
    transform: scale(1.1); /* 图片放大效果 */
}

@media (min-width: 768px) and (max-width: 1199px) {
    .profile-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .profile-image {
        margin-right: 0;
        margin-bottom: 10px;
    }
}

//轮播大图效果
.carousel-container {
    position: relative;
    height: 450px;
    overflow: hidden;
    background-color: #FFD04B;
}

.carousel-content {
    position: relative;
    height: 100%;
    display: flex;
    overflow: hidden;
}

.include {
    flex: 1;
    background: linear-gradient(264deg, transparent 80px, #0768B4 80px, #2980B9 calc(100% - 80px));
}

.include-section {
    background: linear-gradient(to right, #2980B9, #0768B4);
    padding: 40px;
    position: relative;
    z-index: 3;
    width: 250px;
    transform: skewX(10deg); /* Skew the text section */
    transform-origin: right; /* Adjust the origin of skewing */

}

.text-section {
    /* 占据整体的一部分，比例可以通过调整这里的 flex 属性来控制 */
    color: white;
    position: relative;
    z-index: 3;
    transform-origin: right; /* Adjust the origin of skewing */
    height: 450px;
}

.text-section h3 {
    font-size: 1rem;
    margin-bottom: 5px;
    transform: skewX(-10deg); /* Counter-skew the text */
    transform-origin: right; /* Adjust the origin of skewing */
}

.text-section p {
    font-size: 1rem;
    line-height: 1.5;
    transform: skewX(-10deg); /* Counter-skew the text */
    transform-origin: right; /* Adjust the origin of skewing */
    padding: 10px;
}

.image-section {
    flex: 4;
    position: relative;
    // overflow: hidden;

}

.carousel-image {
    width: calc(100% + 80px); /* Adjust to cover the overflow */
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: -73px; /* Center image */
    top: 0;
    z-index: 1;
    transition: transform 0.5s ease-in-out; /* Smooth scale transition */
}

.el-carousel__item:hover .carousel-image {
    transform: scale(1.05);
}

.demo-collapse {
    font-family: 'Arial', sans-serif; /* Set the default font for the collapse component */
}
</style>