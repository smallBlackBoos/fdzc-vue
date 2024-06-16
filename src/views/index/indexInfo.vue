<script lang="ts" setup>
import {Bell, ElementPlus} from '@element-plus/icons-vue'
import {ref} from "vue";
import {id} from "element-plus/es/locale";
import {useRouter} from "vue-router";

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


//名师荟萃name
const teacherData = ref([
    {
        id: 1,
        article_id: 101,
        type: '名师荟萃',
        title: 'Teacher Name 1',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'Teacher Info 1 Teacher Info 1Teacher Info 1Teacher Info Teacher Info 1Teacher InfTeacher Info 1Teacher Info 1Teacher Info 1Teacher Info 1o 1Teacher Info 11Teacher Info 1Teacher Info 1Teacher Info 1Teacher Info 1',
        create_time: '2024-05-11',
        link: 'https://example.com/1'
    },
    {
        id: 2,
        article_id: 102,
        type: '名师荟萃',
        title: 'Teacher Name 2',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2Teacher Info 2',
        create_time: '2024-05-12',
        link: 'https://example.com/2'
    },
    {
        id: 3,
        article_id: 103,
        type: '名师荟萃',
        title: 'Teacher Name 3',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'Teacher Info 3Teacher Info 3Teacher Info 3Teacher Info 3Teacher Info 3Teacher Info 3Teacher Info 3Teacher Info 3Teacher Info 3Teacher Info 3Teacher Info 3Teacher Info 3Teacher Info 3',
        create_time: '2024-05-13',
        link: 'https://example.com/3'
    },
    {
        id: 4,
        article_id: 104,
        type: '名师荟萃',
        title: 'Teacher Name 4',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4Teacher Info 4',
        create_time: '2024-05-14',
        link: 'https://example.com/4'
    }
]);


//办学成果
const ResultData = ref([
    {
        id: 1,
        article_id: 105,
        type: '办学成果',
        title: 'ResultData 1',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'ResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultData',
        create_time: '2024-05-11',
        link: 'https://example.com/1'
    },
    {
        id: 2,
        article_id: 106,
        type: '办学成果',
        title: 'ResultData 2',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'ResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultData',
        create_time: '2024-05-12',
        link: 'https://example.com/2'
    },
    {
        id: 3,
        article_id: 107,
        type: '办学成果',
        title: 'ResultData 3',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'TResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultData',
        create_time: '2024-05-13',
        link: 'https://example.com/3'
    },
    {
        id: 4,
        article_id: 108,
        type: '办学成果',
        title: 'ResultData 4',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'ResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultData',
        create_time: '2024-05-14',
        link: 'https://example.com/4'
    },
    {
        id: 5,
        article_id: 108,
        type: '办学成果',
        title: 'ResultData 4',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'ResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultData',
        create_time: '2024-05-14',
        link: 'https://example.com/4'
    },
    {
        id: 6,
        article_id: 108,
        type: '办学成果',
        title: 'ResultData 4',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'ResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultData',
        create_time: '2024-05-14',
        link: 'https://example.com/4'
    },
    {
        id: 7,
        article_id: 108,
        type: '办学成果',
        title: 'ResultData 4',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        description: 'ResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultDataResultData',
        create_time: '2024-05-14',
        link: 'https://example.com/4'
    }
]);
//简介省略过多的字
const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...';
    } else {
        return text;
    }
};
const router = useRouter();
const handleClick = (link) => {
    router.push(link);
};

//每行两个
const getRows = (data) => {
    const rows = [];
    for (let i = 0; i < data.length; i += 2) {
        rows.push(data.slice(i, i + 2));
    }
    return rows;
};
//一行走马灯卡片
const isDarkBackground = ref(false);

const handleCarouselChange = (index) => {
    console.log('Carousel index changed to:', index);
    isDarkBackground.value = !isDarkBackground.value; // 切换背景颜色状态
};
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
                <el-row>
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
                        <div class="card-container">
                            <el-row :gutter="30" v-for="(row, rowIndex) in getRows(teacherData)" :key="rowIndex"
                                    style="margin-top: 30px;">
                                <el-col :span="12" v-for="(teacher, colIndex) in row" :key="colIndex">
                                    <el-card class="profile-card" @click="() => handleClick(teacher.link)">
                                        <div class="profile-content">
                                            <img :src="teacher.image" class="profile-image" alt="Profile Image"/>
                                            <div class="profile-text">
                                                <div class="card-name">
                                                    <span>{{ teacher.title }}</span>
                                                </div>
                                                <div class="card-info">
                                                    <span>{{ truncateDescription(teacher.description, 200) }}</span>
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
                            <span class="news-title">{{ truncateDescription(news.title, 10) }}</span>
                        </div>
                    </div>
                </el-col>
            </el-aside>
        </el-container>
        <el-container class="main-container" style="margin-top: -30px">
            <el-row class="block block-1">
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
                <el-col style="margin-top: 30px">
                    <el-carousel :interval="4000" type="card" height="300px">
                        <el-carousel-item v-for="(teacher, index) in teacherData" :key="index">
                            <div class="card-container">
                                <el-card class="profile-card" @click="() => handleClick(teacher.link)" shadow="hover">
                                    <div class="profile-content">
                                        <img :src="teacher.image" class="profile-image" alt="Profile Image"/>
                                        <div class="profile-text">
                                            <div class="card-name">
                                                <span>{{ teacher.title }}</span>
                                            </div>
                                            <div class="card-info">
                                                <span>{{ truncateDescription(teacher.description, 100) }}</span>
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
            <el-row class="block block-1">
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
                <el-container>
                    <el-row :gutter="30" v-for="(row, rowIndex) in getRows(teacherData)" :key="rowIndex">
                        <el-col :span="12" v-for="(teacher, colIndex) in row" :key="colIndex">
                            <el-card class="profile-card2" shadow="hover" @click="handleClick(teacher.link)">
                                <div class="profile-text">
                                    <img :src="teacher.image" alt="Profile Image"/>
                                    <div class="card-name">
                                        <span>{{ teacher.title }}</span>
                                    </div>
                                    <div>
                                        <span>{{ truncateDescription(teacher.description, 100) }}</span>
                                    </div>
                                </div>

                            </el-card>
                        </el-col>
                    </el-row>
                </el-container>
            </el-row>
        </el-container>
    </el-container>
</template>
<style scoped lang="scss">
//主体框架
.main-container {
    flex: 1;
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
    padding-bottom: 30px;
    //margin-bottom: 30px;
}

.aside-title {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    //背景版渐变色
    background: linear-gradient(to right, #2980B9, #0768B4);
    -webkit-background-clip: text;
    color: transparent;
    background-clip: text;
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

//卡片效果
//名师荟萃
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


/* Scale up on hover */

</style>