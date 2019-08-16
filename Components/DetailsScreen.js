import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {ScrollView} from 'react-navigation'

class DetailsScreen extends Component {
  
  render() {
    console.log(this.props)
    const {repoId} = this.props.navigation.state.params
    console.log(repoId)
    return (
      <ScrollView>
        <Text>repoId : {repoId}</Text>
        <View>
        </View>
      </ScrollView>
    )
  }
}

export default DetailsScreen