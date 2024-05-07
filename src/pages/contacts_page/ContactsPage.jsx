import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import ContactList from "../../components/contact-list/ContactList";
import ContactForm from "../../components/contact-form/ContactForm";
import SearchBox from "../../components/search-box/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
// import { selectLoading } from "../../redux/contacts/selectors";
// import { selectError } from "../../redux/contacts/selectors";
// import { selectContacts } from "../../redux/contacts/selectors";
// import Loader from "../../components/loader/Loader";

export default function ContactsPage() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);
  //   const error = useSelector(selectError);
  //   const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Phonebook</DocumentTitle>
      <ContactForm />
      <SearchBox />
      {/* {contacts.length <= 15 && isLoading && !error && <Loader />}
      {contacts.length <= 15 && error && <p>{error}</p>} */}
      <ContactList />
      {/* {contacts.length > 15 && isLoading && !error && <Loader />} */}
    </div>
  );
}
