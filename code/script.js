/* ====================================
   SCRIPT.JS - PORTFOLIO FUNCTIONALITY
   ==================================== */

// ====================================
// DOM ELEMENTS
// ====================================

const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');
const contactForm = document.getElementById('contactForm');

// ====================================
// LANGUAGE CONFIGURATION
// ====================================

const translations = {
    en: {
        'Portfolio': 'Portfolio',
        'Home': 'Home',
        'About': 'About',
        'Education': 'Education',
        'Skills': 'Skills',
        'Experience': 'Experience',
        'Projects': 'Projects',
        'Contact': 'Contact',
        '[Your Name]': '[Your Name]',
        '[Your Profession]': '[Your Profession]',
        'Creating innovative solutions through AI, Robotics, and Web Development': 'Creating innovative solutions through AI, Robotics, and Web Development',
        'View My Work': 'View My Work',
        'Get in Touch': 'Get in Touch',
        'About Me': 'About Me',
        'Passionate Developer & Innovator': 'Passionate Developer & Innovator',
        'With a strong foundation in AI, Robotics, and Web Development, I am dedicated to creating innovative solutions that solve real-world problems. My approach combines technical expertise with a user-centric mindset, ensuring that every project delivers both excellence and impact. I thrive in collaborative environments and continuously push the boundaries of what\'s possible in technology.': 'With a strong foundation in AI, Robotics, and Web Development, I am dedicated to creating innovative solutions that solve real-world problems. My approach combines technical expertise with a user-centric mindset, ensuring that every project delivers both excellence and impact. I thrive in collaborative environments and continuously push the boundaries of what\'s possible in technology.',
        '50+': '50+',
        'Projects Completed': 'Projects Completed',
        '5+': '5+',
        'Years Experience': 'Years Experience',
        '30+': '30+',
        'Happy Clients': 'Happy Clients',
        'Bachelor of Science in Computer Science': 'Bachelor of Science in Computer Science',
        '2019 - 2023': '2019 - 2023',
        'University Name': 'University Name',
        'Graduated with distinction. Focus on AI, Machine Learning, and Software Development.': 'Graduated with distinction. Focus on AI, Machine Learning, and Software Development.',
        'Certification in Robotics': 'Certification in Robotics',
        '2022': '2022',
        'Professional Institute': 'Professional Institute',
        'Advanced robotics design and autonomous systems programming.': 'Advanced robotics design and autonomous systems programming.',
        'Web Development Bootcamp': 'Web Development Bootcamp',
        '2021': '2021',
        'Coding Academy': 'Coding Academy',
        'Full-stack development with modern frameworks and best practices.': 'Full-stack development with modern frameworks and best practices.',
        'AI & Automation': 'AI & Automation',
        'Machine Learning': 'Machine Learning',
        'Python': 'Python',
        'TensorFlow': 'TensorFlow',
        'Web Development': 'Web Development',
        'React': 'React',
        'JavaScript': 'JavaScript',
        'CSS & Design': 'CSS & Design',
        'Robotics': 'Robotics',
        'ROS & Planning': 'ROS & Planning',
        'Computer Vision': 'Computer Vision',
        'C++': 'C++',
        'Programming': 'Programming',
        'Problem Solving': 'Problem Solving',
        'Git & DevOps': 'Git & DevOps',
        'Databases': 'Databases',
        'Work Experience': 'Work Experience',
        'Senior Developer': 'Senior Developer',
        'Tech Innovation Inc.': 'Tech Innovation Inc.',
        '2022 - Present': '2022 - Present',
        'Led development of AI-powered automation systems': 'Led development of AI-powered automation systems',
        'Mentored a team of 5 junior developers': 'Mentored a team of 5 junior developers',
        'Increased system efficiency by 40%': 'Increased system efficiency by 40%',
        'Robotics Engineer': 'Robotics Engineer',
        'Automation Solutions Ltd.': 'Automation Solutions Ltd.',
        '2020 - 2022': '2020 - 2022',
        'Designed and implemented autonomous robotic systems': 'Designed and implemented autonomous robotic systems',
        'Collaborated with cross-functional teams': 'Collaborated with cross-functional teams',
        'Published 2 research papers on robotics': 'Published 2 research papers on robotics',
        'Full Stack Developer': 'Full Stack Developer',
        'Digital Ventures': 'Digital Ventures',
        '2018 - 2020': '2018 - 2020',
        'Built 15+ web applications': 'Built 15+ web applications',
        'Optimized database queries improving performance by 60%': 'Optimized database queries improving performance by 60%',
        'Implemented responsive design for mobile-first experience': 'Implemented responsive design for mobile-first experience',
        'Services': 'Services',
        'AI Solutions': 'AI Solutions',
        'Custom AI and machine learning solutions tailored to your business needs': 'Custom AI and machine learning solutions tailored to your business needs',
        'Custom AI and machine learning solutions tailored to your business needs': 'Custom AI and machine learning solutions tailored to your business needs',
        'Responsive, high-performance web applications built with modern technologies': 'Responsive, high-performance web applications built with modern technologies',
        'Robotics Engineering': 'Robotics Engineering',
        'Design and implementation of autonomous robotic systems': 'Design and implementation of autonomous robotic systems',
        'Consulting': 'Consulting',
        'Expert guidance on technology strategy and implementation': 'Expert guidance on technology strategy and implementation',
        'Quality Assurance': 'Quality Assurance',
        'Comprehensive testing and optimization for flawless performance': 'Comprehensive testing and optimization for flawless performance',
        'Support & Maintenance': 'Support & Maintenance',
        'Ongoing support and maintenance for your systems': 'Ongoing support and maintenance for your systems',
        'Featured Projects': 'Featured Projects',
        '[Project Title]': '[Project Title]',
        '[Project Description]': '[Project Description]',
        'Problem': 'Problem',
        'Identified key challenges and user pain points': 'Identified key challenges and user pain points',
        'Solution': 'Solution',
        'Implemented innovative and scalable solution': 'Implemented innovative and scalable solution',
        'Impact': 'Impact',
        'Delivered measurable results and business value': 'Delivered measurable results and business value',
        'Live Demo': 'Live Demo',
        'GitHub': 'GitHub',
        'Get In Touch': 'Get In Touch',
        'Let\'s Connect': 'Let\'s Connect',
        'I\'m always interested in hearing about new projects and opportunities.': 'I\'m always interested in hearing about new projects and opportunities.',
        'Name': 'Name',
        'Email': 'Email',
        'Subject': 'Subject',
        'Message': 'Message',
        'Send Message': 'Send Message',
        'I\'ll get back to you as soon as possible.': 'I\'ll get back to you as soon as possible.',
        'Quick Links': 'Quick Links',
        'Social': 'Social',
        '© 2024 [Your Name]. All Rights Reserved.': '© 2024 [Your Name]. All Rights Reserved.',
    },
    ar: {
        'Portfolio': 'المحفظة',
        'Home': 'الرئيسية',
        'About': 'حول',
        'Education': 'التعليم',
        'Skills': 'المهارات',
        'Experience': 'التجربة',
        'Projects': 'المشاريع',
        'Contact': 'تواصل',
        '[Your Name]': '[اسمك]',
        '[Your Profession]': '[مهنتك]',
        'Creating innovative solutions through AI, Robotics, and Web Development': 'إنشاء حلول مبتكرة من خلال الذكاء الاصطناعي والروبوتات وتطوير الويب',
        'View My Work': 'عرض أعمالي',
        'Get in Touch': 'تواصل معي',
        'About Me': 'عني',
        'Passionate Developer & Innovator': 'مطور وموهوب مبدع',
        'With a strong foundation in AI, Robotics, and Web Development, I am dedicated to creating innovative solutions that solve real-world problems. My approach combines technical expertise with a user-centric mindset, ensuring that every project delivers both excellence and impact. I thrive in collaborative environments and continuously push the boundaries of what\'s possible in technology.': 'بفضل أساس قوي في الذكاء الاصطناعي والروبوتات وتطوير الويب، أنا ملتزم بإنشاء حلول مبتكرة تحل مشاكل العالم الحقيقي. يجمع نهجي بين الخبرة التقنية والتفكير المركز على المستخدم، مما يضمن أن كل مشروع يحقق التميز والتأثير. أزدهر في بيئات التعاون وأستمر في دفع حدود ما هو ممكن في التكنولوجيا.',
        '50+': '50+',
        'Projects Completed': 'المشاريع المكتملة',
        '5+': '5+',
        'Years Experience': 'سنوات من الخبرة',
        '30+': '30+',
        'Happy Clients': 'عملاء سعداء',
        'Bachelor of Science in Computer Science': 'بكالوريوس العلوم في علوم الحاسوب',
        '2019 - 2023': '2019 - 2023',
        'University Name': 'اسم الجامعة',
        'Graduated with distinction. Focus on AI, Machine Learning, and Software Development.': 'تخرج بامتياز. التركيز على الذكاء الاصطناعي والتعلم الآلي وتطوير البرمجيات.',
        'Certification in Robotics': 'شهادة في الروبوتات',
        '2022': '2022',
        'Professional Institute': 'معهد مهني',
        'Advanced robotics design and autonomous systems programming.': 'تصميم الروبوتات المتقدمة وبرمجة الأنظمة المستقلة.',
        'Web Development Bootcamp': 'برنامج تطوير الويب',
        '2021': '2021',
        'Coding Academy': 'أكاديمية الترميز',
        'Full-stack development with modern frameworks and best practices.': 'تطوير Full-stack مع الأطر الحديثة وأفضل الممارسات.',
        'AI & Automation': 'الذكاء الاصطناعي والأتمتة',
        'Machine Learning': 'التعلم الآلي',
        'Python': 'بيثون',
        'TensorFlow': 'تينسورفلو',
        'Web Development': 'تطوير الويب',
        'React': 'ريأكت',
        'JavaScript': 'جافاسكريبت',
        'CSS & Design': 'CSS والتصميم',
        'Robotics': 'الروبوتات',
        'ROS & Planning': 'ROS والتخطيط',
        'Computer Vision': 'الرؤية الحاسوبية',
        'C++': 'سي++',
        'Programming': 'البرمجة',
        'Problem Solving': 'حل المشاكل',
        'Git & DevOps': 'Git و DevOps',
        'Databases': 'قواعد البيانات',
        'Work Experience': 'الخبرة العملية',
        'Senior Developer': 'مطور كبير',
        'Tech Innovation Inc.': 'شركة التكنولوجيا',
        '2022 - Present': '2022 - الحاضر',
        'Led development of AI-powered automation systems': 'قاد تطوير أنظمة الأتمتة المدعومة بالذكاء الاصطناعي',
        'Mentored a team of 5 junior developers': 'قاد فريق من 5 مطورين صغار',
        'Increased system efficiency by 40%': 'زيادة كفاءة النظام بنسبة 40٪',
        'Robotics Engineer': 'مهندس روبوتات',
        'Automation Solutions Ltd.': 'شركة حلول الأتمتة',
        '2020 - 2022': '2020 - 2022',
        'Designed and implemented autonomous robotic systems': 'تصميم وتنفيذ أنظمة روبوتية مستقلة',
        'Collaborated with cross-functional teams': 'تعاون مع فرق متعددة الوظائف',
        'Published 2 research papers on robotics': 'نشر ورقتي بحث عن الروبوتات',
        'Full Stack Developer': 'مطور Full Stack',
        'Digital Ventures': 'المشاريع الرقمية',
        '2018 - 2020': '2018 - 2020',
        'Built 15+ web applications': 'بناء 15+ تطبيقات ويب',
        'Optimized database queries improving performance by 60%': 'تحسين استعلامات قاعدة البيانات وتحسين الأداء بنسبة 60٪',
        'Implemented responsive design for mobile-first experience': 'تطبيق التصميم المتجاوب لتجربة Mobile-first',
        'Services': 'الخدمات',
        'AI Solutions': 'حلول الذكاء الاصطناعي',
        'Custom AI and machine learning solutions tailored to your business needs': 'حلول الذكاء الاصطناعي والتعلم الآلي المخصصة لتلبية احتياجات عملك',
        'Responsive, high-performance web applications built with modern technologies': 'تطبيقات ويب متجاوبة وعالية الأداء مبنية بتقنيات حديثة',
        'Robotics Engineering': 'هندسة الروبوتات',
        'Design and implementation of autonomous robotic systems': 'تصميم وتنفيذ أنظمة روبوتية مستقلة',
        'Consulting': 'الاستشارات',
        'Expert guidance on technology strategy and implementation': 'إرشادات خبراء في استراتيجية التكنولوجيا والتنفيذ',
        'Quality Assurance': 'ضمان الجودة',
        'Comprehensive testing and optimization for flawless performance': 'الاختبار الشامل والتحسين لأداء خالية من العيوب',
        'Support & Maintenance': 'الدعم والصيانة',
        'Ongoing support and maintenance for your systems': 'الدعم المستمر والصيانة لأنظمتك',
        'Featured Projects': 'المشاريع المميزة',
        '[Project Title]': '[عنوان المشروع]',
        '[Project Description]': '[وصف المشروع]',
        'Problem': 'المشكلة',
        'Identified key challenges and user pain points': 'تحديد التحديات الرئيسية ونقاط الألم لدى المستخدمين',
        'Solution': 'الحل',
        'Implemented innovative and scalable solution': 'تطبيق حل مبتكر وقابل للتوسع',
        'Impact': 'التأثير',
        'Delivered measurable results and business value': 'قدم نتائج قابلة للقياس وقيمة العمل',
        'Live Demo': 'عرض توضيحي مباشر',
        'GitHub': 'جيثاب',
        'Get In Touch': 'تواصل معي',
        'Let\'s Connect': 'لنتواصل',
        'I\'m always interested in hearing about new projects and opportunities.': 'أنا مهتم دائماً بسماع المزيد عن المشاريع والفرص الجديدة.',
        'Name': 'الاسم',
        'Email': 'البريد الإلكتروني',
        'Subject': 'الموضوع',
        'Message': 'الرسالة',
        'Send Message': 'إرسال الرسالة',
        'I\'ll get back to you as soon as possible.': 'سأرد عليك في أقرب وقت ممكن.',
        'Quick Links': 'روابط سريعة',
        'Social': 'وسائل التواصل',
        '© 2024 [Your Name]. All Rights Reserved.': '© 2024 [اسمك]. جميع الحقوق محفوظة.',
    }
};

