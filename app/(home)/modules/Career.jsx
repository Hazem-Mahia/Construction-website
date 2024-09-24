import React from "react";
import { SectionName } from "@/components/SectionName";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const Career = () => {
  return (
    <section style={{ marginTop: "150px" }}>
      <Container>
        <SectionName name="careers" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="mb-4">JOIN OUR TEAM!</h2>
            <Image
              src="/worker.jpg"
              alt="worker"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full mb-4 md:hidden "
            />
            <div className="space-y-4 mb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem soluta autem neque eius dolores consequatur
                exercitationem mollitia inventore modi, est commodi recusandae,
                animi reprehenderit odio dolor dolorum quidem sint molestias?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem soluta autem neque eius dolores consequatur
                exercitationem mollitia inventore modi, est commodi recusandae,
                animi reprehenderit odio dolor dolorum quidem sint molestias?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem soluta autem neque eius dolores consequatur
                exercitationem mollitia inventore modi, est commodi recusandae,
                animi reprehenderit odio dolor dolorum quidem sint molestias?
              </p>
            </div>
            <Button />
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/worker.jpg"
              alt="worker"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full  "
            />
            <Image
              src="/dots.png"
              alt="dots"
              width={200}
              height={200}
              className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 hidden md:block "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
