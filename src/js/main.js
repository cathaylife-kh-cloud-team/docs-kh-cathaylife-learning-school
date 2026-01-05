/**
 * Backend Learning School - Main JavaScript
 * 首頁導航與互動功能
 */

// ==================== Skill Tree Data ====================
const skillTree = [
    {
        id: "01-Internet",
        name: "Internet 基礎",
        icon: "🌐",
        skills: [
            { name: "How Internet Works", level: "初級", time: "1h", link: null },
            { name: "What is HTTP", level: "初級", time: "2h", link: null },
            { name: "DNS How it Works", level: "初級", time: "1h", link: null },
            { name: "Domain Name & Hosting", level: "初級", time: "1h", link: null },
            { name: "How Browsers Work", level: "初級", time: "2h", link: null },
            { name: "OSI 模型", level: "初級", time: "1h", link: "tutorials/01-internet/osi-model-tutorial.html" }
        ]
    },
    {
        id: "02-Frontend-Basics",
        name: "Frontend 基礎",
        icon: "🎨",
        skills: [
            { name: "HTML/CSS/JS Basics", level: "初級", time: "4h", link: null }
        ]
    },
    {
        id: "03-OS-Knowledge",
        name: "作業系統知識",
        icon: "💻",
        skills: [
            { name: "Terminal Usage", level: "初級", time: "2h", link: null },
            { name: "Process Management", level: "初級", time: "2h", link: null },
            { name: "Memory Management", level: "初級", time: "2h", link: null }
        ]
    },
    {
        id: "04-Languages",
        name: "程式語言",
        icon: "☕",
        skills: [
            { name: "Java", level: "中級", time: "20h", link: null }
        ]
    },
    {
        id: "05-Version-Control",
        name: "版本控制",
        icon: "📦",
        skills: [
            { name: "Git Basics", level: "初級", time: "3h", link: null },
            { name: "GitHub/GitLab Usage", level: "初級", time: "2h", link: null }
        ]
    },
    {
        id: "06-Relational-Databases",
        name: "關聯式資料庫",
        icon: "🗄️",
        skills: [
            { name: "Database Engines", level: "中級", time: "4h", link: null },
            { name: "ACID & Transactions", level: "中級", time: "3h", link: null },
            { name: "Database Normalization", level: "中級", time: "2h", link: null },
            { name: "Database Index Strategies", level: "中級", time: "3h", link: null },
            { name: "ORM Usage", level: "中級", time: "4h", link: null },
            { name: "Database Migrations", level: "中級", time: "2h", link: null }
        ]
    },
    {
        id: "07-API-Styles",
        name: "API 設計風格",
        icon: "🔗",
        skills: [
            { name: "REST / JSON API", level: "中級", time: "4h", link: null },
            { name: "GraphQL", level: "中級", time: "4h", link: null },
            { name: "gRPC", level: "中級", time: "3h", link: null },
            { name: "SOAP", level: "中級", time: "2h", link: null }
        ]
    },
    {
        id: "08-Authentication",
        name: "身份驗證",
        icon: "🔐",
        skills: [
            { name: "Basic Token/Cookie Auth", level: "中級", time: "3h", link: null },
            { name: "JWT Deep Dive", level: "中級", time: "4h", link: null },
            { name: "OAuth 2.0 / OpenID", level: "中級", time: "4h", link: null },
            { name: "SAML", level: "中級", time: "2h", link: null }
        ]
    },
    {
        id: "09-Caching",
        name: "快取策略",
        icon: "⚡",
        skills: [
            { name: "Redis / Memcached", level: "中級", time: "4h", link: null },
            { name: "Client Side / HTTP Caching", level: "中級", time: "2h", link: null }
        ]
    },
    {
        id: "10-Web-Security",
        name: "網頁安全",
        icon: "🛡️",
        skills: [
            { name: "Hashing Algorithms", level: "中級", time: "2h", link: null },
            { name: "HTTPS / SSL / TLS", level: "中級", time: "3h", link: null },
            { name: "CORS / CSP Security", level: "中級", time: "2h", link: null },
            { name: "OWASP Top 10 Risks", level: "中級", time: "4h", link: null }
        ]
    },
    {
        id: "11-Testing",
        name: "測試",
        icon: "🧪",
        skills: [
            { name: "Unit/Integration/Functional Test", level: "中級", time: "6h", link: null }
        ]
    },
    {
        id: "12-DevOps-CI-CD",
        name: "DevOps & CI/CD",
        icon: "🚀",
        skills: [
            { name: "Docker & Containerization", level: "中級", time: "6h", link: null },
            { name: "Kubernetes Orchestration", level: "進階", time: "8h", link: null },
            { name: "CI/CD Pipelines", level: "中級", time: "4h", link: null }
        ]
    },
    {
        id: "13-Architectural-Patterns",
        name: "架構模式",
        icon: "🏗️",
        skills: [
            { name: "Monolith vs Microservices vs SOA", level: "進階", time: "4h", link: null },
            { name: "Serverless Computing", level: "進階", time: "3h", link: null },
            { name: "Service Mesh", level: "進階", time: "3h", link: null },
            { name: "Twelve Factor Apps", level: "進階", time: "3h", link: null }
        ]
    },
    {
        id: "14-Message-Brokers-Search",
        name: "訊息佇列 & 搜尋",
        icon: "📨",
        skills: [
            { name: "RabbitMQ / Kafka", level: "中級", time: "6h", link: null },
            { name: "Elasticsearch / Solr", level: "中級", time: "4h", link: null }
        ]
    },
    {
        id: "15-Scaling-Databases",
        name: "資料庫擴展",
        icon: "📊",
        skills: [
            { name: "CAP Theorem", level: "進階", time: "2h", link: null },
            { name: "Replication & Sharding", level: "進階", time: "4h", link: null },
            { name: "NoSQL (Document, Key-Value)", level: "進階", time: "4h", link: null },
            { name: "Graph & Time Series DBs", level: "進階", time: "3h", link: null }
        ]
    },
    {
        id: "16-System-Design",
        name: "系統設計",
        icon: "🎯",
        skills: [
            { name: "Load Balancing", level: "進階", time: "3h", link: null },
            { name: "High Availability", level: "進階", time: "4h", link: null },
            { name: "Microservices Communication", level: "進階", time: "4h", link: null }
        ]
    },
    {
        id: "17-Scaling-Strategies",
        name: "擴展策略",
        icon: "📈",
        skills: [
            { name: "Observability & Monitoring", level: "進階", time: "4h", link: null },
            { name: "Instrumentation & Telemetry", level: "進階", time: "3h", link: null },
            { name: "Rate Limiter / Throttling", level: "進階", time: "3h", link: "tutorials/17-scaling-strategies/rate-limiter-tutorial.html" }
        ]
    },
    {
        id: "18-Full-Stack",
        name: "全端整合",
        icon: "🔄",
        skills: [
            { name: "Integration Patterns", level: "中級", time: "4h", link: null }
        ]
    },
    {
        id: "19-Design-Principles",
        name: "設計原則",
        icon: "📐",
        skills: [
            { name: "GOF Design Patterns", level: "進階", time: "8h", link: null },
            { name: "Domain Driven Design", level: "進階", time: "6h", link: null },
            { name: "Test Driven Development", level: "進階", time: "4h", link: null },
            { name: "CQRS & Event Sourcing", level: "進階", time: "4h", link: null }
        ]
    },
    {
        id: "20-Web-Servers",
        name: "Web 伺服器",
        icon: "🖥️",
        skills: [
            { name: "Nginx / Apache / Caddy", level: "中級", time: "4h", link: null }
        ]
    },
    {
        id: "21-Real-Time-Data",
        name: "即時資料",
        icon: "⏱️",
        skills: [
            { name: "WebSockets / SSE / Polling", level: "中級", time: "4h", link: null }
        ]
    }
];

