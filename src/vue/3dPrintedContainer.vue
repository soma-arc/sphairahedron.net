<template>
<sectionContainer>
  <div slot="title">Three-dimensional Printed Fractals</div>
  <div slot="content">
    <p class="no-indent">
      In this section, we show 3D printed fractals.
      You can download models at Sketchfab
      (<a href="https://sketchfab.com/soma_arc"target="_blank">https://sketchfab.com/soma_arc</a>.)
      In the first author's blog post, we show how to prepare the data for 3D printing
      (<a href="https://soma.hatenablog.jp/entry/2017/12/24/003321" target="_blank">https://soma.hatenablog.jp/entry/2017/12/24/003321</a>.)
      There are two types of printing materials.
      They are Monochrome printing and full-colored printing.

    </p><br>
    <h3 class="title is-4">Monochrome printing by Makerbot Replicater Z18 with PLA resin.</h3>
    <div class="columns">
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/mono/1.JPG'"></img>
      </figure>
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/mono/2.JPG'"></img>
      </figure>
    </div>
    <div class="columns">
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/mono/3.JPG'"></img>
      </figure>
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/mono/4.JPG'"></img>
      </figure>
    </div>
    <div class="columns">
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/mono/5.JPG'"></img>
      </figure>
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/mono/6.JPG'"></img>
      </figure>
    </div>
    <div class="columns">
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/mono/7.JPG'"></img>
      </figure>
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/mono/8.JPG'"></img>
      </figure>
    </div>
    <h3 class="title is-4">Full-colored printing by DMM.make 3D print.</h3>
    <div class="columns">
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/color/1.JPG'"></img>
      </figure>
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/color/2.JPG'"></img>
      </figure>
    </div>
    <div class="columns">
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/color/3.JPG'"></img>
      </figure>
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/color/4.JPG'"></img>
      </figure>
    </div>
    <div class="columns">
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/color/5.JPG'"></img>
      </figure>
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/color/6.JPG'"></img>
      </figure>
    </div>
    <div class="columns">
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/color/7.JPG'"></img>
      </figure>
      <figure class="column has-text-centered">
        <img  v-lazy="'../img/3dPrinted/color/8.JPG'"></img>
      </figure>
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
