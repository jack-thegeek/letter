<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const offsetY = ref(false)
const menuList = ref([
  { label: '选项一', value: 'menu1' },
  { label: '选项二', value: 'menu2' }
])

const goBack = () => {
  Snackbar({
    content: '返回',
    position: 'top'
  })
}
</script>

<template>
  <var-app-bar title="标题">
    <template #left>
      <var-button
        round
        text
        color="transparent"
        text-color="#fff"
        @click="goBack"
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu
        class="app-bar-example-menu"
        :offset-y="42"
        :offset-x="-20"
        v-model:show="offsetY"
      >
        <var-button
          round
          text
          color="transparent"
          text-color="#ffffff"
          @click="offsetY = true"
        >
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <div class="app-bar-example-menu-list">
            <var-cell
              class="app-bar-example-menu-cell"
              v-for="value in menuList"
              :key="value.value"
              v-ripple
            >
              {{ value.label }}
            </var-cell>
          </div>
        </template>
      </var-menu>
    </template>
  </var-app-bar>
</template>

<style>
.app-bar-example-menu {
  background: transparent;
}

.app-bar-example-menu-list {
  background: #fff;
}

.app-bar-example-menu-cell {
  display: block;
  padding: 10px;
}
</style>