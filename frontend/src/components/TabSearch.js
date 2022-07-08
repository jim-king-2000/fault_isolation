import { Box, Heading, Text, TextInput, Button } from 'grommet';

function TabSearch() {
  return (
    <Box gap='small'>
      <Text>Board:</Text>
      <TextInput placeholder='default' />
      <Text>Test:</Text>
      <TextInput placeholder='TEST.1' />
      <Text>Error:</Text>
      <TextInput placeholder='SOFTWARE_ERROR' />
      <Text>User Pattern:</Text>
      <TextInput placeholder='Regular Expression' />
      <Box direction='row' gap='small'>
        <Button primary label='Search' />
        <Button label='Upload Tips' />
      </Box>
    </Box>
  );
}

export default TabSearch;