

import { CheckCircleIcon, RecycleIcon,  } from "lucide-react"

import { CreditCardOutlined, TruckOutlined } from "@ant-design/icons"


import { Button } from "./ui/button"

import { Input } from "@/components/ui/input"


//brand details 
export function BrandDetails(){

  

    return(
        <>
        <div className="px-4 md:px-8 py-12 text-white mt-12">
          {/* Title */}
          <h1 className="text-center text-xl md:text-2xl font-semibold text-[#d14a46]">
            What makes our brand different
          </h1>

          {/* Features */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg text-[#d14a46]" >
            {/* Feature 1 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg text-[#d14a46]">
              <TruckOutlined size={30} className="text-[#d14a46]" />
              <p className="py-4 font-semibold">Next day as standard</p>
              <p>Order before 3pm and get your order the next day as standard.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg text-[#d14a46]">
            <CheckCircleIcon  size={30} className="text-[#d14a46] hover:translate-y-3 hover:duration-500"/>
              <p className="py-4 font-semibold">Authentic</p>
              <p>100% authentic and branded makeup products</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg text-[#d14a46]">
            <CreditCardOutlined size={30} className="text-[#d14a46]"/>
              <p className="py-4 font-semibold">Unbeatable prices</p>
              <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg text-[#d14a46]">
            <RecycleIcon size={30} className="text-[#d14a46]"/>
              <p className="py-4 font-semibold">Recycled packaging</p>
              <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>
    </>
    )
}
// product listing home page

//  popular product list


// news letter section
export function Newsletter(){
    return(
        <div className="lg:w-[100%] xl:w-[100%]  lg:mt-[200px] lg:h-[500px] flex lg:justify-center lg:text-center xl:justify-center xl:text-center justify-center text-center w-[]">

            <div className="bg-white w-[1300px] h-[400px] lg:w-[900px] lg:h-[400px] lg:mt-[50px] xl:w-[1500px]">
                <h2 className="text-[#b54141] newsheading text-center pt-28  text-4xl font-semibold">Join the club and get the benefits</h2>
                <p className="text-[#b54141] text-center mt-12 text-sm">Sign up for our newsletter and receive exclusive offers on new<br/> ranges, sales, pop up stores and more</p>
                <div className="flex w-full  max-w-sm lg:mt-9 lg:ml-[250px] xl:mt-9  xl:ml-[550px]  md:mt-10 md:ml-[200px] sm:mt-10 sm:ml-[150px] bg-[#b54141]">
                    <Input type="email" placeholder="Email" className="border-none"/>
                    <Button type="submit" className=" bg-[#711300] text-[#F9F9F9]">Sign Up</Button>
                </div>
            </div>
        </div>
    )
}
