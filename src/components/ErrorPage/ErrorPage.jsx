import errorImage from "../../assets/images/errorPage.jpg"

function ErrorPage() {
  return (
    <>
      <div>
        Error! This page is not found
        <img src={errorImage} alt="error" />
      </div>
    </>
  );
}

export default ErrorPage;