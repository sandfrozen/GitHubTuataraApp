import React, {Fragment} from 'react'
import {View, TextInput, ActivityIndicator, Button, Text, FlatList} from 'react-native'
import axios from 'axios'
import ListRow from './ListRow'

class ListScreen extends React.Component {
  
  static navigationOptions = ({navigation}) => {
    const count = navigation.getParam('count', '0')
    return {
      title: count > 0 ? 'Founded repos: ' + count : 'No repos'
    }
  }
  
  constructor(props) {
    super(props)
  }
  
  state = {
    loading: true,
    
    query: 'react native',
    edited: false,
    
    error: null
  }
  
  componentDidMount(): void {
    this.getRepos()
  }
  
  getRepos = () => {
    this.setState({loading: true, edited: false, error: null})
    const {query} = this.state
    const url = `https://api.github.com/search/repositories?q=${query.trim().split(' ').join('+')}`
    axios.get(url)
      .then((response) => {
        this.props.setRepos(response.data.items)
        this.setState({loading: false})
        this.props.navigation.setParams({count: response.data.items.length})
      })
      .catch((error) => {
        // handle error
        this.setState({error, loading: false})
      })
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.repos}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={
            <Fragment>
              <TextInput
                placeholder={'serach... in: user: org:'}
                onChangeText={(query) => this.setState({edited: true, query})}
                onEndEditing={() => this.getRepos()}
                defaultValue={this.state.query}
                clearButtonMode={'always'}
                style={{
                  margin: 12,
                  paddingHorizontal: 12,
                  borderRadius: 14,
                  height: 28,
                  borderColor: '#e7e7e7',
                  backgroundColor: '#efefef',
                  borderWidth: 1
                }}
              
              />
              {this.state.query !== '' && this.state.edited ?
                <Button title={'Search'} onPress={this.getRepos}/> : null}
              {this.state.loading ? <ActivityIndicator size="large" color='gray'/> : null}
            </Fragment>
          }
          ListFooterComponent={
            <View style={{height: this.state.error ? 0 : 34}}/>
          }
          renderItem={({item}) => <ListRow repo={item}
                                           onPress={() => this.props.navigation.navigate('Details', {repoId: item.id})}/>}
        />
        {this.state.error ?
          <View style={{height: 34, alignItems: 'center', color: 'white', backgroundColor: '#da0008'}} on>
            <Text>{this.state.error && this.state.error.message}</Text>
          </View> : null}
      </View>
    )
  }
}

export default ListScreen

