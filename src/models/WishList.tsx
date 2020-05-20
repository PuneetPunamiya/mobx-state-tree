import {types} from 'mobx-state-tree'

export const WishListItem = types.model({
    name: types.string,
    price: types.number
})
    .actions(self => ({
        changeName(newName: string) {
            self.name = newName
        },
        changePrice(newPrice: number) {
            self.price = newPrice
        }
    }))

export const WishList = types.model({
    items: types.optional(types.array(WishListItem), [])
})
    .actions(self => ({
        add(item: any) {
            self.items.push(item)
        }
    }))
    .views(self => ({
        get totalPrice() {
            return self.items.reduce((sum, entry) =>
                sum + entry.price, 0
            )
        }
    }))