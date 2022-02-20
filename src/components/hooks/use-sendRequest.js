import { useState } from "react";
import { useQuery } from "react-query";

const useSendRequest = () => {
  // const [contactList, setContactList] = useState();
  const sendRequest = async () => {
    try {
      const response = await fetch(
        "https://react-form-fd387-default-rtdb.firebaseio.com/contact-list.json"
      );
      if (!response.ok) {
        throw new Error("Database not reached");
      }
      const data = await response.json();
      if (data) {
        return data;
      } else {
        throw new Error("Invalid data received");
      }
    } catch (error) {
      return error;
    }
  };

  const query = useQuery("contacts", sendRequest);
  return query;
};

export default useSendRequest;
