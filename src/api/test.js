import { tool  } from "@/libs/tool"

 //获取分类列表
export function test(params) {
    // return axios(api.getClassifyList,{...params})
  return tool.fetchPost('/wx/api/get-article-detail', {...params})
   
}