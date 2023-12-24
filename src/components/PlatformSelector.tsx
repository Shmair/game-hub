import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../services/store";

const PlatformSelector = () => {
  const platformId = useGameQueryStore((s) => s.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data, error, isLoading } = usePlatforms();
  const selectedPlatformName = usePlatform(platformId)?.name || "Platforms"; // maybe we can add it to the store
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedPlatformName}
      </MenuButton>
      <MenuList>
        {data?.results?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
