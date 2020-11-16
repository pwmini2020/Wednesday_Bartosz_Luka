import React from 'react';

export default
function Tile(props) {
    return (
        <div style={{"width":30, "height":30, "background-color":props.color}}/>
    )
}