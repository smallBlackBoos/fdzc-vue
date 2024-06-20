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
// 学科建设组件
import DisciplineConLayout from "@/views/disciplineCon/Layout.vue";
import DpList from "@/views/disciplineCon/List.vue";
import DpDetails from "@/views/disciplineCon/Details.vue";
import DpSingleDetails from "@/views/disciplineCon/SingleDetails.vue";
// 师资队伍
import TeachersLayout from "@/views/teachers/Layout.vue";
import TList from "@/views/teachers/StaffList.vue";
import TDetails from "@/views/teachers/Details.vue";
import TSingleDetails from "@/views/teachers/SingleDetails.vue";
// 教务管理组件
import EducationalLayout from "@/views/educational/Layout.vue";
import EList from "@/views/educational/List.vue";
import EDetails from "@/views/educational/Details.vue";
// 规章制度组件
import RulesLayout from "@/views/rules/Layout.vue";
import RList from "@/views/rules/List.vue";
import RDetails from "@/views/rules/Details.vue";
// 学生工作组件
import StudentWorkLayout from "@/views/studentWork/Layout.vue";
import SList from "@/views/studentWork/List.vue";
import SDetails from "@/views/studentWork/Details.vue";
import SSingleDetails from "@/views/studentWork/SingleDetails.vue";
// 办事指南组件
import ServiceGuideLayout from "@/views/serviceGuide/Layout.vue";
import SgList from "@/views/serviceGuide/List.vue";
import SgDetails from "@/views/serviceGuide/Details.vue";
// import SSingleDetails from "@/views/serviceGuide/SingleDetails.vue";


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
            },
            {
                path: 'teachers',
                component: TeachersLayout,
                meta: {title: "师资队伍"},
                // redirect: 'party_building/announcements',
                children: [
                    { path: 't/:articleType', component: TList },                 // 文章列表
                    { path: 't/:articleType/details/:id', component: TDetails },  // 文章详情
                    { path: 't/details/:articleType', component: TSingleDetails } // 单一文章展示
                ]
            },
            {
                path: 'educational',
                component: EducationalLayout,
                meta: {title: "教务管理"},
                // redirect: 'party_building/announcements',
                children: [
                    { path: 'e/:articleType', component: EList },                 // 文章列表
                    { path: 'e/:articleType/details/:id', component: EDetails },  // 文章详情
                ]
            },
            {
                path: 'rules',
                component: RulesLayout,
                meta: {title: "规章制度"},
                // redirect: 'party_building/announcements',
                children: [
                    { path: 'r/:articleType', component: RList },                 // 文章列表
                    { path: 'r/:articleType/details/:id', component: RDetails },  // 文章详情
                ]
            },
            {
                path: 'student_work',
                component: StudentWorkLayout,
                meta: {title: "学生工作"},
                // redirect: 'party_building/announcements',
                children: [
                    { path: 's/:articleType', component: SList },                 // 文章列表
                    { path: 's/:articleType/details/:id', component: SDetails },  // 文章详情
                    { path: 's/details/:articleType', component: SSingleDetails } // 单一文章展示
                ]
            },
            {
                path: 'service_guide',
                component: ServiceGuideLayout,
                meta: {title: "办事指南"},
                // redirect: 'party_building/announcements',
                children: [
                    { path: 'sg/:articleType', component: SgList },                 // 文章列表
                    { path: 'sg/:articleType/details/:id', component: SgDetails },  // 文章详情
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


// 导航守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//         // 如果是访问登录页，则直接放行
//         next();
//     } else {
//         const tokenStore = useTokenStore();
//         // 否则判断用户是否登录，根据实际情况进行判断
//         const isLoggedIn = tokenStore.token
//         if (isLoggedIn) {
//             // 用户已登录，允许访问目标页
//             next();
//         } else {
//             // 用户未登录，重定向到登录页
//             next('/login');
//         }
//     }
// });



// 导出路由
export default router