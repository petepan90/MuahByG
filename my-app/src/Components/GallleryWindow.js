import React from 'react'

const Window = ({ activeData }) => {
    // console.log(activeData[0].imagesUrl)
    return (
        <div style={style}>
            <img
                src={activeData.imagesUrl}
                style={{
                    height: '100%',
                    width: '100%'
                }}
            />
        </div>
    )

}

const style = {
    height: '65%',
    width: '100%',
    background: 'lightgreen',
    position: 'relative'

}

export default Window