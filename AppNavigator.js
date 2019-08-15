import {createStackNavigator} from 'react-navigation'
import ListScreen from './Components/ListScreen'
import DetailsScreen from './Components/DetailsScreen'

export const AppNavigator = createStackNavigator(
  {
    List: ListScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'List'
  }
)