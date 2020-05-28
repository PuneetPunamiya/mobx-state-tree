import React, {useState} from 'react'
import WishListItemEdit from './WishListItemEdit'
// import {WishListItem} from '../models/WishList'
import {observer} from 'mobx-react'

const WishListItemView = (props: any) => {
    const {name, price} = props
    const {item} = props

    const [isEditing, setIsEditing] = useState(false)

    function rendereditable() {
        return (
            <li className="item">
                <WishListItemEdit item={item} />
            </li>
        )
    }

    function onToggleEdit() {
        setIsEditing(true)
        console.log(isEditing)
    }

    if (isEditing) {
        rendereditable()
    }
    return (
        <div>
            <li className="item">
                <h3>{name}</h3>
                <span>{price}</span>
                <span style={{paddingLeft: "2em"}}>
                    <button onClick={onToggleEdit}>&#9998;</button>
                </span>
            </li>
        </div>
    )

}

export default observer(WishListItemView)
