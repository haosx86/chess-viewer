<template>
  <div
    class="chess-board-wrapper"
    :style="{
      width: `${cellSize * 8}px`,
      height: `${cellSize * 8}px`,
    }"
  >
    <ChessBoard :cellSize="cellSize" />
    <GamePlayer :moves="movesState" :cellSize="cellSize" />
  </div>
  <div class="controls">
    <input max="85" min="55" class="board-size" type="number" v-model="cellSizeText">
    <textarea
      class="notation-textarea"
      v-model="algNotation"
      rows="25"
      cols="25"
    />
    <button class="parse-button" @click="parseNotation">
      Execute
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import ChessBoard from './ChessBoard.vue'
import GamePlayer from './GamePlayer.vue'
import { tokenizator, normalizeNotation } from './chessNotationParser'
import { Move } from './chessRules'

export default defineComponent({
  components: {
    ChessBoard,
    GamePlayer,
  },
  setup() {
    let cellSize = ref(75)
    let algNotation = ref(
      '1.e2-e4 e7-e5\n' +
      '2.Кg1-f3 Кb8-c6\n' +
      '3.d2-d4 e5xd4\n' +
      '4.Сf1-c4 d7-d6\n' +
      '5.Кf3xd4 Сf8-e7\n' +
      '6.0-0 Кg8-f6\n' +
      '7.Кb1-c3 0-0\n' +
      '8.h2-h3 Кc6xd4\n' +
      '9.Фd1xd4 Кf6-d7\n' +
      '10.Кc3-d5 Сe7-f6\n' +
      '11.Кd5xf6+ Фd8xf6\n' +
      '12.Сc1-e3 Лf8-e8\n' +
      '13.f2-f3 Фf6-g6\n' +
      '14.Крg1-h1 Кd7-f6\n' +
      '15.g2-g4 h7-h5\n' +
      '16.Сc4-d3 h5xg4\n' +
      '17.h3xg4 Сc8xg4\n' +
      '18.f3xg4 Кf6xg4\n' +
      '19.Сe3-f4 Лe8-e6\n' +
      '20.Лf1-f3 Лa8-e8\n' +
      '21.Лf3-h3 c7-c5\n' +
      '22.Фd4-g1 c5-c4\n' +
      '23.Лh3-h4 c4xd3\n' +
      '24.c2xd3 Кg4-h6\n' +
      '25.Сf4xh6 Фg6xh6\n' +
      '26.Фg1-h2 Фh6xh4\n' +
      '27.Фh2xh4 Лe6-h6\n' +
      '28.Фh4xh6 g7xh6\n' +
      '29.Лa1-c1 Лe8-e5\n' +
      '30.Лc1-c7 Лe5-b5\n' +
      '31.b2-b3 Лb5-a5\n' +
      '32.Лc7xb7 Лa5xa2\n' +
      '33.Лb7-d7 Лa2-a6\n' +
      '34.Крh1-g2 Крg8-g7\n' +
      '35.Крg2-f3 Крg7-f6\n' +
      '36.Крf3-e3 Крf6-e6\n' +
      '37.Лd7-c7 f7-f5\n' +
      '38.Лc7-h7 f5xe4\n' +
      '39.Крe3xe4 Лa6-b6\n' +
      '40.Лh7xh6+ Крe6-d7\n' +
      '41.Крe4-d5 Лb6-b5+\n' +
      '42.Крd5-c4 Лb5-c5+\n' +
      '43.Крc4-d4 Лc5-b5\n' +
      '44.Лh6-h7+ Крd7-c6\n' +
      '45.Лh7xa7 Лb5xb3\n' +
      '46.Крd4-c4 Лb3-b1\n' +
      '47.Лa7-a6+ Крc6-d7\n' +
      '48.d3-d4 Крd7-e6\n' +
      '49.Лa6-a3'
    )
    let cellSizeText = computed({
      set(value: any) {
        cellSize.value = parseInt(value)
      },
      get: () => cellSize.value
    })
    const movesState = ref<Array<Move>>([])

    const parseNotation = () => {
      movesState.value = tokenizator(
        normalizeNotation(algNotation.value)
      )
    }

    return {
      cellSizeText,
      cellSize,
      algNotation,
      parseNotation,
      movesState,
    }
  }
})
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.notation-textarea {
  width: 200px;
  height: 600px;
  margin: 0 100px;
}

.parse-button {
  height: 40px;
  width: 200px;
  margin: 0 auto;
  margin: 24px 100px 0 100px;
}

.board-size {
  width: 200px;
  margin: 0 100px 24px 100px;
}

.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}

.chess-board-wrapper {
  position: relative;
  width: 10px;
}
</style>
