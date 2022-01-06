import React from "react";
import {
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  caption: {
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    marginTop: 25,
    padding: 40,
    textAlign:"justify",
    justifyContent:"center",
    direction: "rtl",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const HelpPrice = () => {
  const classes = useStyles();


  return (
    <ThemeProvider theme={darkTheme}>
        <Container>
          <Toolbar>
            <Typography
              variant="h4"
              className={classes.caption}
            > 
            <p>   
           قیمت دلار در ایران وابسته به مسائل سیاسی و اقتصادی کشور می باشد و تتر نیز معادل 1 دلار آمریکا است که در برخی از شرایط چند سنتی کاهش یا افزایش می یابد قیمت تتر شامل چند پارامتر می شود اولین مورد نرخ ارز آزاد در ایران که البته به علت تکنولوژی و آسانتر بودن نگه داری تتر از دلارکاغذی و واقعی کمی گران است دومین مورد بحث عرضه و تقاضای تتر می باشد که در بازار ایران محدود بوده و با افزایش تقاضا افزایش قیمت معنی داری بین قیمت تتر و دلار آزاد ایجاد می شود
              </p> 
            </Typography>
          </Toolbar>
        </Container>
    </ThemeProvider>
  );
}
export default HelpPrice;