// ==================== Utility Functions ====================

/**
 * 根據難度等級取得對應的 CSS class
 * @param {string} level - 難度等級
 * @returns {string} CSS class 名稱
 */
const getLevelClass = (level) => {
    switch(level) {
        case '初級': return 'beginner';
        case '中級': return 'intermediate';
        case '進階': return 'advanced';
        default: return 'beginner';
    }
};

/**
 * 將搜尋關鍵字在文字中高亮顯示
 * @param {string} text - 原始文字
 * @param {string} filter - 搜尋關鍵字
 * @returns {string} 包含高亮標記的 HTML
 */
const highlightText = (text, filter) => {
    if (!filter) return text;
    const regex = new RegExp(`(${escapeRegex(filter)})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
};

/**
 * 跳脫正則表達式特殊字元
 * @param {string} string - 原始字串
 * @returns {string} 跳脫後的字串
 */
const escapeRegex = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// ==================== Navigation Functions ====================

/**
 * 渲染導航樹狀結構
 * @param {string} filter - 搜尋過濾條件
 */
const renderNavTree = (filter = '') => {
    const navTree = document.getElementById('navTree');
    const filterLower = filter.toLowerCase();

    let html = '';

    skillTree.forEach(category => {
        const filteredSkills = filter
            ? category.skills.filter(skill =>
                skill.name.toLowerCase().includes(filterLower) ||
                category.name.toLowerCase().includes(filterLower)
              )
            : category.skills;

        if (filteredSkills.length === 0 && filter) return;

        const isOpen = filter ? true : false;

        html += `
            <div class="nav-category ${isOpen ? 'open' : ''}" data-category="${category.id}">
                <div class="category-header" onclick="toggleCategory(this.parentElement)">
                    <span class="category-icon">${category.icon}</span>
                    <span class="category-title">${highlightText(category.name, filter)}</span>
                    <span class="category-count">${filteredSkills.length}</span>
                    <span class="category-arrow">▶</span>
                </div>
                <div class="category-items">
                    ${filteredSkills.map(skill => `
                        ${skill.link
                            ? `<a href="${skill.link}" class="skill-item available">`
                            : `<div class="skill-item coming-soon">`
                        }
                            <span class="skill-name">${highlightText(skill.name, filter)}</span>
                            <span class="skill-badge badge-${getLevelClass(skill.level)}">${skill.level}</span>
                            <span class="skill-time">${skill.time}</span>
                        ${skill.link ? '</a>' : '</div>'}
                    `).join('')}
                </div>
            </div>
        `;
    });

    navTree.innerHTML = html;
};

/**
 * 切換分類展開/收合狀態
 * @param {HTMLElement} element - 分類元素
 */
const toggleCategory = (element) => {
    element.classList.toggle('open');
};

/**
 * 處理搜尋輸入
 * @param {string} value - 搜尋關鍵字
 */
const handleSearch = (value) => {
    renderNavTree(value);
};

/**
 * 切換側邊欄顯示狀態（手機版）
 */
const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
};

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    renderNavTree();
});
