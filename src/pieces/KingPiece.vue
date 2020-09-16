<template>
  <svg viewbox="0 0 45 45" class="chess-piece">
    <g
      v-if="color === 'black'"
      class="king-piece-black-g"
    >
      <path
        d="M 22.5,11.63 L 22.5,6"
        class="king-piece-black-path1"
      />
      <path
        d="
          M 22.5,
          25 C 22.5,
          25 27,
          17.5 25.5,
          14.5 C 25.5,
          14.5 24.5,
          12 22.5,
          12 C 20.5,
          12 19.5,
          14.5 19.5,
          14.5 C 18,
          17.5 22.5,
          25 22.5,
          25
        "
        class="king-piece-black-path2"
      />
      <path
        d="
          M 11.5,
          37 C 17,
          40.5 27,
          40.5 32.5,
          37 L 32.5,
          30 C 32.5,
          30 41.5,
          25.5 38.5,
          19.5 C 34.5,
          13 25,
          16 22.5,
          23.5 L 22.5,
          27 L 22.5,
          23.5 C 19,
          16 9.5,
          13 6.5,
          19.5 C 3.5,
          25.5 11.5,
          29.5 11.5,
          29.5 L 11.5,
          37 z
        "
        class="king-piece-black-path3"
      />
      <path
        d="M 20,8 L 25,8"
        class="king-piece-black-path4"
      />
      <path
        d="
          M 32,
          29.5 C 32,
          29.5 40.5,
          25.5 38.03,
          19.85 C 34.15,
          14 25,
          18 22.5,
          24.5 L 22.51,
          26.6 L 22.5,
          24.5 C 20,
          18 9.906,
          14 6.997,
          19.85 C 4.5,
          25.5 11.85,
          28.85 11.85,
          28.85
        "
        class="king-piece-black-path5"
      />
      <path
        d="
          M 11.5,
          30 C 17,
          27 27,
          27 32.5,
          30 M 11.5,
          33.5 C 17,
          30.5 27,
          30.5 32.5,
          33.5 M 11.5,
          37 C 17,
          34 27,
          34 32.5,
          37
        "
        class="king-piece-black-path6"
      />
    </g>

    <g
      v-if="color === 'white'"
      class="king-piece-white-g"
    >
      <path
        class="king-piece-white-path1"
        d="M 22.5,11.63 L 22.5,6"
      />
      <path
        class="king-piece-white-path2"
        d="M 20,8 L 25,8"
      />
      <path
        class="king-piece-white-path3"
        d="
          M 22.5,
          25 C 22.5,
          25 27,
          17.5 25.5,
          14.5 C 25.5,
          14.5 24.5,
          12 22.5,
          12 C 20.5,
          12 19.5,
          14.5 19.5,
          14.5 C 18,
          17.5 22.5,
          25 22.5,
          25
        "
      />
      <path
        class="king-piece-white-path4"
        d="
          M 11.5,
          37 C 17,
          40.5 27,
          40.5 32.5,
          37 L 32.5,
          30 C 32.5,
          30 41.5,
          25.5 38.5,
          19.5 C 34.5,
          13 25,
          16 22.5,
          23.5 L 22.5,
          27 L 22.5,
          23.5 C 19,
          16 9.5,
          13 6.5,
          19.5 C 3.5,
          25.5 11.5,
          29.5 11.5,
          29.5 L 11.5,
          37 z
        "
      />
      <path
        class="king-piece-white-path5"
        d="M 11.5,30 C 17,27 27,27 32.5,30"
      />
      <path
        class="king-piece-white-path6"
        d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"
      />
      <path
        class="king-piece-white-path7"
        d="M 11.5,37 C 17,34 27,34 32.5,37"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import figureProps from '../figureProps'

export default defineComponent({
  props: figureProps
})
</script>

<style>
.king-piece-black-g {
  fill: none;
  fill-opacity: 1;
  fill-rule: evenodd;
  stroke: #000000;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-opacity: 1;
}

.king-piece-black-path1,
.king-piece-white-path1,
.king-piece-white-path2 {
  fill: none;
  stroke: #000000;
  stroke-linejoin: miter;
}

.king-piece-black-path2 {
  fill: #000000;
  fill-opacity: 1;
  stroke-linecap: butt;
  stroke-linejoin: miter;
}

.king-piece-black-path3 {
  fill:#000000;
  stroke:#000000;
}

.king-piece-black-path4 {
  fill:none;
  stroke:#000000;
  stroke-linejoin:miter;
}

.king-piece-black-path5,
.king-piece-black-path6 {
  fill:none;
  stroke:#ffffff;
}

.king-piece-white-g {
  fill: none;
  fill-opacity: 1;
  fill-rule: evenodd;
  stroke: #000000;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-opacity: 1;
}

.king-piece-white-path3 {
  fill: #ffffff;
  stroke: #000000;
  stroke-linecap: butt;
  stroke-linejoin: miter;
}

.king-piece-white-path4 {
  fill: #ffffff;
  stroke: #000000;
}

.king-piece-white-path5,
.king-piece-white-path6,
.king-piece-white-path7 {
  fill: none;
  stroke: #000000;
}
</style>