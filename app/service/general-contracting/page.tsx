import { ServicePageContent } from "@/app/contact/modules/ServicePageContent";

export default function GeneralContracting() {
  return <ServicePageContent {...data} />;
}

const data = {
  title: "GENERAL CONTRACTING",
  subtitle: "Renovation and Restoration",
  image: "/hero.jpg",
  description: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      reprehenderit similique, animi eveniet odit quod est quos adipisci debitis
      modi. Sed recusandae mollitia nulla, assumenda quae eaque quis labore
      molestias?
      <br />
      <br />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
      repudiandae ipsum inventore ipsam accusamus necessitatibus expedita qui,
      aliquid nesciunt laborum dicta corporis nobis optio fugiat voluptates!
      Itaque velit hic et.
    </>
  ),
};
