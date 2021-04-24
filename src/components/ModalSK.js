import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import CheckboxButton from './CheckboxButton'

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles ((theme) => ({
  containerDialogSK:{
    width: '534px',
    height: '851px',
    paddingLeft:'35px',
    paddingRight: '35px',
    borderRadius: '15px',
  },
  box: {
    /*width: '464px',*/
    width: '552px',
    height: '123px',
    marginTop: '26px',
    paddingTop: '21px',
    backgroundColor:'#000',
    borderRadius: 5,
    textAlign: 'center',
    alignItems: 'center',
  },
  logoEduModal: {
    width: '220px',
    [theme.breakpoints.down('xs')]: {
      width: '190px',
    }
  },
  textUnderLogo: {
    color:'#fff',
    fontWeight: '400',
    fontSize: '10px',
    fontFamily: 'Montserrat',
  },
  textHeaderModal:{
    color: '#000',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '27px',
  },
  textModal:{
    color: '#000',
    textAlign: 'justify',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '18px',
  },
  paragraf: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '14px',
  },
  btnGoogle: {
    backgroundColor: '##ABABAB',
    height: '51px',
    width: '474px',
    borderRadius: '5px',
    paddingLeft: '25px',
    paddingRight: '25px',
    border: '2px solid #F5F5F5',
    '&:hover': {
      background: '#F5F5F5',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
  icGoogle: {
    width: '30px',
  },
})) 



function ModalSK() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <container
        className= {classes.containerDialogSK}
      >
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          /*aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"*/
        >
          <DialogTitle >
            <Typography className={classes.textHeaderModal}>
              Masuk & daftar
            </Typography> 
            <Box className={classes.box}>
              <img
                src='/assets/logo.png'
                alt='logo'
                className={classes.logoEduModal}
              />
              <Typography className={classes.textUnderLogo}>
                Syarat Ketentuan & Kebijakan Privasi
              </Typography>
            </Box>
          </DialogTitle>

          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Typography className={classes.textModal}>
                <Typography className={classes.title}>
                  Syarat Ketentuan & Kebijakan Privasi
                </Typography>
                <Typography className={classes.paragraf}>
                  <p>
                    Kepada Pengguna,
                  </p>
                  <p>
                    Dengan menggunakan layanan ini (“Kami”), Anda (“pengguna”) akan mempercayakan informasi yang pengguna berikan saat registrasi. Kami sangat memahami betapa pentingnya informasi ini bagi pengguna, dengan demikian kami memprioritaskan keamanan informasi serta data pengguna agar tetap terjaga dan terlindungi. 
                  </p>
                  <p>
                    Untuk penghormatan akan privasi pengguna, kami mengadopsi pada Privacy Framework A Tool for Improving Privacy Through Enterprise Risk Management, Version 1.0.” Kerangka Privasi NIST: Sebuah Instrumen Untuk Meningkatkan Privasi Melalui Manajemen Risiko Bisnis, Versi 1.0” yang dipublikasikan oleh lembaga milik Amerika Serikat yakni, National Institute of Stpenggunards and Technology (NIST). Selain itu, kami juga merujuk pada ketentuan hukum nasional, seperti Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik, yang kemudian diubah menjadi Undang-Undang Nomor 19 Tahun 2016, Peraturan Pemerintah Nomor 8 Tahun 2012 tentang Penyelenggaraan Sistem dan Transaksi Elektronik yang kemudian diubah menjadi Peraturan Pemerintah Nomor 71 tentang Penyelenggaraan Sistem dan Transaksi Elektronik dan Peraturan Menteri Komunikasi dan Informatika Nomor 20 Tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik.
                  </p>
                  <p>
                    Untuk penghormatan akan privasi pengguna, kami mengadopsi pada Privacy Framework A Tool for Improving Privacy Through Enterprise Risk Management, Version 1.0.” Kerangka Privasi NIST: Sebuah Instrumen Untuk Meningkatkan Privasi Melalui Manajemen Risiko Bisnis, Versi 1.0” yang dipublikasikan oleh lembaga milik Amerika Serikat yakni, National Institute of Stpenggunards and Technology (NIST). Selain itu, kami juga merujuk pada ketentuan hukum nasional, seperti Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik, yang kemudian diubah menjadi Undang-Undang Nomor 19 Tahun 2016, Peraturan Pemerintah Nomor 8 Tahun 2012 tentang Penyelenggaraan Sistem dan Transaksi Elektronik yang kemudian diubah menjadi Peraturan Pemerintah Nomor 71 tentang Penyelenggaraan Sistem dan Transaksi Elektronik dan Peraturan Menteri Komunikasi dan Informatika Nomor 20 Tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik.
                  </p>
                  <p>
                    Pada syarat ketentuan dan kebijakan privasi ini, memiliki tujuan untuk...
                  </p>
                </Typography>
              </Typography>  
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Box>
              {/*<CheckboxButton/>*/}
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Dengan masuk atau mendaftar, anda menyetujui Syarat Ketentuan dan Kebijakan Privasi"
                    labelPlacement="end"
                />
                </FormGroup>
              </FormControl>
            </Box>

            <Button 
            onClick={handleClose} 
            className={classes.btnGoogle}
            variant="contained"
            >
              <img
                src='/assets/ic_google.png'
                alt='google minit'
                className={classes.icGoogle}
              />
              &nbsp;
              <Typography>
                Masuk & daftar dengan Google
              </Typography>
            </Button>
          </DialogActions>

          

        
          
            
            
            

          
        </Dialog>
      </container>
    </div>
  );
}

export default ModalSK;