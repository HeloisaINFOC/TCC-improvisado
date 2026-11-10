/* ========== DADOS ========== */
const ICONS = {
  code: '<svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17Z"/></svg>',
  chair: '<svg viewBox="0 0 24 24"><path d="M7 4h10v7H7zM5 11h14v4H5zM7 15v5M17 15v5"/></svg>',
  users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M17 14c2.2 0 4 1.8 4 4"/></svg>',
  palette: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 1.6-2.2-.4-1.2.2-2.3 1.6-2.3H17a4 4 0 0 0 4-4c0-5-4-9.5-9-9.5Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5Z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
};

const CATEGORIES = {
  tech: 'Tecnologia',
  mkt: 'Marketing e negócios',
  design: 'Design e criação',
  dev: 'Desenvolvimento pessoal e idiomas'
};

const COURSES = [
  { cat: 'tech', badge: 'MAIS PROCURADO', color: 'blue', icon: 'code', title: 'Python do Zero ao Avançado', desc: 'Aprenda programação com Python, dos conceitos básicos às técnicas avançadas, desenvolvendo lógica de programação, automação de tarefas e análise de dados.', hours: 80, level: 'Iniciante ao avançado' },
  { cat: 'tech', badge: 'COMECE AQUI', color: 'tan', icon: 'code', title: 'Desenvolvimento Web Completo', desc: 'Aprenda a criar sites e aplicações web com HTML, CSS, JavaScript e React. Desenvolva páginas responsivas, interfaces modernas e projetos para seu portfólio.', hours: 100, level: 'Iniciante ao avançado' },
  { cat: 'tech', badge: 'DADOS', color: 'pink', icon: 'code', title: 'Excel Avançado e Power BI', desc: 'Domine fórmulas, planilhas, tabelas dinâmicas e organização de dados no Excel. Crie dashboards interativos e relatórios no Power BI.', hours: 60, level: 'Intermediário ao avançado' },
  { cat: 'tech', badge: 'EM ALTA', color: 'blue', icon: 'sparkle', title: 'Inteligência Artificial na Prática', desc: 'Entenda como usar ferramentas de IA no trabalho e nos estudos: prompts, automações e projetos reais com as principais plataformas.', hours: 40, level: 'Iniciante à intermediário' },
  { cat: 'tech', badge: 'CIBERSEGURANÇA', color: 'tan', icon: 'code', title: 'Segurança da Informação e Ethical Hacking', desc: 'Aprenda os fundamentos de proteção de dados, redes e sistemas, e conheça as principais ameaças e formas de defesa.', hours: 55, level: 'Iniciante à intermediário' },
  { cat: 'mkt', badge: 'POPULAR', color: 'pink', icon: 'chair', title: 'Marketing Digital Completo', desc: 'Estratégias de marketing para redes sociais, SEO, e-mail e conteúdo. Aprenda a planejar, executar e medir campanhas.', hours: 50, level: 'Iniciante à intermediário' },
  { cat: 'mkt', badge: 'ANÚNCIOS', color: 'blue', icon: 'chair', title: 'Tráfego Pago (Meta Ads e Google Ads)', desc: 'Crie campanhas de anúncios que convertem. Aprenda a segmentar públicos, definir orçamentos e analisar métricas.', hours: 45, level: 'Iniciante à intermediário' },
  { cat: 'mkt', badge: 'NEGÓCIOS', color: 'tan', icon: 'users', title: 'Empreendedorismo e Gestão de Negócios', desc: 'Tire sua ideia do papel: modelo de negócio, finanças, liderança e operação. Aprenda a gerir e crescer o seu projeto.', hours: 50, level: 'Iniciante ao avançado' },
  { cat: 'mkt', badge: 'VENDAS', color: 'pink', icon: 'users', title: 'Vendas e Negociação', desc: 'Desenvolva prospecção, comunicação, decisão e negociação. Aprenda a fazer um atendimento que gera relacionamento e fecha negócios.', hours: 35, level: 'Iniciante à intermediário' },
  { cat: 'mkt', badge: 'FINANÇAS', color: 'blue', icon: 'chair', title: 'Finanças Pessoais e Investimentos', desc: 'Organize seu orçamento, controle gastos e planeje objetivos. Conheça renda fixa, bolsa de valores e fundamentos para investir com consciência.', hours: 30, level: 'Iniciante à intermediário' },
  { cat: 'design', badge: 'CRIAÇÃO', color: 'tan', icon: 'palette', title: 'Design Gráfico (Photoshop, Illustrator e Canva)', desc: 'Crie identidades visuais, materiais publicitários e peças para redes sociais com Photoshop, Illustrator e Canva, aplicando cores, tipografia e composição.', hours: 50, level: 'Iniciante à intermediário' },
  { cat: 'design', badge: 'VÍDEO', color: 'pink', icon: 'play', title: 'Edição de Vídeo e Criação de Conteúdo', desc: 'Edite vídeos com Adobe Premiere e CapCut. Aprenda cortes, transições, legendas, áudio e montagem para YouTube, Instagram Reels e outras plataformas.', hours: 40, level: 'Iniciante à intermediário' },
  { cat: 'design', badge: 'DESIGN', color: 'blue', icon: 'palette', title: 'UX/UI Design', desc: 'Aprenda experiência do usuário e design de interfaces, com pesquisa, wireframes, protótipos e testes de usabilidade no Figma.', hours: 45, level: 'Iniciante à intermediário' },
  { cat: 'dev', badge: 'IDIOMAS', color: 'tan', icon: 'users', title: 'Inglês para Carreira e Negócios', desc: 'Desenvolva inglês profissional com vocabulário de negócios, conversação, e-mails e reuniões. Prepare-se para entrevistas e comunicação internacional.', hours: 60, level: 'Iniciante à intermediário' },
  { cat: 'dev', badge: 'COMUNICAÇÃO', color: 'pink', icon: 'users', title: 'Oratória e Comunicação Eficaz', desc: 'Comunique-se com clareza e confiança. Desenvolva oratória, expressão corporal, apresentações, argumentação e comunicação assertiva.', hours: 20, level: 'Iniciante à intermediário' }
];

