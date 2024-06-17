import request from "@/utils/request.js";
//首页调用接口各个模块
// 1、轮播大图
// 2、新闻公告
// 3、名师荟萃
// 4、特色课程
// 5、教学成果
//后端根据type和size
export const IndexListService = (type, size) => {
    return request.get(`/picture/index/${type}/${size}`);
}