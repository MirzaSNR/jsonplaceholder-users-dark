<template>
  <div class="card" style="padding:14px;">
    <div class="wrap">
      <div class="field">
        <label class="badge" for="name">Cari berdasarkan nama</label>
        <input id="name" class="input" type="text" autocomplete="off" placeholder="Contoh Leanne" v-model="model" @input="onInput" />
        <p style="margin:.35rem 0 0 0; color:var(--muted); font-size:.85rem">Ketik sebagian nama, contoh <code>lean</code>.</p>
      </div>
      <div class="actions" style="display:flex; gap:.6rem;">
        <button class="btn" @click="emitSearch">Cari</button>
        <button class="btn" style="background:#23335f; color:#cfe0ff" @click="clearAll">Hapus</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ modelValue: { type: String, default: '' } })
const emit  = defineEmits(['update:modelValue','search'])
const model = ref(props.modelValue)
function emitSearch(){ emit('search', model.value.trim()) }
let t
function onInput(e){ const v = e.target.value; model.value = v; emit('update:modelValue', v); clearTimeout(t); t = setTimeout(() => emit('search', v.trim()), 250) }
function clearAll(){ model.value=''; emit('update:modelValue',''); emit('search','') }
</script>

<style scoped>
.wrap{ display:flex; gap:.6rem; align-items:center; flex-wrap:wrap; }
.field{ flex:1 1 260px; min-width:220px; }
@media (max-width: 640px){ .actions{ width:100%; } .actions .btn{ flex:1 1 0; } }
</style>