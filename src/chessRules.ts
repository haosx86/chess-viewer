import { FixedSizeArray } from './fixedSizeArray'

export enum Piece {
  King = 'king',
  Queen = 'queen',
  Rook = 'rook',
  Bishop = 'bishop',
  Knight = 'knight',
  Pawn = 'pawn',
  NA = 'NA',
}

export enum MoveAction {
  move = '-',
  capture = 'x',
  propmotionToQueen = '=Q',
  propmotionToKnight = '=K',
  propmotionToRook = '=R',
  propmotionToBishop = '=B',
  castlingKingside = '0-0',
  castlingQueenside = '0-0-0',
}

export type Rank = 'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'

export type File = 1|2|3|4|5|6|7|8

export interface BoardSquare {
  rank: Rank,
  file: File,
}

export interface Move {
  piece: Piece,
  action: MoveAction,
  from: BoardSquare,
  to: BoardSquare,
}

export type PieceColor = 'black'|'white';

export interface PieceDescription {
  piece: Piece,
  square: BoardSquare,
  color: PieceColor,
  initialSquare?: BoardSquare
}

export type EmptySquare = null

export type PieceSetItem = PieceDescription | EmptySquare

export type BoardCol = FixedSizeArray<8, PieceSetItem>

export interface ChessBoard {
  a: BoardCol,
  b: BoardCol,
  c: BoardCol,
  d: BoardCol,
  e: BoardCol,
  f: BoardCol,
  g: BoardCol,
  h: BoardCol,
}
