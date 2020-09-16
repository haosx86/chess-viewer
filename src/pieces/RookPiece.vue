<template>
  <svg
    viewbox="0 0 45 45"
    class="chess-piece"
  >
    <g
      v-if="color === 'black'"
      class="rook-piece-black-g"
    >
      <path
        class="rook-piece-black-path1"
        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
      />
      <path
        class="rook-piece-black-path2"
        d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
      />
      <path
        class="rook-piece-black-path3"
        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z"
      />
      <path
        class="rook-piece-black-path4"
        d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
      />
      <path
        class="rook-piece-black-path5"
        d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
      />
      <path
        class="rook-piece-black-path6"
        d="
          M 11,
          14 L 11,
          9 L 15,
          9 L 15,
          11 L 20,
          11 L 20,
          9 L 25,
          9 L 25,
          11 L 30,
          11 L 30,
          9 L 34,
          9 L 34,
          14 L 11,
          14 z
        "
      />
      <path
        class="rook-piece-black-path7"
        d="M 12,35.5 L 33,35.5 L 33,35.5"
      />
      <path
        class="rook-piece-black-path8"
        d="M 13,31.5 L 32,31.5"
      />
      <path
        class="rook-piece-black-path9"
        d="M 14,29.5 L 31,29.5"
      />
      <path
        class="rook-piece-black-path10"
        d="M 14,16.5 L 31,16.5"
      />
      <path
        class="rook-piece-black-path11"
        d="M 11,14 L 34,14"
      />
    </g>

    <g
      v-if="color === 'white'"
      class="rook-piece-white-g"
    >
      <path
        class="rook-piece-white-path1"
        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
      />
      <path
        class="rook-piece-white-path2"
        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
      />
      <path
        class="rook-piece-white-path3"
        d="
          M 11,
          14 L 11,
          9 L 15,
          9 L 15,
          11 L 20,
          11 L 20,
          9 L 25,
          9 L 25,
          11 L 30,
          11 L 30,
          9 L 34,
          9 L 34,
          14
        "
      />
      <path
        class="rook-piece-white-path4"
        d="M 34,14 L 31,17 L 14,17 L 11,14"
      />
      <path
        class="rook-piece-white-path5"
        d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
      />
      <path
        class="rook-piece-white-path6"
        d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"
      />
      <path
        class="rook-piece-white-path7"
        d="M 11,14 L 34,14"
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
.rook-piece-black-g {
  opacity: 1;
  fill: #000000;
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

.rook-piece-black-path1,
.rook-piece-black-path2,
.rook-piece-black-path3,
.rook-piece-black-path5,
.rook-piece-black-path6,
.rook-piece-white-path1,
.rook-piece-white-path2,
.rook-piece-white-path3 {
  stroke-linecap: butt;
}

.rook-piece-black-path4,
.rook-piece-white-path5 {
  stroke-linecap: butt;
  stroke-linejoin: miter;
}

.rook-piece-black-path7,
.rook-piece-black-path8,
.rook-piece-black-path9,
.rook-piece-black-path10,
.rook-piece-black-path11 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 1;
  stroke-linejoin: miter;
}

.rook-piece-white-g {
  opacity: 1;
  fill: #ffffff;
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

.rook-piece-white-path7 {
  fill: none;
  stroke: #000000;
  stroke-linejoin: miter;
}
</style>