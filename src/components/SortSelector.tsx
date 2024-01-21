import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface SortSelectorProps {
  onSelectOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectOrder, sortOrder }: SortSelectorProps) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-added', label: 'Date Added' },
    { value: '-rating', label: 'Average Rating' },
    { value: '-metacritic', label: 'Popularity' },
  ];

  const selectedSort = sortOrders.find((sort) => sort.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSort?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort, index) => (
          <MenuItem key={index} value={sort.value} onClick={() => onSelectOrder(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
