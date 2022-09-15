import React, { useState } from "react"
import {
    Grid,
    Card,
    Image,
    Button,
    Group,
    Text,
    useMantineTheme,
    FloatingTooltip,
} from "@mantine/core";
import { IconStar, IconMessage } from "@tabler/icons";
import { Link } from "react-router-dom";const EventCard = ({ id, image, event_name, location, btntxt }) => {
    const [isFavorited, setIsFavorited] = useState(true);
  
    function handleFavorited() {
      setIsFavorited(!isFavorited);
    }
  
    const theme = useMantineTheme();
  
    const secondaryColor =
      theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  
    return (
      <Grid.Col span={4}>
        <Card shadow="sm" p="lg" key={id}>
          <Card.Section>
            <Image src={image} height={160} alt={event_name} />
          </Card.Section>
  
          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>{event_name}</Text>
          </Group>
  
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {location}
          </Text>
  
          <Group position="right">
            <FloatingTooltip label="Review" color="dark" position="top">
              <Link to={`/events/${id}`}>
                <IconMessage onClick={(e) => console.log("message clicked")} />
              </Link>
            </FloatingTooltip>
            <FloatingTooltip label="Favorite" color="dark" position="top">
              {isFavorited ? (
                <IconStar onClick={handleFavorited} />
              ) : (
                <IconStar color="red" onClick={handleFavorited} />
              )}
            </FloatingTooltip>
          </Group>
        </Card>
      </Grid.Col>
    );
  };
  
  export default EventCard;
  