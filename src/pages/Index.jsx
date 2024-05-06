import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const toast = useToast();

  const handleAddEvent = () => {
    if (!eventName) {
      toast({
        title: "Error",
        description: "Event name cannot be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const newEvent = {
      id: events.length + 1,
      name: eventName,
    };
    setEvents([...events, newEvent]);
    setEventName("");
    toast({
      title: "Success",
      description: "Event added successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Deleted",
      description: "Event deleted successfully",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <Flex direction="column" gap={6}>
        <Text fontSize="3xl" fontWeight="bold">Event Manager</Text>
        <FormControl>
          <FormLabel htmlFor="event-name">Add New Event</FormLabel>
          <Flex gap={2}>
            <Input id="event-name" placeholder="Enter event name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            <Button colorScheme="blue" onClick={handleAddEvent}>Add Event</Button>
          </Flex>
        </FormControl>
        <VStack spacing={4} align="stretch">
          {events.map(event => (
            <Flex key={event.id} justify="space-between" p={4} borderWidth="1px" borderRadius="lg">
              <Text>{event.name}</Text>
              <Button colorScheme="red" onClick={() => handleDeleteEvent(event.id)}>Delete</Button>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;