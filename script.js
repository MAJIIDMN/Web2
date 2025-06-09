// script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
    });


    // --- Dummy Product Data ---
    const products = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxjb2xvcmZ1bCUyMGN1cHN8ZW58MHx8fHwxNzAxODg1ODg1fDA&ixlib=rb-4.0.3&q=80&w=400',
            name: 'Rainbow Runner Sneakers',
            price: '$79.99',
            description: 'Lightweight and comfortable, perfect for daily wear with a burst of color.'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxjb2xvcmZ1bCUyMGN1cHN8ZW58MHx8fHwxNzAxODg1ODg1fDA&ixlib=rb-4.0.3&q=80&w=400',
            name: 'Abstract Sunset Wall Art',
            price: '$120.00',
            description: 'Hand-painted original, adds a unique and vibrant touch to any room.'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxjb2xvcmZ1bCUyMGN1cHN8ZW58MHx8fHwxNzAxODg1ODg1fDA&ixlib=rb-4.0.3&q=80&w=400',
            name: 'Ceramic Spectrum Mug',
            price: '$14.50',
            description: 'Enjoy your favorite beverage in this beautifully crafted, colorful ceramic mug.'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxjb2xvcmZ1bCUyMGN1cHN8ZW58MHx8fHwxNzAxODg1ODg1fDA&ixlib=rb-4.0.3&q=80&w=400',
            name: 'Chromatic Explorer Backpack',
            price: '$65.00',
            description: 'Durable and spacious, perfect for your adventures with a playful design.'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxjb2xvcmZ1bCUyMGN1cHN8ZW58MHx8fHwxNzAxODg1ODg1fDA&ixlib=rb-4.0.3&q=80&w=400',
            name: 'Velvet Rainbow Throw Pillow',
            price: '$32.00',
            description: 'Soft and cozy, adds a pop of color and comfort to any sofa or bed.'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxjb2xvcmZ1bCUyMGN1cHN8ZW58MHx8fHwxNzAxODg1ODg1fDA&ixlib=rb-4.0.3&q=80&w=400',
            name: 'Vibrant Journal Set',
            price: '$25.00',
            description: 'Unleash your creativity with this set of beautifully designed, colorful journals.'
        },
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxjb2xvcmZ1bCUyMGN1cHN8ZW58MHx8fHwxNzAxODg1ODg1fDA&ixlib=rb-4.0.3&q=80&w=400',
            name: 'Artisan Bloom Planter',
            price: '$38.00',
            description: 'Hand-painted planter, perfect for bringing life and color to your indoor garden.'
        }
    ];

    const productCarousel = document.getElementById('product-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Populate carousel with product cards
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add(
            'product-card',
            'snap-center',
            'flex-shrink-0',
            'w-72', /* Fixed width for consistency */
            'bg-white',
            'rounded-xl',
            'shadow-lg',
            'overflow-hidden',
            'transform',
            'hover:scale-105',
            'transition',
            'duration-300',
            'ease-in-out',
            'relative', /* For absolute positioning of description */
            'group' /* For Tailwind group hover utility */
        );

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800 mb-1">${product.name}</h3>
                <p class="text-2xl font-bold text-indigo-600">${product.price}</p>
            </div>
            <div class="absolute inset-0 bg-indigo-700 bg-opacity-90 flex items-center justify-center p-4 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p class="text-lg">${product.description}</p>
            </div>
        `;
        productCarousel.appendChild(productCard);
    });

    // --- Carousel Navigation ---
    const scrollAmount = 300; // Adjust scroll distance

    prevBtn.addEventListener('click', () => {
        productCarousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        productCarousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // --- Basic Search Bar Functionality ---
    const searchInput = document.getElementById('search-input');
    const mobileSearchInput = document.getElementById('mobile-search-input');

    const handleSearch = (event) => {
        if (event.key === 'Enter' || event.type === 'click') {
            const searchTerm = event.target.value.trim();
            if (searchTerm) {
                alert(`Searching for: "${searchTerm}"`);
                // In a real application, you'd perform an actual search here
                event.target.value = ''; // Clear input after search
            } else {
                alert('Please enter a search term.');
            }
        }
    };

    if (searchInput) {
        searchInput.addEventListener('keydown', handleSearch);
    }
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keydown', handleSearch);
    }
});