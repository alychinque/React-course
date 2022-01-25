import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

function MeetupList(props){
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem 
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          // meetup={meetup}
          // I could pass meetup as an object and then I would have to destructure it inside
          //meetupItem component
        />
      ))}
    </ul>
  );
}

export default MeetupList