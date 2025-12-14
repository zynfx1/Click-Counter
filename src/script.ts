

interface items {
  name: string;
  price: number;
  stock: number;
};

const inventory: items[] = [];

console.log('--- Gym Equipments Store ---');

const addItem = (name: string, price: number, stock: number) => {
  const newItem = { name, price, stock};
  inventory.push(newItem);
  console.log(`Added: ${name}`);
 
};

addItem('Static Bar', 8000, 1);
addItem('Dip Bars', 1000, 1);

const list = ()=> {
  console.log(" ");
  console.log('--- Inventory List ---');
  inventory.forEach((products) => {
    console.log(`${products.name}: ₱${products.price} | ${products.stock}×`);

  });
};

list();


const totalInventoryValue = () => {
let totalValue = 0;
inventory.forEach((items) => {
  totalValue += items.price * items.stock;
});
  console.log(" ");
 console.log(`Total Inventory Value: ₱${totalValue}`);

};

totalInventoryValue();
//npm run build