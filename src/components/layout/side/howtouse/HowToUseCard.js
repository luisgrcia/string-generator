import React from "react";

class CommunityCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{'background-color': '#303B4A'}} className={"rounded-xl w-5/6 flex flex-col gap-4 p-2"}>
                <h2 className={"row-span-1 text-2xl"}>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default CommunityCard;
