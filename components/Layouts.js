import Head from 'next/head';

const Layouts = (props) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Agrim Sharma</title>
      </Head>

      <>{children}</>
    </>
  );
};

export default Layouts;
