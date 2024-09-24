import { SectionName } from "@/components/SectionName";
import Image from "next/image";
import React from "react";

export const Certificates = () => {
  return (
    <div>
      <SectionName name="certificates" id="certificates" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente sed
        alias nulla, voluptatibus, maiores ullam natus cumque animi repellendus,
        ratione corporis culpa quia ea neque rem. Architecto quasi corporis
        quos?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
        <div className="flex justify-center items-center">
          <Image
            src="/certificate.jpg"
            alt="certificate"
            width={160}
            height={160}
            className="rounded-full overflow-hidden"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/certificate2.png"
            alt="certitcate"
            sizes="100vw"
            width={160}
            height={160}
            className="rounded-full overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};
