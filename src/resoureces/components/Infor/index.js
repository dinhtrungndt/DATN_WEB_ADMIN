import React, { useState, useEffect } from 'react'
import AxiosInstance from '../../helper/Axiosintances';
import "./index.css"
import AddModel from './add';
import UpdateModel from './update';
import { productsData } from '../../Services/productServices';

const InforPage = () => {
  const [products, setProducts] = useState([]);
  const [onOpenModal, setOnOpenModal] = useState(false);
  const [onUpdateModal, setOnUpdateModal] = useState(false);

  // đổi true, false thành đã mua và chưa mua
  const handleStatus = (status) => {
    if (status === true) {
      return "Đã mua"
    } else {
      return "Chưa mua"
    }
  }

  const openModal = () => {
    setOnOpenModal(true);
  }
  const closeModal = () => {
    setOnOpenModal(false);
  }
  const openUpdateModal = () => {
    setOnUpdateModal(true);
  }

  const fetchData = async () => {
    const res = await productsData();
    // console.log("check products data : ", res);
    setProducts(res);

  }

  const handleDelete = async (id) => {
    try {
      const response = await AxiosInstance().delete(
        `/api/products/delete/${id}`,
      );

      const updatedProduts = products.filter(
        (item) => item._id !== id
      );
      setProducts(updatedProduts);
      console.log("Xóa thành công:", response);
    } catch (error) {
      console.error("Xóa thất bại:", error);
    }
  }
  // console.log("check products data zzzzzzzzzzzzz: ", products);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <hr />
      <>
        <button onClick={openModal}>Thêm</button>
        <AddModel
          isOpen={onOpenModal}
          onRequestClose={closeModal}
          loadData={products}
        />
      </>
      <table className="product-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Detail</th>
            <th>Location</th>
            <th>Price</th>
            <th>Created_AT</th>
            <th>Files</th>
            <th>Role</th>
            <th>Userid</th>
            <th>Activate</th>
            <th>Brandld</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => (
              <tr className='product-row' key={index}>
                <td>{product.nameProduct}</td>
                <td>
                  {handleStatus(product.status)}
                </td>
                <td>{product.detail}</td>
                <td>{product.location}</td>
                <td>{product.price}</td>
                <td>{product.created_AT}</td>
                <td>
                  <img src={product.files} alt="product" style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }} />
                </td>
                <td>{product.role}</td>
                <td>{product.userid}</td>
                <td>{product.activate}</td>
                <td>{product.brandld}</td>
                <td>

                  <button onClick={openUpdateModal}>Sửa</button>
                  <UpdateModel
                    isOpen={onUpdateModal}
                    onRequestClose={closeModal}
                  />
                  <button onClick={() => handleDelete(product._id)} >Xóa</button>

                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default InforPage
