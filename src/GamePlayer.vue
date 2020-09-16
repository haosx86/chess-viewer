<template>
  <ChessPiece
    v-for="piece in chessBoardStateFlat"
    :key="piece.initialSquare.rank + piece.initialSquare.file"
    :cellSize="cellSize"
    :pieceType="piece.piece"
    :square="piece.square"
    :color="piece.color"
  />
</template>

<script lang="ts">
import { ref, PropType, watchEffect, defineComponent, computed } from 'vue'
import ChessPiece from './pieces/ChessPiece.vue'
import {
    Rank,
    File,
    BoardSquare,
    Piece,
    ChessBoard,
    BoardCol,
    Move, MoveAction
} from './chessRules'
import {
  createEmptyChessBoard,
  addPiece,
  capturePiece,
  initChessBoard,
  movePiece,
} from './chessBoardTools'

export default defineComponent({
  components: {
    ChessPiece,
  },
  props: {
    moves: {
      type: Array as PropType<Array<Move>>,
      required: true
    },
    cellSize: {
      type: Number,
      required: true,
      validator: (cellSize: number) => cellSize > 0 && Number.isInteger(cellSize),
    },
  },
  setup(props) {
    const chessBoardState = ref(createEmptyChessBoard())
    initChessBoard(<ChessBoard>chessBoardState.value)

    const getFlatChessBoardState = () => Object.values(
      <ChessBoard>chessBoardState.value
    ).flat().filter(piece => piece !== null)

    const chessBoardStateFlat = computed(
      () => Object.values(
        <ChessBoard>chessBoardState.value
      ).flat().filter(piece => piece !== null)
    )

    let movesDemoTimers: Array<any> = []

    watchEffect(() => {
      chessBoardState.value = createEmptyChessBoard()
      initChessBoard(<ChessBoard>chessBoardState.value)
      movesDemoTimers.forEach(handler => clearTimeout(handler))
      movesDemoTimers = []
      props.moves.forEach((move: Move, moveIdx) => {
        movesDemoTimers.push(setTimeout(() => {
          console.log(moveIdx, move)
          if(move.action === MoveAction.move) {
            movePiece(<ChessBoard>chessBoardState.value, move.from, move.to)
          } else if(move.action === MoveAction.capture) {
            capturePiece(<ChessBoard>chessBoardState.value, move.from, move.to)
          } else if(move.action === MoveAction.castlingQueenside) {
            // TODO
          } else if(move.action === MoveAction.castlingKingside) {
            if(moveIdx%2 === 0) {
              movePiece(
                <ChessBoard>chessBoardState.value,
                { rank: 'e', file: 1, },
                { rank: 'g', file: 1, }
              )
              movePiece(
                <ChessBoard>chessBoardState.value,
                { rank: 'h', file: 1, },
                { rank: 'f', file: 1, }
              )
            } else {
              movePiece(
                <ChessBoard>chessBoardState.value,
                { rank: 'e', file: 8, },
                { rank: 'g', file: 8, }
              )
              movePiece(
                <ChessBoard>chessBoardState.value,
                { rank: 'h', file: 8, },
                { rank: 'f', file: 8, }
              )
            }
          }
        }, 1500 *(moveIdx + 1)))
      })
    })
    return {
      chessBoardStateFlat,
    }
  }
})
</script>