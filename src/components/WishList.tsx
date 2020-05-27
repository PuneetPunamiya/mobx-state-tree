import React from 'react'
import WishListItemView from './WishListItemView'

export const WishListView = (props: any) => {
    const {wishlist} = props
    return (
        <div>
            <ul>
                {wishlist.items.map((item: any, idx: any) => <WishListItemView key={idx} {...item} />)}
            </ul>
        </div>
    )
}

