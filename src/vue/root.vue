<template>
  <div>
    <header-content/>
    <section class="rootSection">
      <h1 class="title has-text-centered" id="">
        Polyhedron with Spherical Faces and<br> Three-dimensional Fractals
      </h1>
      <section class="has-text-centered">
        <div class="tile is-parent">
          <div class="tile is-child">
            <figure>
              <img class="has-text-centered" src="../img/final.png" width="256px"></img>
            </figure>
          </div>
          <div class="tile is-child">
            <figure >
              <img class="has-text-centered" src="../img/final.png" width="256px"></img>
            </figure>
          </div>
        </div>
      </section>
      <sectionContainer>
        <p slot="title">What is Sphairahedron</p>
        <div slot="content">
          <p>In 2003, Kazushi Ahara And Yoshiaki Araki introduced a sphairahedron, a polyhedron with spherical faces.</p>
        </div>
      </sectionContainer>
      <sectionContainer>
        <p slot="title">How to Construct Fractals</p>
        <p slot="content">Sphairahedron is polyhedron with</p>
      </sectionContainer>
      <sectionContainer>
        <p slot="title">Fractal Renderer</p>
        <p slot="content">Sphairahedron is polyhedron with</p>
      </sectionContainer>
      <sectionContainer>
        <p slot="title">Gallery</p>
        <div slot="content">
          <h3 class="title is-4">Tetrahedron</h3>
          <h3 class="title is-4">Pentahedron</h3>
          <h3 class="title is-4">Cube</h3>
        </div>
      </sectionContainer>
      <sectionContainer>
        <p slot="title">Reference</p>
        <p slot="content">Sphairahedron is polyhedron with</p>
      </sectionContainer>
    </section>
  </div>
</template>

<script>
import HeaderContent from './headerContent.vue';
import SectionContainer from './sectionContainer.vue';

export default {
    components: {
        HeaderContent,
        SectionContainer
    }
}
</script>

<style>
  .rootSection{
    padding-right: 2rem;
    padding-left: 2rem;
}
</style>
