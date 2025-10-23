// ==========================================
// MODERN PORTFOLIO JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Initialize typed text animation
    initTypedText();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize content sections
    initContentSections();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Initialize enhanced features with delay for better performance
    setTimeout(() => {
        initEnhancedFeatures();
    }, 1000);
}

// ==========================================
// TYPED TEXT ANIMATION
// ==========================================
function initTypedText() {
    const typedOptions = {
        strings: [
            'Software Engineer',
            'Backend Developer'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '<span style="color: #6366f1;">|</span>',
        contentType: 'html'
    };

    new Typed('.typed-text', typedOptions);
}

// ==========================================
// THEME TOGGLE
// ==========================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Add smooth transition
            body.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                body.style.transition = '';
            }, 300);
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ==========================================
// MODERN NAVIGATION
// ==========================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetSection = link.getAttribute('data-target');
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Load content first, then show section
            loadSectionContent(targetSection);
            
            // Small delay to ensure content is loaded before showing
            setTimeout(() => {
                showSection(targetSection);
            }, 50);
        });
    });
}

function showSection(sectionName) {
    const aboutSection = document.getElementById('about-section');
    const container = document.getElementById('contentContainer');
    
    // Show/hide about section
    if (sectionName === 'about') {
        if (aboutSection) {
            aboutSection.style.display = 'block';
            aboutSection.classList.add('active');
        }
        if (container) {
            container.style.display = 'none';
        }
    } else {
        if (aboutSection) {
            aboutSection.style.display = 'none';
            aboutSection.classList.remove('active');
        }
        if (container) {
            container.style.display = 'block';
        }
    }
    
    // Re-trigger AOS animations
    setTimeout(() => {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(el => {
            el.classList.remove('aos-animate');
            setTimeout(() => {
                el.classList.add('aos-animate');
            }, 50);
        });
    }, 100);
}

// ==========================================
// DYNAMIC CONTENT LOADING
// ==========================================
function loadSectionContent(sectionName) {
    const container = document.getElementById('contentContainer');
    
    if (!container) return;
    
    // Clear existing content
    container.innerHTML = '';
    
    // Show content based on section
    if (sectionName !== 'about') {
        switch(sectionName) {
            case 'education':
                container.innerHTML = createEducationSection();
                break;
            case 'experience':
                container.innerHTML = createExperienceSection();
                break;
            case 'portfolio':
                container.innerHTML = createPortfolioSection();
                break;
            case 'research':
                container.innerHTML = createResearchSection();
                break;
            case 'articles':
                container.innerHTML = createArticlesSection();
                break;
        }
        
        // Re-initialize AOS for new content
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }
}

