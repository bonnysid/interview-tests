class OrdersAnalyzer {
    constructor() {
        this.weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    }

    totalQuantity(productId, orders) {
        const cards = {};
        orders.forEach(order => {
            const product = order.orderLines.find(product => product.productId === productId);
            console.log(product)
            const quantity = !!product ? product.quantity : 0;
            if (quantity !== 0) {
                const day = this.weekdays[new Date(order.creationDate).getDay()];
                if(day in cards) cards[day] += quantity;
                else cards[day] = 0 + quantity;
            }
        })

        return cards;
    }
}
const orders = [
        {
            "orderId": 554,
            "creationDate": "2017-03-25T10:35:20Z",
            "orderLines": [
                { "productId": 9872, "name": "Pencil", "quantity": 3, "unitPrice": 3.00 }
            ]
        },
        {
            "orderId": 555,
            "creationDate": "2017-03-25T11:24:20Z",
            "orderLines": [
                { "productId": 9872, "name": "Pencil", "quantity": 1, "unitPrice": 3.00 },
                { "productId": 1746, "name": "Eraser", "quantity": 1, "unitPrice": 1.00 }
            ]
        },
        {
            "orderId": 453,
            "creationDate": "2017-03-27T14:53:12Z",
            "orderLines": [
                { "productId": 5723, "name": "Pen", "quantity": 4, "unitPrice": 4.22 },
                { "productId": 9872, "name": "Pencil", "quantity": 3, "unitPrice": 3.12 },
                { "productId": 3433, "name": "Erasers Set", "quantity": 1, "unitPrice": 6.15 }
            ]
        },
        {
            "orderId": 431,
            "creationDate": "2017-03-20T12:15:02Z",
            "orderLines": [
                { "productId": 5723, "name": "Pen", "quantity": 7, "unitPrice": 4.22 },
                { "productId": 3433, "name": "Erasers Set", "quantity": 2, "unitPrice": 6.15 }
            ]
        },
        {
            "orderId": 690,
            "creationDate": "2017-03-26T11:14:00Z",
            "orderLines": [
                { "productId": 9872, "name": "Pencil", "quantity": 4, "unitPrice": 3.12 },
                { "productId": 4098, "name": "Marker", "quantity": 5, "unitPrice": 4.50 }
            ]
        }
    ];
const test = new OrdersAnalyzer();

console.log(test.totalQuantity(3433, orders))
export default OrdersAnalyzer;
