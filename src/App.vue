<script setup>
  import { RouterView } from 'vue-router';
  import theNav from './components/theNav.vue';
  
 
</script>
<template>
  <div>
      <theNav/>
      <RouterView />
  </div>
</template>
