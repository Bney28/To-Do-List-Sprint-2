import React from 'react'
import { FilterButton, Filters, ItemsLeft, MenuContent } from './MenuContent'
import "../styles/Menu.sass"

const Menu = ({ menu, total, showAll, showActive, showCompleted, clearCompleted }) => {
    return (
        <>
            <MenuContent>
                <ItemsLeft total={total} />
                <button
                    onClick={() => clearCompleted}
                    className='btn-clear'
                >
                    Clear Completed
                </button>
            </MenuContent>

            <Filters>
                <FilterButton action={() => showAll()} filter="All" menu={menu}/>
                <FilterButton action={() => showActive()} filter="Active" menu={menu} />
                <FilterButton action={() => showCompleted()} filter="Completed"menu={menu} />
            </Filters>
        </>
    )
}

export default Menu