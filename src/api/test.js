import axios from '@/utils/http' // 导入http中创建的axios实例

// const test = {
//   // 新闻列表
//   test() {
//     return axios.post(`/api/demo1`).then((res) => {
//       return res.data
//     })
//   },
//   base() {
//     return axios.post(`/base/qq`).then((res) => {
//       return res.data
//     })
//   },
// }

// export default test

export function test(data) {
  return axios({
    url: `/api/demo1`,
    method: 'post',
    data,
  })
}

export function base(data) {
  return axios({
    url: `/base/qq`,
    method: 'post',
    data,
  })
}
