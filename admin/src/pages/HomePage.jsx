import {
  Box,
  Flex,
  IconButton,
  Main,
  NextLink,
  PreviousLink,
  Searchbar,
  SingleSelect,
  SingleSelectOption,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Typography
} from '@strapi/design-system';
import { Eye, Filter } from '@strapi/icons';
import { Page } from '@strapi/strapi/admin';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import qs from 'qs';
import Pagination from "rc-pagination";
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Status } from '../components/Status';
import pluginPermissions from '../permissions';
import { PLUGIN_ID } from '../pluginId';
import money from '../utils/money';

dayjs.extend(utc)

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const [hasPermission, setHasPermission] = useState(false);
  const { formatMessage } = useIntl();
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState([]);
  const navigate = useNavigate();

  const page = searchParams.get('page');
  const status = searchParams.get('status');
  const q = searchParams.get('q');

  const fetchApi = async () => {

    let payload = {
      page: page ?? 0,
      ...status && { status },
      ...q && { q },
    }

    const dataParams = qs.stringify(payload, {
      arrayFormat: "repeat",
    });

    const response = await fetch(
      `/api/strapi-5-plugin-orders/orders?${dataParams}`,
    );
    const dataJson = await response.json();

    if (dataJson?.data) {
      setOrders(dataJson.data);
    }
    if (dataJson?.pagination) {
      setPagination(dataJson.pagination);
    }
  };

  // Set default page if not present
  useEffect(() => {
    if (!searchParams.get('page')) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('page', '0');
      navigate({ search: `?${newParams.toString()}` }, { replace: true });
    }
  }, [searchParams, navigate]);

  // Refetch on param change
  useEffect(() => {
    if (page !== null) {
      fetchApi();
    }
  }, [page, status, q]);

  // Handle search input
  const handleSearch = (value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set('q', value);
    } else {
      newParams.delete('q');
    }
    newParams.set('page', '0');
    navigate({ search: `?${newParams.toString()}` });
  };

  // Handle status change
  const handleStatusChange = (value) => {
    const newParams = new URLSearchParams(searchParams);

    if (value === 'all') {
      newParams.delete('status');
    } else {
      newParams.set('status', value);
    }
    newParams.set('page', '0');
    navigate({ search: `?${newParams.toString()}` });
  };
  
  const handlePaginate = (page) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', page);
    navigate({ search: `?${newParams.toString()}` });
  }

  const divItemRender = (current, type, element) => {
    if (type === "prev") {
      return <PreviousLink />
    }

    if (type === "next") {
      return <NextLink />
    }
    
    if (type === "page") {
      return <Typography>{current}</Typography>
    }
    return element
  }

  return (
    <Page.Protect permissions={pluginPermissions.view}>
      <Main>
        <Box style={{ marginTop: 24, marginLeft: 16, marginRight: 16 }}>
          <Typography variant="alpha" as="h2">
            Orders
          </Typography>
          <Flex
            style={{
              width: 350,
              marginBottom: 24,
              marginTop: 24,
              gap: 23,
              position: 'relative',
            }}
          >
            <Searchbar
              name="searchbar"
              onChange={(e) => handleSearch(e.target.value)}
              value={q || ''}
              placeholder="Search orders..."
              onClear={() => handleSearch('')}
            />
            <Flex style={{ gap: 12 }}>
              <Filter />
              <SingleSelect
                style={{ width: '100%' }}
                value={status || 'all'}
                onChange={handleStatusChange}
                placeholder="Filter by status"
              >
                <SingleSelectOption value="all">All</SingleSelectOption>
                <SingleSelectOption value="0">Pending Payment</SingleSelectOption>
                <SingleSelectOption value="1">Paid</SingleSelectOption>
                <SingleSelectOption value="2">Shipped</SingleSelectOption>
                <SingleSelectOption value="3">Canceled</SingleSelectOption>
                <SingleSelectOption value="4">Expired</SingleSelectOption>
                <SingleSelectOption value="5">Canceled by Admin</SingleSelectOption>
                <SingleSelectOption value="999">Need Verification</SingleSelectOption>
              </SingleSelect>
            </Flex>
          </Flex>

          <Table colCount={20} rowCount={9} footer={undefined}>
            <Thead>
              <Tr>
                <Th>
                  <Typography variant="sigma">No</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Date</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Order Id</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Name</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Email</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Courier</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Airwaybill</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Total</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Status</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Actions</Typography>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                (orders && orders.length > 0) &&
                orders.map((item, key) => (
                  <Tr key={key}>
                    <Td>
                      <Typography>{item.id}</Typography>
                    </Td>
                    <Td>
                      <Typography>{dayjs(item.createdAt).format("DD/MM/YYYY HH:mm")}</Typography>
                    </Td>
                    <Td>
                      <Typography>{item.order_id}</Typography>
                    </Td>
                    <Td>
                      <Typography>{item.name}</Typography>
                    </Td>
                    <Td>
                      <Typography>{item.email}</Typography>
                    </Td>
                    <Td>
                      <Typography style={{ textTransform: 'uppercase'}}>{item.shipping_service}</Typography>
                    </Td>
                    <Td>
                      <Typography>{item?.airwaybill_no ?? "-"}</Typography>
                    </Td>
                    <Td>
                      <Typography>{money(item.grand_total)}</Typography>
                    </Td>
                    <Td>
                      <Typography>{<Status data={item.order_status} />}</Typography>
                    </Td>
                    <Td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <IconButton onClick={()=> navigate(`/plugins/${PLUGIN_ID}/${item.documentId}`)} label="Edit" noBorder>
                        <Eye />
                      </IconButton>
                    </Td>
                  </Tr>
                ))
              }
          </Tbody>
          </Table>
          <Flex
            style={{
              justifyContent: 'flex-end',
              marginTop: 18
            }}
          >
            <Pagination
              onChange={handlePaginate}
              current={pagination?.page ? pagination?.page : 1}
              pageSize={pagination?.pageSize ? pagination?.pageSize : 1}
              total={pagination?.total ? pagination?.total : 0}
              itemRender={divItemRender}
              showTitle={false}
              showLessItems
              defaultCurrent={1}
              style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}
            />
          </Flex>
        </Box>
      </Main>
    </Page.Protect>
  );
};

export { HomePage };
