import React from 'react'
import {ScrollView, TextInput, ActivityIndicator, Button, Text, FlatList} from 'react-native'
import axios from 'axios'
import ListRow from './ListRow'

class ListScreen extends React.Component {
  
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Repos: ' + navigation.getParam('count', '0')
    }
  }
  
  constructor(props) {
    super(props)
  }
  
  state = {
    loading: true,
    query: 'react native',
    repos: [],
  
    error: null
  }
  
  componentDidMount(): void {
    this.getRepos()
  }
  
  getRepos = () => {
    const { query } = this.state
    axios.get(`https://api.github.com/search/repositories?q=${query}`)
      .then((response) => {
        this.setState({loading: false, repos: response.data.items})
        this.props.navigation.setParams({count: response.data.items.length})
      })
      .catch((error) => {
        // handle error
        this.setState({ error })
      })
      .finally(() => {
        // always executed
      })
  }
  
  onPressSearch = () => {
    this.setState({loading: true, edited: false, error: false})
    this.getRepos()
  }
  
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <TextInput
          style={{
            margin: 12,
            paddingHorizontal: 12,
            borderRadius: 14,
            height: 28,
            borderColor: '#e7e7e7',
            backgroundColor: '#efefef',
            borderWidth: 1
          }}
          placeholder={'Search...'}
          onChangeText={(query) => this.setState({edited: true, query})}
          defaultValue={this.state.query}
          clearButtonMode={'always'}
        />
        {this.state.query !== '' && this.state.edited ? <Button title={'Search'} onPress={this.onPressSearch}/> : null}
        {this.state.error ? <Text>{this.state.error.message}</Text> : null}
        {this.state.loading ? <ActivityIndicator size="large" color='gray'/> : null}
        <FlatList
          style={{paddingBottom: 34}}
          data={this.state.repos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ListRow repo={item}
                                           onPress={() => this.props.navigation.navigate('Details', {repoId: item.id})}/>}
        />
        
      </ScrollView>
    )
  }
}

export default ListScreen

