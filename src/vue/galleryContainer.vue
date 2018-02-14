<template>
  <sectionContainer>
    <div slot="title">Gallery</div>
    <div slot="content">
      <h3 class="title is-4">Tetrahedron</h3>
      <div class="columns">
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/tetrahedron/prism.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/tetrahedron/prismLimit.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/tetrahedron/sphairahedron.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/tetrahedron/limit.png'"></img>
        </figure>
      </div>
      <h3 class="title is-4">Pentahedral Pyramid</h3>
      <div class="columns">
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/pentahedralPyramid/prism.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/pentahedralPyramid/prismLimit.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/pentahedralPyramid/sphairahedron.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/pentahedralPyramid/limit.png'"></img>
        </figure>
      </div>
      <h3 class="title is-4">Pentahedral Prism</h3>
      <div class="columns">
        <figure class="column has-text-centered">
          <img v-lazy="'../img/variations/pentahedralPrism/flatPrism.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img v-lazy="'../img/variations/pentahedralPrism/flat.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img v-lazy="'../img/variations/pentahedralPrism/littleSpherePrism.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img v-lazy="'../img/variations/pentahedralPrism/littleSphere.png'"></img>
        </figure>
      </div>
      <div class="columns">
        <div class="columns column">
          <figure class="column has-text-centered">
            <img v-lazy="'../img/variations/pentahedralPrism/prismAnimation.gif'"></img>
          </figure>
        </div>
        <div class="columns column">
          <figure class="column has-text-centered">
            <img v-lazy="'../img/variations/pentahedralPrism/sphairahedronAnimation.gif'"></img>
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="columns column">
          <figure class="column has-text-centered">
            <img v-lazy="'../img/variations/pentahedralPrism/pentahedralPrismType1.gif'"></img>
          </figure>
        </div>
        <div class="columns column">
          <figure class="column has-text-centered">
            <img v-lazy="'../img/variations/pentahedralPrism/finitePentahedralPrismType1.gif'"></img>
          </figure>
        </div>
      </div>
      <h3 class="title is-4">Cube</h3>
      <div class="columns">
        <figure class="column has-text-centered">
          <img v-lazy="'../img/variations/cube/prism0864.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img v-lazy="'../img/variations/cube/limit0864.jpg'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img v-lazy="'../img/variations/cube/prism-0864.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img v-lazy="'../img/variations/cube/limit-0864.jpg'"></img>
        </figure>
      </div>
      <div class="columns">
        <div class="columns column">
          <figure class="column has-text-centered">
            <img v-lazy="'../img/variations/cube/cubeType1.gif'"></img>
          </figure>
        </div>
        <div class="columns column">
          <figure class="column has-text-centered">
            <img v-lazy="'../img/variations/cube/finiteCubeType1.gif'"></img>
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="columns column">
          <figure class="column has-text-centered">
            <img v-lazy="'../img/variations/cube/cubeType3.gif'"></img>
          </figure>
        </div>
        <div class="columns column">
          <figure class="column has-text-centered">
            <img v-lazy="'../img/variations/cube/cubeType5.gif'"></img>
          </figure>
        </div>
      </div>
      <h3 class="title is-4">Hexahedral Cake</h3>
      <div class="columns">
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/hexahedralCake/prism.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/hexahedralCake/limit0644.jpg'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/hexahedralCake/sphairahedron.png'"></img>
        </figure>
        <figure class="column has-text-centered">
          <img  v-lazy="'../img/variations/hexahedralCake/finiteLimit.png'"></img>
        </figure>
      </div>
      <div class="columns">
        <div class="columns column">
          <figure class="column has-text-centered">
            <img v-lazy="'../img/variations/hexahedralCake/hexahedralCakeType0.gif'"></img>
          </figure>
        </div>
        <div class="columns column">
          <figure class="column has-text-centered">
            <img  v-lazy="'../img/variations/hexahedralCake/finiteHexahedralCakeType0.gif'"></img>
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="columns column">
          <figure class="column has-text-centered">
            <img v-lazy="'../img/variations/hexahedralCake/cakeType1.gif'"></img>
          </figure>
        </div>
        <div class="columns column">
          <figure class="column has-text-centered">
            <img  v-lazy="'../img/variations/hexahedralCake/finiteCakeType1.gif'"></img>
          </figure>
        </div>
      </div>
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
