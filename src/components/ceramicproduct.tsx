"use client";
import { useState, useEffect } from 'react';
import Link from "next/link"
import { CardHeader , CardFooter,CardTitle  ,Card, CardDescription } from "./ui/card"
import { ProductData} from "@/sanity/sanity.query";
import Image from 'next/image'

export function CeramicProducts(){
    interface  ceramicProducts{
      _id: string;
      imageURL: string;
      name: string;
      price: number;
      description: string;
    }
  
    const [Data, setData] = useState<ceramicProducts[]>([]);
    
        useEffect(() => {
            async function fetchData() {
                const ceramicproductData = await ProductData();
                setData(ceramicproductData);
            }
            fetchData();
        }, []);
        
        console.log(Data);
      return(
          <>
        <section>
          <div className="px-4 md:px-8 py-12 text-black mt-12 ">
            {/* Title */}
            <h1 className="text-2xl font-semibold">Our Face products</h1>
  
            {/* Product Items */}
            <div className="lg:grid md:grid-cols-4 gap-8 mt-12  ">
              {/* product 1 */}
              {Array.isArray(Data) && Data.length > 0 && Data[1] && (
                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[1]) }
                }}
                >
                <Card key={Data[1]._id} className="h-[200px] w-[200px] mb-[150px] border-none text-justify hover:translate-y-1 hover:scale-110 hover:duration-500">
                  <CardHeader className=" w-[250px]">
                    {Data[1].imageURL && <Image width={300} height={600} src={Data[1].imageURL} alt="image" className='xl:h-[300px] lg:h-[300px]'></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6 text-[15px] text-black">{Data[1].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[1].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[1].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
              {/* product 2 */}
              {Array.isArray(Data) && Data.length > 0 && Data[5] && (
                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[5]) }
                }}
                >
                <Card key={Data[5]._id} className="h-[200px] w-[200px] mb-[150px] border-none text-justify hover:translate-y-1 hover:scale-110 hover:duration-500">
                  <CardHeader className=" w-[250px]">
                    {Data[5].imageURL && <Image width={300} height={600} src={Data[5].imageURL} alt="image" className='xl:h-[300px] lg:h-[300px]'></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6 xl:whitespace-nowrap xl:text-ellipsis text-[15px] text-black">{Data[5].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[5].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[5].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
              {/* product 3 */}
              {Array.isArray(Data) && Data.length > 0 && Data[6] && (

                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[6]) }
                }}
                >
                
                <Card key={Data[6]._id} className="lg:h-[200px] lg:w-[200px] xl:h-[200px] xl:w-[200px]  border-none text-justify hover:translate-y-1 hover:scale-110 hover:duration-500">
                  <CardHeader className=" w-[250px]">
                    {Data[6].imageURL && <Image width={300} height={600} src={Data[6].imageURL} alt="image" className='xl:h-[300px] lg:h-[300px]'></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6  text-black xl:whitespace-nowrap text-[15px] xl:text-ellipsis">{Data[6].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[6].description}</CardDescription>
                  <CardFooter>
                    <p>Rs {Data[6].price}</p>
                  </CardFooter>
                </Card>
                </Link>

              )}
              {/* product 4 */}
              {Array.isArray(Data) && Data.length > 0 && Data[4] && (

                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[4]) }
                }}
                >
                <Card key={Data[4]._id} className="h-[200px] w-[200px] mb-[200px] border-none text-justify hover:translate-y-1 hover:scale-110 hover:duration-500">
                  <CardHeader className=" w-[250px]">
                    {Data[4].imageURL && <Image width={300} height={600} src={Data[4].imageURL} alt="image" className='xl:h-[300px] lg:h-[300px]' ></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6 text-black xl:whitespace-nowrap xl:text-ellipsis text-[15px]">{Data[4].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[4].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[4].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
            </div>
  
            {/* View Collection Button */}
            <div className="my-10 flex justify-center items-center">
              <Link href={'productListing'}>
              <button className="bg-[#F9F9F9] text-black hover:bg-[#b54141] hover:translate-y-1 hover:scale-110 hover:duration-100  py-4 px-6 rounded-[5px] text-text-white">
                View products
              </button>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
};