// ==========================================
// CONTENT SECTION CREATORS
// ==========================================
function createEducationSection() {
    return `
        <section class="content-section active" data-section="education">
            <div class="glass-card content-card" data-aos="fade-up">
                <div class="card-header">
                    <h2 class="section-title">
                        <i class="fas fa-graduation-cap title-icon"></i>
                        <span class="accent-text">Education</span>
                    </h2>
                </div>
                <div class="card-content">
                    <div class="modern-timeline">
                        <div class="timeline-item" data-aos="fade-right" data-aos-delay="200">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="timeline-header">
                                    <span class="timeline-time">2018-2022</span>
                                    <span class="timeline-badge">Bachelor's Degree</span>
                                </div>
                                <h3 class="timeline-title">Universitas Trunojoyo Madura</h3>
                                <p class="timeline-subtitle">Teknik Informatika</p>
                                <p class="timeline-description">
                                    Focused on software engineering, artificial intelligence, and web development. 
                                    Graduated with excellent academic performance and hands-on project experience.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-item" data-aos="fade-right" data-aos-delay="400">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="timeline-header">
                                    <span class="timeline-time">2015-2018</span>
                                    <span class="timeline-badge">Vocational High School</span>
                                </div>
                                <h3 class="timeline-title">SMK Negeri 1 Sumenep</h3>
                                <p class="timeline-subtitle">Rekayasa Perangkat Lunak</p>
                                <p class="timeline-description">
                                    Specialized in software engineering with strong foundation in programming 
                                    fundamentals and software development lifecycle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function createExperienceSection() {
    return `
        <section class="content-section active" data-section="experience">
            <div class="glass-card content-card" data-aos="fade-up">
                <div class="card-header">
                    <h2 class="section-title">
                        <i class="fas fa-briefcase title-icon"></i>
                        Working <span class="accent-text">Experience</span>
                    </h2>
                </div>
                <div class="card-content">
                    <div class="modern-timeline">
                        <div class="timeline-item" data-aos="fade-right" data-aos-delay="200">
                            <div class="timeline-marker active"></div>
                            <div class="timeline-content">
                                <div class="timeline-header">
                                    <span class="timeline-time">Jan 2023 - Present</span>
                                    <span class="timeline-badge current">Current</span>
                                </div>
                                <h3 class="timeline-title">Software Engineer at Jatis Mobile</h3>
                                <div class="timeline-skills">
                                    <span class="skill-tag">Backend Development</span>
                                    <span class="skill-tag">API Integration</span>
                                    <span class="skill-tag">WhatsApp API</span>
                                </div>
                                <ul class="timeline-achievements">
                                    <li>Developing and maintaining WhatsApp OnPremise solutions</li>
                                    <li>Building new engine features for WhatsApp Interactive services</li>
                                    <li>Implementing comprehensive unit testing strategies</li>
                                    <li>Conducting UAT and quality assurance processes</li>
                                    <li>Researching and implementing new feature requirements</li>
                                </ul>
                            </div>
                        </div>
                        <div class="timeline-item" data-aos="fade-right" data-aos-delay="400">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="timeline-header">
                                    <span class="timeline-time">Sep 2022 - Dec 2022</span>
                                    <span class="timeline-badge">Internship</span>
                                </div>
                                <h3 class="timeline-title">IT Developer Intern at Jatis Mobile</h3>
                                <div class="timeline-skills">
                                    <span class="skill-tag">Web Services</span>
                                    <span class="skill-tag">Facebook API</span>
                                    <span class="skill-tag">Message APIs</span>
                                </div>
                                <ul class="timeline-achievements">
                                    <li>Learning and developing backend web service message APIs</li>
                                    <li>Integrating message services with Facebook API</li>
                                </ul>
                            </div>
                        </div>
                        <div class="timeline-item" data-aos="fade-right" data-aos-delay="600">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="timeline-header">
                                    <span class="timeline-time">Sep 2020 - Nov 2022</span>
                                    <span class="timeline-badge">Part-time</span>
                                </div>
                                <h3 class="timeline-title">Software Developer at LP Ma'arif NU PBNU</h3>
                                <div class="timeline-skills">
                                    <span class="skill-tag">Full-Stack Development</span>
                                    <span class="skill-tag">Google APIs</span>
                                    <span class="skill-tag">Education Systems</span>
                                </div>
                                <ul class="timeline-achievements">
                                    <li>Designed and developed Pangkalan Data Satuan Pendidikan (PDSP) system</li>
                                    <li>Created automated email system using Google Services APIs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function createPortfolioSection() {
    return `
        <section class="content-section active" data-section="portfolio">
            <div class="glass-card content-card" data-aos="fade-up">
                <div class="card-header">
                    <h2 class="section-title">
                        <i class="fas fa-rocket title-icon"></i>
                        <span class="accent-text">Portfolio</span>
                    </h2>
                </div>
                <div class="card-content">
                    <div class="portfolio-grid">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="200">
                            <div class="portfolio-card">
                                <div class="portfolio-image">
                                    <img src="./img/portofolio/Screenshot 2025-05-19 084835.png" alt="Sipinter LP Ma'arif NU PBNU">
                                    <div class="portfolio-overlay">
                                        <div class="portfolio-actions">
                                            <a href="http://sipinter-dev.maarifnu.or.id/" target="_blank" class="portfolio-btn">
                                                <i class="fas fa-external-link-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-content">
                                    <h3 class="portfolio-title">Sipinter LP Ma'arif NU PBNU</h3>
                                    <p class="portfolio-description">
                                        Sistem pengelolaan data satuan pendidikan dan manajemen layanan dari LP Ma'arif NU PBNU
                                    </p>
                                    <div class="portfolio-tech">
                                        <span class="tech-tag">PHP</span>
                                        <span class="tech-tag">Laravel</span>
                                        <span class="tech-tag">MySQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="400">
                            <div class="portfolio-card">
                                <div class="portfolio-image">
                                    <img src="./img/portofolio/Screenshot 2025-05-19 085108.png" alt="Kas Pro">
                                    <div class="portfolio-overlay">
                                        <div class="portfolio-actions">
                                            <a href="http://cashflow-demo.faisolarifin.my.id/" target="_blank" class="portfolio-btn">
                                                <i class="fas fa-external-link-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-content">
                                    <h3 class="portfolio-title">Kas Pro</h3>
                                    <p class="portfolio-description">
                                        Sistem pengelolaan kas flow untuk manajemen keuangan yang efektif dan efisien
                                    </p>
                                    <div class="portfolio-tech">
                                        <span class="tech-tag">Vue.js</span>
                                        <span class="tech-tag">Node.js</span>
                                        <span class="tech-tag">MongoDB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="600">
                            <div class="portfolio-card">
                                <div class="portfolio-image">
                                    <img src="./img/portofolio/Screenshot 2025-05-19 085206.png" alt="Lab Management System">
                                    <div class="portfolio-overlay">
                                        <div class="portfolio-actions">
                                            <a href="http://lab-demo.faisolarifin.my.id/" target="_blank" class="portfolio-btn">
                                                <i class="fas fa-external-link-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-content">
                                    <h3 class="portfolio-title">Laboratory Management System</h3>
                                    <p class="portfolio-description">
                                        Sistem pengelolaan layanan Laboratorium Teknik Sipil Universitas Wiraraja
                                    </p>
                                    <div class="portfolio-tech">
                                        <span class="tech-tag">React</span>
                                        <span class="tech-tag">Express.js</span>
                                        <span class="tech-tag">PostgreSQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function createResearchSection() {
    return `
        <section class="content-section active" data-section="research">
            <div class="glass-card content-card" data-aos="fade-up">
                <div class="card-header">
                    <h2 class="section-title">
                        <i class="fas fa-flask title-icon"></i>
                        Research & <span class="accent-text">Publications</span>
                    </h2>
                </div>
                <div class="card-content">
                    <div class="research-grid">
                        <div class="research-item" data-aos="fade-up" data-aos-delay="200">
                            <div class="research-card">
                                <div class="research-meta">
                                    <span class="research-year">2023</span>
                                    <span class="research-type">Journal Article</span>
                                </div>
                                <h3 class="research-title">Modifikasi Residual VGG-16 untuk Klasifikasi Sel Darah Putih</h3>
                                <p class="research-description">
                                    Advanced deep learning approach for white blood cell classification using modified VGG-16 architecture with residual connections.
                                </p>
                                <div class="research-keywords">
                                    <span class="keyword-tag">Deep Learning</span>
                                    <span class="keyword-tag">Computer Vision</span>
                                    <span class="keyword-tag">Medical AI</span>
                                </div>
                            </div>
                        </div>
                        <div class="research-item" data-aos="fade-up" data-aos-delay="400">
                            <div class="research-card">
                                <div class="research-meta">
                                    <span class="research-year">2022</span>
                                    <span class="research-type">Thesis</span>
                                </div>
                                <h3 class="research-title">Klasifikasi COVID-19 pada Citra Radiografi X-Ray Dada menggunakan Kombinasi CNN dan LSTM</h3>
                                <p class="research-description">
                                    Novel approach combining Convolutional Neural Networks and Long Short-Term Memory for COVID-19 detection in chest X-ray images, achieving 98.52% accuracy.
                                </p>
                                <div class="research-keywords">
                                    <span class="keyword-tag">CNN</span>
                                    <span class="keyword-tag">LSTM</span>
                                    <span class="keyword-tag">COVID-19</span>
                                    <span class="keyword-tag">Medical Imaging</span>
                                </div>
                            </div>
                        </div>
                        <div class="research-item" data-aos="fade-up" data-aos-delay="600">
                            <div class="research-card">
                                <div class="research-meta">
                                    <span class="research-year">2021</span>
                                    <span class="research-type">Book</span>
                                </div>
                                <h3 class="research-title">Tutorial Framework CodeIgniter 4 untuk Pemula dan Implementasi pada Aplikasi Ujian TOEFL</h3>
                                <p class="research-description">
                                    Comprehensive guide for beginners to learn CodeIgniter 4 framework with practical implementation in TOEFL examination system development.
                                </p>
                                <div class="research-keywords">
                                    <span class="keyword-tag">CodeIgniter 4</span>
                                    <span class="keyword-tag">Web Development</span>
                                    <span class="keyword-tag">PHP</span>
                                    <span class="keyword-tag">Tutorial</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function createArticlesSection() {
    return `
        <section class="content-section active" data-section="articles">
            <div class="glass-card content-card" data-aos="fade-up">
                <div class="card-header">
                    <h2 class="section-title">
                        <i class="fas fa-blog title-icon"></i>
                        <span class="accent-text">Articles</span>
                    </h2>
                </div>
                <div class="card-content">
                    <div class="coming-soon">
                        <div class="coming-soon-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <h3>Coming Soon!</h3>
                        <p>I'm currently working on some exciting articles about software engineering, AI development, and modern web technologies. Stay tuned!</p>
                        <div class="notify-section">
                            <p>Want to be notified when I publish new articles?</p>
                            <a href="mailto:faisolofficial99@gmail.com?subject=Article Notifications" class="notify-btn">
                                <i class="fas fa-bell"></i>
                                Get Notified
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// ==========================================
// CONTENT SECTIONS INITIALIZATION
// ==========================================
function initContentSections() {
    // Add CSS for dynamic content
    const dynamicStyles = `
        <style>
            .modern-timeline {
                position: relative;
                padding: 2rem 0;
            }
            
            .modern-timeline::before {
                content: '';
                position: absolute;
                left: 30px;
                top: 0;
                bottom: 0;
                width: 2px;
                background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
            }
            
            .timeline-item {
                position: relative;
                margin-bottom: 3rem;
                padding-left: 80px;
            }
            
            .timeline-marker {
                position: absolute;
                left: 21px;
                top: 0;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: var(--primary-color);
                border: 4px solid var(--bg-primary);
                box-shadow: 0 0 0 2px var(--primary-color);
            }
            
            .timeline-marker.active {
                background: var(--accent-color);
                box-shadow: 0 0 0 2px var(--accent-color), 0 0 20px rgba(6, 182, 212, 0.3);
                animation: pulse 2s infinite;
            }
            
            .timeline-content {
                background: var(--bg-glass);
                backdrop-filter: blur(10px);
                border-radius: var(--border-radius-md);
                padding: 1.5rem;
                border: 1px solid rgba(255, 255, 255, 0.1);
                transition: all var(--transition-normal);
            }
            
            .timeline-content:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-lg);
            }
            
            .timeline-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }
            
            .timeline-time {
                font-size: 0.9rem;
                color: var(--text-muted);
                font-family: var(--font-family-mono);
            }
            
            .timeline-badge {
                padding: 0.25rem 0.75rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
                background: var(--bg-glass);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .timeline-badge.current {
                background: var(--gradient-primary);
                color: white;
                border: none;
            }
            
            .timeline-title {
                font-size: 1.3rem;
                font-weight: 700;
                color: var(--text-primary);
                margin-bottom: 0.5rem;
            }
            
            .timeline-subtitle {
                color: var(--primary-color);
                font-weight: 600;
                margin-bottom: 1rem;
            }
            
            .timeline-skills {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 1rem;
                flex-wrap: wrap;
            }
            
            .skill-tag {
                padding: 0.25rem 0.75rem;
                background: var(--primary-color);
                color: white;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 500;
            }
            
            .timeline-achievements {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .timeline-achievements li {
                position: relative;
                padding-left: 1.5rem;
                margin-bottom: 0.5rem;
                color: var(--text-secondary);
            }
            
            .timeline-achievements li::before {
                content: '▸';
                position: absolute;
                left: 0;
                color: var(--primary-color);
                font-weight: bold;
            }
            
            /* Portfolio Styles */
            .portfolio-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 2rem;
            }
            
            .portfolio-card {
                background: var(--bg-glass);
                backdrop-filter: blur(10px);
                border-radius: var(--border-radius-lg);
                overflow: hidden;
                border: 1px solid rgba(255, 255, 255, 0.1);
                transition: all var(--transition-normal);
            }
            
            .portfolio-card:hover {
                transform: translateY(-5px);
                box-shadow: var(--shadow-xl);
            }
            
            .portfolio-image {
                position: relative;
                height: 200px;
                overflow: hidden;
            }
            
            .portfolio-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform var(--transition-normal);
            }
            
            .portfolio-overlay {
                position: absolute;
                inset: 0;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity var(--transition-normal);
            }
            
            .portfolio-card:hover .portfolio-overlay {
                opacity: 1;
            }
            
            .portfolio-card:hover .portfolio-image img {
                transform: scale(1.1);
            }
            
            .portfolio-btn {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--primary-color);
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                transition: all var(--transition-normal);
            }
            
            .portfolio-btn:hover {
                background: var(--accent-color);
                transform: scale(1.1);
            }
            
            .portfolio-content {
                padding: 1.5rem;
            }
            
            .portfolio-title {
                font-size: 1.2rem;
                font-weight: 700;
                color: var(--text-primary);
                margin-bottom: 0.5rem;
            }
            
            .portfolio-description {
                color: var(--text-secondary);
                margin-bottom: 1rem;
                line-height: 1.6;
            }
            
            .portfolio-tech {
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
            }
            
            .tech-tag {
                padding: 0.25rem 0.75rem;
                background: var(--accent-color);
                color: white;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: 500;
            }
            
            /* Research Styles */
            .research-grid {
                display: grid;
                gap: 2rem;
            }
            
            .research-card {
                background: var(--bg-glass);
                backdrop-filter: blur(10px);
                border-radius: var(--border-radius-lg);
                padding: 2rem;
                border: 1px solid rgba(255, 255, 255, 0.1);
                transition: all var(--transition-normal);
            }
            
            .research-card:hover {
                transform: translateY(-3px);
                box-shadow: var(--shadow-lg);
            }
            
            .research-meta {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }
            
            .research-year {
                font-family: var(--font-family-mono);
                color: var(--primary-color);
                font-weight: 600;
            }
            
            .research-type {
                padding: 0.25rem 0.75rem;
                background: var(--secondary-color);
                color: white;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: 500;
            }
            
            .research-title {
                font-size: 1.3rem;
                font-weight: 700;
                color: var(--text-primary);
                margin-bottom: 1rem;
                line-height: 1.4;
            }
            
            .research-description {
                color: var(--text-secondary);
                margin-bottom: 1.5rem;
                line-height: 1.6;
            }
            
            .research-keywords {
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
            }
            
            .keyword-tag {
                padding: 0.25rem 0.75rem;
                background: var(--bg-glass);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: var(--text-secondary);
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: 500;
            }
            
            /* Coming Soon Styles */
            .coming-soon {
                text-align: center;
                padding: 4rem 2rem;
            }
            
            .coming-soon-icon {
                font-size: 4rem;
                color: var(--primary-color);
                margin-bottom: 2rem;
                animation: bounce 2s infinite;
            }
            
            .coming-soon h3 {
                font-size: 2rem;
                font-weight: 700;
                color: var(--text-primary);
                margin-bottom: 1rem;
            }
            
            .coming-soon p {
                color: var(--text-secondary);
                margin-bottom: 2rem;
                max-width: 500px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .notify-section p {
                margin-bottom: 1rem;
                color: var(--text-secondary);
            }
            
            .notify-btn {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem 2rem;
                background: var(--gradient-primary);
                color: white;
                text-decoration: none;
                border-radius: var(--border-radius-md);
                font-weight: 600;
                transition: all var(--transition-normal);
            }
            
            .notify-btn:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-lg);
                filter: brightness(1.1);
            }
            
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-20px);
                }
                60% {
                    transform: translateY(-10px);
                }
            }
            
            @keyframes pulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.1);
                }
                100% {
                    transform: scale(1);
                }
            }
            
            @media (max-width: 768px) {
                .timeline-item {
                    padding-left: 60px;
                }
                
                .modern-timeline::before {
                    left: 20px;
                }
                
                .timeline-marker {
                    left: 11px;
                }
                
                .portfolio-grid {
                    grid-template-columns: 1fr;
                }
                
                .timeline-header {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.5rem;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', dynamicStyles);
}

// ==========================================
// OPTIMIZED SCROLL EFFECTS
// ==========================================
function initScrollEffects() {
    let lastScrollTop = 0;
    let ticking = false;
    const navbar = document.querySelector('.navigation-section');
    
    function updateNavbar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (navbar) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.transform = 'translate3d(0, -100%, 0)';
            } else {
                navbar.style.transform = 'translate3d(0, 0, 0)';
            }
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Smooth scrolling for anchor links
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
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// ENHANCED INTERACTIVITY
// ==========================================

// Magnetic button effect
function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('.magnetic, .cta-btn, .social-link');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
}

