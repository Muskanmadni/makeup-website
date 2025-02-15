import { groq} from "next-sanity";

import { client } from "../../sanityClient";




export async function ProductData(){
    return client.fetch (
        groq`
        *[_type== "product"]{
        category,    
        name,
        slug,
        price,
        quantity,
        tags,
        description,
        features,
        dimensions,
        "imageURL":image.asset->url
        }
        `

    )
}

export async function CategoryData(){
    return client.fetch (
        groq`
        *[_type== "category"]{
        name,
        slug
        }
        `

    )
}


