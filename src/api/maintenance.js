import request from "@/utils/request.js";

//修改报修状态
export const updateMaintenanceService = (maintenanceData) => {
    maintenanceData.status = '已报修'
    return request.put('/maintenance', maintenanceData)
}

//删除报修信息
export const maintenanceDeleteService = (maintenId) => {
    return request.delete('/maintenance?maintenId=' + maintenId)
}

//报修清单
export const maintenanceListService = (params) => {
    return request.get('/maintenance', {params})
}