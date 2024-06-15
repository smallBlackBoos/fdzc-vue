<script lang="ts" setup>
import {Bell, ElementPlus} from '@element-plus/icons-vue'
import {ref} from "vue";

const images1 = ref([
    'https://cs.fdzcxy.edu.cn/_upload/article/images/c5/0f/9abae323494fb277eb81b38e3f88/5835432d-16b3-402e-8874-823afec2b206.png',
    'https://cs.fdzcxy.edu.cn/_upload/article/images/a9/f8/02e153d64bde891f705028b437e2/dce87790-2e0e-4501-8042-f9892f0ab591.png',
    'https://cs.fdzcxy.edu.cn/_upload/article/images/19/03/23c96b554969806b8533efeb5f15/c0e01a66-c838-4c29-8452-8c2ae53aa3f6.jpg',
    'https://cs.fdzcxy.edu.cn/_upload/article/images/13/1c/1fe64a664f11b2a7929da4900e25/77bec478-c37d-464d-869e-402d8575eb5f.png'
]);
// 轮播大图数组
const carouselItems = ref([
    {

        title: 'Title 1',
        description: 'Description for the first slide.',
        image: 'https://cs.fdzcxy.edu.cn/_upload/article/images/c5/0f/9abae323494fb277eb81b38e3f88/5835432d-16b3-402e-8874-823afec2b206.png'
    },
    {
        title: 'Title 2',
        description: 'Description for the second slide.',
        image: 'https://cs.fdzcxy.edu.cn/_upload/article/images/a9/f8/02e153d64bde891f705028b437e2/dce87790-2e0e-4501-8042-f9892f0ab591.png'
    },
    {
        title: 'Title 3',
        description: 'Description for the third slide.',
        image: 'https://cs.fdzcxy.edu.cn/_upload/article/images/19/03/23c96b554969806b8533efeb5f15/c0e01a66-c838-4c29-8452-8c2ae53aa3f6.jpg'
    },
    {
        title: 'Title 4',
        description: 'Description for the fourth slide.',
        image: 'https://cs.fdzcxy.edu.cn/_upload/article/images/13/1c/1fe64a664f11b2a7929da4900e25/77bec478-c37d-464d-869e-402d8575eb5f.png'
    }
]);

//新闻公告
const newsList = ref([
    {id: 1, date: '2024-06-15', title: '新闻标题1'},
    {id: 2, date: '2024-06-14', title: '新闻标题2'},
    {id: 3, date: '2024-06-13', title: '新闻标题3'},
    {id: 4, date: '2024-06-15', title: '新闻标题4'},
    {id: 5, date: '2024-06-14', title: '新闻标题5'},
    {id: 6, date: '2024-06-13', title: '新闻标题6'},
    {id: 7, date: '2024-06-15', title: '新闻标题7'},
    {id: 8, date: '2024-06-14', title: '新闻标题8'},
    {id: 9, date: '2024-06-13', title: '新闻标题9'},
    {id: 10, date: '2024-06-15', title: '新闻标题10'},
    {id: 11, date: '2024-06-14', title: '新闻标题12'},
    {id: 12, date: '2024-06-13', title: '新闻标题13'}
])


const activeName = ref('1')

</script>

