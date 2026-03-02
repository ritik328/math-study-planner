// ── DATA ─────────────────────────────────────
const T = [
  {
    id: 1, title: "Relations & Their Properties", est: "35 min", sec: [
      { id: "1.1", n: "Basic Definitions", it: ["Cartesian Product A×B and its meaning", "What is a Relation — any subset of A×B", "Domain and Range of a relation", "Cardinality of a set — number of elements", "Cardinality rule: |A×B| = |A| × |B|"] },
      { id: "1.2", n: "Properties", it: ["Reflexive: (a,a) ∈ R for every a ∈ A", "Symmetric: (a,b) ∈ R ⟹ (b,a) ∈ R", "Transitive: (a,b),(b,c) ∈ R ⟹ (a,c) ∈ R", "Anti-symmetric: (a,b) and (b,a) ∈ R ⟹ a=b"] },
      { id: "1.3", n: "Special Relations", it: ["Equivalence = Reflexive + Symmetric + Transitive", "Partial Order = Reflexive + Anti-symmetric + Transitive", "Identity Relation — only (a,a) pairs", "Universal Relation — all pairs in A×A", "Empty Relation — no pairs"] },
      { id: "1.4", n: "Set Operations", it: ["Union R₁∪R₂, Intersection R₁∩R₂", "Complement of a relation", "|(A×A)\\R| = |A|² − |R|"] },
      { id: "1.5", n: "Practice", it: ["Explicit pairs → check all 3 properties one by one", "Rule |x−y|≤3 → check reflexive/symmetric/transitive algebraically", "Rule '3 divides x−y' → check algebraically", "Is it a function? (each input exactly one output)"] }
    ]
  },
  {
    id: 2, title: "Functions", est: "30 min", sec: [
      { id: "2.1", n: "Definitions", it: ["Function — each domain element has exactly one image", "Domain — valid inputs", "Codomain — declared output set", "Range — actual outputs (subset of codomain)"] },
      { id: "2.2", n: "Types", it: ["Injective (One-One): f(a)=f(b) ⟹ a=b", "Surjective (Onto): Range = Codomain", "Bijective — both injective and surjective", "Many-One — two inputs give same output", "Into — range is proper subset of codomain"] },
      { id: "2.3", n: "Domain & Range", it: ["Polynomial f(x) → domain always ℝ", "Rational f(x)=p(x)/q(x) → domain = ℝ \\ {zeros of q}", "Absolute value |g(x)| → domain ℝ, range ≥ 0", "f(x)=|x²−4|−1 → find zeros, then determine range"] },
      { id: "2.4", n: "Composition & Inverse", it: ["(f∘g)(x) = f(g(x)) — order matters", "Domain of f∘g must be carefully checked", "Inverse exists only if function is bijective", "Domain of f⁻¹ = Range of f"] },
      { id: "2.5", n: "Special Functions", it: ["Constant f(x)=c, Identity f(x)=x", "Absolute value f(x)=|x| — V-shape, vertex at origin", "f(x)=|x−a|+b → vertex at (a,b)", "Piecewise — different rules per domain", "Vertical line test to check if relation is a function"] }
    ]
  },
  {
    id: 3, title: "Polynomials: Graphs & Properties", est: "40 min", sec: [
      { id: "3.1", n: "Basics", it: ["Degree — highest power of x", "Leading coefficient — coefficient of highest degree term", "Constant term = y-intercept (set x=0)", "Zeros/Roots — values where p(x)=0"] },
      { id: "3.2", n: "End Behavior", it: ["Odd degree, +ve LC: −∞ to +∞", "Odd degree, −ve LC: +∞ to −∞", "Even degree, +ve LC: +∞ on both sides", "Even degree, −ve LC: −∞ on both sides"] },
      { id: "3.3", n: "Roots & Multiplicity", it: ["Multiplicity 1 — graph crosses x-axis", "Multiplicity 2 — graph touches and turns back", "Multiplicity 3 — graph crosses but flattens at point", "Total degree = sum of all multiplicities"] },
      { id: "3.4", n: "Turning Points", it: ["Max turning points = degree − 1", "Local maximum — peak (up then down)", "Local minimum — valley (down then up)", "Turning points alternate max ↔ min"] },
      { id: "3.5", n: "Reading Graphs", it: ["Count x-intercepts → number of real roots", "Crosses vs touches → multiplicity", "Count turning points → minimum degree", "End behavior → sign of leading coefficient", "Use one test point to verify sign of LC"] },
      { id: "3.6", n: "Intervals", it: ["Graph going up L→R → increasing", "Graph going down L→R → decreasing", "Turning points mark switches between intervals"] }
    ]
  },
  {
    id: 4, title: "Polynomial Division & Remainder", est: "35 min", sec: [
      { id: "4.1", n: "Division Algorithm", it: ["p(x) = q(x)·d(x) + r(x), deg(r) < deg(d)", "Identify: dividend, divisor, quotient, remainder"] },
      { id: "4.2", n: "Theorems", it: ["Remainder Theorem: remainder = p(a) when dividing by (x−a)", "Factor Theorem: (x−a) is factor iff p(a)=0"] },
      { id: "4.3", n: "Methods", it: ["Long Division — step by step", "Synthetic Division — shortcut when dividing by (x−a)"] },
      { id: "4.4", n: "Degree Rules", it: ["deg(p·q) = deg(p) + deg(q)", "deg(p+q) ≤ max(deg(p), deg(q))", "deg(p÷q) = deg(p) − deg(q)", "deg(remainder) < deg(divisor)"] },
      { id: "4.5", n: "Factoring", it: ["Common factor extraction", "Grouping terms", "Difference of squares: a²−b² = (a+b)(a−b)", "Perfect square: a²±2ab+b² = (a±b)²", "Sum/Difference of cubes: a³±b³ = (a±b)(a²∓ab+b²)"] }
    ]
  },
  {
    id: 5, title: "Straight Lines & Coordinate Geometry", est: "45 min", sec: [
      { id: "5.1", n: "Slope", it: ["m = (y₂−y₁)/(x₂−x₁)", "From ax+by+c=0: slope m = −a/b", "Positive / Negative / Zero / Undefined"] },
      { id: "5.2", n: "Line Equations", it: ["Slope-intercept: y = mx+c", "Point-slope: y−y₁ = m(x−x₁)", "Intercept form: x/a + y/b = 1", "Standard form: ax+by+c=0"] },
      { id: "5.3", n: "Intercepts", it: ["x-intercept: set y=0, solve for x", "y-intercept: set x=0, solve for y", "m+n problems using intercept form"] },
      { id: "5.4", n: "Parallel & Perpendicular", it: ["Parallel: m₁ = m₂", "Perpendicular: m₁ × m₂ = −1"] },
      { id: "5.5", n: "Distance Formulas", it: ["Between two points: √[(x₂−x₁)²+(y₂−y₁)²]", "Point to line: |ax₀+by₀+c| / √(a²+b²)", "Between parallel lines: |c₁−c₂| / √(a²+b²)"] },
      { id: "5.6", n: "Angle Between Lines", it: ["tan θ = |(m₁−m₂)/(1+m₁m₂)|", "m₁m₂=−1 ⟹ perpendicular (θ=90°)", "m₁=m₂ ⟹ parallel (θ=0°)"] },
      { id: "5.7", n: "Section & Midpoint", it: ["Section formula (m:n): ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))", "Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)"] },
      { id: "5.8", n: "Area of Triangle", it: ["Area = ½|x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂)|", "Area = 0 ⟹ points are collinear"] }
    ]
  },
  {
    id: 6, title: "Quadratic Functions", est: "35 min", sec: [
      { id: "6.1", n: "Forms", it: ["Standard: f(x) = ax²+bx+c", "Vertex: f(x) = a(x−h)²+k, vertex=(h,k)", "Factored: f(x) = a(x−r₁)(x−r₂)"] },
      { id: "6.2", n: "Key Features", it: ["Axis of symmetry: x = −b/(2a)", "Vertex x = −b/(2a), substitute for y", "a > 0 → upward parabola → minimum", "a < 0 → downward parabola → maximum"] },
      { id: "6.3", n: "Discriminant", it: ["D = b²−4ac", "D > 0 → two distinct real roots", "D = 0 → one repeated root", "D < 0 → no real roots"] },
      { id: "6.4", n: "Finding Roots", it: ["Factoring method", "Quadratic formula: x = (−b ± √D) / 2a", "Completing the square"] },
      { id: "6.5", n: "Vieta's Formulas", it: ["Sum of roots α+β = −b/a", "Product of roots α×β = c/a", "Ram-Shyam type: use Vieta's to reconstruct equation"] },
      { id: "6.6", n: "Slope at a Point", it: ["Slope at x₀: f'(x₀) = 2ax₀+b", "Used to find a or b when slope at a point is known"] },
      { id: "6.7", n: "Max & Min", it: ["Max/Min = c − b²/4a at x = −b/2a", "In vertex form: k is directly the max/min"] }
    ]
  },
  {
    id: 7, title: "Optimization Using Quadratics", est: "25 min", sec: [
      { id: "7.1", n: "Setting Up", it: ["Define variable x clearly from problem", "Write objective as quadratic f(x)", "Verify: a < 0 for max, a > 0 for min"] },
      { id: "7.2", n: "Revenue Problems", it: ["Revenue = Price × Quantity", "Price = base − decrease × extra units", "R(x) = Price(x)·x → downward parabola", "Maximum at vertex: x = −b/(2a)"] },
      { id: "7.3", n: "Profit Functions", it: ["P(x) = −2x²+8x−6 type problems", "Max profit: vertex x = −b/(2a)", "Break-even: solve P(x)=0", "No profit: P(x) ≤ 0"] },
      { id: "7.4", n: "Constraints", it: ["x must be positive (physical constraint)", "x must be integer for discrete items", "Check endpoints when domain is restricted"] }
    ]
  },
  {
    id: 8, title: "Best Fit Line & SSE", est: "30 min", sec: [
      { id: "8.1", n: "SSE Concept", it: ["SSE = Σ(yᵢ − ŷᵢ)² for predicted line ŷ=mx+c", "Measures total squared prediction error"] },
      { id: "8.2", n: "Computing SSE", it: ["Table: xᵢ, yᵢ, ŷᵢ=(mxᵢ+c), eᵢ=(yᵢ−ŷᵢ), eᵢ²", "SSE = sum of all eᵢ²"] },
      { id: "8.3", n: "Finding Unknown k", it: ["y=2x+k: minimize SSE = Σ(yᵢ−2xᵢ−k)²", "Differentiate w.r.t k, set = 0", "k = (Σyᵢ − 2Σxᵢ) / n"] },
      { id: "8.4", n: "Properties", it: ["Best fit line always passes through (x̄, ȳ)", "Slope m = Σ(xᵢ−x̄)(yᵢ−ȳ) / Σ(xᵢ−x̄)²", "Intercept c = ȳ − m·x̄"] }
    ]
  },
  {
    id: 9, title: "Set Theory: Venn & Inclusion-Exclusion", est: "35 min", sec: [
      { id: "9.1", n: "Operations", it: ["Union A∪B, Intersection A∩B", "Complement A', Difference A\\B"] },
      { id: "9.2", n: "Two-Set Formula", it: ["|A∪B| = |A|+|B|−|A∩B|", "Only A = |A|−|A∩B|; Only B = |B|−|A∩B|", "If k like neither: |A∪B| = total − k"] },
      { id: "9.3", n: "Three-Set Formula", it: ["|A∪B∪C| = |A|+|B|+|C|−|A∩B|−|B∩C|−|A∩C|+|A∩B∩C|", "Only A = |A|−|A∩B|−|A∩C|+|A∩B∩C|", "Exactly one = Only A + Only B + Only C", "Exactly two = (|A∩B|+|B∩C|+|A∩C|)−3|A∩B∩C|", "At least two = Exactly two + All three"] },
      { id: "9.4", n: "Venn Diagram Method", it: ["Fill center first (all three region)", "Then two-set intersections (subtract center)", "Then only-one regions (subtract intersections)", "Verify total sums correctly"] },
      { id: "9.5", n: "Min & Max Overlap", it: ["Min |A∩B| = max(0, |A|+|B|−Total)", "Max |A∩B| = min(|A|, |B|)"] },
      { id: "9.6", n: "Cardinality Rules", it: ["|A×B| = |A| × |B|", "|(A×A)\\R| = |A|² − |R|", "Number of possible relations on A = 2^(|A|²)"] }
    ]
  }
];

