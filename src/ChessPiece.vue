<template>
  <!-- <component
    v-if="pieces[`${pieceType}-${color}`]"
    :is="pieces[`${pieceType}-${color}`]"
    :style="{
      transform: figureTransform
    }"
    :class="{
      'chess-piece_animated': isPieceAnimated
    }"
  /> -->
  <!-- {{pieces[`${pieceType}-${color}`]}} -->
  DUMMY
</template>

<script lang="ts">
import { computed, ref, watch, defineComponent, PropType } from 'vue'
import { PieceColor } from './chessRules'
import { BoardSquare, Piece } from './chessRules'
import pieces from './pieces'

export default defineComponent({
  props: {
    pieceType: {
      type: String as PropType<Piece>,
      required: true,
        validator: (value: string) => {
          return [
            'king',
            'queen',
            'rook',
            'bishop',
            'knight',
            'pawn'
          ].includes(value)
        },
    },
    cellSize: {
      type: Number,
      required: true,
      validator: (value: number) => value > 0
    },
    square: {
      type: Object as PropType<BoardSquare>,
      required: true,
      // validator: (square: BoardSquare) => {
      //   const isRankCorrect = [
      //     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
      //   ].includes(square.rank)
      //   const isFileCorrect = square.file >= 1 
      //     && square.file <=8
      //     && Number.isInteger(square.file)
      //   return isRankCorrect && isFileCorrect
      // }
    },
    color: {
      type: String as PropType<PieceColor>,
      required: true,
      // validator(value: PieceColor) {
      //   return [
      //     'black',
      //     'white',
      //   ].includes(value)
      // }
    },
  },
  setup(props) {

    const squareCoords = (square: BoardSquare) => ({
      x: square.rank.charCodeAt(0) - 'a'.charCodeAt(0),
      y: square.file - 1,
    })

    let figureTransform = computed(
      () => `translate3d(
        ${squareCoords(props.square).x * props.cellSize + (props.cellSize - 45) / 2}px,
        ${(7 - squareCoords(props.square).y) * props.cellSize + (props.cellSize - 45) / 2}px,
        0
      ) scale3d(
        ${props.cellSize / 45},
        ${props.cellSize / 45},
        1
      )`
    )

    let isPieceAnimated = ref(true)

    watch(() => props.cellSize, () => {
      isPieceAnimated.value = false
      setTimeout(() => {
        isPieceAnimated.value = true
      }, 36);
    })

    return {
      figureTransform,
      isPieceAnimated,
    }
  }
})
</script>

<style>
.chess-piece {
  width: 45px;
  height: 45px;
  position: absolute;
  will-change: transform;
}

.chess-piece_animated {
  transition: transform ease 1s;
}
</style>