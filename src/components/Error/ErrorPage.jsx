import { AiTwotoneHome } from "react-icons/ai";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="text-4xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to={"/"}
        className="btn bg-rose-800 text-white mt-4 w-48 animate-bounce"
      >
        <AiTwotoneHome />
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
