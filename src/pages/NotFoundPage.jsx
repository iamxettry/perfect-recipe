import { Link } from "react-router-dom";
import WrapperContainer from "../components/common/WrapperContaner";

const NotFound = () => {
  return (
    <WrapperContainer>
      <div className=" h-60 lg:h-80 flex flex-col justify-center items-center">
        <h1 className="font-bold">404 - Page Not Found</h1>
        <p className="text-neutral-600">Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="font-medium hover:underline">Go back to Home</Link>
      </div>
    </WrapperContainer>
  );
};

export default NotFound;
