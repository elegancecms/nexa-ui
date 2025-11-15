<template>
  <div class="button-demo">
    <!-- Primary -->
    <div v-if="variant === 'primary'" class="demo-button primary">
      <button class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
        {{ text || 'Primary' }}
      </button>
    </div>
    
    <!-- Secondary -->
    <div v-else-if="variant === 'secondary'" class="demo-button secondary">
      <button class="px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors">
        {{ text || 'Secondary' }}
      </button>
    </div>
    
    <!-- Outline -->
    <div v-else-if="variant === 'outline'" class="demo-button outline">
      <button class="px-4 py-2 border border-gray-300 text-gray-900 rounded-md hover:bg-gray-50 transition-colors">
        {{ text || 'Outline' }}
      </button>
    </div>
    
    <!-- Ghost -->
    <div v-else-if="variant === 'ghost'" class="demo-button ghost">
      <button class="px-4 py-2 text-gray-900 rounded-md hover:bg-gray-100 transition-colors">
        {{ text || 'Ghost' }}
      </button>
    </div>
    
    <!-- Danger -->
    <div v-else-if="variant === 'danger'" class="demo-button danger">
      <button class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
        {{ text || 'Danger' }}
      </button>
    </div>
    
    <!-- Default -->
    <div v-else class="demo-button default">
      <button class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
        {{ text || 'Button' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  text?: string;
}>();
</script>

<style scoped>
.button-demo {
  display: inline-block;
}

.demo-button button {
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}

.demo-button button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

