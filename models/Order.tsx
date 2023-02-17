
class Order {
    id: string
    orderItems: [] = []
    orderDate: Date
    total: number = 0
    

    constructor(id: string, orderItems: [], total: number) {
        this.id = id,
        this.orderItems = orderItems,
        this.total = total,
        this.orderDate= new Date
    }


}

export default Order