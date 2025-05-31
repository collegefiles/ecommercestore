// Enhanced shopping cart functionality with search and filters
let cart = [];
let allProducts = [];

// Watch specifications database
const watchSpecs = {
    'Heritage Collection': {
        movement: 'Swiss Automatic',
        caseMaterial: 'Rose Gold',
        crystal: 'Sapphire',
        waterResist: '50m',
        caseDiameter: '40mm',
        powerReserve: '42 hours',
        strapMaterial: 'Alligator Leather',
        warranty: '3 Years',
        description: 'A timeless masterpiece inspired by our century-old heritage. This exquisite timepiece combines traditional craftsmanship with modern precision, featuring hand-engraved details and a meticulously finished movement.'
    },
    'Golden Elite': {
        movement: 'Swiss Automatic',
        caseMaterial: '18k Gold',
        crystal: 'Sapphire',
        waterResist: '30m',
        caseDiameter: '39mm',
        powerReserve: '48 hours',
        strapMaterial: 'Gold Bracelet',
        warranty: '5 Years',
        description: 'The epitome of luxury and sophistication. Crafted from solid 18k gold with diamond hour markers, this prestigious timepiece represents the pinnacle of horological artistry and exclusivity.'
    },
    'Ocean Crown': {
        movement: 'Swiss Automatic',
        caseMaterial: 'Titanium',
        crystal: 'Sapphire',
        waterResist: '300m',
        caseDiameter: '44mm',
        powerReserve: '60 hours',
        strapMaterial: 'Rubber',
        warranty: '2 Years',
        description: 'Inspired by the depths of the ocean, this robust timepiece features a unidirectional rotating bezel and luminous markers. Built for underwater adventures while maintaining elegant sophistication.'
    },
    'Athletic Pro': {
        movement: 'Quartz',
        caseMaterial: 'Carbon Fiber',
        crystal: 'Mineral',
        waterResist: '200m',
        caseDiameter: '45mm',
        powerReserve: '2 Years',
        strapMaterial: 'Silicone',
        warranty: '2 Years',
        description: 'Engineered for peak performance with advanced fitness tracking capabilities. Features GPS, heart rate monitoring, and multi-sport modes in an ultra-lightweight carbon fiber case.'
    },
    'Carbon Elite': {
        movement: 'Automatic',
        caseMaterial: 'Carbon Fiber',
        crystal: 'Sapphire',
        waterResist: '100m',
        caseDiameter: '42mm',
        powerReserve: '50 hours',
        strapMaterial: 'Carbon Fiber',
        warranty: '3 Years',
        description: 'Revolutionary carbon fiber construction meets Swiss precision. This avant-garde timepiece offers unmatched durability and striking aesthetics for the modern adventurer.'
    },
    "Runner's Choice": {
        movement: 'Digital',
        caseMaterial: 'Polymer',
        crystal: 'Acrylic',
        waterResist: '50m',
        caseDiameter: '38mm',
        powerReserve: '1 Year',
        strapMaterial: 'Sport Band',
        warranty: '1 Year',
        description: 'Designed specifically for runners with lap timing, split functions, and marathon memory. Lightweight and comfortable for extended wear during training and competition.'
    },
    'Tech Master': {
        movement: 'Digital',
        caseMaterial: 'Aluminum',
        crystal: 'Ion-X Glass',
        waterResist: '50m',
        caseDiameter: '44mm',
        powerReserve: '18 hours',
        strapMaterial: 'Sport Loop',
        warranty: '1 Year',
        description: 'Smart technology meets classic design. Features health monitoring, notifications, apps, and seamless connectivity with your digital life while maintaining timeless elegance.'
    },
    'Digital Pro': {
        movement: 'Digital',
        caseMaterial: 'Stainless Steel',
        crystal: 'Sapphire',
        waterResist: '50m',
        caseDiameter: '45mm',
        powerReserve: '24 hours',
        strapMaterial: 'Metal Bracelet',
        warranty: '2 Years',
        description: 'Professional-grade smartwatch with advanced health sensors, cellular connectivity, and premium materials. Perfect for the tech-savvy professional who demands excellence.'
    },
    'Pure Connect': {
        movement: 'Digital',
        caseMaterial: 'Ceramic',
        crystal: 'Sapphire',
        waterResist: '50m',
        caseDiameter: '40mm',
        powerReserve: '36 hours',
        strapMaterial: 'Ceramic',
        warranty: '2 Years',
        description: 'Minimalist design philosophy meets cutting-edge technology. This pure ceramic construction offers scratch resistance and hypoallergenic properties for sensitive skin.'
    },
    'Classic Chrono': {
        movement: 'Manual Wind',
        caseMaterial: 'Steel',
        crystal: 'Hesalite',
        waterResist: '30m',
        caseDiameter: '39mm',
        powerReserve: '48 hours',
        strapMaterial: 'Leather',
        warranty: '2 Years',
        description: 'A faithful recreation of our iconic 1960s chronograph. Features the original Hesalite crystal and manual-wind movement, preserving the authentic vintage experience for collectors.'
    },
    'Heritage Pocket': {
        movement: 'Manual Wind',
        caseMaterial: 'Sterling Silver',
        crystal: 'Mineral',
        waterResist: 'Splash Proof',
        caseDiameter: '50mm',
        powerReserve: '40 hours',
        strapMaterial: 'Chain',
        warranty: '3 Years',
        description: 'Traditional pocket watch craftsmanship at its finest. Hand-engraved case with visible movement through exhibition caseback, connecting you to watchmaking heritage.'
    },
    'Royal Gold': {
        movement: 'Manual Wind',
        caseMaterial: '18k Gold',
        crystal: 'Sapphire',
        waterResist: 'Splash Proof',
        caseDiameter: '52mm',
        powerReserve: '50 hours',
        strapMaterial: 'Gold Chain',
        warranty: '5 Years',
        description: 'The ultimate expression of luxury pocket watch artistry. Solid 18k gold case with intricate guilloché dial and precious stone indices, representing generational wealth and taste.'
    },
    'Urban Style': {
        movement: 'Quartz',
        caseMaterial: 'Stainless Steel',
        crystal: 'Mineral',
        waterResist: '30m',
        caseDiameter: '36mm',
        powerReserve: '3 Years',
        strapMaterial: 'Mesh Steel',
        warranty: '2 Years',
        description: 'Contemporary urban elegance with clean lines and sophisticated details. Perfect for the modern professional who appreciates understated luxury and versatile style.'
    },
    'Minimalist': {
        movement: 'Quartz',
        caseMaterial: 'Steel',
        crystal: 'Mineral',
        waterResist: '30m',
        caseDiameter: '38mm',
        powerReserve: '5 Years',
        strapMaterial: 'Leather',
        warranty: '2 Years',
        description: 'Less is more philosophy embodied in precise timekeeping. Ultra-thin profile with clean dial design focuses attention on essential elements: time and elegance.'
    },
    'Ocean Master': {
        movement: 'Swiss Automatic',
        caseMaterial: 'Steel',
        crystal: 'Sapphire',
        waterResist: '500m',
        caseDiameter: '42mm',
        powerReserve: '70 hours',
        strapMaterial: 'Steel Bracelet',
        warranty: '3 Years',
        description: 'Professional diving instrument tested to extreme depths. Features helium escape valve, unidirectional bezel, and enhanced luminosity for underwater readability and safety.'
    },
    'Deep Sea': {
        movement: 'Swiss Automatic',
        caseMaterial: 'Steel',
        crystal: 'Sapphire',
        waterResist: '1000m',
        caseDiameter: '44mm',
        powerReserve: '72 hours',
        strapMaterial: 'Rubber',
        warranty: '3 Years',
        description: 'Extreme depth capability meets uncompromising reliability. Engineered for professional saturation diving with pressure-resistant case construction and enhanced legibility systems.'
    },
    'Aqua Pro': {
        movement: 'Automatic',
        caseMaterial: 'Titanium',
        crystal: 'Sapphire',
        waterResist: '300m',
        caseDiameter: '41mm',
        powerReserve: '48 hours',
        strapMaterial: 'Titanium',
        warranty: '2 Years',
        description: 'Lightweight titanium construction for extended underwater comfort. Anti-magnetic properties and superior corrosion resistance make this the ultimate tool for marine professionals.'
    }
};

