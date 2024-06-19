import request from "@/utils/request.js";

//根据类型返回
export const articleTypeListService = (articleType) => {
    return request.get('/article/list?articleType='+articleType)
}

//查询具体内容
export const articleInfoService = (articleId) => {
    return request.get(`/article/${articleId}`)
}


// 文章列表查询
export const articleListService = (params) => {
    return request.get('/article/list', {params})
}

// 文章查询
export const articleService = (id) => {
    return request.get('/article/' + id);
}

