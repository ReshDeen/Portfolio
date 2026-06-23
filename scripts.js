document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    const sections = document.querySelectorAll('main section[id]');
    const resumeButton = document.getElementById("downloadResume");
    const menuToggle = document.querySelector('.menu-toggle');
    const siteHeader = document.querySelector('.site-header');

    const setActiveLink = (id) => {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("is-active", isActive);
            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
    });

    revealElements.forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
            setActiveLink(visibleEntry.target.id);
        }
    }, {
        threshold: 0.45,
        rootMargin: "-35% 0px -45% 0px",
    });

    sections.forEach((section) => sectionObserver.observe(section));

    // Mobile menu toggle
    if (menuToggle && siteHeader) {
        menuToggle.addEventListener('click', () => {
            const isOpen = siteHeader.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu when a nav link is clicked
        navLinks.forEach((link) => link.addEventListener('click', () => {
            if (siteHeader.classList.contains('open')) {
                siteHeader.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }));
    }

    if (resumeButton) {
        resumeButton.addEventListener("click", () => {
            const resumeMarkup = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reshma Banu T Resume</title>
    <style>
        body { font-family: Georgia, serif; margin: 40px; color: #1f1f1f; line-height: 1.6; }
        h1 { margin: 0 0 6px; font-size: 34px; }
        h2 { margin: 24px 0 8px; color: #3e5530; font-size: 18px; border-bottom: 1px solid #d7d0c1; padding-bottom: 6px; }
        p { margin: 0 0 8px; }
        .meta { color: #666; margin-bottom: 18px; }
        ul { margin: 0; padding-left: 18px; }
        li + li { margin-top: 4px; }
        .tag { display: inline-block; margin: 4px 6px 0 0; padding: 4px 10px; border-radius: 999px; background: #f5f2ea; font-size: 13px; }
    </style>
</head>
<body>
    <h1>Reshma Banu T</h1>
    <p class="meta">UI/UX Designer • Full Stack Developer</p>
    <p>Chennai, India | 23it266@stjosephs.ac.in | LinkedIn: Reshma Banu T | GitHub: ReshDeen</p>

    <h2>Summary</h2>
    <p>Fourth year Information Technology student focused on intuitive digital experiences, clean front-end execution, and practical web application development.</p>

    <h2>Education</h2>
    <p><strong>B.Tech Information Technology</strong>, St. Joseph's College of Engineering, 2023 - 2027 | CGPA: 8.79</p>
    <p><strong>Higher Secondary Education</strong>, Chennai Girls Higher Secondary School, 2023 | Percentage: 79%</p>

    <h2>Skills</h2>
    <div>
        <span class="tag">Java</span><span class="tag">SQL</span><span class="tag">HTML5</span><span class="tag">CSS3</span>
        <span class="tag">JavaScript</span><span class="tag">React</span><span class="tag">Node.js</span><span class="tag">Express.js</span>
        <span class="tag">REST API</span><span class="tag">MongoDB</span><span class="tag">Figma</span><span class="tag">Canva</span>
    </div>

    <h2>Experience</h2>
    <p><strong>Java Developer Intern</strong>, Tech Octanet Services Pvt Ltd, August 2024</p>
    <ul>
        <li>Learned Java programming</li>
        <li>Developed ATM Simulation Machine</li>
        <li>Implemented withdrawal, deposit, balance enquiry, and mini statement features</li>
    </ul>

    <h2>Projects</h2>
    <p><strong>P.I.R.E</strong> (2026)</p>
    <p><strong>AI Powered Ticketing Platform</strong> (2025)</p>
    <p><strong>ATM Interface</strong> (2024)</p>

    <h2>Achievements</h2>
    <p>Functional Head - CSI Student Chapter (2025 - 2026)</p>
    <p>First Place - TEXUS'26 UI-to-Code Challenge, SRM IST Ramapuram (2026)</p>
</body>
</html>`;

            const blob = new Blob([resumeMarkup], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const downloadLink = document.createElement("a");

            downloadLink.href = url;
            downloadLink.download = "Reshma_Banu_T_Resume.html";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            downloadLink.remove();

            window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        });
    }

    // Certificate cards open external link when data-link provided
    const certCards = document.querySelectorAll('.certificate-card');
    certCards.forEach((card) => {
        card.addEventListener('click', (e) => {
            const link = card.getAttribute('data-link') || card.getAttribute('href');
            if (link && link !== '#') {
                window.open(link, '_blank', 'noopener');
            }
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // Achievement view-post buttons (placeholders) — will open data-link when provided
    const viewPostButtons = document.querySelectorAll('.view-post');
    viewPostButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const link = btn.getAttribute('data-link');
            if (link) window.open(link, '_blank', 'noopener');
        });
    });
});
