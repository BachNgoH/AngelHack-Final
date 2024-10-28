// server/services/helloService.ts

// Example service that simulates fetching data from a database or external API
export const getHelloService = async () => {
    // Simulating a data fetch
    return { message: 'Hello, World!' };
  };
  
  export const postHelloService = async (input: string) => {
    // Simulating data processing or saving to a database
    return { message: `Received: ${input}` };
  };
  