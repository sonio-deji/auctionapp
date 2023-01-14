import "./newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="title">NEWSLETTER</div>
        <p>Subscribe to get daily updates in new drops & exciting deals</p>
        <div className="submit">
          <input type="text" placeholder="ENTER YOUR EMAIL" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
