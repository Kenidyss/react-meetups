import { useRef } from "react";
import css from "./NewMeetupForm.module.css";
import Card from "../Ui/Card";
const NewMeetupForm = (props) => {
  const titleInpRef = useRef();
  const imgInpRef = useRef();
  const addressInpRef = useRef();
  const descInpRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();

    const entrdTitle = titleInpRef.current.value;
    const entrdImg = imgInpRef.current.value;
    const entrdAddress = addressInpRef.current.value;
    const entrdDesc = descInpRef.current.value;

    const meetupData = {
      title: entrdTitle,
      image: entrdImg,
      address: entrdAddress,
      description: entrdDesc,
    };
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={css.form} onSubmit={submitHandler}>
        <div className={css.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInpRef} />
        </div>
        <div className={css.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imgInpRef} />
        </div>
        <div className={css.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInpRef} />
        </div>
        <div className={css.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            name="description"
            required
            id="description"
            rows="5"
            ref={descInpRef}
          ></textarea>
        </div>
        <div className={css.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