// ── STATE ─────────────────────────────────────
const LS = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d } catch { return d } };
let done = LS('mp_done', {});
let diff = LS('mp_diff', {});
let notes = LS('mp_notes', {});
let totalMs = parseInt(localStorage.getItem('mp_ms') || '0');
let streak = parseInt(localStorage.getItem('mp_streak') || '0');
let lastDay = localStorage.getItem('mp_day') || '';
let isDark = LS('mp_dark', false);
let examDate = LS('mp_examDate', null);
let activityLog = LS('mp_activity', {}); // map of YYYY-MM-DD -> total study seconds
let chatHistory = [];
let filt = 'all', srch = '', focId = null;
let timerOn = false, sesMs = 0, timerIv = null;

function applyDarkMode() {
  if (isDark) {
    document.documentElement.classList.add('dark');
    const b = document.getElementById('dmBtn'); if (b) b.innerHTML = '☀️ Light Mode';
  } else {
    document.documentElement.classList.remove('dark');
    const b = document.getElementById('dmBtn'); if (b) b.innerHTML = '🌒 Dark Mode';
  }
}
function toggleDarkMode() {
  isDark = !isDark;
  localStorage.setItem('mp_dark', JSON.stringify(isDark));
  applyDarkMode();
}

const sv = () => {
  localStorage.setItem('mp_done', JSON.stringify(done));
  localStorage.setItem('mp_diff', JSON.stringify(diff));
  localStorage.setItem('mp_notes', JSON.stringify(notes));
  localStorage.setItem('mp_ms', totalMs);
  localStorage.setItem('mp_streak', streak);
  localStorage.setItem('mp_day', lastDay);
  localStorage.setItem('mp_activity', JSON.stringify(activityLog));
};

