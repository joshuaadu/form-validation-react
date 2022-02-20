import useSendRequest from "./hooks/use-sendRequest";

const ContactList = (props) => {
  const query = useSendRequest();
  const list = query.isSuccess ? Object.entries(query.data) : null;

  console.log(list);
  if (list) {
    list.forEach((item) => {
      console.log(item[1].name);
    });
  }
  return (
    <ul>
      {list &&
        list.map((item) => (
          <li key={item[0]}>{`${item[1].name}: ${item[1].email}`}</li>
        ))}
    </ul>
  );
};

export default ContactList;
