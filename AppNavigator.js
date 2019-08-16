import {createStackNavigator} from 'react-navigation'
import ListScreen from './Components/ListScreen'
import DetailsScreen from './Components/DetailsScreen'

export const AppNavigator = createStackNavigator(
  {
    List: {
      screen: ListScreen,
      navigationOptions: () => ({
        headerBackTitle: 'Repos'
      }),
    },
    Details: DetailsScreen
  },
  {
    initialRouteName: 'List'
  }
)