// Optimized parallax scrolling effect with throttling
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.hero-img, .particles-bg');
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3; // Reduced intensity for smoother scrolling
        
        parallaxElements.forEach(element => {
            element.style.transform = `translate3d(0, ${rate}px, 0)`; // Use 3D transform for better performance
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Smooth reveal animations on scroll
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger child animations
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
}

// Dynamic background particles
function initParticleBackground() {
    const particlesContainer = document.querySelector('.particles-bg');
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Disabled custom cursor for better usability
function initCursorEffect() {
    // Custom cursor disabled for default user experience
    return;
}

// Loading progress indicator
function initProgressIndicator() {
    const progress = document.createElement('div');
    progress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        z-index: 10000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progress);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progress.style.width = scrollPercent + '%';
    });
}

// Enhanced statistics counter animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.textContent);
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 fps
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else if (element.textContent.includes('%')) {
                element.textContent = Math.floor(current) + '%';
            } else {
                element.textContent = Math.floor(current);
            }
        }, duration / steps);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Keyboard navigation support
function initKeyboardNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    let currentIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            
            // Remove focus from current
            navLinks[currentIndex].classList.remove('keyboard-focus');
            
            // Move to next
            if (e.shiftKey) {
                currentIndex = currentIndex > 0 ? currentIndex - 1 : navLinks.length - 1;
            } else {
                currentIndex = currentIndex < navLinks.length - 1 ? currentIndex + 1 : 0;
            }
            
            // Focus on new element
            navLinks[currentIndex].classList.add('keyboard-focus');
            navLinks[currentIndex].focus();
        }
        
        if (e.key === 'Enter') {
            navLinks[currentIndex].click();
        }
    });
}

