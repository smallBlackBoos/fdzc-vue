import request from "@/utils/request.js";

//财产信息列表查询
export const propertyListService = (params) => {
    return request.get('/property', {params})
}
//添加财产
export const propertyAddService = (propertyData) => {
    return request.post('/property', propertyData)
}
//修改财产信息
export const updatePropertyService = (propertyData) => {
    return request.put('/property', propertyData)
}
//删除财产信息
export const propertyDeleteService = (propertyNo) => {
    return request.delete('/property?propertyNo=' + propertyNo)
}

//更新财产的使用状态

export const updateUseService = (propertyData) => {
    propertyData.status = '报修中'
    return request.put('/property', propertyData)
}