// --- التحكم في القائمة الجانبية للجوال ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');

function toggleMenu() {
    if(mobileMenu && menuOverlay) {
        mobileMenu.classList.toggle('mobile-menu-open');
        menuOverlay.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    }
}

if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
if (menuOverlay) menuOverlay.addEventListener('click', toggleMenu);


// --- التحكم في نافذة الحجز (Booking Modal) ---
const bookingModal = document.getElementById('booking-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const serviceNameInput = document.getElementById('selected-service');
const bookingForm = document.getElementById('booking-form');

// فتح النافذة
function openModal(serviceName) {
    if (bookingModal && serviceNameInput) {
        serviceNameInput.value = serviceName;
        bookingModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }
}

// إغلاق النافذة
function closeModal() {
    if (bookingModal) {
        bookingModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
}

// ربط الأزرار بالنافذة
const serviceButtons = document.querySelectorAll('.open-modal-btn');
serviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const service = btn.getAttribute('data-service');
        openModal(service);
    });
});

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

// إغلاق النافذة عند النقر خارجها
if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) closeModal();
    });
}

// معالجة نموذج الحجز
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتأكيد الحجز.');
        closeModal();
        bookingForm.reset();
    });
}