import { ChakraProvider } from '@chakra-ui/react';
import Routas from './components/Routes';


function App() {
  return (
    <ChakraProvider>
      <Routas/>
    </ChakraProvider>
  );
}

export default App;
