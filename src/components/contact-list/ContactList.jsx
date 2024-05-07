import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const dataContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contact_items}>
      {dataContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contact_item}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
