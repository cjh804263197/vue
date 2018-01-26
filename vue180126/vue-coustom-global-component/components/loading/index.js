import LoadingComponent from './loading.vue'

const Loading={
    install:function(Vue){
        Vue.component('Loading',LoadingComponent)
    }
};

export default Loading