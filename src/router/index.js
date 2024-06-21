import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
// 首页组件
import IndexInfo from "@/views/index/IndexInfo.vue";
import Index from "@/views/index.vue";
// 通用组件
import List from "@/views/common/List.vue";                     // 列表组件
import Details from "@/views/common/Details.vue";               // 详情组件
import SingleDetails from "@/views/common/SingleDetails.vue";   // 单一展示
// 系部概况组件
import DepartmentLayout from "@/views/Department/Layout.vue";
import SpecialityDetails from "@/views/Department/SpecialityDetails.vue";
import SpecialityList from "@/views/Department/SpecialityList.vue";
// 新闻中心组件
import NewsLayout from "@/views/news/Layout.vue";
// 党建工作组件
import PartyBuildingLayout from "@/views/partyBuilding/Layout.vue";
// 学科建设组件
import DisciplineConLayout from "@/views/disciplineCon/Layout.vue";
// 师资队伍
import TeachersLayout from "@/views/teachers/Layout.vue";
import TList from "@/views/teachers/StaffList.vue";         // 员工列表
// 教务管理组件
import EducationalLayout from "@/views/educational/Layout.vue";
// 规章制度组件
import RulesLayout from "@/views/rules/Layout.vue";
// 学生工作组件
import StudentWorkLayout from "@/views/studentWork/Layout.vue";
// 办事指南组件
import ServiceGuideLayout from "@/views/serviceGuide/Layout.vue";

// 定义路由关系
const routes = [
    {
        path: '/',
        component: Index,
        redirect: '/index/info',
        meta: {title: "首页"},
        children: [
            { path: 'index/info', component: IndexInfo },
            {
                path: 'department',
                component: DepartmentLayout,
                redirect: 'department/dept/details/101',
                meta: {title: "系部概况"},
                children: [
                    { path: 'dept/speciality', component: SpecialityList },             // 专业列表
                    { path: 'dept/speciality/:id', component: SpecialityDetails },      // 专业详情
                    { path: 'dept/details/:articleType', component: SingleDetails }   // 单一文章展示
                ]
            },
            {
                path: 'news',
                component: NewsLayout,
                meta: {title: "新闻中心"},
                redirect: '/news/n/201',
                children: [
                    { path: 'n/:articleType', component: List },                 // 文章列表
                    { path: 'n/:articleType/details/:id', component: Details },  // 文章详情
                ]
            },
            {
                path: 'party_building',
                component: PartyBuildingLayout,
                meta: {title: "党建专栏"},
                redirect: 'party_building/pb/301',
                children: [
                    { path: 'pb/:articleType', component: List },                 // 文章列表
                    { path: 'pb/:articleType/details/:id', component: Details },  // 文章详情
                ]
            },
            {
                path: 'discipline_con',
                component: DisciplineConLayout,
                meta: {title: "学科建设"},
                redirect: 'discipline_con/dc/401',
                children: [
                    { path: 'dc/:articleType', component: List },                   // 文章列表
                    { path: 'dc/:articleType/details/:id', component: Details },    // 文章详情
                    { path: 'dc/details/:articleType', component: SingleDetails }   // 单一文章展示
                ]
            },
            {
                path: 'teachers',
                component: TeachersLayout,
                meta: {title: "师资队伍"},
                redirect: 'teachers/t/501',
                children: [
                    { path: 't/:articleType', component: TList },                   // 文章列表
                    { path: 't/:articleType/details/:id', component: Details },    // 文章详情
                    { path: 't/details/:articleType', component: SingleDetails }   // 单一文章展示
                ]
            },
            {
                path: 'educational',
                component: EducationalLayout,
                meta: {title: "教务管理"},
                redirect: '/educational/e/601',
                children: [
                    { path: 'e/:articleType', component: List },                   // 文章列表
                    { path: 'e/:articleType/details/:id', component: Details },    // 文章详情
                ]
            },
            {
                path: 'rules',
                component: RulesLayout,
                meta: {title: "规章制度"},
                redirect: '/rules/r/701',
                children: [
                    { path: 'r/:articleType', component: List },                   // 文章列表
                    { path: 'r/:articleType/details/:id', component: Details },    // 文章详情
                ]
            },
            {
                path: 'student_work',
                component: StudentWorkLayout,
                meta: {title: "学生工作"},
                redirect: 'student_work/s/801',
                children: [
                    { path: 's/:articleType', component: List },                   // 文章列表
                    { path: 's/:articleType/details/:id', component: Details },    // 文章详情
                    { path: 's/details/:articleType', component: SingleDetails }   // 单一文章展示
                ]
            },
            {
                path: 'service_guide',
                component: ServiceGuideLayout,
                meta: {title: "办事指南"},
                redirect: 'service_guide/sg/901',
                children: [
                    { path: 'sg/:articleType', component: List },                   // 文章列表
                    { path: 'sg/:articleType/details/:id', component: Details },    // 文章详情
                ]
            }
        ]
    },
]

// 创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 在跳转路由之前执行返回顶部操作
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    next(); // 继续导航
});


// 导出路由
export default router