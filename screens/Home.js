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
        <Text style = {{fontSize: 30, textAlign: "center", marginVertical: 5}}>Latest Posts</Text>
        <Text style = {{fontSize: 16, textAlign: "center", marginVertical: 5}}>These are the latest news articles from our blog.</Text>      
        <FlatList 
            data={this.state.posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <View style={styles.wrapper}>
                <TouchableOpacity style={styles.title}
                    onPress={() => this.setState({selectedPost: item})}
                >
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.userId}>Author ID: {item.userId}</Text>
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
                    <TouchableOpacity onPress={() => this.setState({selectedPost: null})}
                        style = {{backgroundColor: "lightblue", padding: 10, borderRadius: 5, alignSelf: "center", marginTop: 10}}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
      </View>
    )
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => {
        const firstTenPosts = json.slice(0, 10);
        
        this.setState({ posts: firstTenPosts })})
  }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "skyblue",
        margin: 10,
        padding: 10,
        borderRadius: 8,
        shadowColor: "lightblue",
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