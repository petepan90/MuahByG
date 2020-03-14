import React from 'react';

const Griditem = ({ imagesUrl, handleClick, index }) => {
    return (
        <div style={style}>
            <img
                src={imagesUrl}
                style={{
                    height: '100%',
                    width: '100%',
                    cursor: 'pointer'
                }}
                onClick={handleClick}
                data-index={index}
            />


        </div>
    )
}



const style = {
    height: '50%',
    background: 'blue',
    width: '25%',
    position: 'relative'
}

export default Griditem;