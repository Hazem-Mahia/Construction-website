import Image from "next/image";
import React from "react";
import Award from "../../public/award.png";
import { Badge } from "@/components/Badge";
export const ContactDetails = () => {
  return (
    <div>
      <div className="relative w-24 h-24 m">
        <Image
          src={Award}
          alt="award"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h2 className="my-4">Contact us </h2>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem
        beatae odio numquam <br />
        <br /> consequatur repudiandae id fuga similique, aliquam animi delectus
        praesentium <br />
        <br />
        qui labore ducimus eos excepturi dicta temporibus quas.
      </p>
      <div className="text-black">
        <Badge />
      </div>
    </div>
  );
};
