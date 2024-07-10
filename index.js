document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('addItemButton');
    const itemPurchasedButton = document.getElementById('itemPurchasedButton');
    const clearItemButton = document.getElementById('clearItemButton');
    const itemNameInput = document.getElementById('itemName');
    const listContainer = document.getElementById('listContainer');

    let shoppingList = [];

    function addItem() {
        const itemName = itemNameInput.value

        if (itemName !== '') {
            shoppingList.push({
                name: itemName,
                purchased: false
        
            });
            renderList();
            itemNameInput.value = '';
        }


    }

    function renderList() {
        listContainer.innerHTML = '';

        shoppingList.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;

            if (item.purchased) {
                listItem.classList.add('purchased');
            }

            const markButton = document.createElement('button');
            markButton.textContent = 'Mark Purchased';
            markButton.addEventListener('click', function() {
                togglePurchased(index);
            });

            listItem.appendChild(markButton);

            listContainer.appendChild(listItem);
        });
    }

    function togglePurchased(index) {
        shoppingList[index].purchased = !shoppingList[index].purchased;
        renderList();
    }

    function clearList() {
        shoppingList = [];
        renderList();
    }

    addItemButton.addEventListener('click', addItem);
    itemPurchasedButton.addEventListener('click', function() {
        shoppingList.forEach(item => {
            item.purchased = true;
        });
        renderList();
    });
    clearItemButton.addEventListener('click', clearList);
});

// Select DOM elements
const newItemText = document.getElementById('newItemText');
const addItemBtn = document.getElementById('addItemBtn');
const clearListBtn = document.getElementById('clearListBtn');
const shoppingList = document.getElementById('shoppingList');

// Array of shopping list items
let items = [
    { name: 'Tomatoes', completed: false },
    { name: 'Chicken', completed: false },
    { name: 'Bread', completed: false },
    { name: 'Milk', completed: false },
    { name: 'Eggs', completed: false },
    { name: 'Cheese', completed: false },
    { name: 'Banana', completed: false },
    { name: 'Lettuce', completed: false },
    { name: 'Apples', completed: false },
    { name: 'Rice', completed: false }
];

// A Function to render the shopping list
function renderList() {
    // Clear existing list items
    shoppingList.innerHTML = '';

    // Loop through the items array and create list elements
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        
        // if item is completed add a class
        if (item.completed) {
            li.classList.add('completed');
        }

        // Event listener to mark item as completed
        li.addEventListener('click', () => {
            item.completed = !item.completed;
            renderList(); 
            // Update the list
        });

        shoppingList.appendChild(li);
    });
}

// Event listener for Add button
addItemBtn.addEventListener('click', () => {
    const itemName = newItemText.value.trim();
    if (itemName) {
        items.push({ name: itemName, completed: false });
        renderList(); // Update the list
        newItemText.value = ''; // Clear input field
    }
});

// Event listener for Clear List button
clearListBtn.addEventListener('click', () => {
    items = []; // Clear the items array
    renderList(); // Update the list
     
});

document.getElementById('markPurchasedBtn').addEventListener('click', markAllPurchased);


// Initial rendering of the list
renderList();