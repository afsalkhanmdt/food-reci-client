import React from 'react'

const Recipe = ({match}) => {
    return (
        <div>
            Recipe id is {match.params.id}
        </div>
    )
}

export default Recipe
