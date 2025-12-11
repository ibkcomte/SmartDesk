export default function ProductCard({ imgSrc, href, label, description }) {
  return (
    <>
    <card  className="w-80 bg-white rounded-xl shadow-md p-4 text-center hover:-translate-y-1 transition">
     <img className="h-40 w-fit" src={imgSrc} alt=""/>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    <a className="font-serif" href={href} label={label} target="_blank" rel="referrer" >
     Click Here
    </a>
    </card>
   </>
  );
}
