<template>
  <svg viewbox="0 0 45 45" class="chess-piece">
    <g
      v-if="color === 'black'"
      class="queen-piece-black-g1"
    >
      <g class="queen-piece-black-g2">
        <circle cx="6" cy="12" r="2.75"/>
        <circle cx="14" cy="9" r="2.75"/>
        <circle cx="22.5" cy="8" r="2.75"/>
        <circle cx="31" cy="9" r="2.75"/>
        <circle cx="39" cy="12" r="2.75"/>
      </g>
      <path
        class="queen-piece-black-path1"
        d="
          M 9
          26 C 17.5,
          24.5 30,
          24.5 36,
          26 L 38.5,
          13.5 L 31,
          25 L 30.7,
          10.9 L 25.5,
          24.5 L 22.5,
          10 L 19.5,
          24.5 L 14.3,
          10.9 L 14,
          25 L 6.5,
          13.5 L 9,
          26 z
        "
      />
      <path
        class="queen-piece-black-path2"
        d="
          M 9,
          26 C 9,
          28 10.5,
          28 11.5,
          30 C 12.5,
          31.5 12.5,
          31 12,
          33.5 C 10.5,
          34.5 10.5,
          36 10.5,
          36 C 9,
          37.5 11,
          38.5 11,
          38.5 C 17.5,
          39.5 27.5,
          39.5 34,
          38.5 C 34,
          38.5 35.5,
          37.5 34,
          36 C 34,
          36 34.5,
          34.5 33,
          33.5 C 32.5,
          31 32.5,
          31.5 33.5,
          30 C 34.5,
          28 36,
          28 36,
          26 C 27.5,
          24.5 17.5,
          24.5 9,
          26 z
        "
      />
      <path
        class="queen-piece-black-path3"
        d="M 11,38.5 A 35,35 1 0 0 34,38.5"
      />
      <path
        class="queen-piece-black-path4"
        d="M 11,29 A 35,35 1 0 1 34,29"
      />
      <path
        class="queen-piece-black-path5"
        d="M 12.5,31.5 L 32.5,31.5"
      />
      <path
        class="queen-piece-black-path6"
        d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
      />
      <path
        class="queen-piece-black-path7"
        d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
      />
    </g>

    <g
      v-if="color === 'white'"
      class="queen-piece-white-g"
    >
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(-1,-1)"
      />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(15.5,-5.5)"
      />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(32,-1)"
      />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(7,-4.5)"
      />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(24,-4)"
      />
      <path
        class="queen-piece-white-path1"
        d="
          M 9,
          26 C 17.5,
          24.5 30,
          24.5 36,
          26 L 38,
          14 L 31,
          25 L 31,
          11 L 25.5,
          24.5 L 22.5,
          9.5 L 19.5,
          24.5 L 14,
          10.5 L 14,
          25 L 7,
          14 L 9,
          26 z
        "
      />
      <path
        class="queen-piece-white-path2"
        d="
          M 9,
          26 C 9,
          28 10.5,
          28 11.5,
          30 C 12.5,
          31.5 12.5,
          31 12,
          33.5 C 10.5,
          34.5 10.5,
          36 10.5,
          36 C 9,
          37.5 11,
          38.5 11,
          38.5 C 17.5,
          39.5 27.5,
          39.5 34,
          38.5 C 34,
          38.5 35.5,
          37.5 34,
          36 C 34,
          36 34.5,
          34.5 33,
          33.5 C 32.5,
          31 32.5,
          31.5 33.5,
          30 C 34.5,
          28 36,
          28 36,
          26 C 27.5,
          24.5 17.5,
          24.5 9,
          26 z
        "
      />
      <path
        class="queen-piece-white-path3"
        d="M 11.5,30 C 15,29 30,29 33.5,30"
      />
      <path
        class="queen-piece-white-path4"
        d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import figureProps from './particials/figureProps'

export default defineComponent({
  props: figureProps
})
</script>

<style>
.queen-piece-g1 {
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

.queen-piece-g2,
.queen-piece-path1 {
  fill: #000000;
  stroke: none;
}

.queen-piece-path2,
.queen-piece-path3 {
  stroke-linecap:butt; 
}

.queen-piece-path3 {
  fill: none;
  stroke: #000000;
}

.queen-piece-path4,
.queen-piece-path5,
.queen-piece-path6,
.queen-piece-path7 {
  fill:none;
  stroke:#ffffff;
}

.queen-piece-white-g {
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

.queen-piece-white-path1,
.queen-piece-white-path2 {
  stroke-linecap: butt;
}

.queen-piece-white-path3,
.queen-piece-white-path4 {
  fill: none;
}
</style>