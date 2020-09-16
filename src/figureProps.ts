import { PropType } from 'vue'
import { PieceColor } from './chessRules'

export default {
  color: {
    type: String as PropType<PieceColor>,
    required: true,
    validator(value: PieceColor) {
      return [
        'black',
        'white',
      ].includes(value)
    }
  },
}