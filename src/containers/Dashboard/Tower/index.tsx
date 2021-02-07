import React from 'react';
import ComingSoon from 'src/components/ComingSoon';
import Layout from 'src/components/includes/Layout';

interface Props {}

const Tower = (props: Props) => {
  return (
    <Layout showTower={true}>
      <ComingSoon />
    </Layout>
  );
};

export default Tower;
