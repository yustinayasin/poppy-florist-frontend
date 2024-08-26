import ListProduct from "./ListProduct";

export default function Checkout() {
  return (
    <section className="checkout w-[300px] md:w-[600px] lg:w-[800px] flex flex-col justify-center items-center md:flex-row md:items-start">
      <section className="overflow-y-auto md:h-[400px] w-full">
        <h1 className="text-lg mb-4 prompt-medium">My Bag</h1>
        <section>
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
        </section>
      </section>
      <section className="w-full md:ml-8">
        <h3 className="text-md">Order Summary</h3>
        <section className="order-summary flex flex-row text-sm w-full justify-between mt-3">
          <section className="flex flex-col text-left justify-start">
            <p>Subtotal</p>
            <p>Standard shipping</p>
          </section>
          <section className="flex flex-col text-right">
            <p>Rp 100.000</p>
            <p>Rp 20.000</p>
          </section>
        </section>
        <span className="block w-full h-[2px] my-5 bg-slate-200"></span>
        <section className="flex flex-row w-full justify-between text-md">
          <p className="text-left">Total</p>
          <p className="text-right">Rp 120.000</p>
        </section>
        <span className="block w-full h-[2px] my-5 bg-slate-200"></span>
        <button className="btn btn-neutral w-full btn-wide bg-black text-white hover:bg-black hover:text-white">
          Checkout
        </button>
      </section>
    </section>
  );
}
