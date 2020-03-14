import React from 'react'
import Griditem from './Griditem';



const Gallerygrid = ({ data, handleClick }) => {
    console.log(data)
    return (
        <div style={style}>
            {
                data.map((griditem, i) => {
                    return (
                        <Griditem
                            key={griditem.imagesUrl}
                            imagesUrl={griditem.imagesUrl}
                            handleClick={handleClick}
                            index={i}
                        />
                    )
                })
            }

        </div>

    )
}

const style = {
    height: '35%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
}

export default Gallerygrid
