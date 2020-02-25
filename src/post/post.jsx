import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import PostForm from './postForm'
import PostList from './postList'
import axios from 'axios'

const URL = 'http://localhost:3003/api/posts'

export default class Post extends Component {
    constructor (props) {
        super(props)
        this.state = {description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleUpvotes = this.handleUpvotes.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => {                
                this.setState({...this.state, description, list: resp.data})
            })
    }

    handleChange(e) {        
        this.setState({...this.state, description: e.target.value})
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, {description})
            .then(() => this.refresh())
    }

    handleRemove(post) {
        axios.delete(`${URL}/${post._id}`)
            .then(() => this.refresh(this.state.description))
    }

    handleUpvotes(post) {
        console.log('post', post)
        axios.put(`${URL}/${post._id}`, {...post, upvotes: (post.upvotes + 1)})
            .then(() => this.refresh(this.state.description))
    }

    render() {
        return (        
            <div className="container">
                <PageHeader name="Posts" small="new"/>
                <PostForm 
                    description={this.state.description} 
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
                <PostList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleUpvotes={this.handleUpvotes}/>        
            </div>
        )
    }
}