import { Box, Flex, Typography } from "@strapi/design-system";
import React from "react";
import money from "../utils/money";

export default function OrderItem({ data, style}) {
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
            <Typography as="h6">{data.name}</Typography>
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
            <Typography>{ money(data.regular_price) } </Typography>
            {
               (data.sale_price > 0 && data?.sale_price < data.regular_price) &&
               <Typography>- ({ money(data.sale_price) })</Typography>
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
            <Typography>{money(subtotal)}</Typography>
         </Box>
      </Flex>
   )
}