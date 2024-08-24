export default function AboutUs() {
  return (
    <section className="about-us flex flex-col justify-center items-center text-center px-10 sm:px-14 md:px-20">
      <h3 className="text-xl playfair-display-extrabold">
        Where Every Bloom Tells a Story
      </h3>
      <section className="vision mt-14">
        <h4 className="prompt-semibold mb-3">Our Vision</h4>
        <p>
          At Poppy Florist, our vision is to bring joy, beauty, and elegance
          into every home and heart through the art of floral design. We aim to
          be the leading floral boutique known for our commitment to quality,
          creativity, and personalized service.
        </p>
      </section>
      <section className="mission mt-14">
        <h4 className="prompt-semibold mb-3">Our Missions</h4>
        <ol className="text-left">
          <li className="relative pl-6 mb-3 mb-3">
            <span className="absolute left-0">1.</span>
            To curate stunning floral arrangements that reflect the unique
            emotions and occasions of our customers.
          </li>
          <li className="relative pl-6 mb-3">
            <span className="absolute left-0">2.</span>
            To provide exceptional customer service, ensuring every experience
            with Poppy Florist is memorable and delightful.
          </li>
          <li className="relative pl-6 mb-3">
            <span className="absolute left-0">3.</span>
            To source the freshest flowers and sustainable materials, supporting
            local growers and eco-friendly practices.
          </li>
          <li className="relative pl-6 mb-3">
            <span className="absolute left-0">4.</span>
            To inspire and educate our community on the beauty and significance
            of flowers, fostering a deeper connection with nature.
          </li>
        </ol>
      </section>
      <section className="journey mt-14">
        <h4 className="prompt-semibold mb-3">Our Journey</h4>
        <p>
          Founded in 2018, Poppy Florist was born out of a passion for flowers
          and a love for creativity. Our founder, Yustina Yasin, started the
          boutique with a simple belief: that every bloom has a story to tell.
          From humble beginnings, Poppy Florist has grown into a beloved local
          business, known for its exquisite designs and heartfelt service.
          Today, we continue to honor our roots by staying true to our core
          values, while embracing new trends and innovations in floral artistry.
        </p>
      </section>
      <section className="services mt-14">
        <h4 className="prompt-semibold mb-3">Our Services</h4>
        <ol className="text-left">
          <li className="relative pl-6 mb-3">
            <span className="absolute left-0">1.</span>
            <strong>Custom Floral Arrangements:</strong> Tailored to fit any
            occasion, from weddings and anniversaries to corporate events and
            intimate gatherings.
          </li>
          <li className="relative pl-6 mb-3">
            <span className="absolute left-0">2.</span>
            <strong>Subscription Service:</strong> Enjoy fresh flowers delivered
            to your door regularly, with options for weekly, bi-weekly, or
            monthly plans.
          </li>
          <li className="relative pl-6 mb-3">
            <span className="absolute left-0">3.</span>
            <strong>Event Planning and Design:</strong> Expert floral design and
            planning for weddings, corporate events, and special celebrations.
          </li>
          <li className="relative pl-6 mb-3">
            <span className="absolute left-0">4.</span>
            <strong>Workshops:</strong> Learn the art of flower arrangement with
            our hands-on workshops, perfect for beginners and enthusiasts alike.
          </li>
          <li className="relative pl-6 mb-3">
            <span className="absolute left-0">5.</span>
            <strong>Delivery Service:</strong> Fast and reliable delivery to
            your doorstep or to your loved ones, ensuring your flowers arrive
            fresh and beautiful.
          </li>
        </ol>
      </section>
    </section>
  );
}
