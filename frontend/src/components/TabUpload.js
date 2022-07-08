import { Box, Form, FormField, TextInput, TextArea, Button } from 'grommet';

async function upload(value) {
  const response = await fetch('/api/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });
  if (response.ok) console.log(await response.json());
}

function TabUpload() {
  return (
    <Form onSubmit={({ value }) => upload(value)}>
      <Box gap='small'>
        <FormField required name='board' htmlFor='board' label='Board:'>
          <TextInput id='board' name='board' placeholder='default' />
        </FormField>
        <FormField required name='test' htmlFor='test' label='Test:'>
          <TextInput id='test' name='test' placeholder='TEST.1' />
        </FormField>
        <FormField required name='error' htmlFor='error' label='Error:'>
          <TextInput id='error' name='error' placeholder='SOFTWARE_ERROR' />
        </FormField>
        <FormField required name='userPattern' htmlFor='userPattern' label='User Pattern:'>
          <TextInput id='userPattern' name='userPattern' placeholder='Regular Expression' />
        </FormField>
        <FormField required name='tip' htmlFor='tip' label='Tip:'>
          <TextArea id='tip' name='tip' placeholder='Required' />
        </FormField>
        <FormField name='commands' htmlFor='commands' label='Commands:'>
          <TextArea id='commands' name='commands' />
        </FormField>
        <Box direction='row' gap='small'>
          <Button type='submit' primary label='Add' />
        </Box>
      </Box>
    </Form>
  );
}

export default TabUpload;