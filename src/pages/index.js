import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import '../style/index.scss';
import App from '../components/App';

ReactGA.initialize(process.env.UA);
ReactGA.pageview(window.location.pathname + window.location.search);

const portfolio = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Jason Thompson | Portfolio</title>
        <html lang='en' />
        <meta name='description' content='Personal Web Developer Portfolio.' />
      </Helmet>
      <App />;
    </>
  );
};

export default portfolio;