// Enhanced scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay) || 0;
            setTimeout(() => {
                entry.target.classList.add('animate');
                entry.target.style.transform = 'translateY(0) rotateX(0) scale(1)';
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize enhanced functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Collect all products for search functionality
    collectAllProducts();
    
    // Observe all product cards for scroll animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        observer.observe(card);
    });

    // Setup search functionality
    setupSearch();
    
    // Setup category filters
    setupCategoryFilters();

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(212, 175, 55, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Update cart display
    updateCartDisplay();
    
    // Setup modal thumbnail functionality
    setupModalThumbnails();
});

// Collect all products for search functionality
function collectAllProducts() {
    const productCards = document.querySelectorAll('.product-card');
    allProducts = Array.from(productCards).map(card => ({
        element: card,
        name: card.dataset.name.toLowerCase(),
        category: card.dataset.category,
        price: parseInt(card.dataset.price)
    }));
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            filterProducts(query);
        });
    }
}

// Setup category filters
function setupCategoryFilters() {
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            categoryFilters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
}

// Filter products by search query
function filterProducts(query) {
    allProducts.forEach(product => {
        const matchesSearch = query === '' || product.name.includes(query);
        const productCard = product.element;
        const categorySection = productCard.closest('.collection-category');
        
        if (matchesSearch) {
            productCard.style.display = 'block';
            categorySection.style.display = 'block';
        } else {
            productCard.style.display = 'none';
        }
    });
    
    // Hide empty categories
    hideEmptyCategories();
}

