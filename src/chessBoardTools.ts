import {
    BoardSquare,
    Piece,
    ChessBoard,
    BoardCol,
    PieceDescription,
    PieceColor,
    Rank
} from './chessRules'

const createEmptyCol = () => <BoardCol>(<unknown>new Array(8).fill(null))

declare global {
  interface ObjectConstructor {
    fromEntries(xs: [string|number|symbol, any][]): object
  }

  interface Array<T> {
    flat(): Array<T>;
    flatMap(func: (x: T) => T): Array<T>;
  }
}

export const createEmptyChessBoard = () => {
  const rowsArr = Array(8).fill('a').map(
    (char: string, idx: number) => String.fromCharCode(char.charCodeAt(0) + idx)
  ).map(
    (char: string) => ([char, createEmptyCol()])
  )

  return <ChessBoard>Object.fromEntries(rowsArr)
}

export const initChessBoard = (board: ChessBoard) => {
  const figureSet:Array<PieceDescription>  = []
  // Add pawns
  Array(8).fill(2).forEach(
    (file, idx) => {
      figureSet.push({
        piece: Piece.Pawn,
        square: {
          rank: <Rank>String.fromCharCode('a'.charCodeAt(0) + idx),
          file
        },
        color: 'white',
      })
    }
  )
  Array(8).fill(7).forEach(
    (file, idx) => {
      figureSet.push({
        piece: Piece.Pawn,
        square: {
          rank: <Rank>String.fromCharCode('a'.charCodeAt(0) + idx),
          file
        },
        color: 'black',
      })
    }
  )
  figureSet.forEach(pieceDesc => {
    addPiece(board, pieceDesc.piece, pieceDesc.square, pieceDesc.color)
  })
  // Add kings
  addPiece(board, Piece.King, { rank: 'e', file: 8 }, 'black')
  addPiece(board, Piece.King, { rank: 'e', file: 1 }, 'white')
  // Add Queens
  addPiece(board, Piece.Queen, { rank: 'd', file: 8 }, 'black')
  addPiece(board, Piece.Queen, { rank: 'd', file: 1 }, 'white')
  // Add Bishops
  addPiece(board, Piece.Bishop, { rank: 'c', file: 1 }, 'white')
  addPiece(board, Piece.Bishop, { rank: 'f', file: 1 }, 'white')
  addPiece(board, Piece.Bishop, { rank: 'c', file: 8 }, 'black')
  addPiece(board, Piece.Bishop, { rank: 'f', file: 8 }, 'black')
  // Add Knights
  addPiece(board, Piece.Knight, { rank: 'b', file: 1 }, 'white')
  addPiece(board, Piece.Knight, { rank: 'g', file: 1 }, 'white')
  addPiece(board, Piece.Knight, { rank: 'b', file: 8 }, 'black')
  addPiece(board, Piece.Knight, { rank: 'g', file: 8 }, 'black')
  // Add Rooks
  addPiece(board, Piece.Rook, { rank: 'a', file: 1 }, 'white')
  addPiece(board, Piece.Rook, { rank: 'h', file: 1 }, 'white')
  addPiece(board, Piece.Rook, { rank: 'a', file: 8 }, 'black')
  addPiece(board, Piece.Rook, { rank: 'h', file: 8 }, 'black')
}

export const addPiece = (
  board: ChessBoard,
  piece: Piece,
  square: BoardSquare,
  color: PieceColor
) => {
  board[square.rank][square.file - 1] = { piece, square, color, initialSquare: square }
}

export const movePiece = (board: ChessBoard, from: BoardSquare, to: BoardSquare) => {
  if(board[to.rank][to.file - 1] !== null) {
    throw new Error(`Move destination is not empty: ${to.rank}${to.file}`)
  } else if(board[from.rank][from.file - 1] === null) {
    throw new Error(`Move start sqare is empty: ${from.rank}${from.file}`)
  }
  board[from.rank][from.file - 1]!.square = to
  board[to.rank][to.file - 1] = board[from.rank][from.file - 1]
  board[from.rank][from.file - 1] = null
}

export const capturePiece = (board: ChessBoard, from: BoardSquare, to: BoardSquare) => {
  if(board[to.rank][to.file - 1] === null) {
    throw new Error(`Capture destination square is empty: ${to.rank}${to.file}`)
  } else if(board[from.rank][from.file - 1] === null) {
    throw new Error(`Capture start square is empty: ${from.rank}${from.file}`)
  }
  board[from.rank][from.file - 1]!.square = to
  board[to.rank][to.file - 1] = board[from.rank][from.file - 1]
  board[from.rank][from.file - 1] = null
}

export const removePiece = (board: ChessBoard, from: BoardSquare) => {
  board[from.rank][from.file - 1] = null
}

// TODO: implement chess rules check
export const checkPieceMove = {
  [Piece.King]: (board: ChessBoard, from: BoardSquare, to: BoardSquare) => {},
  [Piece.Queen]: (board: ChessBoard, from: BoardSquare, to: BoardSquare) => {},
  [Piece.Rook]: (board: ChessBoard, from: BoardSquare, to: BoardSquare) => {},
  [Piece.Bishop]: (board: ChessBoard, from: BoardSquare, to: BoardSquare) => {},
  [Piece.Knight]: (board: ChessBoard, from: BoardSquare, to: BoardSquare) => {},
  [Piece.Pawn]: (board: ChessBoard, from: BoardSquare, to: BoardSquare) => {},
}