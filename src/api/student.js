import request from "@/utils/request.js";
//学生信息列表查询
export const studentListService = (params) => {
    return request.get('/students', {params})
}
// 添加学生
export const studentAddService = (studentData) => {
    return request.post('/students', studentData)
}
//修改学生信息
export const studentUpdateService = (studentData) => {
    return request.put('/students', studentData)
}

//删除学生信息
export const studentDeleteService = (sno) => {
    return request.delete('/students/detail?sno=' + sno)
}

//根据学生学号查询信息
export const studentInfoService = (sno) => {
    return request.get('students/detail?sno=' + sno)
}

