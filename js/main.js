/* ============================================
   Myungsung Kim - Academic Website
   Minimal, Clean Design inspired by daehwakim.com
   ============================================ */

/* Reset & Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Colors */
    --color-text: #1a1a1a;
    --color-text-light: #666;
    --color-text-lighter: #999;
    --color-bg: #ffffff;
    --color-bg-gray: #f8f9fa;
    --color-border: #e5e5e5;
    --color-accent: #2563eb;
    --color-accent-hover: #1d4ed8;
    
    /* Typography */
    --font-main: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-serif: 'Crimson Text', Georgia, serif;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 6rem;
    
    /* Layout */
    --max-width: 1000px;
    --border-radius: 8px;
}

body {
    font-family: var(--font-main);
    font-size: 16px;
    line-height: 1.7;
    color: var(--color-text);
    background-color: var(--color-bg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Container */
.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: var(--spacing-sm);
}

h1 {
    font-size: 2.5rem;
    font-weight: 300;
}

h2 {
    font-size: 2rem;
    margin-bottom: var(--spacing-md);
    font-weight: 500;
}

h3 {
    font-size: 1.5rem;
}

h4 {
    font-size: 1.25rem;
}

p {
    margin-bottom: var(--spacing-sm);
}

a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.2s;
}

a:hover {
    color: var(--color-accent-hover);
}

/* Language Toggle Button (Fixed Position) */
.language-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.lang-btn {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: var(--font-main);
    color: var(--color-text);
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.lang-btn:hover {
    background: var(--color-bg-gray);
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}

/* Navigation */
.nav {
    padding: var(--spacing-md) 0;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 100;
    transition: all 0.3s;
}

.nav.sticky {
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-style: italic;
    color: var(--color-text);
    font-weight: 600;
}

.nav-links {
    display: flex;
    gap: var(--spacing-md);
}

.nav-links a {
    color: var(--color-text-light);
    font-size: 0.95rem;
    font-weight: 400;
    transition: color 0.2s;
}

.nav-links a:hover {
    color: var(--color-text);
}

/* Hero Section */
.hero {
    padding: var(--spacing-xl) 0 var(--spacing-lg);
    text-align: center;
}

.hero-content {
    max-width: 700px;
    margin: 0 auto;
}

.profile-image {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: var(--spacing-md);
    border: 4px solid var(--color-bg-gray);
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.name {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: var(--spacing-xs);
}

.affiliation {
    color: var(--color-text-light);
    font-size: 1.1rem;
    margin-bottom: var(--spacing-md);
}

.status-badge {
    display: inline-block;
    background: var(--color-bg-gray);
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--border-radius);
    margin-bottom: var(--spacing-md);
    font-size: 0.95rem;
    color: var(--color-text-light);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);
    font-size: 1.5rem;
}

.social-links a {
    transition: transform 0.2s;
}

.social-links a:hover {
    transform: translateY(-3px);
}

/* Sections */
.section {
    padding: var(--spacing-lg) 0;
}

.section-gray {
    background: var(--color-bg-gray);
}

/* About Section */
.about-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--spacing-lg);
    margin-top: var(--spacing-md);
}

.about-main .bio {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: var(--spacing-md);
    color: var(--color-text);
}

.research-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    margin-top: var(--spacing-md);
}

.tag {
    display: inline-block;
    background: var(--color-bg);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    color: var(--color-text-light);
    border: 1px solid var(--color-border);
}

.info-box {
    background: var(--color-bg);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    margin-bottom: var(--spacing-md);
    border: 1px solid var(--color-border);
}

.info-box h3 {
    font-size: 1.1rem;
    margin-bottom: var(--spacing-sm);
    font-weight: 600;
}

.edu-item {
    margin-bottom: var(--spacing-md);
}

.edu-item:last-child {
    margin-bottom: 0;
}

.edu-item strong {
    display: block;
    margin-bottom: 4px;
    font-weight: 600;
}

.edu-item p {
    font-size: 0.95rem;
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: 0;
}

/* Publications Section */
.pub-category {
    font-size: 1.3rem;
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-xs);
    border-bottom: 2px solid var(--color-border);
    font-weight: 600;
}

.pub-category:first-of-type {
    margin-top: 0;
}

.pub-item {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-lg);
    border-bottom: 1px solid var(--color-border);
}

.pub-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
}

.pub-image img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
}

.pub-badges {
    display: flex;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-xs);
}

.badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-first {
    background: #dbeafe;
    color: #1e40af;
}

.badge-cofirst {
    background: #e0e7ff;
    color: #4338ca;
}

.badge-second,
.badge-third {
    background: #f3f4f6;
    color: #6b7280;
}

.badge-status {
    background: #fef3c7;
    color: #92400e;
}

.pub-title {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: var(--spacing-xs);
    color: var(--color-text);
}

