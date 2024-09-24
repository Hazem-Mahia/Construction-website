import Image from "next/image";
import React from "react";
import starImg from "@/public/star.png"; // Ensure you have the correct path for star image

export const Badge = () => {
  return (
    <div>
      <div className="flex gap-2">
        <div className="flex items-center gap-0.5">
          {" "}
          {/* Fixed gap class */}
          {[...Array(5)].map((_, i) => (
            <Image
              key={`star${i}`}
              src={starImg}
              width={16}
              height={16}
              alt={`star${i}`}
            /> // Added return statement and alt attribute
          ))}
        </div>
        <p className="text-sm text-white font-bold">
          +25 Successful projects {/* Fixed typo "Sucessfull" */}
        </p>
      </div>
    </div>
  );
};
