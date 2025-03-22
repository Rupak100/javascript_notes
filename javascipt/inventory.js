const products = [{ id: 1, name: "Widget", price: 50, quantity: 120 },
{ id: 2, name: "Gadget", price: 30, quantity: 80 },
{ id: 3, name: "Doohickey", price: 100, quantity: 200 },
{ id: 4, name: "Thingamajig", price: 75, quantity: 90 }];

// You have an array of product objects. Each object contains an id, name, price, and quantity. Your tasks are:
// Using Map: Update the price by applying a 10% discount to products with a quantity greater than 100.
// Using Filter: Create a new array containing only the products that received the discount (i.e. where the discounted price is less than the original price).
// using forEach: Log a message for each discounted product showing the product name and its new price.

const upDatedProducts=products.map((prod)=>{
    if (prod.quantity>100) {
        return{
            ...prod,
            price:.9*prod.price
        }
    }
    return prod;
});
console.log(upDatedProducts);

const newProd=upDatedProducts.filter(prod=>{
    const ori=products.find(p=>
        p.id===prod.id
    );
   
    
    return prod.price<ori.price;
});
console.log(newProd);

newProd.forEach((p)=>{
    console.log(`Product Name : ${p.name} `);
    console.log(`Product new price : ${p.price} `);
    
})

