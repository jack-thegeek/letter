<script setup>
  import {ref} from 'vue'
  import axios from '@/request'

  let result = ref(null)

  async function testApi() {
    result.value = await axios.get('/');
  }

  testApi()

</script>

<template>
  <div>
    <div>Home</div>
    <div>{{ result?.data.hitokoto }}</div>
  </div>
</template>