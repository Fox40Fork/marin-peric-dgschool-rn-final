import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Modal, TouchableOpacity} from 'react-native'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            selectedPost: null,
        }
    }
  render() {
    return (
        <FlatList 
            data = {this.state.posts}
            renderItem = {({item}) => <View style = {styles.wrapper}>
                <TouchableOpacity style = {styles.title}
                    onPress = {() => this.setState({selectedPost: item})}
                >
                    {item.title}
                    <Text style = {styles.userId}>Author ID: {item.userId}</Text>
                    <Modal
                        visible = {this.state.selectedPost !== null}
                        transparent = {true}
                        animationType='slide'
                    >
                        <View>
                            <View>
                                <Text>{this.state.selectedPost?.body}</Text>
                            </View>
                        </View>
                    </Modal>
                </TouchableOpacity>
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