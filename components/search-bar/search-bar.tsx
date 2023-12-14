import React from 'react';
import { Box } from '../controllers/box/box';
import style from './search-bar.styles';
import { TextInput } from 'react-native';
import Search from '@equalbill/assets/images/search_icon.svg';
import Delete from '@equalbill/assets/images/closeIcon.svg';
import SearchBarProps from './interfaces';
import useSearchBar from './hooks/useSearchBar';
const SearchBar = ({ onPressSearch, onPressDelete }: SearchBarProps) => {
  const { searchTerm, setSearchTerm } = useSearchBar();
  return (
    <Box style={style.container}>
      <Box style={style.searchbar}>
        <Box onPress={() => onPressSearch(searchTerm)} style={style.search_icon}>
          <Search />
        </Box>
        {searchTerm?.length > 0 && (
          <Box
            onPress={() => {
              onPressDelete();
              setSearchTerm('');
            }}
            style={style.delete_icon}
          >
            <Delete width={14} height={14} />
          </Box>
        )}
        <TextInput
          style={style.input}
          value={searchTerm}
          onChangeText={v => {
            setSearchTerm(v);
            onPressSearch(v);
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
