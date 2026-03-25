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
      <View style={{flex: 1}}>
        <FlatList 
            data = {this.state.posts}
            renderItem = {({item}) => <View style = {styles.wrapper}>
                <TouchableOpacity style = {styles.title}
                    onPress = {() => this.setState({selectedPost: item})}
                >
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style = {styles.userId}>Author ID: {item.userId}</Text>
                </TouchableOpacity>
            </View>}
        />
        <Modal
            visible = {this.state.selectedPost !== null}
            transparent = {true}
            onRequestClose={() => this.setState({selectedPost: null})}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.body}>{this.state.selectedPost?.body}</Text>
                    <TouchableOpacity onPress={() => this.setState({selectedPost: null})}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
      </View>
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
        backgroundColor: "skyblue",
        margin: 10,
        padding: 10,
        borderRadius: 8,
        shadowColor: "blue",
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    title: {
        marginBottom: 5,
    },
    titleText: {
        fontSize: 19,
        fontWeight: "bold",
    },
    body: {
        fontSize: 12,
        marginBottom: 5,
    },
    userId: {
        fontSize: 6,
        fontStyle: "italic",
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    }
})