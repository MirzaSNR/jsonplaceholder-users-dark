<template>
  <section class="grid">
    <SearchBar v-model="name" @search="handleSearch" />

    <div class="card" style="padding:12px; display:flex; gap:.6rem; flex-wrap:wrap; align-items:center;">
      <div style="display:flex; gap:.4rem; align-items:center;">
        <label style="color:var(--muted); font-size:.9rem;">Urutkan</label>
        <select v-model="sortBy" class="input" style="padding:.5rem; width:160px; background:#0b1433; color:var(--text);">
          <option value="name-asc">Nama A–Z</option>
          <option value="name-desc">Nama Z–A</option>
          <option value="city-asc">Kota A–Z</option>
          <option value="city-desc">Kota Z–A</option>
        </select>
      </div>

      <div style="display:flex; gap:.4rem; align-items:center;">
        <label style="color:var(--muted); font-size:.9rem;">Kota</label>
        <select v-model="city" class="input" style="padding:.5rem; width:180px; background:#0b1433; color:var(--text);">
          <option value="">Semua Kota</option>
          <option v-for="c in cities" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>

      <button class="btn" @click="resetAll">Hapus Semua</button>
    </div>

    <div v-if="error" class="card" style="padding:14px; color:var(--danger)">{{ error }}</div>

    <div v-else-if="loading" class="grid cols" style="min-height:40vh;">
      <div class="skeleton" v-for="i in 6" :key="i" style="height:100px;"></div>
    </div>

    <div v-else-if="visible.length === 0" class="card empty" style="padding:28px; min-height:30vh; display:grid; place-items:center;">
      <p>Tidak ada user untuk: <strong>{{ name || '(kosong)' }}</strong></p>
    </div>

    <div v-else class="grid cols">
      <UserCard v-for="u in visible" :key="u.id" :user="u" :highlight="name" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getUsers } from '../services/api.js'
import SearchBar from '../components/SearchBar.vue'
import UserCard from '../components/UserCard.vue'

const allUsers = ref([])
const loading  = ref(false)
const error    = ref('')
const name     = ref('')

const sortBy   = ref('name-asc')
const city     = ref('')

const cities = computed(() =>
  [...new Set(allUsers.value.map(u => u.address?.city).filter(Boolean))].sort()
)

onMounted(async () => {
  loading.value = true
  try {
    allUsers.value = await getUsers()
  } catch (e) {
    error.value = e?.message || 'Failed to load users'
  } finally {
    loading.value = false
  }
})

function resetAll(){ name.value=''; city.value=''; sortBy.value='name-asc' }
function handleSearch(q){ name.value = q }

const filtered = computed(() => {
  const q = name.value.toLowerCase().trim()
  return allUsers.value.filter(u => {
    const nm = (u.name || '').toLowerCase()
    const em = (u.email || '').toLowerCase()
    const matchName = !q || nm.includes(q) || em.includes(q)
    const matchCity = !city.value || u.address?.city === city.value
    return matchName && matchCity
  })
})

const visible = computed(() => {
  const arr = [...filtered.value]
  const sorters = {
    'name-asc' : (a,b)=> a.name.localeCompare(b.name),
    'name-desc': (a,b)=> b.name.localeCompare(a.name),
    'city-asc' : (a,b)=> (a.address?.city || '').localeCompare(b.address?.city || ''),
    'city-desc': (a,b)=> (b.address?.city || '').localeCompare(a.address?.city || ''),
  }
  return arr.sort(sorters[sortBy.value] || sorters['name-asc'])
})
</script>