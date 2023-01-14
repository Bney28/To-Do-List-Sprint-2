import React from 'react'
import "../styles/CSSItems.css"

const ItemsContent = ({children}) => {
    return (
        <>
            <div className="div-ppal">
                {children}
            </div>

        </>
    )
}

export default ItemsContent