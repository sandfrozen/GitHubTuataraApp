import {createStackNavigator} from 'react-navigation'
import ListScreen from './Screens/ListScreen'
import DetailsScreen from './Screens/DetailsScreen'

export const AppNavigator = createStackNavigator(
  {
    List: ListScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'List'
  }
)