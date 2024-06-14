import request from "@/utils/request.js";
//电费记录
export const elecRecordListService = (params) => {
    return request.get('/elecrecord', {params})
}

//添加宿舍
export const elecRecordAddService = (ElecRecordData) => {
    return request.post('/elecrecord', ElecRecordData)
}

//删除宿舍信息
export const elecRecordDelService = (recordId) => {
    return request.delete('/elecrecord?recordId=' + recordId)
}


export const updatePayService = (ElecRecordData) => {
    const Id = ElecRecordData.recordId
    ElecRecordData.status = '已缴费'
    console.log(Id)
    return request.put('/elecrecord?recordId=' + Id,ElecRecordData)
}