// ── KEY HELPERS ───────────────────────────────
const K = (tid, sid, i) => `${tid}_${sid}_${i}`;
const allK = () => T.flatMap(t => t.sec.flatMap(s => s.it.map((_, i) => K(t.id, s.id, i))));
const topK = (tid) => T.find(x => x.id === tid).sec.flatMap(s => s.it.map((_, i) => K(tid, s.id, i)));

// ── TIME FORMAT ───────────────────────────────
const fmtS = ms => { const s = Math.floor(ms / 1000), m = Math.floor(s / 60), h = Math.floor(m / 60); return h ? `${h}:${String(m % 60).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}` : String(m).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0') };
const fmtM = ms => { const m = Math.floor(ms / 60000); return m < 60 ? m + 'm' : Math.floor(m / 60) + 'h ' + (m % 60) + 'm' };

// ── TIMER ─────────────────────────────────────
function toggleTimer() {
  if (timerOn) { clearInterval(timerIv); timerOn = false; sv(); document.getElementById('tbtn').textContent = '▶'; document.getElementById('tbtn').classList.remove('on'); }
  else {
    const today = new Date().toDateString();
    if (lastDay !== today) { streak = lastDay === new Date(Date.now() - 864e5).toDateString() ? streak + 1 : 1; lastDay = today; sv(); }
    document.getElementById('streakN').textContent = streak;
    timerOn = true; document.getElementById('tbtn').textContent = '■'; document.getElementById('tbtn').classList.add('on');
    timerIv = setInterval(() => {
      sesMs += 1000; totalMs += 1000;
      document.getElementById('tdig').textContent = fmtS(sesMs);
      document.getElementById('sTime').textContent = fmtM(totalMs);

      let dStr = new Date().toISOString().split('T')[0];
      activityLog[dStr] = (activityLog[dStr] || 0) + 1;

      sv();
    }, 1000);
  }
}
function resetTimer() { clearInterval(timerIv); timerOn = false; sesMs = 0; document.getElementById('tdig').textContent = '00:00'; document.getElementById('tbtn').textContent = '▶'; document.getElementById('tbtn').classList.remove('on'); }

// ── UPDATE UI ─────────────────────────────────
function upd() {
  const ak = allK(), tot = ak.length, dn = ak.filter(k => done[k]).length, pct = tot ? Math.round(dn / tot * 100) : 0;
  document.getElementById('pfill').style.width = pct + '%';
  document.getElementById('pDn').textContent = dn; document.getElementById('pTl').textContent = tot;
  document.getElementById('sDone').textContent = dn; document.getElementById('sLeft').textContent = tot - dn;
  document.getElementById('sPct').textContent = pct + '%'; document.getElementById('sTime').textContent = fmtM(totalMs);
  document.getElementById('dbanner').classList.toggle('show', dn === tot && tot > 0);
  T.forEach(t => {
    const ks = topK(t.id), td = ks.filter(k => done[k]).length, tp = ks.length ? Math.round(td / ks.length * 100) : 0;
    const card = document.getElementById('c' + t.id); if (!card) return;
    card.querySelector('.tmfill').style.width = tp + '%';
    card.querySelector('.tmpct').textContent = tp + '%';
    card.querySelector('.tsubc').textContent = `${td}/${ks.length} subtopics`;
    const ad = td === ks.length; card.classList.toggle('all-done', ad); card.querySelector('.tck').classList.toggle('on', ad);
    const chip = document.getElementById('chip' + t.id); if (chip) { chip.textContent = `T${t.id} · ${td}/${ks.length}`; chip.classList.toggle('on', ad); }
    ks.forEach(k => { const row = document.getElementById('r' + k), cb = document.getElementById('cb' + k); if (row && cb) { cb.classList.toggle('on', !!done[k]); row.classList.toggle('done', !!done[k]); } });
  });
  applyFilt();
}

function renderHeatmap() {
  const container = document.getElementById('heatmapContainer');
  if (!container) return;
  container.innerHTML = '';
  const today = new Date();
  for (let i = 59; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dStr = d.toISOString().split('T')[0];
    const secs = activityLog[dStr] || 0;
    const sq = document.createElement('div');
    sq.className = 'h-sq';
    sq.title = `${dStr}: ${Math.round(secs / 60)} mins`;
    if (secs > 7200) sq.setAttribute('data-lvl', '3');
    else if (secs > 1800) sq.setAttribute('data-lvl', '2');
    else if (secs > 0) sq.setAttribute('data-lvl', '1');
    container.appendChild(sq);
  }
}

// ── RENDER ────────────────────────────────────
function render() {
  renderHeatmap();
  const wrap = document.getElementById('twrap'), chips = document.getElementById('chiprow');
  wrap.innerHTML = ''; chips.innerHTML = '';
  T.forEach((t, ti) => {
    const ch = document.createElement('button'); ch.className = 'chip'; ch.id = 'chip' + t.id;
    ch.onclick = () => { const c = document.getElementById('c' + t.id); c.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
    chips.appendChild(ch);
    const card = document.createElement('div'); card.className = 'tcard'; card.id = 'c' + t.id; card.style.animationDelay = (ti * .05) + 's';
    const ks = topK(t.id);
    card.innerHTML = `
      <div class="thead" onclick="togCard(${t.id})">
        <div class="tnum">0${t.id}</div>
        <div class="tck" onclick="togAll(event,${t.id})"></div>
        <div class="tinfo">
          <div class="ttitle">${t.title}</div>
          <div class="tmeta">
            <span class="tsubc">0/${ks.length} subtopics</span>
            <div class="tmtrack"><div class="tmfill" style="width:0%"></div></div>
            <span class="tmpct">0%</span>
            <span class="test">~${t.est}</span>
          </div>
        </div>
        <button class="tfocbtn" onclick="focTopic(event,${t.id})">Focus</button>
        <div class="tarr">▼</div>
      </div>
      <div class="swrap">
        <div class="sinner" id="si${t.id}"></div>
        <button class="btn btn-o" style="width:calc(100% - 24px);margin:12px 12px 0;font-size:11px;padding:6px;justify-content:center;" onclick="aiPractice(${t.id})">🎯 Generate Practice Problem</button>
        <button class="btn btn-r" style="width:calc(100% - 24px);margin:6px 12px 12px;font-size:11px;padding:6px;justify-content:center;" onclick="aiQuiz(${t.id})">📝 Smart Active Recall Quiz</button>

        <div class="ntog" onclick="togNotes(${t.id})">📝 <span>Notes</span></div>
        <div class="nwrap" id="nw${t.id}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <span style="font-size:11px;color:var(--ink2);letter-spacing:1px;text-transform:uppercase;">Topic Notes</span>
            <button class="btn btn-g" style="padding:4px 8px;font-size:10px;" onclick="aiEnhanceNotes(${t.id})">✨ Enhance</button>
          </div>
          <textarea class="ntxt" id="nt${t.id}" placeholder="Add notes for this topic..." oninput="saveNote(${t.id})">${notes[t.id] || ''}</textarea>
        </div>
      </div>`;
    wrap.appendChild(card);
    const inner = document.getElementById('si' + t.id);
    t.sec.forEach(s => {
      const sh = document.createElement('div'); sh.className = 'sech'; sh.textContent = s.n; inner.appendChild(sh);
      s.it.forEach((item, i) => {
        const k = K(t.id, s.id, i); const row = document.createElement('div');
        row.className = 'srow'; row.id = 'r' + k; row.setAttribute('data-s', item.toLowerCase());
        const isFml = /[=|∑→⟹÷×]/.test(item); const dv = diff[k] || '';
        const dls = ['', 'easy', 'med', 'hard'];
        row.innerHTML = `<button class="ai-btn" onclick="aiSnapClick('${item.replace(/'/g, "\\'")}', event)" title="Snap to Solve">📸</button><button class="ai-btn" onclick="aiExplain('${item.replace(/'/g, "\\'")}', event)" title="Explain like I'm 5">🧠</button><div class="sck" id="cb${k}"></div><div class="stxt">${item}</div>${isFml ? '<div class="ftag">formula</div>' : ''}<div class="dtag" data-d="${dv}" id="dt${k}" onclick="cycD(event,'${k}')" title="Set difficulty">${dv || '·'}</div>`;
        row.onclick = e => { if (e.target.classList.contains('dtag') || e.target.classList.contains('ai-btn')) return; togDone(k, row); };
        inner.appendChild(row);
      });
    });
  });
  upd();
}

// ── INTERACTIONS ──────────────────────────────
function togCard(id) { document.getElementById('c' + id).classList.toggle('open'); }
function togAll(e, id) {
  e.stopPropagation(); const ks = topK(id); const ad = ks.every(k => done[k]);
  ks.forEach(k => done[k] = !ad); sv(); upd();
  if (!ad) { toast('Topic completed! 🎉', 'g'); burst(); }
}
function togDone(k, row) {
  done[k] = !done[k]; sv();
  if (done[k]) { toast('Subtopic done ✓', 'g'); spwn(row); }
  upd();
}
function cycD(e, k) {
  e.stopPropagation(); const cycle = ['', 'easy', 'med', 'hard']; const cur = diff[k] || ''; const nxt = cycle[(cycle.indexOf(cur) + 1) % cycle.length];
  diff[k] = nxt; sv(); const el = document.getElementById('dt' + k); el.setAttribute('data-d', nxt); el.textContent = nxt || '·';
}
function togNotes(id) { document.getElementById('nw' + id).classList.toggle('open'); }
function saveNote(id) { notes[id] = document.getElementById('nt' + id).value; sv(); }
function togCard(id) { document.getElementById('c' + id).classList.toggle('open'); }

// ── CONTROLS ──────────────────────────────────
function expandAll() { T.forEach(t => document.getElementById('c' + t.id)?.classList.add('open')); }
function collapseAll() { T.forEach(t => document.getElementById('c' + t.id)?.classList.remove('open')); }
function fpending() { filt = 'pending'; applyFilt(); }
function fall() { filt = 'all'; applyFilt(); }
function applyFilt() {
  T.forEach(t => {
    t.sec.forEach(s => s.it.forEach((_, i) => {
      const k = K(t.id, s.id, i); const row = document.getElementById('r' + k); if (!row) return;
      const isDone = !!done[k]; const txt = row.getAttribute('data-s') || '';
      const ms = !srch || txt.includes(srch); let show = ms;
      if (filt === 'pending') show = show && !isDone;
      row.style.display = show ? 'flex' : 'none';
    }));
    const inner = document.getElementById('si' + t.id); if (!inner) return;
    inner.querySelectorAll('.sech').forEach(sh => {
      let nx = sh.nextElementSibling; let vis = false;
      while (nx && nx.classList.contains('srow')) { if (nx.style.display !== 'none') { vis = true; break; } nx = nx.nextElementSibling; }
      sh.style.display = vis ? 'flex' : 'none';
    });
  });
}
function doSearch(v) { srch = v.trim().toLowerCase(); if (srch) expandAll(); applyFilt(); }
function resetAll() { if (!confirm('Reset all progress? This cannot be undone.')) return; done = {}; totalMs = 0; streak = 0; lastDay = ''; sv(); upd(); toast('Progress reset', 'r'); }

// ── FOCUS MODE ────────────────────────────────
function focTopic(e, id) {
  e.stopPropagation(); focId = id;
  const t = T.find(x => x.id === id); document.getElementById('ftitle').textContent = t.title;
  document.getElementById('fbar').classList.add('show'); document.body.style.paddingTop = '46px';
  T.forEach(tt => { const c = document.getElementById('c' + tt.id); c.classList.toggle('fhide', tt.id !== id); if (tt.id === id) c.classList.add('open'); });
}
function exitFocus() {
  focId = null; document.getElementById('fbar').classList.remove('show'); document.body.style.paddingTop = '';
  T.forEach(tt => document.getElementById('c' + tt.id)?.classList.remove('fhide'));
}

// ── EXPORT & BACKUP ───────────────────────────
function doExport() {
  const ak = allK(), tot = ak.length, dn = ak.filter(k => done[k]).length;
  let ln = ['MATHS1 STUDY PLANNER — SUMMARY', 'Generated: ' + new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }), `Progress: ${dn}/${tot} (${Math.round(dn / tot * 100)}%)`, `Study time: ${fmtM(totalMs)}`, '─'.repeat(48)];
  T.forEach(t => { const ks = topK(t.id), td = ks.filter(k => done[k]).length; ln.push(`\n[${td === ks.length ? '✓' : ' '}] ${t.title} (${td}/${ks.length})`); t.sec.forEach(s => { ln.push('  ' + s.n); s.it.forEach((it, i) => { const k = K(t.id, s.id, i); ln.push(`    [${done[k] ? '✓' : ' '}] ${it}${diff[k] ? ' [' + diff[k] + ']' : ''}`); }); }); if (notes[t.id]?.trim()) ln.push('  Notes: ' + notes[t.id].trim()); });
  const b = new Blob([ln.join('\n')], { type: 'text/plain' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'maths1_summary.txt'; a.click(); toast('Summary exported ↓', 'o');
}

function backupData() {
  const data = { done, diff, notes, totalMs, streak, lastDay, isDark, examDate, activityLog };
  const b = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'maths_planner_backup.json'; a.click();
  toast('Backup downloaded', 'g');
}

function restoreData() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json';
  input.onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const d = JSON.parse(ev.target.result);
        if (d.done) localStorage.setItem('mp_done', JSON.stringify(d.done));
        if (d.diff) localStorage.setItem('mp_diff', JSON.stringify(d.diff));
        if (d.notes) localStorage.setItem('mp_notes', JSON.stringify(d.notes));
        if (d.totalMs !== undefined) localStorage.setItem('mp_ms', d.totalMs);
        if (d.streak !== undefined) localStorage.setItem('mp_streak', d.streak);
        if (d.lastDay) localStorage.setItem('mp_day', d.lastDay);
        if (d.isDark !== undefined) localStorage.setItem('mp_dark', JSON.stringify(d.isDark));
        location.reload();
      } catch (err) { alert('Invalid backup file format.'); }
    };
    reader.readAsText(f);
  };
  input.click();
}

