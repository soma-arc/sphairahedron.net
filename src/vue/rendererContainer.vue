<template>
  <sectionContainer>
    <div slot="title">Fractal Renderer</div>
    <div slot="content">
      <div class="has-text-centered">
        <figure id="rendererImg">
          <img v-lazy="'../img/renderer.png'"></img>
        </figure>
      </div>
      <p class="no-indent">
        The first author is developing a web application to visualize sphairahedra and
        their fractals interactively.
        It is available at
        <a href="https://github.com/soma-arc/SphairahedronExperiment">
          https://github.com/soma-arc/SphairahedronExperiment</a>.
        The renderer requires WebGL 2.0 features. Also, according to the
        rendering parameters, it may require high GPU power, thus please run it at your
        own risk.
      </p>
      <p>
        Generally, in order to visualize these fractals with a computer,
        we have to compute an infinite number of sphairahedra.
        It often takes too much time.
        However, there are algorithms to render three-dimensional fractals efficiently.
        We use <i>sphere tracing</i> and <i>Iterated Inversion System (IIS)</i>.
        Sphere tracing is a kind of ray tracing techniques.
        It is frequently used to render three-dimensional fractals.
        For more details, read the <a href="http://blog.hvidtfeldts.net/index.php/2011/06/distance-estimated-3d-fractals-part-i/">blog post</a> by Mikael H Christensen.
        IIS is an algorithm introduced in our previous works [2].
      </p>
    </div>
  </sectionContainer>
</template>

<script>
import SectionContainer from'./sectionContainer.vue';

export default {
    components: {
        SectionContainer
    }
}
</script>

<style>
#rendererImg {
    padding-left: 10rem;
    padding-right: 10rem;
}
</style>