// ====================================
// THEME MANAGEMENT
// ====================================

/**
 * Initialize theme on page load
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

/**
 * Set the theme
 */
function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

/**
 * Toggle theme between light and dark
 */
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Theme toggle event listener
themeToggle.addEventListener('click', toggleTheme);

// ====================================
// LANGUAGE MANAGEMENT
// ====================================

/**
 * Initialize language on page load
 */
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

/**
 * Set the language and update content
 */
function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    
    html.setAttribute('lang', lang);
    localStorage.setItem('language', lang);
    
    // Set direction attribute for RTL languages
    if (lang === 'ar') {
        html.setAttribute('dir', 'rtl');
    } else {
        html.setAttribute('dir', 'ltr');
    }
    
    // Update all text content
    updateAllContent(lang);
}

/**
 * Toggle between English and Arabic
 */
function toggleLanguage() {
    const currentLang = html.getAttribute('lang') || 'en';
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
}

/**
 * Update all content based on language
 */
function updateAllContent(lang) {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            // Check if element has children (to avoid overwriting nested elements)
            if (element.children.length === 0 || element.classList.contains('logo__text') || element.classList.contains('lang__text')) {
                element.textContent = text;
            }
        }
    });
}

// Language toggle event listener
langToggle.addEventListener('click', toggleLanguage);

