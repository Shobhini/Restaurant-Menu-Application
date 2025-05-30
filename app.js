// Menu items data
const menuItems = [
  { id: 1, title: "Bruschetta", category: "starters", price: "$5", description: "Toasted bread topped with tomatoes, garlic, and basil", img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJ1c2NoZXR0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  { id: 2, title: "Margherita Pizza", category: "mains", price: "$12", description: "Classic pizza with tomato sauce, mozzarella, and basil", img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
  { id: 3, title: "Pasta Primavera", category: "beverages", price: "$14", description: "Pasta with fresh spring vegetables in a light cream sauce", img: "https://media.istockphoto.com/id/170428990/photo/iced-mocha.webp?b=1&s=170667a&w=0&k=20&c=ItUVpbetBvrKaKcJySbepwehwa2JIJjSOqzHulpvJY0=" },
  { id: 4, title: "Caprese Salad", category: "starters", price: "$7", description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze", img:  "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
  { id: 5, title: "Chocolate Lava Cake", category: "desserts", price: "$8", description: "Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream" , img: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.webp?b=1&s=170667a&w=0&k=20&c=6NPIcP8XUG4WwbJU-qfLOEP07aU79doAIsqZ8wic478="},
  { id: 6, title: "Apple Pie", category: "desserts", price: "$6", description: "Classic apple pie with a flaky crust, served with whipped cream", img: "https://plus.unsplash.com/premium_photo-1666353535417-c86616951727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
  { id: 7, title: "Vegan Burger", category: "mains", price: "$10", description: "Plant-based burger served with fries", img: "https://plus.unsplash.com/premium_photo-1664648063589-76b97669bc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  { id: 8, title: "Caesar Salad", category: "starters", price: "$6", description: "Fresh romaine lettuce with Caesar dressing, parmesan, and croutons", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  { id: 9, title: "Spaghetti Carbonara", category: "mains", price: "$14", description: "Classic carbonara with pancetta, egg, hard cheese, and pepper", img: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWdoZXR0aSUyMGNhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  { id: 10, title: "Tiramisu", category: "desserts", price: "$7", description: "Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  { id: 11, title: "Iced Coffee", category: "beverages", price: "$4", description: "Chilled coffee served with ice and cream", img: "https://media.istockphoto.com/id/170428990/photo/iced-mocha.webp?b=1&s=170667a&w=0&k=20&c=ItUVpbetBvrKaKcJySbepwehwa2JIJjSOqzHulpvJY0=" },
  { id: 12, title: "Mango Lassi", category: "beverages", price: "$5", description: "Refreshing Indian drink made with mango and yogurt", img: "https://media.istockphoto.com/id/1217751214/photo/fresh-mango-lassi-and-mango-fruit.webp?b=1&s=170667a&w=0&k=20&c=Jt0J70BwVkGdirVAu78hKb-MiMzN3_GUbCz8SmGUdS8=" },
  { id: 13, title: "Green Tea", category: "beverages", price: "$3", description: "Traditional green tea with antioxidants", img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
      { id: 14, title: "Steak Frites", category: "mains", price: "$18", description: "Grilled steak served with french fries and salad" , img: "https://media.gettyimages.com/id/463889403/photo/rib-eye-steak.jpg?s=612x612&w=0&k=20&c=igQuEqd2hEwHnwIcuMbiUnQRm5T9Mwk1ASFanAq6iOk="},
          { id: 15, title: "Chicken Parmesan", category: "mains", price: "$12", description: "Crispy chicken topped with tomato sauce and mozzarella, served with spaghetti",img: "https://media.gettyimages.com/id/1358831517/photo/crispy-chicken-parmesan.jpg?s=612x612&w=0&k=20&c=izCK6IforZt1WU1f467NXB-PPR0TAfEw0aoJ6d8imB0=" },
          {id: 16, title: "Soup of the day", category: "starters", price: "$5", description: "Freshly made soup with seasonal ingredients",img: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

// Function to display menu items
function displayMenuItems(category = 'all') {
  const menuContainer = document.querySelector('.menu_items');
  
  // Filter items based on category
  const filteredItems = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);
  
  // Generate HTML for menu items
  const menuHTML = filteredItems.map(item => {
    return `<div class="menu-item">
      <div class="card">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
          <p class="card-text">${item.description}</p>
          <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
        </div>
      </div>
    </div>`;
  }).join('');
  
  // Update the menu container
  menuContainer.innerHTML = menuHTML;
}

// Function to handle search
function handleSearch() {
  const searchInput = document.getElementById('menu_search');
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  const menuContainer = document.querySelector('.menu_items');
  
  // If search term is empty, show all items
  if (!searchTerm) {
    displayMenuItems();
    return;
  }
  
  // Filter items based on search term
  const filteredItems = menuItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm) || 
    item.description.toLowerCase().includes(searchTerm) ||
    item.category.toLowerCase().includes(searchTerm)
  );
  
  // Generate HTML for filtered items
  const menuHTML = filteredItems.length > 0 ? filteredItems.map(item => {
    return `<div class="menu-item">
      <div class="card">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
          <p class="card-text">${item.description}</p>
          <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
        </div>
      </div>
    </div>`;
  }).join('') : '<div class="no-results">No items found matching your search.</div>';
  
  // Update the menu container
  menuContainer.innerHTML = menuHTML;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Display all menu items initially
  displayMenuItems();
  
  // Add event listeners to category links
  const categoryLinks = document.querySelectorAll('.menu_categories ul li a');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      categoryLinks.forEach(l => l.parentElement.classList.remove('active'));
      
      // Add active class to clicked link
      this.parentElement.classList.add('active');
      
      // Get category from href attribute
      const category = this.getAttribute('href').substring(1);
      
      // Display menu items for selected category
      displayMenuItems(category);
    });
  });
  
  // Add event listener to search input for real-time search
  const searchInput = document.getElementById('menu_search');
  searchInput.addEventListener('input', handleSearch);
  
  // Add event listener to search button
  const searchButton = document.querySelector('.search_container button');
  searchButton.addEventListener('click', handleSearch);
});