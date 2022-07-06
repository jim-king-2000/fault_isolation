import { Grommet, Tabs, Tab, Box, Heading } from 'grommet';
import { grommet } from 'grommet/themes';
import TabSearch from '../components/TabSearch.js';
import TabUpload from '../components/TabUpload.js';

function HomePage() {
  return (
    <Grommet full theme={grommet}>
      <Box fill align='center'>
        <Box width='xlarge'>
          <Heading alignSelf='center'>Fault Isolation Web Interface</Heading>
          <Tabs>
            <Tab title='Suggestions'>
              <TabSearch />
            </Tab>
            <Tab title='Add Suggestion'>
              <TabUpload />
            </Tab>
          </Tabs>
        </Box>
      </Box>
    </Grommet>
  );
}

export default HomePage;