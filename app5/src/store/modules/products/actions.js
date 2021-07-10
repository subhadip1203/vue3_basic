export const getAllProducts =  (context) => {
    // console.log("action called")
    const data =[
        {id:2 ,name: 'subh'}
    ]
    context.commit('SET_PRODUCTS',data);
    
}
