<template>
  <sectionContainer>
    <div slot="title">How to Construct Fractals</div>
    <div slot="content">
      <div class="columns has-text-centered">
        <figure class="column">
          <img src="../img/sphairaTessellation.gif" width="256px"></img><br>
          Tiling process of a finite sphairahedron
        </figure>
        <figure class="column">
          <img src="../img/sphairaPrismTessellation.gif" width="256px"></img><br>
          Tiling process of an infinite sphairahedron
        </figure>
      </div>
      <p class="no-indent">
        Each of the gif animations shows a processe of the tiling of a cube type sphairahedron.
        The sphairahedron presented in Figure
      </p>
    </div>
  </sectionContainer>
</template>

<script>
import SectionContainer from './sectionContainer.vue';

export default {
    components: {
        SectionContainer
    }
}
</script>

<style>
</style>
