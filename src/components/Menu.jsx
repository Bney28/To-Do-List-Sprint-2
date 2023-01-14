import React from 'react'
import { FilterButton, Filters, ItemsLeft, MenuContent } from './MenuContent'
import "../styles/CSSMenu.css"

const Menu = () => {
    return (
        <>
            <MenuContent>
                <ItemsLeft />

                <button className='btn-clear'>
                    Clear Completed
                </button>
            </MenuContent>
            <Filters>
                <FilterButton filter="All" />
                <FilterButton filter="Active" />
                <FilterButton filter="Completed" />
            </Filters>
        </>
    )
}

export default Menu