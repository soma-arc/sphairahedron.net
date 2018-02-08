<template>
  <div>
    <header-content/>
    <section class="section">
      <h1 class="title has-text-centered">
        Polyhedron with Spherical Faces and<br> Three-dimensional Fractals
      </h1>
      <sectionContainer>
        <p slot="title">What is Sphairahedron</p>
        <p slot="content">Sphairahedron is polyhedron with</p>
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
        <p slot="content">Sphairahedron is polyhedron with</p>
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
