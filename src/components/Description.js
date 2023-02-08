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
            <div>
                <p>{ this.state.data }</p>
            </div>
        )
    }
}

export default Description;