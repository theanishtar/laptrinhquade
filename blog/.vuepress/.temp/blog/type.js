export const typeMap = {"post":{"/":{"path":"/","keys":["v-77e2f3a3","v-5663e3fd","v-5663e41c","v-5663e43b","v-0df3c318","v-66a4fd02"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
