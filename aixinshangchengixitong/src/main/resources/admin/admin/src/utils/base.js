const base = {
    get() {
        return {
            url : "http://localhost:8080/aixinshangchengixitong/",
            name: "aixinshangchengixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/aixinshangchengixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "爱心商城系统"
        } 
    }
}
export default base
