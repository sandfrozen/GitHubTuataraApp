import {connect} from 'react-redux'
import {setRepos} from '../Redux/Actions/RepoActions'
import ListScreen from '../Components/ListScreen'

const mapStateToProps = (state) => {
  return ({
    repos: state.repos
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setRepos: (repos) => dispatch(setRepos(repos))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListScreen)