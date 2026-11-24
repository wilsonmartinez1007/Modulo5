<script setup>
  import Paginas from './component/Paginas.vue';
  import { provideTema } from './composable/useTema.ts';

  provideTema()
</script>
<template>
  <Paginas/>
</template>

<style scoped></style>
