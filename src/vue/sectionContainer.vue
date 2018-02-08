<template>
  <section>
    <h1 class="title has-text-centered" id="titleWithoutSubtitle">
      <slot name="title"></slot>
    </h1>
    <hr>
    <div class="container is-fluid">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
section {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

#titleWithoutSubtitle {
    margin-bottom: 12px;
}

hr {
    margin-top: 0;
    margin-bottom: 12px;
}
</style>
