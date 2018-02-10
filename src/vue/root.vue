<template>
  <div>
    <header-content/>
    <section class="rootSection">
      <h1 class="title has-text-centered" id="">
        Polyhedron with Spherical Faces and<br> Three-dimensional Fractals
      </h1>
      <section class="has-text-centered">
        <div class="columns">
          <figure class="column">
            <img class="" src="../img/cube.png" width="256px"></img>
          </figure>
          <figure class="column">
            <img class="" src="../img/final.png" width="256px"></img>
          </figure>
        </div>
      </section>
      <sectionContainer>
        <div slot="title">What is Sphairahedron</div>
        <div slot="content">
          <figure class="has-text-centered">
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/3lcO9zRCv-4?rel=0"
                    frameborder="0"
                    allow="autoplay; encrypted-media" allowfullscreen>
            </iframe>
          </figure>
          <p>In 2003, Kazushi Ahara And Yoshiaki Araki introduced a sphairahedron, a polyhedron with spherical faces[1].
            Sphairahedron is a coined word combining two words sphaira- (a prefix that means ’spherical’) and -hedron
            (a suffix that means ’polyhedron.’) Mathematically a sphairahedron is a polyhedron with spherical faces.
          </p>
        </div>
      </sectionContainer>
      <howToContainer/>
      <rendererContainer/>
      <galleryContainer/>
      <referenceContainer/>
    </section>
  </div>
</template>

<script>
import HeaderContent from './headerContent.vue';
import SectionContainer from './sectionContainer.vue';
import ReferenceContainer from './referenceContainer.vue';
import GalleryContainer from './galleryContainer.vue';
import RendererContainer from './rendererContainer.vue';
import HowToContainer from './howToContainer.vue';

export default {
    components: {
        HeaderContent,
        SectionContainer,
        ReferenceContainer,
        GalleryContainer,
        RendererContainer,
        HowToContainer
    }
}
</script>

<style>
.rootSection{
    padding-right: 2rem;
    padding-left: 2rem;
}

p {
    text-indent: 1cm;
}

p.no-indent {
    text-indent: 0cm;
}
</style>
