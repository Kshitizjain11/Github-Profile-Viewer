import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useSort } from '../context/SortContext';

const options = [
  'Update',
  'Create',
  'Stars',
  'Forks',
  'Issues',
];

export default function SimpleListMenu() {
    const {selectedSort,setSelectedSort} = useSort()
  const [anchorEl, setAnchorEl] = React.useState(null);
      const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setSelectedSort(index)
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <List className=''
        component="nav"
      >
        <ListItemButton
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText className='w-full text-lg flex items-center  justify-between gap-3'
            primary="Sort By:"
            secondary  ={options[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            role: 'menubar',
          },
          paper:{
            style:{
              width: anchorEl ? anchorEl.clientWidth : undefined
            }
          }
        }}
        
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
