export const categoryMap = {"tag":{"/":{"path":"/tags/","map":{"Giới thiệu":{"path":"/tags/gi%E1%BB%9Bi-thi%E1%BB%87u/","keys":["v-0df3c318","v-66a4fd02"]},"NodeJS":{"path":"/tags/nodejs/","keys":["v-1b6b6053","v-1b6b6072","v-1b6b6091","v-1b6b60b0","v-1b6b60cf"]},"RestAPI":{"path":"/tags/restapi/","keys":["v-1b6b60cf"]},"Java Core":{"path":"/tags/java-core/","keys":["v-1a373cf3","v-010551d2","v-498b1e5a","v-498b1e1c","v-498b1dde","v-498b1da0"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
