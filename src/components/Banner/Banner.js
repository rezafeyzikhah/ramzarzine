import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
    backgroundSize:"cover",
    backgroundrepeat: "no-repeat",
    backgroundposition: "center center",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            رمز ارزینه
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: "#2196f3",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            اطلاعات مربوط به رمزارز مورد علاقه خود را دریافت کنید
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
