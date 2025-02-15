"use client";
import { useState, useEffect } from 'react';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link"
import {ProductData } from "@/sanity/sanity.query"
import Image from 'next/image'
export function PopularProductlist(){

    interface CeramicData {
        _id: string;
        imageURL: string;
        name:string
        price: number;
        description:string;
        features:string
        dimensions:string
      }
      const [Popularproducts, setPopularproducts] = useState<CeramicData[]>([]);

      useEffect(() => {
        async function fetchData() {
          const popularproductData = await ProductData();
          setPopularproducts(popularproductData);
        }
        fetchData();
        }, []);
        console.log(Popularproducts);

       

            
    return(
        <>
      <section>
        <div className='px-8 py-12 text-black mt-12  '>
          <h1 className='text-2xl font-semibold'>Our popular products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col sm:flex-col xl:flex-row mt-8 md:gap-12 lg:flex-row '>
            {/* Product 1 */}
              {Array.isArray(Popularproducts) && Popularproducts.length > 0 && Popularproducts[3] && (
                <Link 
                href={{
                  pathname: '/productlist',
                  query: { product: JSON.stringify(Popularproducts[3]) }
                }}
                >
                <Card key={Popularproducts[3]._id} className="lg:h-[200px] w-[200px] lg:w-[200px] mb-[100px] lg:mb-[250px] sm:mb-[250px]  h-48 border-none text-justify hover:translate-y-1 hover:scale-110 hover:duration-500 ">
                  <CardHeader className=" lg:w-[300px]  sm:w-[500px] xl:w-[300px] md:w-[400px] w-[250px]">
                    {Popularproducts[3].imageURL && <Image width={800} height={600} src={Popularproducts[3].imageURL} alt="image" className='xl:h-[230px]'></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6 xl:whitespace-nowrap text-[15px] xl:text-ellipsis text-black">{Popularproducts[3].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Popularproducts[3].description}</CardDescription>
                  <CardFooter>
                    <p>Rs {Popularproducts[3].price}</p>
                  </CardFooter>
                </Card>
                </Link>          
              )}
              {/* Product 2 */}

              {Array.isArray(Popularproducts) && Popularproducts.length > 0 && Popularproducts[2] && (
                <Link 
                href={{
                  pathname: '/productlist',
                  query: { product: JSON.stringify(Popularproducts[2]) }
                }}
                >
                <Card key={Popularproducts[2]._id} className="h-[200px] w-[200px] mb-[100px]  lg:mb-[150px] sm:mb-[300px] border-none text-justify lg:ml-[30px]  xl:ml-[50px] hover:translate-y-1 hover:scale-110 hover:duration-500 ">
                  <CardHeader className=" lg:w-[300px] xl:w-[300px] md:w-[300px] w-[250px] sm:w-[300px] ">
                    {Popularproducts[2].imageURL && <Image width={350} height={300} src={Popularproducts[2].imageURL} alt="image" className='xl:h-[230px]' ></Image>}
                  </CardHeader>
                  <CardTitle ><p  className="ml-6 whitespace-nowrap text-[15px] text-ellipsis text-black">{Popularproducts[2].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Popularproducts[2].description}</CardDescription>                  
                  <CardFooter>
                    <p>Rs {Popularproducts[2].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
              {/* Product 2 */}

              {Array.isArray(Popularproducts) && Popularproducts.length > 0 && Popularproducts[8] && (
                <Link 
                href={{
                  pathname: '/productlist',
                  query: { product: JSON.stringify(Popularproducts[8]) }
                }}
                >
                <Card key={Popularproducts[8]._id} className="h-[200px] w-[200px] mb-[200px]  lg:mb-[150px] sm:mb-[300px] border-none text-justify lg:ml-[30px]  xl:ml-[50px] hover:translate-y-1 hover:scale-110 hover:duration-500 ">
                  <CardHeader className=" lg:w-[300px] xl:w-[300px] md:w-[300px] w-[250px] sm:w-[300px] ">
                    {Popularproducts[2].imageURL && <Image width={350} height={300} src={Popularproducts[8].imageURL} alt="image" className='xl:h-[230px] lg:h-[250px]' ></Image>}
                  </CardHeader>
                  <CardTitle ><p  className="ml-6 whitespace-nowrap text-[15px] text-ellipsis text-black">{Popularproducts[8].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Popularproducts[8].description}</CardDescription>                  
                  <CardFooter>
                    <p>Rs {Popularproducts[8].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
              
            </div>  
          {/* View Collection Button */}
          <div className='my-10 flex justify-center items-center '>
            <Link href={'productListing'}>
            <button className='bg-white text-black hover:bg-[#b54141] hover:translate-y-1 hover:scale-110 hover:duration-100  py-4 px-6 rounded-[5px] text-text-white'>
              View products
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
    )
}