import React, {Component} from 'react'
import {Text, View, Image, FlatList} from 'react-native'
import moment from 'moment'

function getDecoratedValue(value) {
  const t = typeof value
  if (t === 'string' || t === 'number') {
    return value
  } else if (value === '') {
    return '-'
  } else if (t === 'boolean') {
    return t ? 'yes' : 'no'
  } else {
    return '?'
  }
}

class DetailsScreen extends Component {
  
  render() {
    const {repo} = this.props
    return (
      <View style={{display: 'flex', alignItems: 'stretch', height: '100%'}}>
        <View style={{display: 'flex', alignItems: 'center', padding: 8}}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: repo.owner.avatar_url}}
          />
          <Text style={{fontSize: 24}}>{repo.name}</Text>
          <Text style={{color: 'gray'}}>{repo.owner.login}</Text>
          <Text style={{color: 'gray'}}>☆ {repo.stargazers_count}</Text>
          <Text style={{padding: 8}}>{repo.description}</Text>
          
          <Text style={{color: 'gray'}}>created: {moment(repo.created_at).format('L')}</Text>
          <Text style={{color: 'gray'}}>updated {moment(repo.updated_at).format('L')}</Text>
          <Text style={{color: 'gray'}}>pushed {moment(repo.pushed_at).format('L')}</Text>
        </View>
        
        <FlatList
          data={Object.entries(repo)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            if (typeof item[1] !== 'object') {
              return (
                <View style={{padding: 12, borderBottomWidth: 1, borderBottomColor: 'lightgray'}}>
                  <Text>{item[0]}: {getDecoratedValue(item[1])}</Text>
                </View>
              )
            } else {
              return null
            }
            
          }}
          ListFooterComponent={
            <View style={{height: 34}}/>
          }
        />
      </View>
    )
  }
}

export default DetailsScreen