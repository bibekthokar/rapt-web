import React from 'react';
import { useParams } from 'react-router-dom';
import ComingSoon from 'src/components/ComingSoon';
import Layout from 'src/components/includes/Layout';
import MeasurementBody from 'src/components/page/MeasurementBody';

interface PropertyI {
  property: 'measurement' | 'other';
}

const Property = () => {
  const { property }: PropertyI = useParams();
  return (
    <Layout showTower={true}>
      {property === 'measurement' ? <MeasurementBody /> : <ComingSoon />}
    </Layout>
  );
};

export default Property;
