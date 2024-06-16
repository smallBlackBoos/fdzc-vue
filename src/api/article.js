import request from "@/utils/request.js";
import {useTokenStore} from "@/stores/token.js";
// 文章分类列表查询
export const articleCategoryListService = () => {
    // const tokenStore = useTokenStore ();
    // 在pinia中定义的响应式数据,都不需要.value
    // return request.get('/category',{headers:{'Authorization':tokenStroe.token}})
    return request.get('/category')
}
// 发送请求时,需要携带token,不然会出现401报错的情况,
// 使用Pinia状态管理器,可以跨组件使用,在login获取到的令牌可以放在其他组件来使用

// 文章分类添加
export const articleCategoryAddService = (categoryData) => {
    return request.post('/category', categoryData)
}
// 文章分类修改
export const articleCategoryUpdateService = (categoryData) => {
    return request.put('/category', categoryData)
}
// 文章分类删除
export const articleCategoryDeleteService = (id) => {
    return request.delete('/category?id=' + id)
}
// 文章列表查询
export const articleListService = (params) => {
    return request.get('/article/list', {params})
}

// 文章查询
export const articleService = (id) => {
    return request.get('/article/' + id);
}

// 文章添加
export const articleAddService = (articleData) => {
    return request.post('/article', articleData)
}