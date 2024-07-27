import React from 'react'
import {
    StyleNameProduct,
    WrapperCardStyle,
    WrapperDiscountText,
    WrapperPriceText,
    WrapperReportProduct,
    WrapperImageStyle,
    WrapperStyleTextSell
} from "./style";
import {
    StarFilled
} from '@ant-design/icons';
import logo from '../../assets/images/logo.png'
import {convertPrice} from '../../utils'
import { useNavigate } from "react-router-dom";

const CardComponent = (props) => {
    const {countInStock, description, image, name, price, rating, type, discount, selled, id} = props
    const navigate = useNavigate();
    const handleDetailsProduct = (id) => {
      navigate(`/product-details/${id}`)
    };
    return (
      <WrapperCardStyle
        hoverable
        headStyle={{width: '200px', height: '200px'}}
        style={{ width: 200 }}
        bodyStyle={{ padding: '10px'}}
        cover={<img alt="example" src={image} />}
        onClick={() => handleDetailsProduct(id)}
      >
        <WrapperImageStyle src={logo} /*preview={false}*/ />
        <StyleNameProduct>{name}</StyleNameProduct>
        <WrapperReportProduct>
          <span style={{ marginRight: "4px" }}>
            <span>{rating}</span>
            <StarFilled
              style={{ fontSize: "12px", color: "rgb(253,216,54)" }}
            />
          </span>
          <WrapperStyleTextSell>
            | Đã bán {selled || 1000}+
          </WrapperStyleTextSell>
        </WrapperReportProduct>
        <WrapperPriceText>
          <span style={{ marginRight: "8px" }}>{convertPrice(price)}</span>
          <WrapperDiscountText>- {discount || 5} %</WrapperDiscountText>
        </WrapperPriceText>
      </WrapperCardStyle>
    );
}
export default CardComponent