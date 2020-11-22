import React from 'react';

export default function Tile(props) {
    return (
        <div style={{
            "width":30, 
            "height":30, 
            "padding":0,
            "margin":0, 
            "backgroundColor":props.color,
            "display": "inline-block",
            "border": "1px solid black",
            }}>
        </div>
    )
}