.pub-summary {
    font-size: 0.95rem;
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: var(--spacing-xs);
    font-style: italic;
}

.pub-venue {
    font-size: 0.9rem;
    color: var(--color-text-lighter);
    font-style: italic;
    margin-bottom: 4px;
}

.pub-authors {
    font-size: 0.9rem;
    color: var(--color-text-light);
    margin-bottom: var(--spacing-xs);
}

.pub-links {
    display: flex;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-xs);
}

.pub-links a {
    font-size: 0.9rem;
    text-decoration: underline;
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-md);
}

.project-card {
    background: var(--color-bg);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    transition: all 0.3s;
}

.project-card:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transform: translateY(-4px);
}

.project-card h3 {
    font-size: 1.2rem;
    margin-bottom: var(--spacing-xs);
}

.project-period {
    font-size: 0.85rem;
    color: var(--color-text-lighter);
    margin-bottom: var(--spacing-sm);
}

.project-desc {
    font-size: 0.95rem;
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: var(--spacing-sm);
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: var(--spacing-sm);
}

/* Conferences Section */
.timeline {
    margin-top: var(--spacing-md);
}

.timeline-year {
    margin-bottom: var(--spacing-lg);
}

.timeline-year h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-light);
    font-weight: 600;
}

.conf-item {
    margin-bottom: var(--spacing-md);
    padding-left: var(--spacing-md);
    border-left: 3px solid var(--color-border);
}

.conf-type {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    text-transform: uppercase;
}

.conf-type.poster {
    background: #e0f2fe;
    color: #0369a1;
}

.conf-type.oral {
    background: #dcfce7;
    color: #15803d;
}

.conf-title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 4px;
    color: var(--color-text);
}

.conf-venue {
    font-size: 0.9rem;
    color: var(--color-text-light);
    font-style: italic;
    margin-bottom: 4px;
}

.conf-link {
    font-size: 0.85rem;
    margin-top: 4px;
}

.conf-link a {
    color: var(--color-accent);
    text-decoration: underline;
    word-break: break-all;
}

/* Gallery Section */
.gallery-note {
    color: var(--color-text-light);
    font-size: 0.95rem;
    margin-bottom: var(--spacing-md);
    font-style: italic;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-md);
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: transform 0.3s;
}

.gallery-item:hover {
    transform: scale(1.03);
}

.gallery-item img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
}

.gallery-caption {
    margin-top: var(--spacing-xs);
    font-size: 0.9rem;
    color: var(--color-text-light);
    text-align: center;
}

.gallery-upload-note {
    margin-top: var(--spacing-lg);
    padding: var(--spacing-md);
    background: var(--color-bg-gray);
    border-radius: var(--border-radius);
    border: 1px dashed var(--color-border);
    text-align: center;
}

.gallery-upload-note p {
    font-size: 0.9rem;
    color: var(--color-text-light);
    margin: 0;
}

/* Lightbox */
.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    cursor: pointer;
}

.lightbox-content {
    max-width: 90%;
    max-height: 90%;
    position: relative;
}

.lightbox-content img {
    max-width: 100%;
    max-height: 90vh;
    border-radius: var(--border-radius);
}

.lightbox-close {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
}

/* Footer */
.footer {
    background: var(--color-bg-gray);
    padding: var(--spacing-lg) 0;
    text-align: center;
    border-top: 1px solid var(--color-border);
}

.footer p {
    font-size: 0.9rem;
    color: var(--color-text-light);
    margin-bottom: var(--spacing-xs);
}

.footer p:last-child {
    margin-bottom: 0;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}

/* Responsive Design */
@media (max-width: 768px) {
    :root {
        --spacing-lg: 3rem;
        --spacing-xl: 4rem;
    }
    
    .name {
        font-size: 2.2rem;
    }
    
    h2 {
        font-size: 1.75rem;
    }
    
    .nav-links {
        flex-wrap: wrap;
        gap: var(--spacing-sm);
        font-size: 0.85rem;
    }
    
    .about-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }
    
    .pub-item {
        grid-template-columns: 1fr;
        gap: var(--spacing-sm);
    }
    
    .pub-image img {
        width: 100%;
        height: 180px;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--spacing-sm);
    }
    
    .language-toggle {
        top: 10px;
        right: 10px;
    }
    
    .social-links {
        flex-wrap: wrap;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 var(--spacing-sm);
    }
    
    .profile-image {
        width: 140px;
        height: 140px;
    }
    
    .name {
        font-size: 1.8rem;
    }
    
    .affiliation {
        font-size: 1rem;
    }
    
    .nav .container {
        flex-direction: column;
        gap: var(--spacing-sm);
    }
}

/* Print Styles */
@media print {
    .nav,
    .language-toggle,
    .social-links,
    .gallery,
    .footer {
        display: none;
    }
    
    body {
        font-size: 12pt;
    }
    
    .section {
        page-break-inside: avoid;
    }
}
