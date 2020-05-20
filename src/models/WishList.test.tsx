import {WishListItem, WishList} from './WishList'
import {getSnapshot, onSnapshot, onPatch} from 'mobx-state-tree'
import {reaction} from 'mobx'

it("can create an instance of a model", () => {
    const items = WishListItem.create({
        "name": "abc",
        "price": 123,
    })

    expect(items.price).toBe(123)
    items.changeName("Puneet")
    expect(items.name).toBe("Puneet")
})

it("can create a wishlist", () => {
    const list = WishList.create({
        items: [
            {
                "name": "abc",
                "price": 123,
            }
        ]
    })

    expect(list.items.length).toBe(1)
})

it("can add new items", () => {
    const list = WishList.create()

    list.add(({
        "name": "qwe",
        "price": 345,
    }))

    const states: any = []
    onSnapshot(list, snapshot => {
        states.push(snapshot)
    })

    const patches: any = []
    onPatch(list, patch => {
        patches.push(patch)
    })

    expect(list.items.length).toBe(1)
    list.items[0].changeName("asd")
    expect(list.items[0].name).toBe("asd")

    expect(getSnapshot(list)).toMatchSnapshot()

    expect(states).toMatchSnapshot()

    expect(patches).toMatchSnapshot()
})

it("can calculate the total price of the wishlist", () => {
    const list = WishList.create({
        items: [
            {
                "name": "abc",
                "price": 123,
            },
            {
                "name": "qwe",
                "price": 123,
            }
        ]
    })

    let changed = 0
    reaction(() => list.totalPrice, () => changed++)
    console.log(list.totalPrice)

    //Only if the price is changed then the value of 'changed' will increase to 1
    list.items[0].changePrice(10)

    expect(changed).toBe(1)
    expect(list.totalPrice).toBe(133)

    list.items.map((item: any) => {console.log(item)})

})