// ====================================
// NAVIGATION
// ====================================

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
}

// Mobile menu toggle
navToggle.addEventListener('click', toggleMobileMenu);

// Close menu when link clicked
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// ====================================
// SMOOTH SCROLLING
// ====================================

/**
 * Smooth scroll to element
 */
function smoothScroll(e) {
    if (e.target.classList.contains('nav__link')) {
        e.preventDefault();
        
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for header height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// Apply smooth scroll to navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// ====================================
// INTERSECTION OBSERVER ANIMATIONS
// ====================================

/**
 * Initialize Intersection Observer for fade-in animations
 */
function initIntersectionObserver() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    // Observe all sections and cards
    const elements = document.querySelectorAll(
        'section, .project-card, .service-card, .skill-category, .timeline__item, .experience__item'
    );

    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// ====================================
// CONTACT FORM HANDLING
// ====================================

/**
 * Handle contact form submission
 */
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Create mailto link (for static HTML form)
    const mailtoLink = `mailto:contact@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Reset form
    contactForm.reset();

    // Show success message
    const lang = html.getAttribute('lang') || 'en';
    const successMsg = lang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent!';
    alert(successMsg);
}

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// ====================================
// SCROLL EFFECTS
// ====================================

/**
 * Add scroll effects to header
 */
function handleScroll() {
    const header = document.getElementById('header');
    
    if (window.scrollY > 100) {
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.boxShadow = 'var(--shadow-sm)';
    }
}

window.addEventListener('scroll', handleScroll);

// ====================================
// ACTIVE NAVIGATION LINK
// ====================================

/**
 * Update active navigation link based on scroll position
 */
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            
            // Remove active class from all links
            navLinks.forEach(link => {
                link.style.color = '';
            });

            // Add active style to current link
            const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.style.color = 'var(--color-primary)';
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ====================================
// INITIALIZATION
// ====================================

/**
 * Initialize all features on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Initialize language
    initLanguage();
    
    // Initialize animations
    initIntersectionObserver();
    
    // Preload images (optional)
    preloadImages();
});

// ====================================
// UTILITY FUNCTIONS
// ====================================

/**
 * Preload images for better performance
 */
function preloadImages() {
    const images = document.querySelectorAll('img[src]:not([src="[path/to/image.jpg]"])');
    images.forEach(img => {
        const newImg = new Image();
        newImg.src = img.src;
    });
}

/**
 * Debounce function for scroll events
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Throttle function for performance
 */
function throttle(func, delay) {
    let lastCallTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCallTime >= delay) {
            lastCallTime = now;
            func.apply(this, args);
        }
    };
}

// ====================================
// ACCESSIBILITY ENHANCEMENTS
// ====================================

/**
 * Add keyboard navigation support
 */
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

/**
 * Add focus visible styles for better accessibility
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ====================================
// PERFORMANCE OPTIMIZATIONS
// ====================================

/**
 * Lazy load elements below the fold
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ====================================
// PRINT OPTIMIZATION
// ====================================

/**
 * Handle print styles
 */
window.addEventListener('beforeprint', () => {
    document.body.style.background = '#fff';
});

window.addEventListener('afterprint', () => {
    document.body.style.background = '';
});

// ====================================
// ERROR HANDLING
// ====================================

/**
 * Global error handler
 */
window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
});

// ====================================
// FEATURE DETECTION
// ====================================

/**
 * Check browser support for modern features
 */
function checkBrowserSupport() {
    const features = {
        flexbox: CSS.supports('display', 'flex'),
        grid: CSS.supports('display', 'grid'),
        customProperties: CSS.supports('--test', '0'),
        intersectionObserver: 'IntersectionObserver' in window
    };

    return features;
}

// Log browser support (development only)
if (process.env.NODE_ENV === 'development') {
    console.log('Browser Support:', checkBrowserSupport());
}

// ====================================
// END OF SCRIPT
// ====================================
