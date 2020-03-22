import React from 'react';
import Tile from './Tile';

// const Board = () => {
//     return (
//         <div>
//             <Tile/>
//             <Tile/>
//             <Tile/>
//         </div>
//     );
// }

class Board extends React.Component {

    render() {
        return (
            <div>
                <Tile title="top" initialCount={0}/>
                <Tile title="middle" initialCount={0}/>
                <Tile title="bottom" initialCount={0}/>
            </div>
        );
    }
}

export default Board;