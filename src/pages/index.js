import React from 'react';
import { Helmet } from 'react-helmet';
import '../style/index.scss';
import App from '../components/App';

const portfolio = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Jason Thompson | Portfolio</title>
        <html lang='en' />
        <meta
          name='description'
          content='Personal Web Developer Portfolio.'
        />
      </Helmet>
      <App />;
    </>
  );
};

export default portfolio;
