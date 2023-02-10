import React from "react";

// Components
import Title       from "../components/Title/Title";
import Description from "../components/Description";
import CountBook   from "../components/CountBook";
import Navbar      from "../components/Navbar";

class Home extends React.Component 
{
    
    render () {
        return (
            <div> {/* use parent if you have elements */} 
                <Navbar />
                <CountBook />
                <Title data="title 1" />
                <Description data="desc 1" />
                <Title data="title 2" />
                <Description data="desc 2" />
            
            </div>
        )
    }

}

export default Home;