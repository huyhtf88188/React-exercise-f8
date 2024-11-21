import React from "react";
import {datas} from "../data"; 

function ProductsItem(props) { 
  return (
    <div className="product-card col-lg-4 col-md-6">
      <img src={props.product.image} alt={props.product.name} />
      <h2>{props.product.name}</h2>
      <p>
        <strong>Mô Tả: </strong>{props.product.short_description}</p>
      <p>
        <strong>Giá:</strong> {props.product.final_price} VNĐ.
      </p>
      <p>
        <strong>Tồn Kho:</strong> {props.product.stock} Sản Phẩm.
      </p>
      <p>
        <strong>Chất liệu:</strong> {props.product.materials}.
      </p>
      <p>
        <strong>Hướng dẫn:</strong> {props.product.instruction}
      </p>
    </div>
  );
}

const ProductsList = () => {
  return (
    <>
      <h1>Danh sách Sản Phẩm</h1>
      <div className="product-list">
        <div className="row">
        {datas.map((item) => (
          <ProductsItem key={item.sku} product={item} /> // Đúng biến 'item'
        ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
