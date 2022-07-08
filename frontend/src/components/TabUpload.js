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
        <FormField required name='Tip' htmlFor='Tip' label='Tip:'>
          <TextArea id='Tip' name='Tip' placeholder='Required' />
        </FormField>
        <FormField name='Commands' htmlFor='Commands' label='Commands:'>
          <TextArea id='Commands' name='Commands' />
        </FormField>
        <Box direction='row' gap='small'>
          <Button type='submit' primary label='Add' />
        </Box>
      </Box>
    </Form>
  );
}

export default TabUpload;