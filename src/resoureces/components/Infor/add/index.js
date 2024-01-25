import Modal from 'react-modal'
import React from 'react'
import { useState } from 'react';
import { addProduct } from '../../../Services/productServices';
import AxiosInstance from '../../../helper/Axiosintances';

Modal.setAppElement("#root");

const AddModel = ({ isOpen, onRequestClose, loadData }) => {
    const [nameProduct, setName] = useState('');
    const [status, setStatus] = useState(false);
    const [detail, setDetail] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [created_AT, setCreated_AT] = useState('');
     
    

    const handleAdd = async () => {
        console.log("check add 2111111: ", nameProduct, detail, status, location, price, created_AT);
        try {
            const body = { nameProduct, detail, status, location, price, created_AT };
            const res = await AxiosInstance().post('/api/products/add', body);
            console.log("check kkkkkkkkkkkkk: ", res);

        } catch (err) {
            console.log(err);
        }
        console.log("check add 30000000: ", nameProduct, detail, status, location, price, created_AT);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Example Modal"
            loadData={loadData}
        >
            <h2>Add Product</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => setName(e.target.value)}
                        value={nameProduct}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">status</label>
                    <select className="form-control"
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                    >
                        <option value={true}>Đã mua</option>
                        <option value={false}>Chưa mua</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">detail</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={(e) => setDetail(e.target.value)}
                        value={detail}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">location</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">price</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </div>
            </form>
            <input type="submit" className="btn btn-primary" value="Submit" onClick={handleAdd} />

        </Modal>
    )
}

export default AddModel
