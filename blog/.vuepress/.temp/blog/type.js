export const typeMap = {"post":{"/":{"path":"/","keys":["v-498b1e5a","v-498b1e1c","v-498b1dde","v-498b1da0","v-1b6b6053","v-1b6b6072","v-1b6b6091","v-1b6b60b0","v-1b6b60cf","v-0df3c318","v-66a4fd02"]}}}

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
