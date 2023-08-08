import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Rating({rating}) {
  return (
    <div className="book__ratings icon">
                {
            new Array(Math.floor(rating)).fill(0).map((_, index) =>   <FontAwesomeIcon key={index} icon="star" className='book__rating' />
                
                )}
                {
                    !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" className='book__rating' />
                }
               
                {/* <FontAwesomeIcon icon="star" className='book__rating' />
                <FontAwesomeIcon icon="star-half-alt" className='book__rating' /> */}
            </div>
  )
}
