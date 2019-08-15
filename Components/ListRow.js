import React from 'react'
import {Text, TouchableHighlight, View} from 'react-native'
import {withNavigation} from 'react-navigation'
import moment from 'moment'



const ListRow = ({repo, onPress}) => (
  <TouchableHighlight onPress={onPress} underlayColor={'#b8e7ff'} style={{padding: 12, borderBottomWidth: 1, borderBottomColor: 'lightgray'}}>
    <View>
      <Text>{repo.name}</Text>
      <Text style={{fontSize: 12, color: '#003c78'}}>
        author: {repo.owner.login} ⭐️ {repo.stargazers_count}
      </Text>
      <Text style={{fontSize: 11, color: 'gray'}}>
        created: {moment(repo.created_at).format('L')}
      </Text>
    </View>
  </TouchableHighlight>
)

export default withNavigation(ListRow)