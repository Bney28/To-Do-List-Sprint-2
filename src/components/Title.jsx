import React from 'react'
import "../styles/CSSTitle.css"

const Title = () => {
  return (
    <>
      <div className="container">
        <h1 className="container__title">
          To do
        </h1>

        <div className="container__icon">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </div>
      </div>

    </>
  )
}

export default Title