// ── KBD ───────────────────────────────────────
function openKbd() { document.getElementById('kpanel').classList.add('open'); }
function closeKbd(e) { if (!e || e.target === document.getElementById('kpanel')) document.getElementById('kpanel').classList.remove('open'); }

// ── AI TUTOR ──────────────────────────────────
function openChat() {
  document.getElementById('chatPanel').classList.add('open');
  document.getElementById('chatArea').style.display = 'flex';
  document.getElementById('chatInput').focus();
}
function closeChat() { document.getElementById('chatPanel').classList.remove('open'); }
function closeChatEvt(e) { if (!e || e.target === document.getElementById('chatPanel')) closeChat(); }

function appendMsg(txt, type) {
  const p = document.createElement('div');
  p.className = 'chat-msg ' + type;
  p.textContent = txt;
  const msgs = document.getElementById('chatMsgs');
  msgs.appendChild(p);
  msgs.scrollTop = msgs.scrollHeight;
}

async function sendToGemini() {
  const inp = document.getElementById('chatInput');
  const text = inp.value.trim();
  if (!text) return;
  const hiddenPrompt = inp.getAttribute('data-hidden-prompt');
  inp.value = '';
  inp.removeAttribute('data-hidden-prompt');

  appendMsg(text, 'user');
  const btn = document.getElementById('chatSendBtn');
  btn.textContent = '...'; btn.disabled = true;

  // Send the heavy detailed prompt to Gemini, but only show the concise text in the UI
  const msgToSend = hiddenPrompt ? hiddenPrompt : text;
  chatHistory.push({ role: "user", parts: [{ text: msgToSend }] });

  const sysPrompt = "You are Math Jarvis, an AI tutor integrated exclusively into a Mathematics Study Planner tool for the Foundation Level Semester 1 Data Science students. Explain concepts very clearly, structurally, and keep it concise. If you write formulas, format them legibly in plain text.";

  try {
    const res = await fetch(`/api/gemini`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sysPrompt }] },
        contents: chatHistory
      })
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.error?.message || data.error || "API Error");

    let aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";
    chatHistory.push({ role: "model", parts: [{ text: aiText }] });
    appendMsg(aiText, 'ai');
  } catch (e) {
    appendMsg("Error: " + e.message, 'err');
    chatHistory.pop(); // remove user msg from history if fail
  } finally {
    btn.textContent = 'Send'; btn.disabled = false;
  }
}

async function callGeminiDirectly(promptStr) {
  const sysPrompt = "You are Math Jarvis. Return ONLY exactly what is requested, no extra chat.";
  try {
    const res = await fetch(`/api/gemini`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sysPrompt }] },
        contents: [{ role: "user", parts: [{ text: promptStr }] }]
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || data.error || "API Error");
    return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
  } catch (e) {
    alert("AI Error: " + e.message);
    return null;
  }
}

// ==========================================
// GEMINI API PROMPT TEMPLATES
// ==========================================

// 1. The "Explain Like I'm 5" Button
const getELI5Prompt = (topicTitle, subtopicTitle, userNotes) => `
You are a friendly, enthusiastic math tutor. 
Explain the mathematical concept of "${subtopicTitle}" (from the topic "${topicTitle}") in the simplest way possible, as if you are explaining it to a beginner. 
If the user has notes, reference them to correct any misunderstandings or build on their thoughts.
User's current notes: "${userNotes || 'No notes provided.'}"

OUTPUT FORMAT (Use Markdown):
🌟 **The Analogy:** Provide a fun, real-world analogy to explain the concept.
🧠 **The Math Translation:** Explain how the analogy connects to the actual math rules.
📝 **Quick Example:** Provide one extremely simple, worked-out example.
`;

