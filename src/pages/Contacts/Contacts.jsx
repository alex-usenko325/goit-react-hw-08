import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          fontSize: "28px",
          marginBottom: "10px",
          color: "#555",
        }}
      >
        Contacts
      </h2>
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Contacts;
