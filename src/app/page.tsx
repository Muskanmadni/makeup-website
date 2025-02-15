
import { HeroSection } from "@/components/herosection";
import { BrandDetails, Newsletter } from "@/components/homepage";
import { CeramicProducts } from "@/components/ceramicproduct";
import { PopularProductlist } from "@/components/popularproducts"







export default  function Home(){
  return(
    <div>
      <HeroSection/>
      <BrandDetails/>
      <CeramicProducts/>
      <PopularProductlist/>
      <Newsletter/>
    </div>
  )
}