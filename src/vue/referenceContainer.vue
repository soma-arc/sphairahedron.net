<template>
  <sectionContainer>
    <div slot="title">Reference</div>
    <div slot="content">
      <ul>
        <li class="referenceList">
          Kazushi Ahara and Yoshiaki Araki.
          “Sphairahedral approach to parameterize visible three dimensional
          quasi-Fuchsian fractals.”
          Computer Graphics International Proceedings,
          Tokyo, Japan, July, 9–11,
          2003, pp. 226–229.
          <a href="http://ieeexplore.ieee.org/document/1214471/"
             target="_blank">
            http://ieeexplore.ieee.org/document/1214471/</a>.
        </li>
        <li class="referenceList">
          Kazushi Ahara. "球面体と3次元擬フックス群."
          数理解析研究所講究録, 1329巻, 2003年, pp. 109–114 (Japanese.)
          <a href="http://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/1329-14.pdf"
             target="_blank">
            http://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/1329-14.pdf</a>.
        </li>
        <li class="referenceList">
          Kazushi Ahara. "quasisphere" Ahara lab. Meiji University.
          <a href="https://www51.atwiki.jp/kazushiahara/pages/28.html"
             target="_blank">
            https://www51.atwiki.jp/kazushiahara/pages/28.html</a>.
        </li>
        <li class="referenceList">Kento Nakamura and Kazushi Ahara. “A Geometrical Representation and Visualization of Möbius
          Transformation Groups.” Bridges Conference Proceedings, Waterloo, Canada, July, 27–31, 2017,
          pp. 159–166.
          <a href="http://archive.bridgesmathart.org/2017/bridges2017-159.html"
             target="_blank">
            http://archive.bridgesmathart.org/2017/bridges2017-159.html</a>.
        </li>
        <li class="referenceList">Kento Nakamura and Kazushi Ahara.
          "Sphairahedra and Three-Dimensional Fractals." Bridges Conference Proceedings, Stockholm, Sweden, July, 25–29, 2018,
          pp. 171–178.
		  <a href="http://archive.bridgesmathart.org/2018/bridges2018-171.html" target="_blank">
            http://archive.bridgesmathart.org/2018/bridges2018-171.html</a>
        </li>
        <li class="referenceList">Kento Nakamura, Yoshiaki Araki, and Kazushi Ahara.
          “Polyhedron with Spherical Faces and Four-Dimensional Kleinian Groups.” 
          Preprint.
          <a href="https://github.com/soma-arc/ExperimentalMathematics/releases/tag/1.0" target="_blank">
            https://github.com/soma-arc/ExperimentalMathematics/releases/tag/1.0
          </a>
        </li>
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
