import React from 'react'
import WishListItemView from './WishListItemView'

interface wihsList {
    name: string,
    price: number
}
const WishListView = (props: any) => {
    console.log(props.items)
    return (
        <div>
            <ul>
                {/* TODO -> {props.items.map -> undefined} */}
                {props.items.map((item: any, idx: any) => <WishListItemView key={idx} item={item} />)}
            </ul>
        </div>
    )
}

export default WishListView
