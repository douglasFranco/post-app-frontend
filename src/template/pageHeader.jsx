import React from 'react'

const PageHeader = props => {    
    return (
        <header>
            <h1>{props.name} <small>{props.small}</small></h1>
        </header>
    )    
}

export default PageHeader