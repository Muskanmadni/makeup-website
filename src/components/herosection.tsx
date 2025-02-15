

import heroimage from "@/images/products/herosection.jpg"
import Image from "next/image";


export function HeroSection() {
    return (
        <section>
            <div className=" ">
                <Image src={heroimage} alt="image" className="h-[300px] w-full lg:h-[500px] md:h-[500px] xl:h-[700px]" ></Image>
                <div className="absolute inset-0 flex top-36 pr-[50px]  justify-end  sm:justify-end md:justify-end lg:justify-end lg:pr-[200px] lg:top-[120px] xl:top-[120px] xl:pr-[300px] md:top-[100px] md:pr-[120px] sm:pr-[120px]">
                    <div className="text-white">
                        <p className="lg:text-[50px] text-[20px] xl:text-[80px] md:text-[50px]">Beauty</p>

                        <p className="lg:text-[50px] text-[20px] xl:text-[80px] md:text-[50px]"> Is</p>
                        <br/>
                        <p className="lg:text-[50px] text-[20px] xl:text-[80px] md:text-[50px]">All</p>
                        <br/>
                        <p className="lg:text-[50px] text-[20px] xl:text-[80px] md:text-[50px]">About</p>
                        <br/>
                        <p className="lg:text-[50px] text-[20px] xl:text-[80px] md:text-[50px] ">You</p>
                    </div>
                </div>
            </div>
        </section>

    )
}