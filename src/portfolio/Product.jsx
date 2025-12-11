import ProductCard from "./ProductCard.jsx";

export default function Products() {
  return (
    <div className="flex justify-center gap-6 p-10 flex-wrap">
      <ProductCard imgSrc="/src/assets/TiwaBlog.PNG"
        href="https://tiwaadetoye.com/"
        label="Blog"
        description=""
        
      />
      <ProductCard imgSrc="/src/assets/TourSite.PNG"
        href="https://eleganttours.is/#"
        label="Tourist Site"
        description=""
        
      />
      <ProductCard imgSrc="/src/assets/meriTrade.PNG"
        href="https://web.meritrade.com/"
        label="MeriTrade"
        description=""
        
      />
      
    </div>
  );
}
