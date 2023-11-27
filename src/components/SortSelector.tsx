import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
  sortCategory: string;
  onSelectSortCategory: (sortCategory: string) => void;
}
const SortSelector = ({ sortCategory }: Props) => {
  const categories = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: {sortCategory}
      </MenuButton>
      <MenuList>
        {categories.map((category) => (
          <MenuItem>{category}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
