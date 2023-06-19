import { extendTheme } from 'native-base';

const genesisTheme = extendTheme({
  colors: {
    // Set your primary color as the main color
    // and set white as the default text color
    primary: {
      50: '#FFF', //backgroundcolor
      100: '#FFE0B2',
      200: '#F6CB8A',
      300: '#FFB74D',
      400: '#FFA726',
      500: '#EF9223', // Main color
      600: '#FB8C00',
      700: '#F57C00',
      800: '#EF6C00',
      900: '#E65100',
    },
    secondary:{
      100:'#FEC287'
    },
  },
  // Set the default text color to white
  config: {
    defaultTextColor: '#FFF',
  },
  components: {
    Input: {
      defaultProps: {
        _focus: {
          borderColor: 'transparent',
          borderBottomColor: '#D3D3D3',
        },
      },
    },
  },
});

export default genesisTheme;