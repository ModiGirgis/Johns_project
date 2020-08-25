import Board from '../ui/Board'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  board: state.board
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
