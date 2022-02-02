import MeetupItem from "./MeetupItem";
import css from "./MeetupList.module.css";
const MeetupList = (props) => {
  return (
    <ul className={css.list}>
      {props.meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} item={meetup} />;
      })}
    </ul>
  );
};

export default MeetupList;
