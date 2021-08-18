import errorImage from "../../assets/images/errorPage.jpg"

function ErrorPage() {
  return (
    <>
      <div>
        <img src={errorImage} alt="error" />
      </div>
    </>
  );
}

export default ErrorPage;