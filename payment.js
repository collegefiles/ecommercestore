// Enhanced payment page functionality
let cart = [];

// Watch specifications database (same as main page)
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

// Initialize payment page
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    displayCartItems();
    calculateTotal();
    setupPaymentMethodToggle();
    setupCardValidation();
    
    // Generate random order number
    document.getElementById('order-number').textContent = '#TK' + Math.random().toString(36).substr(2, 6).toUpperCase();
});

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('watchCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Enhanced display cart items with clickable quick view
function displayCartItems() {
    const cartContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 2rem; color: #94a3b8;">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--primary-gold); margin-bottom: 1rem;"></i>
                <p style="font-size: 1.2rem; margin-bottom: 1rem;">Your collection is empty</p>
                <a href="index.html" class="continue-shopping-btn" style="background: linear-gradient(135deg, var(--primary-gold), var(--secondary-gold)); color: var(--deep-black); padding: 1rem 2rem; border-radius: 25px; text-decoration: none; font-weight: 600;">Continue Shopping</a>
            </div>
        `;
        return;
    }
    
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item" style="transition: all 0.3s ease; cursor: pointer; border-radius: 10px; padding: 1rem;" 
             onclick="openQuickViewFromCart('${item.name}', '${item.price}', '${item.image}')"
             onmouseenter="this.style.background='rgba(212, 175, 55, 0.1)'"
             onmouseleave="this.style.background='transparent'">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}" style="transition: transform 0.3s ease;">
            </div>
            <div class="item-info">
                <div class="item-name" style="color: var(--primary-gold); font-weight: 600; margin-bottom: 0.5rem;">${item.name}</div>
                <div class="item-price" style="color: white; font-weight: 700; font-size: 1.1rem;">${item.price}</div>
                <div class="item-quantity" style="color: #94a3b8;">Quantity: ${item.quantity}</div>
                <div style="color: #94a3b8; font-size: 0.9rem; margin-top: 0.5rem; font-style: italic;">
                    <i class="fas fa-eye"></i> Click to view details
                </div>
            </div>
        </div>
    `).join('');
}

// Calculate and display totals
function calculateTotal() {
    if (cart.length === 0) {
        document.getElementById('subtotal').textContent = '$0.00';
        document.getElementById('tax').textContent = '$0.00';
        document.getElementById('total').textContent = '$0.00';
        return;
    }
    
    const subtotal = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', '').replace(',', ''));
        return total + (price * item.quantity);
    }, 0);
    
    const tax = subtotal * 0.0875; // 8.75% tax rate
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
}

// Setup payment method toggle
function setupPaymentMethodToggle() {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const cardForm = document.getElementById('card-form');
    const paypalForm = document.getElementById('paypal-form');
    
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            if (this.value === 'card') {
                cardForm.classList.add('active');
                paypalForm.classList.remove('active');
            } else if (this.value === 'paypal') {
                cardForm.classList.remove('active');
                paypalForm.classList.add('active');
            }
        });
    });
}

// Setup card validation and formatting
function setupCardValidation() {
    const cardNumberInput = document.getElementById('card-number');
    const expiryInput = document.getElementById('expiry');
    const cvvInput = document.getElementById('cvv');
    
    // Card number formatting and validation
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        
        if (formattedValue.length <= 19) {
            e.target.value = formattedValue;
        }
        
        // Detect card type and highlight appropriate icon
        detectCardType(value);
    });
    
    // Expiry date formatting
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });
    
    // CVV validation
    cvvInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
}

// Detect card type and highlight icon
function detectCardType(cardNumber) {
    const visaIcon = document.getElementById('visa-icon');
    const mastercardIcon = document.getElementById('mastercard-icon');
    const amexIcon = document.getElementById('amex-icon');
    
    // Reset all icons
    [visaIcon, mastercardIcon, amexIcon].forEach(icon => {
        icon.classList.remove('active');
    });
    
    // Detect card type based on number
    if (/^4/.test(cardNumber)) {
        visaIcon.classList.add('active');
    } else if (/^5[1-5]/.test(cardNumber) || /^2[2-7]/.test(cardNumber)) {
        mastercardIcon.classList.add('active');
    } else if (/^3[47]/.test(cardNumber)) {
        amexIcon.classList.add('active');
    }
}

