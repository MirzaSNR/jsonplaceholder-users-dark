<template>
  <div class="card" style="padding:14px;">
    <div class="wrap">
      <div class="field">
        <label class="badge" for="email">Cari email</label>
        <input
          id="email"
          class="input"
          type="email"
          autocomplete="off"
          placeholder="Contoh Sincere@april.biz"
          v-model="model"
          @input="onInput"
        />
        <p style="margin:.10rem 0 .29rem 0; color:var(--muted); font-size:.70rem">
          Ketik sebagian email,<code></code>
        </p>
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
function onInput(e){
  const v = e.target.value
  model.value = v
  emit('update:modelValue', v)
  clearTimeout(t)
  t = setTimeout(() => emit('search', v.trim()), 250)
}
function clearAll(){ model.value=''; emit('update:modelValue',''); emit('search','') }
</script>
