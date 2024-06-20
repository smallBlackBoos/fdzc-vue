import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
// 首页组件
import IndexInfo from "@/views/index/IndexInfo.vue";
import Index from "@/views/index.vue";
// 系部概况组件
import DepartmentLayout from "@/views/Department/Layout.vue";
import SpecialityDetails from "@/views/Department/SpecialityDetails.vue";
import DeptSingleDetails from "@/views/Department/SingleDetails.vue";
import SpecialityList from "@/views/Department/SpecialityList.vue";
// 新闻中心组件
import NewsLayout from "@/views/news/Layout.vue";
import NDetails from "@/views/news/Details.vue";
import NList from "@/views/news/List.vue";
// 党建工作组件
import PartyBuildingLayout from "@/views/partyBuilding/Layout.vue";
import PbDetails from "@/views/partyBuilding/Details.vue";
import PbList from "@/views/partyBuilding/List.vue";
import PbSingleDetails from "@/views/partyBuilding/SingleDetails.vue";
// 学科建设组件
import DisciplineConLayout from "@/views/disciplineCon/Layout.vue";
import DpList from "@/views/disciplineCon/List.vue";
import DpDetails from "@/views/disciplineCon/Details.vue";
import DpSingleDetails from "@/views/disciplineCon/SingleDetails.vue";


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
                // redirect: 'department/dept/introduction',
                meta: {title: "系部概况"},
                children: [
                    { path: 'dept/speciality', component: SpecialityList },             // 专业列表
                    { path: 'dept/speciality/:id', component: SpecialityDetails },      // 专业详情
                    { path: 'dept/details/:articleType', component: DeptSingleDetails } // 单一文章展示
                ]
            },
            {
                path: 'news',
                component: NewsLayout,
                meta: {title: "新闻中心"},
                // redirect: 'news/announcements',
                children: [
                    { path: 'n/:articleType', component: NList },                 // 文章列表
                    { path: 'n/:articleType/details/:id', component: NDetails },  // 文章详情
                ]
            },
            {
                path: 'party_building',
                component: PartyBuildingLayout,
                meta: {title: "党建专栏"},
                // redirect: 'party_building/announcements',
                children: [
                    { path: 'pb/:articleType', component: PbList },                 // 文章列表
                    { path: 'pb/:articleType/details/:id', component: PbDetails },  // 文章详情
                    { path: 'pb/details/:articleType', component: PbSingleDetails } // 单一文章展示
                ]
            },
            {
                path: 'discipline_con',
                component: DisciplineConLayout,
                meta: {title: "学科建设"},
                // redirect: 'party_building/announcements',
                children: [
                    { path: 'dc/:articleType', component: DpList },                 // 文章列表
                    { path: 'dc/:articleType/details/:id', component: DpDetails },  // 文章详情
                    { path: 'dc/details/:articleType', component: DpSingleDetails } // 单一文章展示
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