<template>
    <!-- <el-container style="height: 100vh;">-->
    <el-container>
        <el-header style="height: 450px;padding: 0;">
            <!-- Carousel in Header -->
            <div class="carousel-container">
                <el-carousel height="450px" :autoplay="true">
                    <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
                        <div class="carousel-content">
                            <div class="include">
                                <div class="text-section">
                                    <h2>{{ item.title }}</h2>
                                    <p>{{ item.description }}</p>
                                </div>
                            </div>
                            <div class="image-section">
                                <img :src="item.image" class="carousel-image" alt=""/>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-header>
        <el-container class="main-container">
            <el-main class="block block-1">
                <!--名师荟萃-->
                <el-row :gutter="70">
                    <!-- 标题栏-->
                    <el-col>
                        <div>
                            <el-space class="aside-header" alignment="center" style="width: 100%;">
                                <el-text class="aside-title">
                                    名师荟萃
                                </el-text>
                                <el-button type="text" class="more-button">更多 +</el-button>
                            </el-space>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <el-card style="max-width: 100%">
                            <template #header>Yummy hamburger</template>
                            <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                    alt=""/>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card style="max-width: 100%">
                            <template #header>Yummy hamburger</template>
                            <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                    alt=""/>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card style="max-width: 100%">
                            <template #header>Yummy hamburger</template>
                            <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                    alt=""/>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card style="max-width: 100%">
                            <template #header>Yummy hamburger</template>
                            <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                    alt=""/>
                        </el-card>
                    </el-col>
                    <!-- Carousel in Main -->
                </el-row>
                <!-- 特色课程-->
                <el-row :gutter="20">
                    <!-- 标题栏-->
                    <el-col>
                        <div>
                            <el-space class="aside-header" alignment="center" style="width: 100%;">
                                <el-text class="aside-title">
                                    特色课程
                                </el-text>
                                <el-button type="text" class="more-button">更多 +</el-button>
                            </el-space>
                        </div>
                    </el-col>
                    <el-col :span="8"> <!-- Each column spans 8/24 of the row (1/3) -->
                        <el-card style="max-width: 100%"> <!-- Max-width to fit within the column -->
                            <template #header>Yummy hamburger</template>
                            <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                    alt=""/>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card style="max-width: 100%">
                            <template #header>Yummy hamburger</template>
                            <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                    alt=""/>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card style="max-width: 100%">
                            <template #header>Yummy hamburger</template>
                            <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                    alt=""/>
                        </el-card>
                    </el-col>

                    <el-col :span="8">
                        <el-card style="max-width: 100%">
                            <template #header>Yummy hamburger</template>
                            <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                    alt=""/>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card style="max-width: 100%">
                            <template #header>Yummy hamburger</template>
                            <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                    alt=""/>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card style="max-width: 100%">
                            <template #header>Yummy hamburger</template>
                            <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                    alt=""/>
                        </el-card>
                    </el-col>
                    <!-- Carousel in Main -->
                </el-row>
            </el-main>
            <el-aside class="block block-2">
                <!-- 标题栏-->
                <el-col>
                    <div>
                        <el-space class="aside-header" alignment="center" style="width: 100%;">
                            <el-text class="aside-title">
                                新闻公告
                            </el-text>
                            <el-button type="text" class="more-button">更多 +</el-button>
                        </el-space>
                    </div>
                    <!-- 新闻公告列表 -->
                    <div class="news-list">
                        <div class="news-item" v-for="news in newsList" :key="news.id">
                            <span class="news-time">{{ news.date }}</span>
                            <span class="news-title">{{ news.title }}</span>
                        </div>
                    </div>
                </el-col>
            </el-aside>
        </el-container>
        <el-container class="main-container">
            <el-row class="block block-1">
                <!-- 标题栏-->
                <el-col>
                    <div>
                        <el-space class="aside-header" alignment="center" style="width: 100%;">
                            <el-text class="aside-title">
                                办学成果
                            </el-text>
                            <el-button type="text" class="more-button">更多 +</el-button>
                        </el-space>
                    </div>
                </el-col>
                <el-col>
                    <div class="carousel-container">
                        <el-carousel height="400px" :autoplay="true">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3 class="carousel-item">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <!-- Carousel in Main -->
            </el-row>
        </el-container>
    </el-container>
</template>
<style scoped lang="scss">
.main-container {
    flex: 1;
    margin: 20px;
    position: relative;
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

.block {
    flex: 1; /* 默认每个子元素平分容器空间 */
    padding: 20px; /* 子元素内边距 */
    background-color: #FFFFFF; /* 子元素背景颜色 */
    margin: 20px; /* 子元素之间的间距 */

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
    padding-bottom: 30px;
    margin-bottom: 30px;
}

.aside-title {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #2980B9;
}

.more-button {
    //background-color: #409EFF; /* 按钮背景颜色 */
    color: #2980B9; /* 按钮文字颜色 */
    border: none; /* 去掉按钮边框 */
    padding: 5px 10px; /* 按钮内边距 */
    cursor: pointer; /* 鼠标悬停时变成手型 */
}

.news-list {
    max-height: 300px; /* 根据需要调整高度 */
    overflow-y: auto; /* 垂直滚动 */
}

.news-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0; /* 底部边框 */
    transition: background-color 0.3s, color 0.3s; /* 动画效果 */
}

.news-item:last-child {
    border-bottom: none; /* 最后一个项目无边框 */
}

.news-item:hover {
    background-color: #e0f7fa; /* 悬停背景颜色 */
    color: #00796b; /* 悬停字体颜色 */
}

.news-time {
    font-size: 12px;
    color: #888; /* 时间颜色 */
}

.news-title {
    font-size: 16px;
    color: #333; /* 标题颜色 */
    margin-left: 10px;
    flex-grow: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; /* 省略过长文本 */
}
.aside-col{
    margin-top: 190px;
}

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

.text-section {
    /* 占据整体的一部分，比例可以通过调整这里的 flex 属性来控制 */
    padding: 130px;
    color: white;
    background: linear-gradient(to right, #2980B9, #0768B4); /* Semi-transparent background */
    position: relative;
    z-index: 2;
    transform: skewX(20deg); /* Skew the text section */
    transform-origin: right; /* Adjust the origin of skewing */
}

.text-section h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    transform: skewX(-20deg); /* Counter-skew the text */
    transform-origin: right; /* Adjust the origin of skewing */
}

.text-section p {
    font-size: 1.2rem;
    line-height: 1.5;
    transform: skewX(-20deg); /* Counter-skew the text */
    transform-origin: right; /* Adjust the origin of skewing */
}

.image-section {
    flex: 5;
    position: relative;
    // overflow: hidden;
}

.include {

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


/* 手风琴效果  面板
 */


.content {
    font-size: 14px;
    color: #333; /* Set the color of the content */
}

.el-main {
    height: 2000px;
}


/* Scale up on hover */

</style>