import { useState} from 'react'
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState()
  // fetching data from api
  fetch(
    'https://react-course-90a5e-default-rtdb.firebaseio.com/meetups.json'
    // it doesn't need to configure because it is a get by default
    // fetch returns a Promise, we can use then method
  )
    .then(response => {
      return response.json()
    })
    .then(data => {
      setIsLoading(false)
      setLoadedMeetups(data)
    })
  
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    // returning JSX code
    <section>
      <h1>All Meetups</h1>
      {/* {DUMMY_DATA.map((meetup) => {
        return <li key={meetup.id}>{ meetup.title }</li>
      })} */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetupsPage;