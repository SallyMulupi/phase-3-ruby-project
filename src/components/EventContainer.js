import { Grid } from "@mantine/core";
import EventCard from "./EventCard";

const EventContainer = ({ events }) => {
  return (
    <Grid gutter="lg">
      {events.map((event) => {
        return (
          <EventCard
            event_name={event.event_name}
            key={event.id}
            id={event.id}
            image={event.image_url}
            location={event.location}
          />
        );
      })}
    </Grid>
  );
};

export default EventContainer;
