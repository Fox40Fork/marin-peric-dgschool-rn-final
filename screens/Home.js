import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList} from 'react-native'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
  render() {
    return (
        <FlatList 
            data = {this.state.posts}
            renderItem = {({item}) => <View style = {styles.wrapper}>
                <Text style = {styles.title}>{item.title}</Text>
                <Text style = {styles.body}>{item.body}</Text>
                <Text style = {styles.userId}> Author ID: {item.userId}</Text>
            </View>}
        />
    )
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => this.setState({ posts: [json] }))
  }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "babyblue",
        margin: 10,
        padding: 10,
        borderRadius: 8,
        shadowColor: "blue",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    title: {
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 5,
    },
    body: {
        fontSize: 12,
        marginBottom: 5,
    },
    userId: {
        fontSize: 6,
        fontStyle: "italic",
    }
})