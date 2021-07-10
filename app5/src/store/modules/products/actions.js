export const getAllProducts = async ({ commit }) => {
    fetch('https://fakestoreapi.com//products')
        .then(res=>res.json())
        .then(json=>{
            commit('SET_PRODUCTS',json);
        })
    
}

export const get5Product = ({ commit }, productId) => {
    fetch('https://fakestoreapi.com//products?limit=5')
        .then(res=>res.json())
        .then(json=>{
            commit('SET_PRODUCTS',json);
        })
}