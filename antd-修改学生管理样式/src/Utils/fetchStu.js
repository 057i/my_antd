
import qs from "query-string"

const appkey = "demo13_1545210570249"
export async function fetchAll() {
    const list = await fetch(`/api/student/findAll?appkey=${appkey}`).then(res => res.json())
    return list
}

//分页获取学生信息
export async function fetchByPage(page = 1, size = 10) {
    const list = await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`)
        .then(res => res.json()).then(res => res.data)
    return list
}


//按关键字搜索获取信息
export async function fetchBySearch(params) {
    console.log(params)
    const list = await fetch(`/api/student/searchStudent?appkey=${appkey}&sex=${params.sex}&page=${params.page}&search=${params.searchVal}&size=${params.limit}`)
        .then(res => res.json()).then(res => res.data)
    return list
}

//添加信息
export async function addStu(params) {
    console.log(params)
    const quStr = qs.stringify(params)
    const list = await fetch(`/api/student/addStudent?appkey=${appkey}&${quStr}`)
        .then(res => res.json())
    return list
}

//修改数据
export async function modifyStu(params) {
    console.log(params)
    const quStr = qs.stringify(params)
    const list = await fetch(`/api/student/updateStudent?appkey=${appkey}&${quStr}`)
        .then(res => res.json())
    return list
}

//根据id找用户
export async function findStuById(id) {
    const list = await fetchAll()
        .then(res => res.data)
        .then(res => {
            let result = res.filter(elm => {

                if (elm.sNo == id) {
                    return elm
                }
            })
            return result
        })
    return list
}



modifyStu({
    address: "鹤山",
    birth: "1980",
    email: "fz12580@hotmail.com",
    name: "黄晓1",
    phone: "11111111111",
    sNo: 839120,
    sex: 0
}).then(res => console.log(res))






