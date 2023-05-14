import PropTypes from "prop-types";
import userImg from "../../assets/icons/user-icon.svg";
const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <div className="admin-layout__start">
        <div className="admin-layout__start--user-information">
          <img src={userImg} alt="" />
        </div>
      </div>
      <div className="admin-layout__end">{children}</div>
    </div>
  );
};
AdminLayout.propTypes = {
  children: PropTypes.object,
};
export default AdminLayout;