// Filter products by category
function filterByCategory(category) {
    const categories = document.querySelectorAll('.collection-category');
    
    categories.forEach(categorySection => {
        if (category === 'all' || categorySection.dataset.category === category) {
            categorySection.style.display = 'block';
            // Re-trigger animations for visible products
            const products = categorySection.querySelectorAll('.product-card');
            products.forEach((product, index) => {
                product.style.display = 'block';
                setTimeout(() => {
                    if (!product.classList.contains('animate')) {
                        product.classList.add('animate');
                    }
                }, index * 100);
            });
        } else {
            categorySection.style.display = 'none';
        }
    });
}

// Hide empty categories
function hideEmptyCategories() {
    const categories = document.querySelectorAll('.collection-category');
    categories.forEach(category => {
        const visibleProducts = category.querySelectorAll('.product-card[style*="display: block"], .product-card:not([style*="display: none"])');
        if (visibleProducts.length === 0) {
            category.style.display = 'none';
        } else {
            category.style.display = 'block';
        }
    });
}

// Setup modal thumbnails
function setupModalThumbnails() {
    const thumbnails = document.querySelectorAll('.modal-thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main modal image
            const mainImage = document.getElementById('modalImage');
            const thumbImage = this.querySelector('img');
            mainImage.src = thumbImage.src;
        });
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Enhanced add to cart functionality
function addToCart(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('.product-info h4').textContent;
    const productPrice = productCard.querySelector('.product-price').textContent;
    const productImage = productCard.querySelector('.product-image img').src;
    
    const product = {
        id: Date.now() + Math.random(),
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };
    
    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }
    
    // Store cart in localStorage
    localStorage.setItem('watchCart', JSON.stringify(cart));
    
    // Update cart display
    updateCartDisplay();
    
    // Show success animation
    showAddToCartAnimation(button);
}

// Add to cart from modal
function addToCartFromModal() {
    const modal = document.getElementById('quickViewModal');
    const productName = document.getElementById('modalTitle').textContent;
    const productPrice = document.getElementById('modalPrice').textContent;
    const productImage = document.getElementById('modalImage').src;
    
    const product = {
        id: Date.now() + Math.random(),
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };
    
    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }
    
    // Store cart in localStorage
    localStorage.setItem('watchCart', JSON.stringify(cart));
    
    // Update cart display
    updateCartDisplay();
    
    // Close modal
    modal.style.display = 'none';
    
    // Show success message
    showSuccessMessage('Timepiece added to your collection!');
}

// Update cart display
function updateCartDisplay() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('watchCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    const cartButton = document.querySelector('.nav-cart');
    if (cartButton) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartButton.innerHTML = `<i class="fas fa-shopping-cart"></i> Collection (${totalItems})`;
    }
}

