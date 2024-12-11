import {createTheme} from '@mui/material';
import { grey, cyan } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette : {
    primary : {
      main : grey[500],
      dark : grey[800],
      light : grey[500],
      contrastText : '#ffffff'
    }, 
    secondary : {
      main : cyan[500],
      dark : cyan[400],
      light : cyan[300],
      contrastText : '#ffffff'
    },
    background : {
      default : '#fafafa',
      paper : '#ffffff',
    }    
  },
  typography : {
    allVariants : {
      color : 'black'
    }
  }
});