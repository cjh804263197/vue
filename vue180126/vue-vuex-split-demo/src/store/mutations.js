import {INCREMENT,DECREMENT,CHANGESKINK} from './types'

export default{
    [INCREMENT](state){
        state.count++;
    },
    [DECREMENT](state){
        state.count--;
    },
    [CHANGESKINK](state){
        if(state.skink==1){
            state.skink--;
        }else{
            state.skink++;
        }
    }
}
