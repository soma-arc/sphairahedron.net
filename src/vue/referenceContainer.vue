<template>
  <sectionContainer>
    <div slot="title">Reference</div>
    <div slot="content">
      <ul>
        <li class="referenceList">Kazushi Ahara and Yoshiaki Araki. “Sphairahedral approach to parameterize visible three dimensional
          quasi-Fuchsian fractals.” Computer Graphics International Proceedings, Tokyo, Japan, July, 9–11,
          2003, pp. 226–229.</li>
        <li class="referenceList">Kento Nakamura and Kazushi Ahara. “A Geometrical Representation and Visualization of Möbius
          Transformation Groups.” Bridges Conference Proceedings, Waterloo, Canada, July, 27–31, 2017,
          pp. 159–166. http://archive.bridgesmathart.org/2017/bridges2017-159.html.</li>
      </ul>
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
.referenceList {
    list-style: decimal;
    list-style-position: outside;
}

ul {
    padding-left: 16px;
}
</style>
