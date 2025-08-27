import {
   Box,
   Flex,
   Main,
   Typography
} from '@strapi/design-system';
import { Page } from '@strapi/strapi/admin';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderItem from '../components/OrderItem';
import { Status } from '../components/Status';
import pluginPermissions from '../permissions';
import money from '../utils/money';

dayjs.extend(utc)
const OrderSlug = () => {
   const { id } = useParams();
   const [order, setOrder] = useState(initType);

   useEffect(() => {
      if(!id) return;
      const fetchApi = async () => {
         const response = await fetch(`/api/strapi-5-plugin-orders/orders/${id}`);
         const data = await response.json();
         const provinceSplit = data.province.split('||')
         const citySplit = data.city.split('||')
         const districtSplit = data.district.split('||')
         const subdistrictSplit = data.subdistrict.split('||')
         data.province = provinceSplit.length > 0 ? provinceSplit[0] : province.city
         data.city = citySplit.length > 0 ? citySplit[1] : data.city
         data.district = districtSplit.length > 0 ? districtSplit[1] : data.district
         data.subdistrict = subdistrictSplit.length > 0 ? subdistrictSplit[1] : data.subdistrict
         setOrder(data);
      };
      fetchApi();
   },[id]);

   const subtotal = useCallback(()=> {
      let count = 0
      if (order?.order_item?.length > 0) {
         count = order?.order_item?.reduce((acc, prev)=> {
            return acc + prev.subtotal
         }, 0)
      }

      return count
   },[order])

   const subQty = useCallback(()=> {
      let count = 0
      if (order?.order_item?.length > 0) {
         count = order?.order_item.reduce((acc, prev)=> {
            return acc + prev.qty
         }, 0)
      }

      return count
   },[order])
   
   return (
      <Page.Protect permissions={pluginPermissions.view}>
         <Main>
            <Box padding={8}>
               <Flex style={{ gap: '1rem' }} direction="column" alignItems="flex-start">
                  <Typography variant="alpha" as="h2"># {order.order_id}</Typography>
                  {
                     order.createdAt &&
                     <Typography as="h6">{dayjs(order.createdAt).utc().format('DD/MM/YYYY HH:mm')}</Typography>
                  }
               </Flex>
               <Flex
                  style={{
                     width: "66%",
                  }}
                  direction="column"
               >
                  <Flex
                     style={{
                        width: "100%",
                     }}
                     direction="column" 
                  >
                     <Box
                        background="neutral0"
                        style={{
                           width: "100%",
                           borderTopLeftRadius: 6,
                           borderTopRightRadius: 6,
                           padding: 16,
                        }}
                     >
                        <Typography as="h5">Order Item</Typography>
                     </Box>
                     <Flex
                        style={{
                           flexDirection: 'column',
                           borderLeft: '1px',
                           borderRight: '1px',
                           borderBottom: 'px',
                           borderColor: '#212134',
                           borderStyle: 'solid',
                           width: '100%'
                        }}
                     >
                        {
                           (order.order_item && order.order_item.length > 0 ) &&
                           order.order_item.map((item, i) => (
                              <OrderItem
                                 data={item}
                                 key={i}
                                 style={{
                                    borderBottom: order.order_item[order.order_item.length - 1] == i ? '0px' : '1px',
                                    borderColor: '#212134',
                                    borderStyle: 'solid'
                                 }}
                              />
                           ))
                        }
                     </Flex>
                  </Flex>
                  <Flex
                     style={{
                        marginTop: 24,
                        width: "100%",
                        flexDirection: 'column'
                     }}
                  >
                     <Box
                        style={{
                           width: "100%",
                        }}
                        background="neutral0"
                     >
                        <Box
                           style={{ padding: 16, }}
                        >
                           <Status data={order?.order_status} />
                        </Box>
                        <Flex
                           style={{
                              flexDirection: 'column',
                              marginBottom: 16,
                           }}
                        >
                           <Flex style={{
                              width: '100%',
                              justifyContent: 'space-between',
                              paddingLeft: 16,
                              paddingRight: 16,
                              paddingBottom: 8,
                              borderBottom: '1px solid #181826'
                           }}>
                              <Typography>Subtotal</Typography>
                              <Typography style={{
                                 flex: '1 1 0',
                                 paddingLeft: 16,
                                 paddingRight: 16
                              }}>{subQty()} item</Typography>
                              <Typography>{money(subtotal())}</Typography>
                           </Flex>
                           <Flex style={{
                              width: '100%',
                              justifyContent: 'space-between',
                              paddingTop: 8,
                              paddingBottom: 8,
                              paddingLeft: 16,
                              paddingRight: 16,
                              borderBottom: '1px solid #181826'
                           }}>
                              <Typography>Shipping</Typography>
                              <Typography style={{
                                 flex: '1 1 0',
                                 paddingLeft: 16,
                                 paddingRight: 16,
                              }}>{order?.shipping_total_weight_ori} Kg ~ {order.shipping_service}</Typography>
                              <Typography>{money(order?.shipping_cost)}</Typography>
                           </Flex>
                           <Flex style={{
                              width: '100%',
                              justifyContent: 'space-between',
                              paddingTop: 8,
                              paddingLeft: 16,
                              paddingRight: 16,
                           }}>
                              <Typography>Total</Typography>
                              <Typography>{money(order?.grand_total)}</Typography>
                           </Flex>
                        </Flex>
                     </Box>
                  </Flex>
                  <Flex
                     style={{
                        marginTop: 24,
                        width: "100%",
                        flexDirection: 'column'
                     }}
                  >
                     <Box
                        style={{
                           width: "100%",
                        }}
                        background="neutral0"
                     >
                        <Box
                           style={{ padding: 16, }}
                        >
                           <Typography as="h6">Shipping Information</Typography>
                        </Box>
                        <Flex
                           style={{
                              flexDirection: 'column',
                              marginBottom: 16,
                           }}
                           background="neutral0"
                        >
                           <Flex style={{
                              width: '100%',
                              justifyContent: 'space-between',
                              paddingLeft: 16,
                              paddingRight: 16,
                              paddingBottom: 8,
                              flexDirection: 'column',
                              alignItems: 'flex-start'
                           }}>
                              <Typography
                                 as="h6"
                                 style={{
                                    textTransform: 'uppercase'
                                 }}
                              >{order?.name}</Typography>
                              <Typography
                                 as="h6"
                                 style={{
                                    textTransform: 'uppercase'
                                 }}
                              >{order.address}</Typography>
                              <Typography
                                 as="h6"
                                 style={{
                                    textTransform: 'uppercase'
                                 }}
                              >, {order.subdistrict}, {order.district}, {order.city}, {order.province} - {order.country}</Typography>
                           </Flex>
                        </Flex>
                     </Box>
                  </Flex>
                  <Flex
                     style={{
                        marginTop: 24,
                        width: "100%",
                        flexDirection: 'column'
                     }}
                  >
                     <Box
                        style={{
                           width: "100%",
                        }}
                        background="neutral0"
                     >
                        <Box
                           style={{ padding: 16, }}
                        >
                           <Typography as="h6">Airwaybill {order.shipping_service}</Typography>
                        </Box>
                        <Flex
                           style={{
                              flexDirection: 'column',
                              marginBottom: 16,
                           }}
                           background="neutral0"
                        >
                           <Flex style={{
                              width: '100%',
                              justifyContent: 'space-between',
                              paddingLeft: 16,
                              paddingRight: 16,
                              paddingBottom: 8,
                              flexDirection: 'column',
                              alignItems: 'flex-start'
                           }}>
                              <Typography
                                 as="h6"
                                 style={{
                                    textTransform: 'uppercase'
                                 }}
                              >{order.airwaybill_no ?? "N/A"}</Typography>
                           </Flex>
                        </Flex>
                     </Box>
                  </Flex>
               </Flex>
            </Box>
         </Main>
      </Page.Protect>
   );
}

