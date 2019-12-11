export default async function getArea(params) {
    let result = await fetch(`http://101.132.72.36:5100/api/local?parentId=${params}`).then(res => res.json())
    return result
}


