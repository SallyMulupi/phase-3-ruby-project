import React from "react";
import NavBar from "./NavBar";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

const Help = () => {
    const theme = useMantineTheme();
  
    const secondaryColor =
      theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  
    return (
      <div style={{ width: 340, margin: "auto" }}>
        <NavBar />
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image
              src="https://ca.slack-edge.com/T02MD9XTF-U037TRBNKT8-40bc018bdf8d-512"
              height={320}
              alt="Tech"
            />
          </Card.Section>
  
          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>Rachel Katz (Customer Support)</Text>
          </Group>
  
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            rachel.katz@flatironschool.com
          </Text>
  
          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
          >
            Email Now
          </Button>
        </Card>
      </div>
    );
  };
  
  export default Help;
  