import Card from "./card";
import Product1 from "./../../public/product-1.jpg";

export default function Shop() {
  return (
    <section className="products flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:gap-14 md:grid-cols-3">
      <Card
        imageSource={Product1}
        productName="Gerbera"
        productPrice="Rp 16.000"
      />
      <Card
        imageSource={Product1}
        productName="Gerbera"
        productPrice="Rp 16.000"
      />
      <Card
        imageSource={Product1}
        productName="Gerbera"
        productPrice="Rp 16.000"
      />
    </section>
  );
}
