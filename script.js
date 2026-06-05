// ============================================================
// LOADING SCREEN
// ============================================================
window.addEventListener('load', () => {
  // Add loading class to body
  document.body.classList.add('loading');
  
  // Hide loading screen after a delay
  setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('hidden');
    document.body.classList.remove('loading');
    
    // Remove loading screen from DOM after transition
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }, 2000); // Show for 2 seconds
});

// ============================================================
// DATA
// ============================================================
const products = [
  { id:1, name:"Ethiopian Yirgacheffe", nameAr:"إثيوبي يرجاتشيف", cat:"hot", price:"$5.50", priceAr:"٢٠ ج.م", desc:"Bright & floral with notes of jasmine and lemon zest.", descAr:"منعش وزهري بنكهات الياسمين وقشر الليمون.", badge:"Best Seller", img:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80" },
  { id:2, name:"Cold Brew Reserve", nameAr:"كولد برو ريزيرف", cat:"cold", price:"$6.00", priceAr:"٢٢ ج.م", desc:"18-hour steep. Smooth, rich chocolate finish.", descAr:"نقع ١٨ ساعة. نعومة مع نكهة شوكولاتة غنية.", badge:"New", img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80" },
  { id:3, name:"Cardamom Latte", nameAr:"لاتيه بالهيل", cat:"hot", price:"$5.00", priceAr:"١٨ ج.م", desc:"Velvety espresso with hand-ground cardamom & steamed milk.", descAr:"إسبريسو مخملي مع هيل مطحون يدوياً وحليب مبخر.", badge:"", img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80" },
  { id:4, name:"Guatemala Antigua", nameAr:"غواتيمالا أنتيغوا", cat:"beans", price:"$22.00/250g", priceAr:"٨٠ ج.م", desc:"Dark chocolate, brown sugar, smoky cedar notes.", descAr:"شوكولاتة داكنة، سكر بني، نكهات الأرز.", badge:"Limited", img:"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80" },
  { id:5, name:"Iced Caramel Macchiato", nameAr:"ماكياتو كراميل مثلج", cat:"cold", price:"$6.50", priceAr:"٢٤ ج.م", desc:"Layered vanilla, espresso & salted caramel drizzle.", descAr:"طبقات من الفانيليا والإسبريسو ومربى الكراميل المالح.", badge:"", img:"https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80" },
  { id:6, name:"Tiramisu Cup", nameAr:"كوب تيراميسو", cat:"dessert", price:"$7.00", priceAr:"٢٦ ج.م", desc:"Classic Italian dessert meets espresso perfection.", descAr:"الحلوى الإيطالية الكلاسيكية تلتقي بالإسبريسو المثالي.", badge:"Seasonal", img:"https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id:7, name:"Cortado", nameAr:"كورتادو", cat:"hot", price:"$4.50", priceAr:"١٦ ج.م", desc:"Equal parts espresso & steamed milk. Bold balance.", descAr:"أجزاء متساوية من الإسبريسو والحليب. توازن جريء.", badge:"", img:"https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&q=80" },
  { id:8, name:"Kenya AA Beans", nameAr:"حبوب كينيا AA", cat:"beans", price:"$24.00/250g", priceAr:"٨٨ ج.م", desc:"Blackcurrant, tomato, brown sugar. Award-winning lot.", descAr:"كشمش أسود، طماطم، سكر بني. دفعة حائزة على جوائز.", badge:"Award", img:"https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80" },
];

const reviews = [
  { text:"The Ethiopian pour-over changed how I understand coffee. I taste things I never noticed before.", textAr:"غيّرت البور أوفر الإثيوبية فهمي للقهوة. أتذوق أشياءً لم ألاحظها من قبل.", author:"Layla M.", stars:5 },
  { text:"Ordered via WhatsApp and had freshly roasted beans at my door in 2 hours. Incredible service.", textAr:"طلبت عبر واتساب وكانت الحبوب الطازجة على بابي في ساعتين. خدمة لا تصدق.", author:"Ahmed K.", stars:5 },
  { text:"The cold brew is silky smooth. I've tried dozens of specialty shops — SAFFRON is on another level.", textAr:"الكولد برو ناعم كالحرير. جربت عشرات المحلات المتخصصة — سافرون في مستوى آخر.", author:"Sarah T.", stars:5 },
  { text:"Finally a coffee brand that takes flavor profiles seriously. The Guatemala Antigua is exceptional.", textAr:"أخيراً علامة تجارية تأخذ ملفات النكهة بجدية. غواتيمالا أنتيغوا استثنائية.", author:"Omar R.", stars:5 },
  { text:"The cardamom latte is poetry in a cup. It tastes like heritage and luxury at the same time.", textAr:"لاتيه الهيل قصيدة في كوب. يتذوق كالتراث والفخامة في آن واحد.", author:"Noor A.", stars:5 },
];

// ============================================================
// THREE.JS — Floating particles
// ============================================================
(function initThree() {
  const canvas = document.getElementById('canvas-bg');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  // Particle system
  const count = 400;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 80;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    sizes[i] = Math.random() * 1.5 + 0.3;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    color: 0xC8873A,
    size: 0.12,
    transparent: true,
    opacity: 0.35,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Floating rings
  for (let i = 0; i < 3; i++) {
    const ringGeo = new THREE.TorusGeometry(8 + i * 5, 0.04, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xC8873A, transparent: true, opacity: 0.07 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.random() * Math.PI;
    ring.rotation.y = Math.random() * Math.PI;
    ring.userData.speed = 0.001 + i * 0.0005;
    scene.add(ring);
  }

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; });

  function animate() {
    requestAnimationFrame(animate);
    const t = Date.now() * 0.0003;

    particles.rotation.y = t * 0.05 + mouseX * 0.08;
    particles.rotation.x = mouseY * 0.05;

    scene.children.forEach(child => {
      if (child.userData.speed) {
        child.rotation.x += child.userData.speed;
        child.rotation.z += child.userData.speed * 0.7;
      }
    });

    camera.position.y = -scrollY * 0.005;
    renderer.render(scene, camera);
  }
  animate();
})();

// ============================================================
// GSAP ANIMATIONS
// ============================================================
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  // Hero entrance
  const tl = gsap.timeline({ delay: 0.3 });
  tl.to('.hero-tagline', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    .to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
    .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
    .to('.hero-scroll', { opacity: 1, duration: 0.6 }, '-=0.3');

  // Scroll reveals
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      }
    });
  });

  // Product cards stagger
  ScrollTrigger.create({
    trigger: '#productsGrid',
    start: 'top 80%',
    onEnter: () => {
      gsap.to('.product-card', {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out'
      });
    }
  });

  // Review cards
  ScrollTrigger.create({
    trigger: '#reviewsTrack',
    start: 'top 85%',
    onEnter: () => {
      gsap.to('.review-card', {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out'
      });
    }
  });
});

// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ============================================================
// RENDER PRODUCTS
// ============================================================
let cart = [];
let currentLang = 'en';
let currentCat = 'all';
let searchQuery = '';

function renderProducts(container, items) {
  container.innerHTML = '';
  
  if (items.length === 0) {
    const noResults = currentLang === 'ar' ? 'لا توجد نتائج' : 'No results found';
    container.innerHTML = `<div class="no-results">${noResults}</div>`;
    return;
  }
  
  items.forEach((p, i) => {
    const n = currentLang === 'ar' ? p.nameAr : p.name;
    const d = currentLang === 'ar' ? p.descAr : p.desc;
    const pr = currentLang === 'ar' ? p.priceAr : p.price;
    const addTxt = currentLang === 'ar' ? 'أضف للطلب' : 'Add to Order';
    const viewTxt = currentLang === 'ar' ? 'عرض التفاصيل' : 'View Details';
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.innerHTML = `
      <div class="product-img-wrap" onclick="openProductModal(${p.id})">
        <img class="product-img" src="${p.img}" alt="${n}" loading="lazy"/>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <div class="product-overlay">
          <span class="view-details">${viewTxt}</span>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-name" onclick="openProductModal(${p.id})">${n}</h3>
        <p class="product-desc">${d}</p>
        <div class="product-footer">
          <span class="product-price">${pr}</span>
          <button class="btn-add" onclick="addToCart(${p.id})">${addTxt}</button>
        </div>
      </div>`;
    container.appendChild(card);
  });
}

