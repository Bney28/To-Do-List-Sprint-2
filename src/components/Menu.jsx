import React from 'react'
import { FilterButton, Filters, ItemsLeft, MenuContent } from './MenuContent'
import "../styles/Menu.sass"

const Menu = ({ menu,
    setMenu,
    total,
    clearCompleted }) => {
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
                <FilterButton action={setMenu} filter="All" menu={menu}/>
                <FilterButton action={setMenu} filter="Active" menu={menu} />
                <FilterButton action={setMenu} filter="Completed"menu={menu} />
            </Filters>
        </>
    )
}

export default Menu