// 2. Infinite Practice Problem Generator
const getPracticeProblemPrompt = (subtopicTitle) => `
Generate a unique, challenging math word problem based on the concept of "${subtopicTitle}".

OUTPUT FORMAT:
Return the response ONLY as a valid JSON object with the following structure. Do not include markdown formatting like \`\`\`json.
{
  "problem": "The text of the word problem. Make it engaging.",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswerIndex": 0,
  "explanation": {
    "conceptTested": "A brief 1-sentence explanation of what math rule is needed here.",
    "stepByStepSolution": [
      "Step 1: Identify the knowns...",
      "Step 2: Apply the formula...",
      "Step 3: Solve for X..."
    ]
  }
}
`;

// 3. Smart "Active Recall" Quizzes
const getActiveRecallQuizPrompt = (topicTitle, subtopicList) => `
Create a 5-question multiple-choice pop quiz for the mathematics topic: "${topicTitle}".
The questions should cover these specific subtopics: ${subtopicList.join(', ')}.

OUTPUT FORMAT:
Return the response ONLY as a valid JSON array of objects with this structure. No markdown blocks.
[
  {
    "question": "The question text",
    "options": ["A", "B", "C", "D"],
    "correctAnswerIndex": 2,
    "hint": "A short hint if they get stuck (do not give away the answer)",
    "detailedExplanation": "A 2-sentence explanation of WHY this is the correct answer, to be shown after they guess."
  }
]
`;

