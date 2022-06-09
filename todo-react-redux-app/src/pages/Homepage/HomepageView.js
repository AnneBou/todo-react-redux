import { useEffect, useState } from 'react';
import { routes } from '../../navigation/routes';

const theme = createTheme();

const AccountActivationView = ({
  auth: { isAuthenticated },
  validateAccount
}) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(false);

  const history = useHistory();

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
  const location = useLocation();
  const { pathname } = location;
  const splitPathname = pathname.split('/');

  useEffect(() => {
    (async () => {
      const data = parseJwt(splitPathname[2]);
      if (data.valid) {
        const res = await validateAccount(data.userId);
        console.log(res);
        setMsg(res);
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isAuthenticated && <Redirect to="/dashboard" />}
      {!loading ? (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Link href="/" variant="body2">
                <div className="logoContainer">
                  <img src={logoBig} alt="" />
                </div>
              </Link>
              <Typography
                sx={{ mt: 4 }}
                style={{ margin: '20px 0' }}
                component="h1"
                variant="h6"
              >
                {t(`auth.${msg}`)}
              </Typography>
              <OrangeButton
                style={{ margin: '20px 0' }}
                onClick={() => history.push(routes.LOGIN)}
              >
                {t('auth.login')}
              </OrangeButton>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default AccountActivationView;
