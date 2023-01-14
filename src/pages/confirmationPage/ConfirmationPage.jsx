import "./confirmationPage.scss";

const ConfirmationPage = () => {
  return (
    <div className="confirmationPage">
      <div className="imgContainer">
        <img src="/src/assets/delivery.png" alt="" />
      </div>
      <div className="message">
        <p className="thankYou">Hey Celestina, thank you for your purchase.</p>
        <p className="cheers">
          You are amazing. Cheers to being <span>Artsy!</span>
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
