import React from 'react'

const PostForm = props => {

    const keyHandler = e => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="postForm row">
            <div className="col-xs-12 col-sm-9 col-md-10">
                <textarea 
                    id="description" 
                    className="form-control textarea"
                    value={props.description} 
                    onChange={props.handleChange} 
                    onKeyUp={keyHandler}
                    placeholder="Adicione um post"/>
            </div>           
            <div className="col-xs-12 col-sm-3 col-md-2">
                <button className="btn btn-primary" title="New" onClick={props.handleAdd}>
                    <i className="fa fa-plus"></i>
                </button>
                <button className="btn btn-primary" title="Search" onClick={props.handleSearch}>
                    <i className="fa fa-search"></i>
                </button>
                <button className="btn btn-default" title="Clear Search" onClick={props.handleClear}>
                    <i className="fa fa-close"></i>
                </button>
            </div>
            
        </div>
    )
}

export default PostForm