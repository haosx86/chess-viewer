<template>
  <div
    class="chess-board"
  >
    <ChessPiece
      v-for="piece in chessBoardFlat"
      :key="piece.initialSquare.rank + piece.initialSquare.file"
      :cellSize="cellSize"
      :pieceType="piece.piece"
      :square="piece.square"
      :color="piece.color"
    />
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, PropType, watchEffect } from 'vue'
import ChessPiece from './ChessPiece.vue'
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

export default {
  components: {
    ChessPiece,
  },
  props: {
    cellSize: {
      type: Number,
      required: true,
      validator: (value: number) => value > 0
    },
    moves: {
      type: Array as PropType<Array<Move>>,
      required: true
    }
  },
  setup(props) {
    const chessBoardState = reactive({ board: createEmptyChessBoard() })
    initChessBoard(<ChessBoard>chessBoardState.board)

    const chessBoardFlat = computed(
      () => Object.values(
        <ChessBoard>chessBoardState.board
      ).flat().filter(piece => piece !== null)
    )

    let movesDemoTimers: Array<any> = []

    watchEffect(() => {
      chessBoardState.board = createEmptyChessBoard()
      initChessBoard(<ChessBoard>chessBoardState.board)
      movesDemoTimers.forEach(handler => clearTimeout(handler))
      movesDemoTimers = []
      props.moves.forEach((move: Move, moveIdx) => {
        movesDemoTimers.push(setTimeout(() => {
          console.log(moveIdx, move)
          if(move.action === MoveAction.move) {
            movePiece(<ChessBoard>chessBoardState.board, move.from, move.to)
          } else if(move.action === MoveAction.capture) {
            capturePiece(<ChessBoard>chessBoardState.board, move.from, move.to)
          } else if(move.action === MoveAction.castlingQueenside) {
            // TODO
          } else if(move.action === MoveAction.castlingKingside) {
            if(moveIdx%2 === 0) {
              movePiece(
                <ChessBoard>chessBoardState.board,
                { rank: 'e', file: 1, },
                { rank: 'g', file: 1, }
              )
              movePiece(
                <ChessBoard>chessBoardState.board,
                { rank: 'h', file: 1, },
                { rank: 'f', file: 1, }
              )
            } else {
              movePiece(
                <ChessBoard>chessBoardState.board,
                { rank: 'e', file: 8, },
                { rank: 'g', file: 8, }
              )
              movePiece(
                <ChessBoard>chessBoardState.board,
                { rank: 'h', file: 8, },
                { rank: 'f', file: 8, }
              )
            }
          }
        }, 1500 *(moveIdx + 1)))
      })
    })
    
    return {
      chessBoardState,
      chessBoardFlat,
    }
  }
}
</script>

<style>
.chess-board {
  width: calc(var(--cellSize) * 8px);
  height: calc(var(--cellSize) * 8px);
  background-image:
    linear-gradient(45deg, #5A3E2A 25%, transparent 25%),
    linear-gradient(-45deg, #5A3E2A 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #5A3E2A 75%),
    linear-gradient(-45deg, transparent 75%, #5A3E2A 75%);
  background-size: calc(var(--cellSize) * 2px) calc(var(--cellSize) * 2px);
  background-position: 
    0 0,
    0 calc(var(--cellSize) * 1px),
    calc(var(--cellSize) * 1px) calc(var(--cellSize) * (-1px)),
    calc(var(--cellSize) * (-1px)) 0;
  background-color: #fff8dc;
}
</style>