const TICKER_WORDS = ['SUCESSO', 'CONHECIMENTO', 'PRÁTICA', 'LIBERDADE', 'FOCO', 'DETERMINAÇÃO', 'EVOLUÇÃO'];
const CAT_ICONS = { tech: 'code', mkt: 'chair', design: 'palette', dev: 'users' };

/* ========== TICKER ========== */
(function buildTicker() {
  const track = document.getElementById('tickerTrack');
  const html = TICKER_WORDS.map(w => `<span>${w}</span>`).join('');
  track.innerHTML = html + html + html + html; // duplicado p/ loop contínuo
})();

/* ========== FILTROS + CARDS ========== */
const filtersEl = document.getElementById('filters');
const gridEl = document.getElementById('courseGrid');
let activeFilter = 'all';

function renderFilters() {
  const items = [['all', 'Todos'], ...Object.entries(CATEGORIES)];
  filtersEl.innerHTML = items.map(([key, label]) =>
    `<button class="filter ${key === activeFilter ? 'active' : ''}" data-filter="${key}">${label}</button>`
  ).join('');
}

function renderCourses() {
  const list = activeFilter === 'all' ? COURSES : COURSES.filter(c => c.cat === activeFilter);
  gridEl.innerHTML = list.map((c, i) => `
    <article class="card" style="animation-delay:${i * 50}ms">
      <div class="card-cover cover-${c.color}">
        <span class="card-badge">${c.badge}</span>
        <div class="card-icon">${ICONS[c.icon]}</div>
        <span class="card-check"></span>
      </div>
      <div class="card-body">
        <span class="card-cat">${CATEGORIES[c.cat]}</span>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="card-foot">
          <span class="time">${ICONS.clock} ${c.hours} horas</span>
          <span>${c.level}</span>
          <button class="go" aria-label="Abrir curso ${c.title}">→</button>
        </div>
      </div>
    </article>
  `).join('');
}

filtersEl.addEventListener('click', e => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  activeFilter = btn.dataset.filter;
  renderFilters();
  renderCourses();
});

renderFilters();
renderCourses();

/* ========== CATEGORIAS ========== */
(function buildCategories() {
  const el = document.getElementById('catGrid');
  el.innerHTML = Object.entries(CATEGORIES).map(([key, label]) => {
    const n = COURSES.filter(c => c.cat === key).length;
    return `
      <a href="#cursos" class="cat-card" data-cat="${key}">
        <span class="cat-ico">${ICONS[CAT_ICONS[key]]}</span>
        <h4>${label}</h4>
        <small><span>${n} ${n === 1 ? 'curso' : 'cursos'}</span><span>→</span></small>
      </a>`;
  }).join('');

  // clicar na categoria já filtra a lista de cursos
  el.addEventListener('click', e => {
    const card = e.target.closest('.cat-card');
    if (!card) return;
    activeFilter = card.dataset.cat;
    renderFilters();
    renderCourses();
  });
})();

/* ========== NEWSLETTER ========== */
const form = document.getElementById('newsForm');
const emailInput = document.getElementById('newsEmail');
form.addEventListener('submit', e => {
  e.preventDefault();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  emailInput.classList.toggle('error', !ok);
  if (!ok) { emailInput.focus(); return; }
  form.innerHTML = '<strong style="font-size:14px">Valeu! Você está na lista ✦</strong>';
});
emailInput.addEventListener('input', () => emailInput.classList.remove('error'));

/* ========== ANIMAÇÃO DE ENTRADA ========== */
const revealTargets = document.querySelectorAll('.hero, .courses-head, .categories .cat-text, .cat-card, .news-card');
revealTargets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => io.observe(el));
