import React from 'react'
import {Text, TouchableHighlight, View} from 'react-native'
import {withNavigation} from 'react-navigation'
import moment from 'moment'


const ListRow = ({repo, onPress}) => (
  <TouchableHighlight onPress={onPress} underlayColor={'#b8e7ff'}
                      style={{padding: 12, borderBottomWidth: 1, borderBottomColor: 'lightgray'}}>
    <View>
      <Text style={{fontSize: 15, color: '#003c78'}}>
        {repo.full_name}
      </Text>
      <Text style={{fontSize: 13}}>
        {repo.language || '-'}
      </Text>
      <Text style={{fontSize: 11, color: 'gray'}}>
        <Text>{repo.stargazers_count} ☆ </Text>created: {moment(repo.created_at).format('L')}
      </Text>
    </View>
  </TouchableHighlight>
)

export default withNavigation(ListRow)