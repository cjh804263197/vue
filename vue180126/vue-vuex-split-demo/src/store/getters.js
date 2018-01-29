export default{
    count:function(state){
        return state.count;
    },
    odd:function(state){
        return state.count%2==0?'偶数':'奇数';
    },
    skink:function(state){
        return state.skink;
    }
}