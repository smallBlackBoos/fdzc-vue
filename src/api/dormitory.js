import request from "@/utils/request.js";
//宿舍信息列表查询
export const dormitoryListService = (params) => {
    return request.get('/dormitories', {params})
}
//添加宿舍
export const dormitoryAddService = (dormitoryData) => {
    return request.post('/dormitories', dormitoryData)
}
//修改宿舍信息
export const updateDormitoryService = (dormitoryData) => {
    return request.put('/dormitories', dormitoryData)
}
//删除宿舍信息
export const dormitoryDeleteService = (dormitoryNo) => {
    return request.delete('/dormitories?dormitoryNo=' + dormitoryNo)
}

//根据宿舍号查询宿舍信息
export const dormitoryInfoService = (dormitoryNo) => {
    return request.get('/dormitories/detail?dormitoryNo=' + dormitoryNo)
}
