import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/mettups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-e080e-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "applications/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};
export default NewMeetupPage;
