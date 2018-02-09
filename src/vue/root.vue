<template>
  <div>
    <header-content/>
    <section class="rootSection">
      <h1 class="title has-text-centered" id="">
        Polyhedron with Spherical Faces and<br> Three-dimensional Fractals
      </h1>
      <section class="has-text-centered">
        <p>
          <img class="" src="../img/final.png" width="256px"></img>
          <img class="" src="../img/final.png" width="256px"></img>
        </p>
      </section>
      <sectionContainer>
        <p slot="title">What is Sphairahedron</p>
        <div slot="content">
          <p>In 2003, Kazushi Ahara And Yoshiaki Araki introduced a sphairahedron, a polyhedron with spherical faces.</p>
        </div>
      </sectionContainer>
      <sectionContainer>
        <p slot="title">How to Construct Fractals</p>
        <div slot="content">
          <p>Sphairahedron is polyhedron with</p>
        </div>
      </sectionContainer>
      <sectionContainer>
        <p slot="title">Fractal Renderer</p>
        <div slot="content">
          <p>Sphairahedron is polyhedron</p>
        </div>
      </sectionContainer>
      <sectionContainer>
        <p slot="title">Gallery</p>
        <div slot="content">
          <h3 class="title is-4">Tetrahedron</h3>
          <h3 class="title is-4">Pentahedral Pyramid</h3>
          <h3 class="title is-4">Pentahedral Prism</h3>
          <h3 class="title is-4">Cube</h3>
          <h3 class="title is-4">Hexahedral Cake</h3>
        </div>
      </sectionContainer>
      <sectionContainer>
        <p slot="title">Reference</p>
        <div slot="content">
          <ul>
            <li>Foo</li>
            <li>Bar</li>
          </ul>
        </div>
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
