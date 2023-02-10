/**
 * Class Component
 */
import React from "react";

class Description extends React.Component
{
    state = {
        data: ""
    }

    constructor(props) {
        super(props)
        this.state.data = props.data
    }

    render() {
        return (
            <p>{ this.state.data }</p>
        )
    }
}

export default Description;