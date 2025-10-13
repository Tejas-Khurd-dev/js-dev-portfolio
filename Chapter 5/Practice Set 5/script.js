// Q1)

let product = {
  name: "Jeans",
  size: "S",
  fit: "Slim Fit",
  "delivery-time": "Same day delivery",
};

//  Q2)
let copyProduct = product;
copyProduct.size = "L";

console.log(product);
console.log(copyProduct);

//  Q3)
console.log(product["delivery-time"]);

//  Q4)
let obj = {
  message: "Good Job",
  status: "Complete",
};

let { message } = obj;
console.log(message);

let { status: objStatus } = obj;
console.log(objStatus);

// Q5)
function isIdenticalProduct(product1, product2) {
  return (
    typeof product1 == typeof product2 &&
    product1.name === product2.name &&
    product1.size === product2.size &&
    product1.fit === product2.fit &&
    product1["delivery-time"] === product2["delivery-time"]
  );
}

// Example usage:
let productA = {
  name: "Jeans",
  size: "L",
  fit: "Slim Fit",
  "delivery-time": "Same day delivery",
};

let productB = {
  name: "Jeans",
  size: "L",
  fit: "Slim Fit",
  "delivery-time": "Same day delivery",
};

console.log(isIdenticalProduct(productA, productB));
console.log(isIdenticalProduct(productA, 5));
console.log(isIdenticalProduct(productA, ""));
