import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
// 首页组件
import IndexInfo from "@/views/index/IndexInfo.vue";
import Index from "@/views/index.vue";
// 系部概况组件
import DepartmentLayout from "@/views/Department/Layout.vue";
import Leadership from "@/views/Department/Leadership.vue";
import Introduction from "@/views/Department/Introduction.vue";
import Achievement from "@/views/Department/Achievement.vue";
import Profession from "@/views/Department/Profession.vue";
// 新闻中心组件
import NewsLayout from "@/views/news/Layout.vue";
import Announcements from "@/views/news/Announcements.vue";
import LatestNews from "@/views/news/LatestNews.vue";
// 党建工作组件
import PartyBuildingLayout from "@/views/partyBuilding/Layout.vue";
import PbDetails from "@/views/partyBuilding/Details.vue";
import Rules from "@/views/partyBuilding/Rules.vue";
import PbAnnouncements from "@/views/partyBuilding/Announcements.vue";
import Honor from "@/views/partyBuilding/Honor.vue";
import Events from "@/views/partyBuilding/Events.vue";
import Example from "@/views/partyBuilding/Example.vue";
import Study from "@/views/partyBuilding/Study.vue";
// 学科建设组件
import DisciplineConLayout from "@/views/disciplineCon/Layout.vue";
import DpList from "@/views/disciplineCon/List.vue";
import DpDetails from "@/views/disciplineCon/Details.vue";
import DpSingleDetails from "@/views/disciplineCon/SingleDetails.vue";
// import achievement from "@/views/news/Layout.vue";


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
                    {
                        path: 'dept',
                        children: [
                            { path: 'introduction', component: Introduction, meta: {title: "本系简介"} },
                            { path: 'leadership', component: Leadership, meta: {title: "领导简介"} },
                            { path: 'achievement', component: Achievement, meta: {title: "专业设置"} },
                            { path: 'profession', component: Profession, meta: {title: "十年成果展"} }
                        ]
                    },
                ]
            },
            {
                path: 'news',
                component: NewsLayout,
                meta: {title: "新闻中心"},
                // redirect: 'news/announcements',
                children: [
                    {
                        path: 'n',
                        children: [
                            { path: 'announcements', component: Announcements, meta: {title: "通知公告"} },
                            { path: 'latestNews', component: LatestNews, meta: {title: "最新动态"} },
                        ]
                    },
                ]
            },
            // {
            //     path: 'party_building',
            //     component: PartyBuildingLayout,
            //     meta: {title: "党建专栏"},
            //     // redirect: 'party_building/announcements',
            //     children: [
            //         {
            //             path: 'pb',
            //             children: [
            //                 { path: 'rules', component: Rules, meta: {title: "党规党纪"} },
            //                 { path: 'pbAnnouncements', component: PbAnnouncements, meta: {title: "通知公告"} },
            //                 { path: 'honor', component: Honor, meta: {title: "荣誉展示"} },
            //                 { path: 'events', component: Events, meta: {title: "主题党日活动"} },
            //                 { path: 'example', component: Example, meta: {title: "榜样标兵"} },
            //                 { path: 'study', component: Study, meta: {title: "二十大专题学习"} },
            //             ]
            //         },
            //     ]
            // },
            {
                path: 'party_building',
                component: PartyBuildingLayout,
                meta: {title: "党建专栏"},
                // redirect: 'party_building/announcements',
                children: [
                    { path: 'pb/:articleType', component: DpList },                 // 文章列表
                    { path: 'pb/:articleType/details/:id', component: DpDetails }   // 文章详情
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