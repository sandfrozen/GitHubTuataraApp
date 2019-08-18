import {createStackNavigator} from 'react-navigation'
import DetailsScreenContainer from './Containers/DetailsScreenContainer'
import ListScreenContainer from './Containers/ListScreenContainer'

export const AppNavigator = createStackNavigator(
  {
    List: {
      screen: ListScreenContainer,
      navigationOptions: () => ({
        headerBackTitle: 'Repos'
      }),
    },
    Details: DetailsScreenContainer
  },
  {
    initialRouteName: 'List'
  }
)