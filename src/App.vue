<template>
  <div class="app">
    <header class="topbar">
      <div class="brand">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 14h-2v-2h2Zm0-4h-2V6h2Z"/></svg>
        <span>Jawaban Tes Frontend Programmer</span>
      </div>
      <nav class="nav">
        <RouterLink to="/" class="navlink">Home</RouterLink>
      </nav>
    </header>
    <main class="main"><RouterView /></main>
    <footer class="footer">Mirza SNR</footer>
  </div>
</template>

<script setup></script>

<style>
:root{
  --bg:#0e1324; --bg-elev:#121a35; --line:#1c2a52;
  --text:#e9ecff; --muted:#a5b2e8;
  --accent:#7fb0ff; --accent-2:#c1d7ff;
  --danger:#ffb4b4; --ok:#7dffa7;
  --radius:16px; --shadow:0 10px 30px rgba(0,0,0,.25);
}
*{box-sizing:border-box}
html,body,#app{height:100%}
body{margin:0; font-family:Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; background:var(--bg); color:var(--text);}
.app{min-height:100%; display:grid; grid-template-rows:auto 1fr auto;}
.topbar{display:flex; justify-content:space-between; align-items:center; gap:.6rem; padding:12px clamp(12px,2vw,18px); border-bottom:1px solid var(--line); background:linear-gradient(to bottom, rgba(2,8,23,.9), rgba(2,8,23,.6)); backdrop-filter:saturate(140%) blur(6px); position:sticky; top:0;}
.brand{display:flex; align-items:center; gap:.5rem; font-weight:700;}
.nav{display:flex; gap:.4rem; flex-wrap:wrap;}
.navlink{color:var(--muted); text-decoration:none; padding:8px 10px; border-radius:8px;}
.navlink.router-link-active{color:var(--text); background:rgba(255,255,255,.06);}
.main{padding:clamp(12px,2vw,20px); max-width:min(1100px,96vw); margin:0 auto;}
.footer{padding:16px; text-align:center; border-top:1px solid var(--line); color:var(--muted);}
.card{background:var(--bg-elev); border:1px solid var(--line); border-radius:var(--radius); box-shadow:var(--shadow);}
.btn{background:var(--accent); color:#06112a; border:0; border-radius:10px; padding:.65rem 1rem; font-weight:700; cursor:pointer;}
.input{width:100%; padding:.72rem .9rem; border-radius:10px; border:1px solid var(--line); background:#0b1433; color:var(--text); outline:none;}
.grid{display:grid; gap:clamp(.7rem,1.2vw,1rem);} 
.cols{grid-template-columns: repeat(auto-fill, minmax(clamp(220px,45vw,320px), 1fr));}
.badge{display:inline-flex; align-items:center; gap:.4rem; padding:.3rem .55rem; border-radius:999px; font-size:.78rem; background:rgba(255,255,255,.06); color:var(--accent-2); border:1px solid var(--line)}
.empty{color:var(--muted); text-align:center;}
.skeleton{position:relative; overflow:hidden; background:#111a3a; border-radius:12px; height:92px; border:1px solid var(--line);} 
.skeleton::after{content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent,rgba(255,255,255,.09),transparent); transform:translateX(-100%); animation:shimmer 1.2s infinite;} 
@keyframes shimmer{to{transform:translateX(100%)}}
@media (max-width: 640px){ .topbar{flex-direction:column; align-items:flex-start;} .nav{width:100%;} }
</style>