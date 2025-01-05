import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import { HiPhone, HiUser } from "react-icons/hi";
import { Button } from "@mui/material";
import styles from "./Contact.module.css";

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
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <div className={styles.contactName}>
          <HiUser style={{ marginRight: "10px" }} size="24" />
          {name}
        </div>
        <div className={styles.contactNumber}>
          <HiPhone style={{ marginRight: "10px" }} size="24" />
          {number}
        </div>
      </div>
      <Button
        onClick={handleDelete}
        disabled={isDeleting}
        variant="contained"
        color="error"
        className={styles.deleteButton}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </Button>
    </div>
  );
};

export default Contact;
