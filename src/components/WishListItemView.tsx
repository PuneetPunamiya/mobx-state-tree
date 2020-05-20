import React from 'react'

const WishListItemView = (props: any) => {
    return (
        <div>
            <li>
                <h1>{props.name}</h1>
                <span>{props.price}</span>
            </li>
        </div>
    )
}

export default WishListItemView
