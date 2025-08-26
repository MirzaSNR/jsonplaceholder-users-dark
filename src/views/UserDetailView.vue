<template>
  <section class="grid">
    <div class="card" style="padding:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:1rem;">
        <RouterLink to="/" class="badge">Kembali</RouterLink>
        <span class="badge" v-if="user">Pengguna #{{ user.id }}</span>
      </div>

      <div v-if="loading" class="skeleton" style="height:120px; margin-top:12px;"></div>
      <p v-else-if="error" style="color:var(--danger); margin-top:12px;">{{ error }}</p>

      <div v-else-if="user" class="grid" style="gap:12px; margin-top:12px;">
        <h2 style="margin:.3rem 0 0 0">{{ user.name }}</h2>

        <div class="grid cols" style="gap:12px;">
          <div class="card" style="padding:12px;">
            <h4 style="margin:.2rem 0 .6rem 0;">Kontak</h4>
            <p>📧 {{ user.email }}</p>
            <p>📞 {{ user.phone }}</p>
            <p>🌐 <a :href="websiteHref" target="_blank" rel="noopener">{{ user.website }}</a></p>
          </div>
          <div class="card" style="padding:12px;">
            <h4 style="margin:.2rem 0 .6rem 0;">Alamat</h4>
            <p>{{ user.address.street }}, {{ user.address.suite }}</p>
            <p>{{ user.address.city }} ({{ user.address.zipcode }})</p>
            <p class="badge">lat {{ user.address.geo.lat }} · lng {{ user.address.geo.lng }}</p>
          </div>
          <div class="card" style="padding:12px;">
            <h4 style="margin:.2rem 0 .6rem 0;">Perusahaan</h4>
            <p><strong>{{ user.company.name }}</strong></p>
            <p style="color:#cdd6ff;">“{{ user.company.catchPhrase }}”</p>
            <p>{{ user.company.bs }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getUserById } from '../services/api.js'

const route = useRoute()
const user = ref(null)
const loading = ref(false)
const error = ref('')

const websiteHref = computed(() => {
  const w = user.value?.website || ''
  return w ? (w.startsWith('http') ? w : `https://${w}`) : '#'
})

onMounted(async () => {
  loading.value = true; error.value = ''
  try { user.value = await getUserById(route.params.id) }
  catch(e){ error.value = e?.message || 'Failed to load user detail' }
  finally { loading.value = false }
})
</script>
