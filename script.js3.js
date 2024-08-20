// List of fruits
const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Pear",
    "Plum",
    "Strawberry",
    "Watermelon"
];

// Function to display fruits
function displayFruits(fruitList) {
    const fruitListElement = document.getElementById('fruit-list');
    fruitListElement.innerHTML = ''; // Clear existing list
    fruitList.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        fruitListElement.appendChild(li);
    });
}

// Function to handle search input
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredFruits = fruits.filter(fruit =>
        fruit.toLowerCase().includes(searchTerm)
    );
    displayFruits(filteredFruits);
}

// Initial display of all fruits
displayFruits(fruits);

// Add event listener to the search bar
document.getElementById('search-bar').addEventListener('input', handleSearch);


