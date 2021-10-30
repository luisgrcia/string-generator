import React from "react";

class CommunityCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{'background-color': '#303B4A'}} className={"grid grid-rows-4 w-5/6 h-20 rounded-xl p-2"}>
                <h2 className={"row-span-1 text-xl"}>{this.props.title}</h2>
                <h2 className={"row-span-1"} style={{'color': '#2473EA'}}>Example: {this.props.example}</h2>
            </div>
        );
    }
}

export default CommunityCard;
