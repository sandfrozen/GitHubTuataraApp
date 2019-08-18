import {connect} from 'react-redux'
import DetailsScreen from '../Components/DetailsScreen'
import {withNavigation} from 'react-navigation'

const mapStateToProps = (state, props) => {
  const {repoId} = props.navigation.state.params
  return ({
    repo: state.repos.find(r => r.id === repoId)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({})
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(DetailsScreen))