import request from "@/utils/request.js";

// 查询专业列表
export const specialityListService = () => {
    return request.get('/speciality/list');
}

// 查询专业
export const specialityService = (id) => {
    return request.get(`/speciality/${id}`);
}