// Performance optimization for animations
function initPerformanceOptimizations() {
    // Reduce animations on low-performance devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-animations');
    }
    
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.body.classList.add('paused-animations');
        } else {
            document.body.classList.remove('paused-animations');
        }
    });
}

// Initialize all enhanced features
function initEnhancedFeatures() {
    // Only initialize magnetic effects on non-mobile devices for better performance
    if (window.innerWidth > 768) {
        initMagneticEffect();
    }
    
    initParallaxEffect();
    initScrollReveal();
    initParticleBackground();
    initProgressIndicator();
    initStatsCounter();
    initKeyboardNavigation();
    initPerformanceOptimizations();
}

// ==========================================
// SERVICE WORKER REGISTRATION
// ==========================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('ServiceWorker registered successfully:', registration);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New content is available, show update notification
                                showUpdateNotification();
                            }
                        });
                    });
                })
                .catch((error) => {
                    console.log('ServiceWorker registration failed:', error);
                });
        });
    }
}

// Show update notification to user
function showUpdateNotification() {
    // Create update notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--gradient-primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--border-radius-md);
        box-shadow: var(--shadow-xl);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform var(--transition-normal);
    `;
    
    notification.innerHTML = `
        <div>
            <strong>Update Available!</strong><br>
            <small>New content is ready. Refresh to update.</small>
        </div>
        <button onclick="window.location.reload()" style="
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
        ">Refresh</button>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 10 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 10000);
}

// Call enhanced features after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Register service worker for PWA functionality
    registerServiceWorker();
    
    // Initialize enhanced features with delay for better performance
    setTimeout(initEnhancedFeatures, 1000);
});