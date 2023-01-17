import React from 'react'
import { FilterButton, Filters, ItemsLeft, MenuContent } from './MenuContent'
import "../styles/Menu.sass"

const Menu = ({ total, showAll, showActive, showCompleted, clearCompleted }) => {
    return (
        <>
            <MenuContent>
                <ItemsLeft total={total} />
                <button
                    onClick={clearCompleted}
                    className='btn-clear'
                >
                    Clear Completed
                </button>
            </MenuContent>

            <Filters>
                <FilterButton action={() => showAll()} filter="All" />
                <FilterButton action={() => showActive()} filter="Active" />
                <FilterButton action={() => showCompleted()} filter="Completed" />
            </Filters>
        </>
    )
}

export default Menu