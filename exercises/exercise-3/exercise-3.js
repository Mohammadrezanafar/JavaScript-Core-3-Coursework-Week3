let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(objectArray){
  let total = 0;
  console.log(`   QUANTITY:   ITEMES:          TOTAL:`);
  for(let obj of objectArray){
let {itemName,quantity,unitPrice}= obj;
let sum = unitPrice * quantity;
total += sum ;
console.log(`
    ${quantity}      ${itemName}      ${sum.toFixed(2)}
    `);
  }
    console.log(` ........Total is.... : ${total}`)

 
  }
  printReceipt(order);
 
