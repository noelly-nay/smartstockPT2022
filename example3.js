// const datas = [
//     { name: 'water', id: 1, price: 250 },
//     { name: 'water', id: 2, price: 250 },
//     { name: 'water', id: 3, price: 250 },
//     { name: 'water', id: 4, price: 500 },
//     { name: 'Car', id: 1, price: 700000 },
//     { name: 'Car', id: 2, price: 700000 },
//     { name: 'Car', id: 3, price: 700000 },
//     { name: 'Car', id: 4, price: 700000 },
//     { name: 'Car', id: 5, price: 700000 },
//     { name: 'Track suit', id: 1, price: 45000 },
//     { name: 'Track suit', id: 2, price: 45000 },
//     { name: 'Track suit', id: 3, price: 45000 },
//     { name: 'Track suit', id: 4, price: 45000 }
//   ];


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