// 4. AI Note Formatting & Enhancement
const getEnhanceNotesPrompt = (messyNotes) => `
You are a meticulous mathematics teaching assistant. 
Take the following messy, stream-of-consciousness notes from a student and format them beautifully.
Do NOT add outside information that the student didn't mention, just clean up their thoughts.

Student's messy notes:
"${messyNotes}"

OUTPUT FORMAT (Use Markdown):
# 📝 Cleaned Notes

## 🎯 Core Concepts
* (Extract and bullet-point the main ideas here, bolding key terms)

## 🧮 Key Formulas / Rules
* (Format any math formulas neatly using standard notation)

## 💡 Note to Student
* (Add a brief 1-sentence encouraging note on how well they grasped the topic based on their brain-dump)
`;

// 5. The "Panic Mode" Study Scheduler
const getPanicModePrompt = (daysLeft, hoursPerDay, uncheckedTopicsList) => `
The student has an exam in ${daysLeft} days and can study for ${hoursPerDay} hours per day.
They still need to learn the following topics: ${uncheckedTopicsList.join(', ')}.
Create a realistic, hour-by-hour study schedule.

OUTPUT FORMAT (Use Markdown):
🚨 **PANIC MODE: ENGAGED** 🚨

### 📅 Your Custom Study Plan
(Create a markdown table breaking down Day 1, Day 2, etc., mapping specific hours to specific topics)

### 🍅 Pomodoro Strategy
(Briefly explain how they should divide their ${hoursPerDay} hours using 25/5 focus blocks)

### 💡 Pro-Tip for these Topics
(Give one specific study tip regarding the hardest topic on their list)
`;

// 6. Snap-to-Solve (Multimodal Vision Prompt)
const getSnapToSolvePrompt = (subtopicTitle) => `
Look at the provided image of a math problem related to "${subtopicTitle}".
DO NOT give the final answer. 

OUTPUT FORMAT (Use Markdown):
🔍 **What I see:** (Briefly state what the problem is and what you see the student doing)
⚠️ **The Block:** (Identify exactly where they are stuck or if they made a math error in step X)
💡 **Your Next Step:** (Provide the specific mathematical rule they need to apply to continue solving it themselves)
`;

async function aiExplain(item, btnEvent) {
  if (btnEvent) { btnEvent.preventDefault(); btnEvent.stopPropagation(); }
  const t = T.find(x => x.sec.some(s => s.it.includes(item))) || { title: "Mathematics", id: null };
  const userN = t.id ? notes[t.id] : "";
  openChat();

  // Create a hidden prompt system so the user doesn't see a giant wall of text in the UI
  const displayTxt = `Explain "${item}" simply`;
  document.getElementById('chatInput').value = displayTxt;
  const pTag = document.getElementById('chatInput');
  pTag.setAttribute('data-hidden-prompt', getELI5Prompt(t.title, item, userN));
  sendToGemini();
}

async function aiPractice(tId) {
  const t = T.find(x => x.id === tId);
  openChat();
  const displayTxt = `Give me a practice problem for ${t.title}`;
  document.getElementById('chatInput').value = displayTxt;
  document.getElementById('chatInput').setAttribute('data-hidden-prompt', getPracticeProblemPrompt(t.title));
  sendToGemini();
}

async function aiQuiz(tId) {
  const t = T.find(x => x.id === tId);
  openChat();
  const subtopics = t.sec.map(s => s.n);
  const displayTxt = `Give me a pop quiz on ${t.title} `;
  document.getElementById('chatInput').value = displayTxt;
  document.getElementById('chatInput').setAttribute('data-hidden-prompt', getActiveRecallQuizPrompt(t.title, subtopics));
  sendToGemini();
}

async function aiEnhanceNotes(tId) {
  const ntxt = document.getElementById('nt' + tId);
  const rawNote = ntxt.value.trim();
  if (!rawNote) { alert("Please write some notes first to enhance!"); return; }
  ntxt.value = "✨ Enhancing with AI...";
  const res = await callGeminiDirectly(getEnhanceNotesPrompt(rawNote));
  if (res) {
    ntxt.value = res.trim();
    notes[tId] = ntxt.value;
    saveNote(tId);
    toast("Notes AI Enhanced! ✨");
  } else {
    ntxt.value = rawNote; // revert
  }
}

