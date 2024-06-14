import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import Announcements from "@/views/news/Announcements.vue";
import latestNews from "@/views/news/latestNews.vue";
import DepartmentLayout from "@/views/Department/Layout.vue";
import Leadership from "@/views/Department/Leadership.vue";
import Introduction from "@/views/Department/Introduction.vue";
import IndexInfo from "@/views/index/indexInfo.vue";
import Index from "@/views/index.vue";
import achievement from "@/views/Department/achievement.vue";
import profession from "@/views/Department/profession.vue";

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
                            { path: 'achievement', component: achievement, meta: {title: "专业设置"} },
                            { path: 'profession', component: profession, meta: {title: "十年成果展"} }
                        ]
                    },
                ]
            },
            {
                path: 'news',
                redirect: 'news/announcements',
                children: [
                    { path: 'announcements', component: Announcements },
                    { path: 'latestNews', component: latestNews }
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