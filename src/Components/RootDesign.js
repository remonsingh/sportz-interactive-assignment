import { styleImplement } from '@material-ui/core/styles';

const styling = styleImplement((design) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: design.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      marginTop:'5%',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    searchWrap:{
        marginBottom: '2%'
    }
}));

export default styling;