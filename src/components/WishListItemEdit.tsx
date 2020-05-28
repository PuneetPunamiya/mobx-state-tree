import React from 'react'
import {observer} from 'mobx-react'

const WishListItemEdit = (props: any) => {
    const {item} = props
    return (
        <div>
            Name: <input value={item.name} onChange={onNameChange} />
            <br />

            Price: <input value={item.name} onChange={onPriceChange} />
            <br />

        </div>
    )

    function onNameChange(event: any) {
        props.item.changeName(event.target.value)
    }

    function onPriceChange(event: any) {
        const price = event.target.value
        if (!isNaN(price)) {
            props.item.changePrice(price)
        }
    }
}

export default observer(WishListItemEdit)
