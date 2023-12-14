import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatformId: (platformId: number) => void;
}
const PlatformSelector = ({
  selectedPlatformId,
  onSelectPlatformId,
}: Props) => {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatformName =
    data?.results?.find((platform) => platform.id == selectedPlatformId)
      ?.name || "Platforms";
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
            onClick={() => onSelectPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