// Process card payment
function processCardPayment() {
    // Validate form fields
    const requiredFields = [
        'billing-name', 'billing-email', 'billing-address', 
        'billing-city', 'billing-state', 'billing-zip',
        'card-number', 'expiry', 'cvv'
    ];
    
    const emptyFields = requiredFields.filter(fieldId => {
        const field = document.getElementById(fieldId);
        return !field.value.trim();
    });
    
    if (emptyFields.length > 0) {
        showErrorMessage('Please fill in all required fields.');
        return;
    }
    
    // Validate card number
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    if (cardNumber.length < 13 || cardNumber.length > 19) {
        showErrorMessage('Please enter a valid card number.');
        return;
    }
    
    // Validate expiry date
    const expiry = document.getElementById('expiry').value;
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        showErrorMessage('Please enter a valid expiry date (MM/YY).');
        return;
    }
    
    // Show loading state
    const button = document.querySelector('.place-order-btn');
    button.classList.add('loading');
    button.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        button.classList.remove('loading');
        button.disabled = false;
        processPaymentSuccess();
    }, 2000);
}

// Process PayPal payment
function processPayPalPayment() {
    const email = document.getElementById('paypal-email').value;
    const password = document.getElementById('paypal-password').value;
    
    if (!email || !password) {
        showErrorMessage('Please enter your PayPal email and password.');
        return;
    }
    
    if (!validateEmail(email)) {
        showErrorMessage('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    const button = document.querySelector('.paypal-login-btn');
    button.classList.add('loading');
    button.disabled = true;
    
    // Simulate PayPal authentication
    setTimeout(() => {
        button.classList.remove('loading');
        button.disabled = false;
        processPaymentSuccess();
    }, 1500);
}

// Handle successful payment
function processPaymentSuccess() {
    // Clear cart
    localStorage.removeItem('watchCart');
    cart = [];
    
    // Show success modal
    const modal = document.getElementById('success-modal');
    modal.style.display = 'block';
    
    // Add confetti effect
    createConfetti();
}

// Validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message
function showErrorMessage(message) {
    // Remove existing error messages
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <span>${message}</span>
    `;
    
    errorDiv.style.cssText = `
        background: #e74c3c;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideInDown 0.3s ease;
    `;
    
    // Insert error message before the submit button
    const activeForm = document.querySelector('.payment-form.active');
    const submitButton = activeForm.querySelector('button[type="submit"], .paypal-login-btn');
    submitButton.parentNode.insertBefore(errorDiv, submitButton);
    
    // Auto-remove error message after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Open quick view from cart items
function openQuickViewFromCart(productName, productPrice, productImage) {
    // Create quick view modal if it doesn't exist
    let modal = document.getElementById('quickViewModal');
    if (!modal) {
        createQuickViewModal();
        modal = document.getElementById('quickViewModal');
    }
    
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

// Create quick view modal for payment page
function createQuickViewModal() {
    const modalHTML = `
    <div id="quickViewModal" class="modal" style="display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.9); backdrop-filter: blur(10px);">
        <div class="modal-content" style="background: linear-gradient(145deg, var(--charcoal), var(--dark-gray)); margin: 2% auto; padding: 0; border-radius: 25px; width: 95%; max-width: 1000px; position: relative; animation: modalSlideIn 0.5s ease; border: 2px solid rgba(212, 175, 55, 0.3); box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);">
            <span class="close" style="position: absolute; right: 30px; top: 20px; color: var(--primary-gold); font-size: 35px; font-weight: bold; cursor: pointer; z-index: 1; transition: all 0.3s ease;">&times;</span>
            <div class="modal-body" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; padding: 3rem;">
                <div class="modal-image-gallery" style="display: flex; flex-direction: column; gap: 1rem;">
                    <div class="modal-image" style="flex: 1;">
                        <img id="modalImage" src="" alt="" style="width: 100%; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);">
                    </div>
                    <div class="modal-thumbnails" style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <div class="modal-thumbnail active" style="width: 80px; height: 80px; border-radius: 10px; overflow: hidden; cursor: pointer; opacity: 1; transition: all 0.3s ease; border: 2px solid var(--primary-gold);">
                            <img id="modalThumb1" src="" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div class="modal-thumbnail" style="width: 80px; height: 80px; border-radius: 10px; overflow: hidden; cursor: pointer; opacity: 0.6; transition: all 0.3s ease; border: 2px solid transparent;">
                            <img id="modalThumb2" src="" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div class="modal-thumbnail" style="width: 80px; height: 80px; border-radius: 10px; overflow: hidden; cursor: pointer; opacity: 0.6; transition: all 0.3s ease; border: 2px solid transparent;">
                            <img id="modalThumb3" src="" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    </div>
                </div>
                <div class="modal-info" style="display: flex; flex-direction: column; color: white;">
                    <h3 id="modalTitle" style="font-family: 'Playfair Display', serif; font-size: 2.5rem; margin-bottom: 1rem; color: var(--primary-gold);"></h3>
                    <p id="modalPrice" class="modal-price" style="font-size: 2rem; font-weight: 700; color: var(--primary-gold); margin-bottom: 2rem; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);"></p>
                    <p id="modalDescription" class="modal-description" style="line-height: 1.8; color: #e2e8f0; margin-bottom: 2rem; font-size: 1.1rem;"></p>
                    
                    <div class="watch-details" style="background: rgba(0, 0, 0, 0.3); padding: 2rem; border-radius: 15px; margin: 2rem 0; border: 1px solid rgba(212, 175, 55, 0.2);">
                        <h4 style="color: var(--primary-gold); margin-bottom: 1rem; font-size: 1.3rem; text-transform: uppercase; letter-spacing: 1px;">Technical Specifications</h4>
                        <div class="detail-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Movement:</span>
                                <span class="detail-value" id="movement" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Case Material:</span>
                                <span class="detail-value" id="caseMaterial" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Crystal:</span>
                                <span class="detail-value" id="crystal" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Water Resistance:</span>
                                <span class="detail-value" id="waterResist" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Case Diameter:</span>
                                <span class="detail-value" id="caseDiameter" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Power Reserve:</span>
                                <span class="detail-value" id="powerReserve" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Strap Material:</span>
                                <span class="detail-value" id="strapMaterial" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Warranty:</span>
                                <span class="detail-value" id="warranty" style="color: white; font-weight: 600;"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-100px) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        .modal-thumbnail:hover,
        .modal-thumbnail.active {
            opacity: 1;
            border-color: var(--primary-gold);
            transform: scale(1.05);
        }
        .close:hover {
            color: white;
            transform: scale(1.2) rotate(90deg);
        }
    `;
    document.head.appendChild(style);
}

// Download receipt (mock functionality)
function downloadReceipt() {
    const orderNumber = document.getElementById('order-number').textContent;
    const total = document.getElementById('total').textContent;
    
    // Create a simple text receipt
    const receiptContent = `
TimeKeeper - Order Receipt
${orderNumber}
Date: ${new Date().toLocaleDateString()}

${cart.map(item => `${item.name} x${item.quantity} - ${item.price}`).join('\n')}

Total: ${total}

Thank you for your purchase!
    `;
    
    // Create and download file
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TimeKeeper_Receipt_${orderNumber.replace('#', '')}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Create confetti effect
function createConfetti() {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: -10px;
                left: ${Math.random() * 100}vw;
                z-index: 3000;
                pointer-events: none;
                animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 5000);
        }, i * 50);
    }
    
    // Add confetti animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(-10px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        @keyframes slideInDown {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// Handle browser back button
window.addEventListener('beforeunload', function() {
    // Save any form data if needed
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('success-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
        window.location.href = 'index.html';
    }
};

// Open quick view from cart items
function openQuickViewFromCart(productName, productPrice, productImage) {
    // Create quick view modal if it doesn't exist
    let modal = document.getElementById('quickViewModal');
    if (!modal) {
        createQuickViewModal();
        modal = document.getElementById('quickViewModal');
    }
    
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

// Create quick view modal for payment page
function createQuickViewModal() {
    const modalHTML = `
    <div id="quickViewModal" class="modal" style="display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.9); backdrop-filter: blur(10px);">
        <div class="modal-content" style="background: linear-gradient(145deg, var(--charcoal), var(--dark-gray)); margin: 2% auto; padding: 0; border-radius: 25px; width: 95%; max-width: 1000px; position: relative; animation: modalSlideIn 0.5s ease; border: 2px solid rgba(212, 175, 55, 0.3); box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);">
            <span class="close" style="position: absolute; right: 30px; top: 20px; color: var(--primary-gold); font-size: 35px; font-weight: bold; cursor: pointer; z-index: 1; transition: all 0.3s ease;">&times;</span>
            <div class="modal-body" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; padding: 3rem;">
                <div class="modal-image-gallery" style="display: flex; flex-direction: column; gap: 1rem;">
                    <div class="modal-image" style="flex: 1;">
                        <img id="modalImage" src="" alt="" style="width: 100%; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);">
                    </div>
                    <div class="modal-thumbnails" style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <div class="modal-thumbnail active" style="width: 80px; height: 80px; border-radius: 10px; overflow: hidden; cursor: pointer; opacity: 1; transition: all 0.3s ease; border: 2px solid var(--primary-gold);">
                            <img id="modalThumb1" src="" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div class="modal-thumbnail" style="width: 80px; height: 80px; border-radius: 10px; overflow: hidden; cursor: pointer; opacity: 0.6; transition: all 0.3s ease; border: 2px solid transparent;">
                            <img id="modalThumb2" src="" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div class="modal-thumbnail" style="width: 80px; height: 80px; border-radius: 10px; overflow: hidden; cursor: pointer; opacity: 0.6; transition: all 0.3s ease; border: 2px solid transparent;">
                            <img id="modalThumb3" src="" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    </div>
                </div>
                <div class="modal-info" style="display: flex; flex-direction: column; color: white;">
                    <h3 id="modalTitle" style="font-family: 'Playfair Display', serif; font-size: 2.5rem; margin-bottom: 1rem; color: var(--primary-gold);"></h3>
                    <p id="modalPrice" class="modal-price" style="font-size: 2rem; font-weight: 700; color: var(--primary-gold); margin-bottom: 2rem; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);"></p>
                    <p id="modalDescription" class="modal-description" style="line-height: 1.8; color: #e2e8f0; margin-bottom: 2rem; font-size: 1.1rem;"></p>
                    
                    <div class="watch-details" style="background: rgba(0, 0, 0, 0.3); padding: 2rem; border-radius: 15px; margin: 2rem 0; border: 1px solid rgba(212, 175, 55, 0.2);">
                        <h4 style="color: var(--primary-gold); margin-bottom: 1rem; font-size: 1.3rem; text-transform: uppercase; letter-spacing: 1px;">Technical Specifications</h4>
                        <div class="detail-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Movement:</span>
                                <span class="detail-value" id="movement" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Case Material:</span>
                                <span class="detail-value" id="caseMaterial" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Crystal:</span>
                                <span class="detail-value" id="crystal" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Water Resistance:</span>
                                <span class="detail-value" id="waterResist" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Case Diameter:</span>
                                <span class="detail-value" id="caseDiameter" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Power Reserve:</span>
                                <span class="detail-value" id="powerReserve" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Strap Material:</span>
                                <span class="detail-value" id="strapMaterial" style="color: white; font-weight: 600;"></span>
                            </div>
                            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <span class="detail-label" style="color: #cbd5e0; font-weight: 500;">Warranty:</span>
                                <span class="detail-value" id="warranty" style="color: white; font-weight: 600;"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-100px) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        .modal-thumbnail:hover,
        .modal-thumbnail.active {
            opacity: 1;
            border-color: var(--primary-gold);
            transform: scale(1.05);
        }
        .close:hover {
            color: white;
            transform: scale(1.2) rotate(90deg);
        }
    `;
    document.head.appendChild(style);
}
