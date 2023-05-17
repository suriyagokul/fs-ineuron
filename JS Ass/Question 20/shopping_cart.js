const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.includes("Meat") ? "" : shoppingCart.splice(0, 0, "Meat");

!shoppingCart.includes("Sugar") ? shoppingCart.push("Sugar") : "";

const honeyIndex = shoppingCart.indexOf("Honey");

shoppingCart.splice(honeyIndex, 1);

const TeaIndex = shoppingCart.indexOf("Tea");

shoppingCart[TeaIndex] = "Green Tea";

console.log(shoppingCart);
