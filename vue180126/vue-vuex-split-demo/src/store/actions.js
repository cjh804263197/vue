import * as types from './types'

export default {
    increment:function({
        commit
    }){
        commit(types.INCREMENT);
    },
    decrement:function({
        commit
    }){
        commit(types.DECREMENT);
    },
    oddClick:function({
        commit,state
    }){
        if(state.count%2==0){//若当前数字为偶数时增加1
            commit(types.INCREMENT);
        }else{//若当前数字为奇数时增加3
            commit(types.INCREMENT);
            commit(types.INCREMENT);
            commit(types.INCREMENT);
        }
    }
}