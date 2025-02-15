import Image from "next/image"
import aboutimage1 from "@/images/products/aboutpageImage2.png"
import aboutimage2 from "@/images/products/aboutpageImage1.png"
import { Newsletter } from "@/components/homepage"
export default function About(){
    return(
        <div>
            <div className=" w-[100vw] h-[200px] justify-center flex pt-[50px] text-[30px] font-[clashdisplay] text-[#2A254B] ">
                <p>A brand built on the love of craftmanship,<br/>quality and outstanding customer service</p>
            </div>
            <div className="flex md:flex-col lg:flex-col-reverse">
                <div className="text-justify text-[#2A254B] mt-[50px]">
                    <p className=" text-[20px] font-[clashdisplay] font-bold text-[#2A254B] ml-[20px] ">From a studio in London to a global brand with<br/>over 400 outlets</p>
                    <p className="text-[#505977] text-[Satoshi] pt-[20px] ml-[20px] ">When we started Avion, the idea was simple. Make high quality furniture<br/> affordable  and available for the mass market </p>
                    <p className="text-[#505977] text-[Satoshi] text-[15px] pt-[20px] ml-[20px] ">Handmade and lovingly crafted furniture, and homeware is what we live,<br/> breathe and design so our Chelsea boutique become the hotbed for the<br/>London interior design community.</p>
                </div>
                <div className="xl:ml-[160px] lg:ml-[0] ">
                    <Image src={aboutimage1} alt="aboutimage"  width={630}></Image>
                </div>
                
                
                
            </div>
            <div className="flex md:flex-col-reverse lg:flex-col mb-28">
                <Image src={ aboutimage2} alt="aboutimage"width={670}></Image>
                <div className="flex">
                <div className="text-justify text-[#2A254B] mt-[50px]">
                    <p className=" text-[20px] font-[clashdisplay] font-bold text-[#2A254B] ml-[20px] ">From a studio in London to a global brand with<br/>over 400 outlets</p>
                    <p className="text-[#505977] text-[Satoshi] pt-[20px] ml-[20px] ">When we started Avion, the idea was simple. Make high quality furniture<br/> affordable  and available for the mass market </p>
                    <p className="text-[#505977] text-[Satoshi] text-[15px] pt-[20px] ml-[20px] ">Handmade and lovingly crafted furniture, and homeware is what we live,<br/> breathe and design so our Chelsea boutique become the hotbed for the<br/>London interior design community.</p>
                </div>
            </div>
            </div>
            <Newsletter/>
        </div>
    )
}
    
