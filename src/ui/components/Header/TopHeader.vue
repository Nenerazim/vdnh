<template>
  <div class="top-header">
    <div class="logo">
      <NuxtLink to="/">
        <svg width="142" height="80">
          <use href="/sprites/icons.svg#logo" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-header {
  margin-top: 15px;
  padding-inline: 56px;
  display: flex;
  align-items: center;
}
</style>