async function aiPanicMode() {
  const days = prompt("🚨 PANIC MODE 🚨\nHow many days until your exam?");
  if (!days || isNaN(days)) return;
  const hours = prompt("How many hours can you study per day?");
  if (!hours || isNaN(hours)) return;

  const uncheckedList = T.flatMap(t => {
    const ks = topK(t.id);
    const unch = ks.filter(k => !done[k]);
    if (unch.length > 0) return t.title;
    return [];
  });

  const deduped = [...new Set(uncheckedList)];
  if (deduped.length === 0) {
    alert("You have no unchecked topics! You are already prepared.");
    return;
  }

  openChat();
  const displayTxt = `Help me schedule my study! 🚨`;
  document.getElementById('chatInput').value = displayTxt;
  document.getElementById('chatInput').setAttribute('data-hidden-prompt', getPanicModePrompt(days, hours, deduped));
  sendToGemini();
}

let currentSnapSubtopic = "";
async function aiSnapClick(item, event) {
  if (event) { event.preventDefault(); event.stopPropagation(); }
  currentSnapSubtopic = item;
  document.getElementById('globalSnapInput').click();
}

async function handleSnapUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = async () => {
    const base64data = reader.result.split(',')[1];

    openChat();
    appendMsg(`📸 Uploaded Image for: ${currentSnapSubtopic} `, 'user');
    const btn = document.getElementById('chatSendBtn');
    btn.textContent = '...'; btn.disabled = true;

    const promptText = getSnapToSolvePrompt(currentSnapSubtopic);

    const imagePart = {
      inlineData: {
        data: base64data,
        mimeType: file.type
      }
    };

    chatHistory.push({ role: "user", parts: [{ text: promptText }, imagePart] });

    const sysPrompt = "You are Math Jarvis, an AI tutor integrated exclusively into a Mathematics Study Planner tool for the Foundation Level Semester 1 Data Science students. Explain concepts very clearly, structurally, and keep it concise. If you write formulas, format them legibly in plain text.";

    try {
      const res = await fetch(`/ api / gemini`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: sysPrompt }] },
          contents: chatHistory
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || data.error || "API Error");

      let aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";
      chatHistory.push({ role: "model", parts: [{ text: aiText }] });
      appendMsg(aiText, 'ai');
    } catch (err) {
      appendMsg("Error: " + err.message, 'err');
      chatHistory.pop();
    } finally {
      btn.textContent = 'Send'; btn.disabled = false;
    }
    document.getElementById('globalSnapInput').value = ""; // reset
  };
  reader.readAsDataURL(file);
}

document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') { if (e.key === 'Escape') e.target.blur(); return; }
  switch (e.key) {
    case '/': e.preventDefault(); document.getElementById('sinput').focus(); break;
    case 'e': case 'E': expandAll(); toast('All expanded'); break;
    case 'c': case 'C': collapseAll(); toast('All collapsed'); break;
    case 't': case 'T': toggleTimer(); break;
    case 'p': case 'P': fpending(); toast('Showing pending'); break;
    case 'a': case 'A': fall(); toast('Showing all'); break;
    case 'd': case 'D': toggleDarkMode(); toast(isDark ? 'Dark mode on' : 'Light mode on'); break;
    case '?': openKbd(); break;
    case 'Escape': closeKbd(); exitFocus(); break;
  }
});

// ── TOAST ─────────────────────────────────────
let toastT = null;
function toast(msg, type = 'g') {
  const cols = { g: 'var(--green-m)', r: 'var(--red)', o: 'var(--gold)' };
  document.getElementById('tdot').style.background = cols[type] || cols.g;
  document.getElementById('tmsg').textContent = msg;
  const el = document.getElementById('toast'); el.classList.add('show');
  if (toastT) clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2300);
}

// ── CONFETTI ──────────────────────────────────
const cfc = ['#2a4d10', '#5e8f30', '#9a7208', '#b33024', '#4a8c6e'];
function spwn(el) { const r = el.getBoundingClientRect(); for (let i = 0; i < 7; i++)mkc(r.left + Math.random() * 36, r.top + window.scrollY + 8); }
function burst() { for (let i = 0; i < 22; i++)mkc(window.innerWidth / 2 + (Math.random() * 140 - 70), window.scrollY + 180); }
function mkc(x, y) { const p = document.createElement('div'); p.className = 'cf'; p.style.cssText = `left:${x} px; top:${y} px; width:${3 + Math.random() * 5} px; height:${3 + Math.random() * 5} px; background:${cfc[Math.floor(Math.random() * cfc.length)]}; animation - delay:${Math.random() * .2} s; animation - duration:${.9 + Math.random() * .5} s; `; document.body.appendChild(p); setTimeout(() => p.remove(), 1700); }

// ── INIT ──────────────────────────────────────
function updateCountdown() {
  const el = document.getElementById('examCountdown');
  if (!el) return;
  if (!examDate) {
    el.innerHTML = '📅 Set Exam Date';
    return;
  }
  const eDate = new Date(examDate);
  if (isNaN(eDate)) return;
  const diffTime = eDate - new Date();
  if (diffTime < 0) {
    el.innerHTML = '📅 Exam Passed';
  } else {
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    el.innerHTML = `⏳ ${diffDays} days to exam`;
  }
}

function setExamDate() {
  const d = prompt("Enter exam date (YYYY-MM-DD):", examDate || "");
  if (d) {
    examDate = d;
    localStorage.setItem('mp_examDate', JSON.stringify(examDate));
    updateCountdown();
  }
}

applyDarkMode();
updateCountdown();
render();
document.getElementById('streakN').textContent = streak;
document.getElementById('sTime').textContent = fmtM(totalMs);
