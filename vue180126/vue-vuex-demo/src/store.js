import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var states={
    count:10
};

const mutations = {
    incream(state){//处理数据变化
        state.count++
    },
    dincream(state){
        state.count--
    }
};

//首先定义action
const actions = {
    increase:function({//处理你要干什么,异步请求，判断，流程控制
        commit
    }){
        commit('incream')//commit函数里的名字可以不需要跟事件触发的名字一致
    },
    decrease:function({
        commit
    }){
        commit('dincream')
    },
    odd:function({
        commit,state
    }){
        if(state.count%2==0){
            commit('incream')
        }
    },
    asynCilck:function({
        commit
    }){
        new Promise(function(resolve){
            setTimeout(function(){
                commit('incream')
            },1000)
        });
    }
};

const getters = {
    count(state){
        return state.count;
    },
    odder(state){
        return state.count%2==0?'偶数':'奇数'
    }
};

//最后需要导出Store对象
export default new Vuex.Store({
    actions,
    getters,
    mutations,
    state:states
});