export default OrderSlug;

const initType = {
   id: null,
   uuid: null,
   order_id: null,
   name: null,
   email: null,
   address: null,
   country: null,
   province: null,
   city: null,
   district: null,
   subdistrict: null,
   orderal_code: null,
   mobile: null,
   order_status: 0,
   total: null,
   discount: null,
   shipping_service: null,
   shipping_total_weight: null,
   shipping_cost: null,
   shipping_cost_ori: null,
   admin_fee: null,
   grand_total: null,
   unique_code: null,
   promo_code: null,
   payment_reminder: false,
   snap_js_json: null,
   snap_trans_id: null,
   snap_callback: null,
   stock_returned: null,
   airwaybill_no: null,
   note: null,
   arrived_at: null,
   payment_confirmed: false,
   payment_type: null,
   cancel_note: null,
   cancelled_at: null,
   settlement_at: null,
   bank: null,
   va_number: null,
   paid_at: null,
   fulfilment_at: null,
   is_po: false,
   is_fulfilled: false,
   midtrans_code_suffix: false,
   is_payment_change: false,
   insurance_ammount: null,
   is_req_pickup: false,
   shippment_response: null,
   shipping_total_weight_ori: null,
   transaction_fee: null,
   snap_token: null,
   origin: null,
   meta: null,
   createdAt: null,
   updatedAt: null,
   user_id: null,
   image_story: null,
   image_validate: {
      id: null,
      name: null,
      alternativeText: null,
      caption: null,
      width: null,
      height: null,
      url: "#",
   },
   order_item: [],
   createdBy: {
      id: null,
      firstname: null,
      lastname: null,
      username: null
   },
   updatedBy: {
      id: null,
      firstname: null,
      lastname: null,
      username: null
   }
}
