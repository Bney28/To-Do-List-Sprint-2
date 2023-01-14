import React from 'react'

export const MenuContent = ({ children }) => {
    return (
        <>
            <div className="menu-content">
            {children}
            </div>
        </>
    )
}

export const ItemsLeft = ({ total = 0 }) => {
    return (
        <>
            <p className="total">
                {total} Items left
            </p>
        </>
    )
}

export const Filters = ({ children }) => {

    return (
        <>
            <div className='cont-filters'>
                {children}

            </div>

        </>
    )
}

export const FilterButton = ({ filter }) => {

    return (
        <>
            <button className='btns-menu'>
                {filter}
            </button>

        </>
    )
}