// Show add to cart animation
function showAddToCartAnimation(button) {
    const originalText = button.textContent;
    const originalBg = button.style.background;
    
    button.textContent = 'Added to Collection!';
    button.style.background = 'linear-gradient(135deg, #059669, #10b981)';
    button.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = originalBg;
        button.style.transform = '';
    }, 2000);
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #059669, #10b981);
        color: white;
        padding: 1.5rem 3rem;
        border-radius: 15px;
        z-index: 3000;
        animation: luxuryFadeInOut 3s ease;
        box-shadow: 0 20px 40px rgba(5, 150, 105, 0.3);
        font-weight: 600;
        font-size: 1.1rem;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes luxuryFadeInOut {
            0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            15%, 85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        if (document.body.contains(successDiv)) {
            document.body.removeChild(successDiv);
        }
        if (document.head.contains(style)) {
            document.head.removeChild(style);
        }
    }, 3000);
}

// Enhanced quick view modal functionality
function openQuickView(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('.product-info h4').textContent;
    const productPrice = productCard.querySelector('.product-price').textContent;
    const productImage = productCard.querySelector('.product-image img').src;
    
    // Get watch specifications
    const specs = watchSpecs[productName] || watchSpecs['Heritage Collection'];
    
    // Populate modal with enhanced details
    document.getElementById('modalTitle').textContent = productName;
    document.getElementById('modalPrice').textContent = productPrice;
    document.getElementById('modalDescription').textContent = specs.description;
    
    // Update main image and thumbnails
    document.getElementById('modalImage').src = productImage;
    document.getElementById('modalThumb1').src = productImage;
    document.getElementById('modalThumb2').src = productImage;
    document.getElementById('modalThumb3').src = productImage;
    
    // Update technical specifications
    document.getElementById('movement').textContent = specs.movement;
    document.getElementById('caseMaterial').textContent = specs.caseMaterial;
    document.getElementById('crystal').textContent = specs.crystal;
    document.getElementById('waterResist').textContent = specs.waterResist;
    document.getElementById('caseDiameter').textContent = specs.caseDiameter;
    document.getElementById('powerReserve').textContent = specs.powerReserve;
    document.getElementById('strapMaterial').textContent = specs.strapMaterial;
    document.getElementById('warranty').textContent = specs.warranty;
    
    // Show modal
    const modal = document.getElementById('quickViewModal');
    modal.style.display = 'block';
    
    // Add click event to close modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
    
    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Global function for opening quick view from cart (will be used in payment page)
window.openQuickViewFromCart = function(productName, productPrice, productImage) {
    // Get watch specifications
    const specs = watchSpecs[productName] || watchSpecs['Heritage Collection'];
    
    // Populate modal with enhanced details
    document.getElementById('modalTitle').textContent = productName;
    document.getElementById('modalPrice').textContent = productPrice;
    document.getElementById('modalDescription').textContent = specs.description;
    
    // Update main image and thumbnails
    document.getElementById('modalImage').src = productImage;
    document.getElementById('modalThumb1').src = productImage;
    document.getElementById('modalThumb2').src = productImage;
    document.getElementById('modalThumb3').src = productImage;
    
    // Update technical specifications
    document.getElementById('movement').textContent = specs.movement;
    document.getElementById('caseMaterial').textContent = specs.caseMaterial;
    document.getElementById('crystal').textContent = specs.crystal;
    document.getElementById('waterResist').textContent = specs.waterResist;
    document.getElementById('caseDiameter').textContent = specs.caseDiameter;
    document.getElementById('powerReserve').textContent = specs.powerReserve;
    document.getElementById('strapMaterial').textContent = specs.strapMaterial;
    document.getElementById('warranty').textContent = specs.warranty;
    
    // Show modal
    const modal = document.getElementById('quickViewModal');
    modal.style.display = 'block';
    
    // Add click event to close modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
    
    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
};

// Enhanced product search functionality
function searchProducts(query) {
    const products = document.querySelectorAll('.product-card');
    query = query.toLowerCase();
    
    products.forEach(product => {
        const productName = product.querySelector('.product-info h4').textContent.toLowerCase();
        const categorySection = product.closest('.collection-category');
        
        if (productName.includes(query) || query === '') {
            product.style.display = 'block';
            categorySection.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    
    // Hide empty categories
    hideEmptyCategories();
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}
