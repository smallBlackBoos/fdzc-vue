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

const activeName = ref('1')

</script>

<template>
    <!-- <el-container style="height: 100vh;">
        <el-header style="height: 450px;padding: 0;"> -->
    <el-container>
        <el-header>
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
                <el-row class="block-row">
                    <!-- 标题栏-->
                    <el-col>
                        <div>
                            <el-space class="aside-header" alignment="center" style="width: 100%;">
                                <el-text class="aside-title">
                                    办学优势
                                </el-text>
                                <el-button type="text" class="more-button">更多 +</el-button>
                            </el-space>
                        </div>
                    </el-col>
                    <el-col>
                        <div class="demo-collapse">
                            <el-collapse v-model="activeName" accordion>
                                <el-collapse-item title="简介" name="1">
                                    <div class="content">
                                        福州大学至诚学院是经国家教育部批准，于2003年7月,由国家“双一流”建设高校、国家“211工程”重点建设大学，福建省人民政府与国家教育部共建高校、福建省人民政府与国家国防科技工业局
                                        共建高校福州大学为主体举办，并按新机制、新模式运作，实施全日制本科学历教育的高等学校。
                                    </div>
                                    <div class="content">
                                        学院牢牢把握社会主义办学方向，遵循“明德博学，臻于至善”的院训精神，围绕应用型大学的办学定位，注重培育学生的科学精神与人文素养，培养德智体美劳全面发展的社会主义建设者和接班人。
                                        坚持以提高服务区域、行业需求能力为引领，学院从师资队伍、人才培养、平台搭建三方面着力构建了“三位一体”的应用型大学建设基础，努力建设以工为主、有特色、有影响的高水平应用型大学，
                                        打造福建省工科人才培养的摇篮。
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item title="教学单位" name="2">
                                    <div class="content">
                                        学院牢牢把握社会主义办学方向，遵循“明德博学，臻于至善”的院训精神，围绕应用型大学的办学定位，注重培育学生的科学精神与人文素养，
                                        培养德智体美劳全面发展的社会主义建设者和接班人。坚持以提高服务区域、行业需求能力为引领，学院从师资队伍、人才培养、
                                        平台搭建三方面着力构建了“三位一体”的应用型大学建设基础，努力建设以工为主、有特色、有影响的高水平应用型大学，打造福建省工科人才培养的摇篮。
                                    </div>
                                    <div class="content">
                                        学院现有17个教学单位、38个本科专业，学科专业覆盖经济社会发展主导产业、战略性新兴产业和传统产业，已发展成为一所以工为主，理、工、经、管、文、艺等多学科协调发展的应用型综合性大学。
                                        在校生规模近14000人。
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item title="Efficiency" name="3">
                                    <div class="content">
                                        Simplify the process: keep operating process simple and intuitive;
                                    </div>
                                    <div class="content">
                                        Definite and clear: enunciate your intentions clearly so that the
                                        users can quickly understand and make decisions;
                                    </div>
                                    <div class="content">
                                        Easy to identify: the interface should be straightforward, which helps
                                        the users to identify and frees them from memorizing and recalling.
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item title="Controllability" name="4">
                                    <div class="content">
                                        Decision making: giving advices about operations is acceptable, but do
                                        not make decisions for the users;
                                    </div>
                                    <div class="content">
                                        Controlled consequences: users should be granted the freedom to
                                        operate, including canceling, aborting or terminating current
                                        operation.
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item title="Controllability" name="5">
                                    <div class="content">
                                        Decision making: giving advices about operations is acceptable, but do
                                        not make decisions for the users;
                                    </div>
                                    <div class="content">
                                        Controlled consequences: users should be granted the freedom to
                                        operate, including canceling, aborting or terminating current
                                        operation.
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-col>
                    <!-- Carousel in Main -->
                </el-row>
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
                <div>
                    <el-space class="aside-header" alignment="center" style="width: 100%;">
                        <el-text class="aside-title">
                            新闻公告
                        </el-text>
                        <el-button type="text" class="more-button">更多 +</el-button>
                    </el-space>
                </div>
                <!-- Carousel in Aside -->
                <div class="carousel-container">
                    <el-carousel
                            height="200px"
                            direction="vertical"
                            motion-blur
                            :autoplay="false"
                    >
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 text="2xl" justify="center">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-aside>
        </el-container>
        <el-container class="main-container">
            <el-row class="block block-1">
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
                <el-col>
                    <div class="carousel-container">
                        <el-carousel
                                height="400px"
                                direction="vertical"
                                type="card"
                                :autoplay="false"
                        >
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3 text="2xl" justify="center">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <!-- Carousel in Main -->
            </el-row>
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
}

/* 对于中等屏幕 */
@media (min-width: 768px) and (max-width: 1199px) {
    .main-container {
        margin: 20px 20px; /* 中等屏幕外边距 */
    }
}

/* 对于较小屏幕 */
@media (max-width: 767px) {
    .main-container {
        margin: 0 10px; /* 小屏幕外边距 */
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

.aside-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.aside-title {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #2980B9;
}

.more-button {
    // background-color: #2980B9; /* 按钮背景颜色 */ color: #99a9bf; /* 按钮文字颜色 */ border: none; /* 去掉按钮边框 */ padding: 5px 10px; /* 按钮内边距 */ cursor: pointer; /* 鼠标悬停时变成手型 */
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
.include{
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