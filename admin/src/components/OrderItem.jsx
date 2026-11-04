import { Badge, Box, Flex, Typography } from "@strapi/design-system";
import React from "react";
import money from "../utils/money";

export default function OrderItem({ data, style, currency = "IDR", rate = 1 }) {
   let subtotal = data.regular_price*data.qty
   if (data?.sale_price) {
      subtotal = data.sale_price*data.qty
   }

   return (
      <Flex
         style={{
            ...style,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            justifyContent: 'space-between',
            width: '100%'
         }}
      >
         <Box
            style={{
               display: 'flex',
               flexDirection: 'column',
               flex: '1 1 0',
            }}
         >
            <Flex gap={2} alignItems="center">
               <Typography as="h6">{data.name}</Typography>
               {data.is_po && (
                  <Badge variant="warning" size="S">Pre-Order</Badge>
               )}
            </Flex>
            {
               (data.options && data.options.length > 0) &&
               data.options.map((item, i) => (
                  <Typography
                     key={i}
                     style={{
                        textTransform: 'capitalize'
                     }}
                  >{item.attribute} : {item?.option?.name}</Typography>
               ))
            }
            <Typography>SKU : {data.sku}</Typography>
         </Box>
         <Box
            style={{
               flex: '1 1 0',
               minWidth: '25%'
            }}
         >
            <Typography>{ money(data.regular_price, currency, rate) } </Typography>
            {
               (data.sale_price > 0 && data?.sale_price < data.regular_price) &&
               <Typography>- ({ money(data.sale_price, currency, rate) })</Typography>
            }
            <Typography> x </Typography>
            <Typography>{data.qty}</Typography>
         </Box>
         <Box
            style={{
               paddingLeft: 10,
               paddingRight: 10
            }}
         >
            <Typography>{money(subtotal, currency, rate)}</Typography>
         </Box>
      </Flex>
   )
}