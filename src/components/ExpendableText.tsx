import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Prop {
  text: string;
  maxChar?: number;
}

const ExpendableText = ({ text, maxChar = 300 }: Prop) => {
  const [expended, setExpended] = useState(true);

  if (!text) return null;
  if (text.length < maxChar) return <Text>{text}</Text>;

  return (
    <>
      {expended ? text.substring(0, 300) + "..." : text}
      {
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={1}
          onClick={() => setExpended(!expended)}
        >
          {expended ? "Show More" : "Show Less"}
        </Button>
      }
    </>
  );
};

export default ExpendableText;
