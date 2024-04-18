/* eslint-disable react/prop-types */
import Modal from "./Modal";
import userAvatar from "../../assets/userAvatar.png";
import { useDispatch } from "react-redux";
import { deleteUser, fetchUsers } from "../../redux/features/UsersSlice";
import { toast } from "react-toastify";
const UserInfoModal = ({ open, onClose, user }) => {
  const dispatch = useDispatch();
  const handleDeleteUser = () => {
    dispatch(deleteUser({ user_id: user.user_id })).then((result) => {
      if (result.payload) {
        toast.success(`User with id ${user.user_id} was deleted successfully!`);
        dispatch(fetchUsers());
      }
    });
  };
  return (
    <Modal open={open} onClose={onClose}>
      <div className=" text-center  ">
        <div className="flex flex-row justify-start items-start gap-5 mr-32">
          <img
            className="rounded mt-2"
            src={user.image || userAvatar}
            height={100}
            width={100}
          />
          <div className="flex flex-col items-start ">
            <h1 className="font-bold text-black/80 text-xl letter">
              {user.username}
            </h1>
            <p className="font-light text-black/50 text-md tracking-widest">
              {user.email}
            </p>
            <p className="font-light text-black/50 text-md tracking-widest">
              Id: {user.user_id}
            </p>
            <p className="font-light text-black/50 text-md tracking-widest capitalize">
              Role: {user.role}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-end mt-10">
          <button className="btn btn-light" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={handleDeleteUser}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
