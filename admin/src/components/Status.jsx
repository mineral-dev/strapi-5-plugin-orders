import { Badge } from '@strapi/design-system';
import React, { useEffect, useState } from 'react';

const Status = ({ data }) => {
  const [status, setStatus] = useState({
    name: '',
    variant: 'success-light'
  });

  useEffect(() => {
    const statusMap = {
      0: 'Pending Payment',
      1: 'Paid',
      2: 'Shipped',
      3: 'Canceled',
      4: 'Expired',
      5: 'Canceled by Admin',
      999: 'Need Verification'
    };

    if (data in statusMap) {
      setStatus({
        name: statusMap[data],
        variant: 'success-light' // Optionally vary this based on status
      });
    }
  }, [data]);

  return <Badge>{status.name}</Badge>;
};

export { Status };

