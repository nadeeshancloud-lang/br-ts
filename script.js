/**
 * CORE infratructure logic module - Kanishka Net | Master Hub
 */

document.addEventListener("DOMContentLoaded", () => {
    initializeTypingEffect();
    initializeVideoShowcase();
    initializeVisitorCounter();
    initializeScrollObserver();
    initializeInteractiveGlowTrackers();
});

/* --- TEXT TYPING SEQUENCE HOOK --- */
function initializeTypingEffect() {
    const textTarget = document.getElementById("typing-text");
    const tracks = [
        "Synthesizing Autonomous Cognitive Systems.",
        "Developing Immersive Creative Interfaces.",
        "Executing Next-Gen Neural Pipelines."
    ];
    let trackIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 70;

    function handleTypeSequence() {
        const currentFullTrack = tracks[trackIndex];
        
        if (isDeleting) {
            textTarget.textContent = currentFullTrack.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 35;
        } else {
            textTarget.textContent = currentFullTrack.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === currentFullTrack.length) {
            typingSpeed = 2000; // Freeze text completion length
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            trackIndex = (trackIndex + 1) % tracks.length;
            typingSpeed = 400; // Pause delay shifting tracks
        }

        setTimeout(handleTypeSequence, typingSpeed);
    }
    
    if(textTarget) setTimeout(handleTypeSequence, 500);
}

/* --- YOUTUBE VIDEO CONTEXT FEED SHIFT ENGINE (FORCED INLINE DISPLAY) --- */
function initializeVideoShowcase() {
    const gridContainer = document.getElementById("dynamic-video-grid");
    if (!gridContainer) return;

    const fallbackPayloadMock = [
        {
            "title": "E Money Online Jobs 2026 💸 | No Skills Needed",
            "youtubeId": "https://www.youtube.com/embed/dmBHvMUfDL8", 
            "category": "E-Money",
            "duration": "11:35"
        },
        {
            "title": "Free Cloud VPS | Fast Internet 🚀",
            "youtubeId": "https://www.youtube.com/embed/femu3mA-NAw",
            "category": "Tech & Servers",
            "duration": "17:38"
        },
        {
            "title": "How to download PC games for Free",
            "youtubeId": "https://www.youtube.com/embed/zJMSBrNArzg",
            "category": "Gaming",
            "duration": "09:05"
        }
    ];

    gridContainer.innerHTML = ""; // පරණ ටෙම්ප්ලේට් මකන්න

    fallbackPayloadMock.forEach(item => {
        const cardElement = document.createElement("div");
        cardElement.className = "video-card glass-panel";
        
        // Wrapper එකට සහ Iframe එකට Inline CSS මඟින් බලෙන්ම Size එක ලබා දීම
        cardElement.innerHTML = `
            <div class="video-frame-wrapper" style="position: relative; width: 100%; aspect-ratio: 16 / 9; background: #000; border-radius: 8px; overflow: hidden;">
                <iframe 
                    src="${item.youtubeId}" 
                    title="${item.title}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; display: block;">
                </iframe>
            </div>
            <div class="video-meta" style="padding-top: 12px;">
                <span class="tech-tag">${item.category} • ${item.duration}</span>
                <h3 style="margin: 8px 0; font-size: 1.1rem; color: #fff;">${item.title}</h3>
                <p style="font-size: 0.9rem; color: #8a99ad;">Watch this complete tutorial on Kanishka Net for step-by-step guidance.</p>
            </div>
        `;
        gridContainer.appendChild(cardElement);
    });
}
/* --- CALENDAR-STYLE 5-DIGIT TELEMETRY COUNTER PROXIES --- */
function initializeVisitorCounter() {
    const counterContainer = document.getElementById("visitor-counter");
    if (!counterContainer) return;

    // Pull from secure store or initialize standard baseline seed value
    let currentVisits = parseInt(localStorage.getItem("kanishka_hub_telemetry_v3") || "01428");
    currentVisits++;
    localStorage.setItem("kanishka_hub_telemetry_v3", String(currentVisits).padStart(5, '0'));

    const formattedDigitsArray = String(currentVisits).padStart(5, '0').split('');
    const uiDigitBoxes = counterContainer.querySelectorAll(".digit");

    uiDigitBoxes.forEach((boxElement, index) => {
        if(formattedDigitsArray[index]) {
            boxElement.textContent = formattedDigitsArray[index];
        }
    });
}

/* --- ACTIVE LINK SCROLL UTILITIES & TARGET TRACKERS --- */
function initializeScrollObserver() {
    const targetSections = document.querySelectorAll("main > section");
    const navLinks = document.querySelectorAll(".nav-link");
    const topButton = document.getElementById("scrollTopBtn");

    const observerOptionParameters = {
        root: null,
        threshold: 0.3,
        rootMargin: "-10% 0px -40% 0px"
    };

    const intersectionObserverInstance = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${targetId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptionParameters);

    targetSections.forEach(section => intersectionObserverInstance.observe(section));

    // Dynamic Tracking Core Back to Top Scroll Metrics
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            topButton.classList.add("visible");
        } else {
            topButton.classList.remove("visible");
        }
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* --- MOUSE COORDINATE AMBIENT SHADER PARALLAX ADJUSTMENT --- */
function initializeInteractiveGlowTrackers() {
    const glowOrbs = document.querySelectorAll(".glow-orb");
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    window.addEventListener("mousemove", (event) => {
        const normalizedCoordinateX = (event.clientX / window.innerWidth) - 0.5;
        const normalizedCoordinateY = (event.clientY / window.innerHeight) - 0.5;

        glowOrbs.forEach((orb, index) => {
            const translationDepthFactor = (index + 1) * 35;
            orb.style.transform = `translate(${normalizedCoordinateX * translationDepthFactor}px, ${normalizedCoordinateY * translationDepthFactor}px)`;
        });
    });
}