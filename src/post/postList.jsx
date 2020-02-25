import React from 'react'

const TodoList = props => {

    const renderRows = () => {        
        const list = props.list
        
        return (
            list.map(post => (
                <div className="post clearfix" key={post._id}>
                    <div className="postDate">{new Date(post.createdAt).toDateString()}</div>
                    <div className="upvote">{post.description}</div>
                    
                    <div className="clearfix pull-right">
                        <div className="upvote">{post.upvotes}</div>
                        <button className="btn btn-sm btn-primary" onClick={() => props.handleUpvotes(post)}>
                            <i className="glyphicon glyphicon-thumbs-up"></i>                            
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => props.handleRemove(post)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </div>
                </div>
            ))
        )
    }

  
    return (
        <div>{renderRows()}</div>
    )
    
}

export default TodoList