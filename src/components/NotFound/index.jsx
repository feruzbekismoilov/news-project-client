import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container">
      <div className="wrapper vh-100 d-flex flex-column justify-content-center align-items-center ">
        <h2 className="d-flex gap-2">
          <strong>404</strong>Not Found
        </h2>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
