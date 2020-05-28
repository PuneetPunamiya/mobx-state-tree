import React from 'react'
import {observer} from 'mobx-react'

import WishListItemView from './WishListItemView'
// import {WishList} from '../models/WishList'

const WishListView = (props: any) => {
    const {wishlist} = props
    return (
        <div>
            <ul>
                {wishlist.items.map((item: any, idx: any) => <WishListItemView key={idx} {...item} />)}
            </ul>
            Total: {wishlist.totalPrice}
        </div>
    )
}

export default observer(WishListView)