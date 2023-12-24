import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../services/store";

const searchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText); ///using selectors
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="filled"
          borderRadius="20px"
        />
      </InputGroup>
    </form>
  );
};

export default searchInput;
