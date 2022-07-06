import { Box, Form, FormField, TextInput, Button } from 'grommet';

function TabUpload() {
  return (
    <Form onSubmit={({ value }) => console.log(value)}>
      <Box gap='small'>
        <FormField name='Board' htmlFor='Board' label='Board:'>
          <TextInput id='Board' name='Board' />
        </FormField>
        <FormField name='Test' htmlFor='Test' label='Test:'>
          <TextInput id='Test' name='Test' placeholder='TEST.1' />
        </FormField>
        <FormField name='Error' htmlFor='Error' label='Error:'>
          <TextInput id='Error' name='Error' placeholder='SOFTWARE_ERROR' />
        </FormField>
        <FormField name='UserPattern' htmlFor='UserPattern' label='User Pattern:'>
          <TextInput id='UserPattern' name='UserPattern' placeholder='Regular Expression' />
        </FormField>
        <Box direction='row' gap='small'>
          <Button type='submit' primary label='Add' />
        </Box>
      </Box>
    </Form>
  );
}

export default TabUpload;