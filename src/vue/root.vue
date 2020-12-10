<template>
  <div>
    <header-content/>
    <section class="rootSection">
      <h1 class="title has-text-centered" id="">
        Polyhedron with Spherical Faces and<br>
        Four-Dimensional Kleinian Groups
      </h1>
      <h2 class="subtitle is-8 has-text-centered" id="authors">
        Kento Nakamura, Yoshiaki Araki, and Kazushi Ahara
      </h2>
      <introContainer/>
      <rendererContainer/>
      <galleryContainer/>
      <threeDPrintedContainer/>
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
import IntroContainer from './introContainer.vue';
import ThreeDPrintedContainer from './3dPrintedContainer.vue';

export default {
    components: {
        HeaderContent,
        SectionContainer,
        ReferenceContainer,
        GalleryContainer,
        RendererContainer,
        IntroContainer,
        ThreeDPrintedContainer
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

.padding {
    margin-top: 10px;
    margin-bottom: 10px;
}

#authors {
    margin-bottom: 0;
    margin-top: 1rem;
}

.contain {
    margin-left: 2rem;
    margin-right: 2rem;
}

img[lazy=loaded] {
    -webkit-animation-duration: 0.5s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
}

</style>
