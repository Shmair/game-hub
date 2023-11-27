import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { ChevronDownIcon } from "@chakra-ui/icons";

const PlatformSelector = () => {
  const { data: platforms, error, isLoading } = usePlatforms();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
