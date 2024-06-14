import request from "@/utils/request.js";
//查询访客列表
export const visitorListService = (sno) => {
    return request.get('/visitorrecord/search?sno=' + sno)
}
//删除访客信息
export const visitorsDeleteService = (recordId) => {
    return request.delete('/visitorrecord?recordId=' + recordId)
}
//新增访客

export const visitorAddService = (visitorData) => {
    return request.post('/visitorrecord', visitorData)
}