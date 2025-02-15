
import { client } from "../../sanityClient"



interface Product {
    _id: string;
    imageURL: string;
    name: string;
    price: number;
    description: string;
    quantity: number; // Optional, defaults to 1
}
interface CustomerInfo {

    name: string;
    email: string;
    address: string;
    phone: string;
}

const CreateCustomerInSanity = async (customerInfo: CustomerInfo) => {
    try {
        const customerObject = {
            _type: "customer",
            Email: customerInfo.email,
            phone: customerInfo.phone,
            name: customerInfo.name,
            address: customerInfo.address
        }

        const response = await client.create(customerObject)
        console.log("user create in sanity", response)
        return response
    }
    catch (error) {
        console.error("Error creating customer in Sanity:", error);
        throw error
    }
}

const CreateOrderInSanity = async (cartData: Product[], Customer_id: string) => {
    try {
        const  OrderObject= {
            _type: "Order",
            customer: {
                _type: "reference",
                _ref:Customer_id
            },
            items: cartData.map((item: Product) => ({
                _type: "OrderItem",
                _id: item._id,
                product_name:item.name,
                product_description: item.description,
                product_Price: item.price,
                product_quantity:item.quantity,
                product_imageURL: item.imageURL
            })),
        Order_Date: new Date().toISOString()
        }

        const response = await client.create(OrderObject)
        console.log("order create in sanity", response)
        return response
    }
    catch (error) {
        console.error("Error creating order in Sanity:", error);
        throw error
    }
}

export default async function Checkout(CartData:Product[], CustomerInfo:CustomerInfo) {
    try{
        const customer = await CreateCustomerInSanity(CustomerInfo)
        await CreateOrderInSanity(CartData, customer._id)
        console.log("Order created successfully")
        
    }
    catch(error)
    {
        console.error("Error creating order in Sanity:", error);
        throw error
    }
    
}