<template>
  <article class="card user" @click="$router.push(`/users/${user.id}`)">
    <div class="row">
      <div class="avatar" :style="{ background: color }">{{ initials }}</div>
      <div class="meta">
        <h3 class="user__name" v-html="hl(user.name)"></h3>
        <p class="user__line" v-html="hl(user.email)"></p>
        <p class="user__line">📍 {{ user.address.street }}, {{ user.address.city }}</p>
      </div>
      <span class="badge">ID: {{ user.id }}</span>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({ user: { type: Object, required: true }, highlight: { type: String, default: '' } })
const initials = (props.user.name || '?').split(' ').map(w => w && w[0] ? w[0].toUpperCase() : '').filter(Boolean).slice(0,2).join('') || '?'
const palette = ['#324d92','#7b3fa1','#216e61','#7a2e2e','#174e87','#7b2d77','#4c3b91']
const color = palette[(props.user.id || 0) % palette.length]
function hl(text=''){ if(!props.highlight) return text; const safe = props.highlight.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); return String(text).replace(new RegExp(`(${safe})`,'ig'), '<mark>$1</mark>') }
</script>

<style scoped>
.user{ padding:14px; cursor:pointer; transition:transform .12s ease, box-shadow .12s ease, border-color .12s ease; }
.user:hover{ transform:translateY(-2px); box-shadow:0 12px 34px rgba(0,0,0,.35); border-color:#29407c; }
.row{ display:grid; grid-template-columns:auto 1fr auto; gap:.75rem; align-items:center; }
.avatar{ width:44px; height:44px; border-radius:50%; display:grid; place-items:center; font-weight:800; color:#e9ecff; border:1px solid var(--line); }
.meta{ min-width:0 }
.user__name{ margin:.1rem 0; font-size:clamp(1rem, 1vw + .8rem, 1.15rem); }
.user__line{ margin:.15rem 0; color:#cdd6ff; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
mark{ background:#fde047; color:#0b1020; padding:0 2px; border-radius:3px; }
@media (max-width:640px){ .user{ padding:16px } }
</style>