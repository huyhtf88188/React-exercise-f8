// import React from "react";
// import { datas } from "../../data";

// function ProductsItem(props) {
//   return (
//     <div className="product-card col-lg-4 col-md-6">
//       <img src={props.product.image} alt={props.product.name} />
//       <h2>{props.product.name}</h2>
//       <p>
//         <strong>Mô Tả: </strong>
//         {props.product.short_description}
//       </p>
//       <p>
//         <strong>Giá:</strong> {props.product.final_price} VNĐ.
//       </p>
//       <p>
//         <strong>Tồn Kho:</strong> {props.product.stock} Sản Phẩm.
//       </p>
//       <p>
//         <strong>Chất Liệu:</strong> {props.product.materials}.
//       </p>
//       <p>
//         <strong>Hướng Dẫn Sử Dụng:</strong> {props.product.instruction}
//       </p>
//       <button className="btn">Xem Chi Tiết</button>
//     </div>
//   );
// }

// const ProductsList = (props) => {
//   return (
//     <>
//       <h1>Danh sách Sản Phẩm</h1>
//       <div className="product-list">
//         <div className="row">
//           {datas.slice(0, props.limit).map((item) => (
//             <ProductsItem key={item.sku} product={item} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsList;
