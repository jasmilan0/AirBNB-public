import Image from "./8-Image";

export default function PlaceImg({ place, index=0 }) {
  if (!place.photos?.length) {
    return "";
  }

  return (
    <Image
      className='object-cover w-full'
      src={place.photos[index]}
      alt=""
    />
  );
}
