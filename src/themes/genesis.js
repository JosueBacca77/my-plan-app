import { extendTheme } from 'native-base';

const genesisTheme = extendTheme({
  colors: {
    // Set your primary color as the main color
    // and set white as the default text color
    primary: {
      50: '#FFFFFF', //backgroundcolor
      100: '#FFE0B2',
      200: '#FFCC80',
      300: '#FFB74D',
      400: '#FFA726',
      500: '#EF9223', // Main color
      600: '#FB8C00',
      700: '#F57C00',
      800: '#EF6C00',
      900: '#E65100',
    },
    //Targets colors
    secondary:{
      100: '#D5CA19',
      200: '#8EC916',
      300: '#249C0B',
      400: '#1FA9B2',
      500: '#1465B1', 
      600: '#3E0D7D',
      700: '#A70612',
      800: '#EF6C00',
    }
  },
  // Set the default text color to white
  config: {
    defaultTextColor: '#FFFFFF',
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