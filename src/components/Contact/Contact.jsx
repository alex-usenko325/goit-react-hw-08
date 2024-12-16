import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { useState } from "react";
import s from "./Contact.module.css";
import { HiPhone, HiUser } from "react-icons/hi";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await dispatch(deleteContact(id)).unwrap();
    } catch (error) {
      console.error("Failed to delete contact:", error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li className={s.contact}>
      <div className={s.container}>
        <span className={s.iconText}>
          <HiUser className={s.userIcon} size="24" />
          {name}
        </span>
        <span className={s.iconText}>
          <HiPhone className={s.phoneIcon} size="24" />
          {number}
        </span>
      </div>
      <button className={s.button} onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </li>
  );
};

export default Contact;
