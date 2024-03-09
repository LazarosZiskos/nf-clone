import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt="background-image"
      />
    </div>
  );
};

export default page;
