
function queryProductsFromStocks(datas){
    return Object.values(datas.reduce((a,b)=>{
        const dataKey =  JSON.stringify({n: b.name, p: b.price});
        if(!a[dataKey])a[dataKey]={};

            a[dataKey].name = b.name;           
            
            const q = a[dataKey].quantity;
            if(Array.isArray(q)){
                a[dataKey].quantity.push(b._id);
            }else{
                a[dataKey].quantity = [b._id];
            }

            a[dataKey].price = b.price;
        return a;
    },{}));
}

// // function displayToCustomer(){}
// console.log(queryProductsFromStocks());

module.exports = {
    queryProductsFromStocks
}