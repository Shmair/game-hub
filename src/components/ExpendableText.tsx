import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Prop {
  children: string;
  maxChar?: number;
}

const ExpendableText = ({ children, maxChar = 300 }: Prop) => {
  const [expended, setExpended] = useState(true);

  if (!children) return null;
  if (children.length < maxChar) return <Text>{children}</Text>;

  return (
    <>
      {expended ? children.substring(0, 300) + "..." : children}
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
