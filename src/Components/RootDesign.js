import { makeStyles } from '@material-ui/core/styles';

const styling = makeStyles((design) => ({
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
    display: 'block',
      maxWidth:  '100%',
      maxHeight:'100%',
      margin: 'auto',
    },
    searchWrap:{
        marginBottom: '4%'
    }
}));

export default styling;