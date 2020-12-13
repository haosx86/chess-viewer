<template>
  <svg
    class="chess-board"
    :viewport="`0 0 ${cellSize * 8} ${cellSize * 8}`"
    :style="{
      width: `${cellSize * 8}px`,
      height: `${cellSize * 8}px`,
    }"
  >
    <polygon
      v-for="(_, idx) in Array(32).fill(0)"
      :key="idx"
      :points="`
        ${
          cellSize * (((idx%4) * 2 ) + 1 - Math.floor(idx/4)%2)
        },${
          Math.floor(idx/4) * cellSize
        }
        ${
          cellSize * (((idx%4) * 2 ) + 2 - Math.floor(idx/4)%2)
        },${ Math.floor(idx/4) * cellSize }
        ${
          cellSize * (((idx%4) * 2 ) + 2 - Math.floor(idx/4)%2)
        },${
          (Math.floor(idx/4) + 1) * cellSize
        },
        ${
          cellSize * (((idx%4) * 2 ) + 1 - Math.floor(idx/4)%2)
        },${
          (Math.floor(idx/4) + 1) * cellSize
        }
      `"
      style="fill:#5A3E2A;"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    cellSize: {
      type: Number,
      required: true,
      validator: (cellSize: number) => cellSize > 0 && Number.isInteger(cellSize),
    },
  },
})
</script>

<style>
.chess-board {
  background-color: #fff8dc;
  position: absolute;
  left: 0;
  top: 0;
}
</style>