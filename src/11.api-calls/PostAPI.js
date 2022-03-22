import React, { Component } from 'react'

export class PostAPI extends Component {
    constructor(){
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState({posts : data}))
    }

  render() {
    //  console.log('render fired', this.state.posts)
    return (
      <div className="container">
          {
              this.state.posts.map(post => (
                  <ul key={post.id}>
                      <li>{post.id}</li>
                      <li>{post.title}</li>
                      <li>{post.body}</li>
                  </ul>
              ))
          }
      </div>
    )
  }
}

export default PostAPI