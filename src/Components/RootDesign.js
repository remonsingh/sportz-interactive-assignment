import { makeStyles } from '@material-ui/core/styles';

const styling = makeStyles((design) => ({
 root: {
      flexGrow: 4,
    },
 paper: {
      padding: design.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      marginTop:'5%',
    },
    image: {
      width: 135,
      height: 135,
    },
<<<<<<< HEAD
    img: {
    display: 'block',
      maxWidth:  '100%',
      maxHeight:'100%',
      margin: 'auto',
=======
              img: {
   margin: 'auto',
      display: 'block',
         maxWidth: '100%',
      maxHeight: '100%',
>>>>>>> 3070a19233423440487fc8284dad13796504300a
    },
       searchWrap:{
            marginBottom: '6%'
    }
}));

export default styling;
