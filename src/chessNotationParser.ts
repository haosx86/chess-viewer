import { Rank, File, MoveAction, Piece, Move } from './chessRules'

const isLowerCased = (str: string) => str === str.toLowerCase()
const piecesCodes = {
  'K': Piece.King,
  'Q': Piece.Queen,
  'R': Piece.Rook,
  'N': Piece.Knight,
  'B': Piece.Bishop,
  'p': Piece.Pawn,
}

const actionCodes = {
  'x': MoveAction.capture,
  '-': MoveAction.move,
}

const isPieceCode = (code: string) => Object.keys(piecesCodes).includes(code)
const isRank = (rank: string) => {
  return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].includes(rank)
}
const isFile = (file: string) => {
  const fileNum = parseInt(file)
  return !isNaN(fileNum) && fileNum >= 1 && fileNum <= 8
}

export const tokenizator = (source: Array<string>) => {
  const moves: Array<Move> = []
  source.forEach(moveSource => {
    if(moveSource === '0-0') {
      moves.push({
        piece: Piece.NA,
        action: MoveAction.castlingKingside,
        from: { rank: 'a', file: 1 },
        to: { rank: 'a', file: 1 },
      })
    } else if(moveSource === '0-0-0') {
      moves.push({
        piece: Piece.NA,
        action: MoveAction.castlingQueenside,
        from: { rank: 'a', file: 1 },
        to: { rank: 'a', file: 1 },
      })
    } else if(/[KQRNBp][a-h][1-8][-x][a-h][1-8]/g.test(moveSource)) {
      const moveParts = /([KQRNBp])([a-h])([1-8])([-x])([a-h])([1-8])/g.exec(moveSource)
      if(moveParts !== null) {
        moves.push({
          piece: piecesCodes[moveParts[1]],
          action: actionCodes[moveParts[4]],
          from: {
            rank: <Rank>moveParts[2],
            file: <File>parseInt(moveParts[3]),
          },
          to: {
            rank: <Rank>moveParts[5],
            file: <File>parseInt(moveParts[6]),
          },
        })
      } else {
        console.error(`Regex returned null: ${moveSource}`)
      }
    } else if(/[a-h][18][=\\][QRNB]/g.test(moveSource)) {
      const moveParts = /([a-h])([18])([=][QRNB])/g.exec(moveSource)
      if(moveParts !== null) {
        let fromFile: File = 2
        if(parseInt(moveParts[2]) === 8) {
          fromFile = 7
        }
        moves.push({
          piece: piecesCodes[moveParts[1]],
          action: MoveAction[moveParts[3]],
          from: {
            rank: <Rank>moveParts[1],
            file: fromFile,
          },
          to: {
            rank: <Rank>moveParts[1],
            file: <File>parseInt(moveParts[2]),
          },
        })
      } else {
        console.error(`Regex returned null: ${moveSource}`)
      }
    } else {
      console.error(`Unexpected move: ${moveSource}`)
    }
  })

  return moves;
}

export const normalizeNotation = (source: string) => {
  console.log('Normalize notation:', source)
  let i18nSource = source
    .replace(/Кр/g, 'K')
    .replace(/Ф/g, 'Q')
    .replace(/Л/g, 'R')
    .replace(/К/g, 'N')
    .replace(/С/g, 'B')
    .replace(/п/g, 'p')
    .replace(/—/g, '-')
    .replace(/O-O/g, '0-0')
    .replace(/O-O-O/g, '0-0-0')
    .replace(/:/g, 'x')
    .replace(/×/g, 'x')
    .replace(/\(Q\)/g, '=Q')
    .replace(/\(N\)/g, '=N')
    .replace(/\(R\)/g, '=R')
    .replace(/\(B\)/g, '=B')
    .replace(/\/Q/, '=Q')
    .replace(/\/N/, '=N')
    .replace(/\/R/, '=R')
    .replace(/\/B/, '=B')
    .replace(/[+!?#]/g, '')
    .replace(/[\d]+\./g, '')
    .replace(/\r\n/g, ' ')
    .replace(/[\n\r]/g, ' ')
    .replace(/\ \ /g, ' ')

  let moves = i18nSource.split(' ').map(move => {
    let result = move
    if(/^[a-h]/.test(move)) {
      result = 'p' + result
    }
    return result
  })

  return moves
}