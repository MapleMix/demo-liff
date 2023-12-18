<template>
  <div :class="props.backgroundType ? 'bg-gift' : 'bg-main'">
    <slot></slot>
  </div>
</template>

<script setup lang="js">
const props = defineProps({
  backgroundType : {
    type: Boolean,
    default: false
  },
});
</script>

<style scoped>
.bg-main {
  height: 100vh;
  background: rgb(104, 241, 235);
  background: linear-gradient(
    0deg,
    rgba(104, 241, 235, 1) 0%,
    rgba(255, 176, 251, 1) 100%
  );
}
/* .bg-profile {
  display: flex;
  height: 100vh;
  background: rgb(104, 241, 235);
  background: linear-gradient(
    0deg,
    rgba(104, 241, 235, 1) 0%,
    rgba(255, 176, 251, 1) 100%
  );
} */
</style>
