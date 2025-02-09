import React from 'react';
import Rating from "@/components/UI/Rating";
import Deliver from "@/components/UI/Deliver/Deliver";
import DeliverTime from "@/components/UI/DeliverTime";
import {DeliverInfoStyled} from "@/components/UI/DeliverInfo/styled";

const DeliverInfo = ({info}) => {
  return (
    <DeliverInfoStyled>
      <Rating rating={info.rating}/>

      <Deliver price={info.price}/>

      <DeliverTime time={info.time}/>
    </DeliverInfoStyled>
  );
};

export default DeliverInfo;