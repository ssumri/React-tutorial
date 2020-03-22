import React from 'react';

// const Tile = () => {
//     return <div>Tile</div>
// }

class Tile extends React.Component {
    title = null;

    constructor(props) {
        super(props);
        
        this.title = props.title;

        this.state = {
            count: props.initialCount
        }
    }

    increaseCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        });
    }

    render() {
        return <div onClick={this.increaseCount}>{this.title}:{this.state.count}</div>
    }
}

export default Tile;