function renderReviews() {
  const track = document.getElementById('reviewsTrack');
  track.innerHTML = '';
  reviews.forEach(r => {
    const t = currentLang === 'ar' ? r.textAr : r.text;
    const card = document.createElement('div');
    card.className = 'review-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.innerHTML = `
      <div class="review-stars">${'★'.repeat(r.stars)}</div>
      <p class="review-text">"${t}"</p>
      <span class="review-author">— ${r.author}</span>
      <span class="review-quote">"</span>`;
    track.appendChild(card);
  });
}

function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  
  // Check if product already exists in cart
  const existingItem = cart.find(item => item.product.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ product: p, quantity: 1 });
  }
  
  updateCartUI();
  // GSAP bounce
  gsap.fromTo('#cartIndicator', { scale: 1.2 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' });
  
  // Show toast notification
  const name = currentLang === 'ar' ? p.nameAr : p.name;
  coffeeToast.success(currentLang === 'ar' ? `تمت إضافة ${name} إلى السلة` : `${name} added to cart`);
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').textContent = totalItems;
  document.getElementById('cartIndicator').style.display = totalItems > 0 ? 'block' : 'none';
  renderCart();
}

function renderCart() {
  const cartBody = document.getElementById('cartModalBody');
  const cartTotal = document.getElementById('cartModalTotal');
  
  if (cart.length === 0) {
    cartBody.innerHTML = `<div class="cart-empty">${currentLang === 'ar' ? 'السلة فارغة' : 'Your cart is empty'}</div>`;
    cartTotal.innerHTML = '';
    return;
  }
  
  cartBody.innerHTML = '';
  let totalPrice = 0;
  
  cart.forEach((item, index) => {
    const p = item.product;
    const n = currentLang === 'ar' ? p.nameAr : p.name;
    const pr = currentLang === 'ar' ? p.priceAr : p.price;
    const removeTxt = currentLang === 'ar' ? 'حذف' : 'Remove';
    
    // Extract numeric price for calculation
    const priceMatch = p.price.match(/[\d.]+/);
    if (priceMatch) {
      totalPrice += parseFloat(priceMatch[0]) * item.quantity;
    }
    
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <img class="cart-item-img" src="${p.img}" alt="${n}"/>
      <div class="cart-item-details">
        <h3 class="cart-item-name">${n}</h3>
        <div class="cart-item-price">${pr}</div>
        <div class="cart-item-controls">
          <button class="cart-item-qty-btn" onclick="decreaseQuantity(${index})">−</button>
          <span class="cart-item-qty">${item.quantity}</span>
          <button class="cart-item-qty-btn" onclick="increaseQuantity(${index})">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${index})">${removeTxt}</button>
        </div>
      </div>`;
    cartBody.appendChild(cartItem);
  });
  
  // Render total
  const totalLabel = currentLang === 'ar' ? 'المجموع الكلي' : 'Total';
  const totalAmount = currentLang === 'ar' 
    ? `${(totalPrice * 3.67).toFixed(0)} ج.م` 
    : `$${totalPrice.toFixed(2)}`;
  
  cartTotal.innerHTML = `
    <div class="cart-total-row">
      <span class="cart-total-label">${totalLabel}</span>
      <span class="cart-total-amount">${totalAmount}</span>
    </div>`;
}

function increaseQuantity(index) {
  cart[index].quantity++;
  updateCartUI();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function sendContactForm() {
  const name = document.getElementById('cName').value;
  const subj = document.getElementById('cSubject').value;
  const msg = document.getElementById('cMessage').value;
  if (!name || !msg) { 
    coffeeToast.error(currentLang === 'ar' ? 'يرجى ملء الاسم والرسالة' : 'Please fill your name and message');
    return; 
  }
  const text = encodeURIComponent(`Name: ${name}\nSubject: ${subj}\nMessage: ${msg}`);
  window.open(`https://wa.me/+201098277229?text=${text}`, '_blank');
  coffeeToast.success(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
}

// Open cart modal
document.getElementById('cartBtn').addEventListener('click', () => {
  document.getElementById('cartModal').classList.add('open');
  renderCart();
});

// Close cart modal
document.getElementById('cartModalClose').addEventListener('click', () => {
  document.getElementById('cartModal').classList.remove('open');
});

// Close modal when clicking outside
document.getElementById('cartModal').addEventListener('click', (e) => {
  if (e.target.id === 'cartModal') {
    document.getElementById('cartModal').classList.remove('open');
  }
});

// Checkout via WhatsApp
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) return;
  
  let message = currentLang === 'ar' ? 'طلبي:\n\n' : 'My Order:\n\n';
  let totalPrice = 0;
  
  cart.forEach(item => {
    const name = currentLang === 'ar' ? item.product.nameAr : item.product.name;
    const price = currentLang === 'ar' ? item.product.priceAr : item.product.price;
    message += `${item.quantity}x ${name} - ${price}\n`;
    
    // Calculate total
    const priceMatch = item.product.price.match(/[\d.]+/);
    if (priceMatch) {
      totalPrice += parseFloat(priceMatch[0]) * item.quantity;
    }
  });
  
  // Add total to message
  const totalLabel = currentLang === 'ar' ? '\n━━━━━━━━━━\nالمجموع الكلي: ' : '\n━━━━━━━━━━\nTotal: ';
  const totalAmount = currentLang === 'ar' 
    ? `${(totalPrice * 3.67).toFixed(0)} ج.م` 
    : `$${totalPrice.toFixed(2)}`;
  message += totalLabel + totalAmount;
  
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/+201098277229?text=${text}`, '_blank');
  
  // Clear cart after sending
  cart = [];
  updateCartUI();
  document.getElementById('cartModal').classList.remove('open');
});

// Category filter
document.getElementById('catTabs').addEventListener('click', e => {
  const btn = e.target.closest('.cat-tab');
  if (!btn) return;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCat = btn.dataset.cat;
  filterProducts();
});

// Search functionality
function filterProducts() {
  let filtered = products;
  
  // Filter by category
  if (currentCat !== 'all') {
    filtered = filtered.filter(p => p.cat === currentCat);
  }
  
  // Filter by search query
  if (searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(p => {
      const name = currentLang === 'ar' ? p.nameAr : p.name;
      const desc = currentLang === 'ar' ? p.descAr : p.desc;
      return name.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
    });
  }
  
  const grid = document.getElementById('menuGrid');
  renderProducts(grid, filtered);
  gsap.to('.product-card', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' });
}

// Search input event
document.getElementById('searchInput').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  filterProducts();
});

document.getElementById('searchBtn').addEventListener('click', () => {
  filterProducts();
});

// Product Modal
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  
  const modal = document.getElementById('productModal');
  const body = document.getElementById('productModalBody');
  
  const n = currentLang === 'ar' ? p.nameAr : p.name;
  const d = currentLang === 'ar' ? p.descAr : p.desc;
  const pr = currentLang === 'ar' ? p.priceAr : p.price;
  const addTxt = currentLang === 'ar' ? 'أضف للطلب' : 'Add to Order';
  const catLabel = currentLang === 'ar' ? 'الفئة' : 'Category';
  
  let catName = '';
  switch(p.cat) {
    case 'hot': catName = currentLang === 'ar' ? 'مشروبات ساخنة' : 'Hot Drinks'; break;
    case 'cold': catName = currentLang === 'ar' ? 'مشروبات باردة' : 'Cold Drinks'; break;
    case 'dessert': catName = currentLang === 'ar' ? 'حلويات' : 'Desserts'; break;
    case 'beans': catName = currentLang === 'ar' ? 'حبوب القهوة' : 'Coffee Beans'; break;
    default: catName = currentLang === 'ar' ? 'الكل' : 'All';
  }
  
  body.innerHTML = `
    <div class="product-modal-grid">
      <div class="product-modal-img-wrap">
        <img class="product-modal-img" src="${p.img}" alt="${n}"/>
        ${p.badge ? `<span class="product-badge-large">${p.badge}</span>` : ''}
      </div>
      <div class="product-modal-info">
        <h2 class="product-modal-title">${n}</h2>
        <div class="product-modal-category">${catLabel}: ${catName}</div>
        <div class="product-modal-price">${pr}</div>
        <p class="product-modal-desc">${d}</p>
        <button class="btn-whatsapp" onclick="addToCart(${p.id}); closeProductModal();">${addTxt}</button>
      </div>
    </div>`;
  
  modal.classList.add('open');
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('open');
}

document.getElementById('productModalClose').addEventListener('click', closeProductModal);

document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target.id === 'productModal') {
    closeProductModal();
  }
});

// ============================================================
// LANGUAGE
// ============================================================
function switchLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  const newText = currentLang === 'en' ? 'AR' : 'EN';
  
  // Update all language toggle buttons
  document.getElementById('langToggleDesktop').textContent = newText;
  document.getElementById('langToggleMobile').textContent = newText;
  
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute(`data-${currentLang}`);
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-placeholder-en]').forEach(el => {
    el.placeholder = el.getAttribute(`data-placeholder-${currentLang}`);
  });

  // Re-render products & reviews
  const feat = products.slice(0, 4);
  renderProducts(document.getElementById('productsGrid'), feat);
  const filtered = currentCat === 'all' ? products : products.filter(p => p.cat === currentCat);
  renderProducts(document.getElementById('menuGrid'), filtered);
  renderReviews();
  renderCart();
  gsap.to('.product-card', { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 });
  gsap.to('.review-card', { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 });
}

document.getElementById('langToggleDesktop').addEventListener('click', switchLanguage);
document.getElementById('langToggleMobile').addEventListener('click', switchLanguage);

// ============================================================
// THEME
// ============================================================
function switchTheme() {
  document.body.classList.toggle('light-mode');
  const newIcon = document.body.classList.contains('light-mode') ? '☀' : '☽';
  document.getElementById('themeToggleDesktop').textContent = newIcon;
  document.getElementById('themeToggleMobile').textContent = newIcon;
}

document.getElementById('themeToggleDesktop').addEventListener('click', switchTheme);
document.getElementById('themeToggleMobile').addEventListener('click', switchTheme);

// ============================================================
// MOBILE MENU
// ============================================================
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

document.getElementById('hamburger').addEventListener('click', () => {
  toggleMobileMenu();
});

document.getElementById('menuClose').addEventListener('click', () => {
  closeMobileMenu();
});

// Close mobile menu when clicking on any link
document.querySelectorAll('.mobile-menu-link, .mobile-order-btn').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// Close mobile menu when clicking outside
document.getElementById('mobileMenu').addEventListener('click', (e) => {
  if (e.target.id === 'mobileMenu') {
    closeMobileMenu();
  }
});

// ============================================================
// INIT
// ============================================================
renderProducts(document.getElementById('productsGrid'), products.slice(0, 4));
renderProducts(document.getElementById('menuGrid'), products);
renderReviews();
