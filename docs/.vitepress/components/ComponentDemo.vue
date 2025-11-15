<template>
  <div class="component-demo">
    <div class="component-demo-preview">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Component demo wrapper - preview only
</script>

<style scoped>
.component-demo {
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 1.5rem;
}

.component-demo-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 0.375rem;
}
</style>

