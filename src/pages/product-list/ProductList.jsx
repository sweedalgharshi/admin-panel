import React, { useState, Fragment } from 'react';
import './productList.css';

import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyData';

import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="product-list-item">
            <img src={params.row.img} alt="" className="product-list-img" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },

    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={'/product/' + params.row.id}>
              <button className="product-list-edit">Edit</button>
            </Link>
            <DeleteOutline
              className="product-list-delete"
              onClick={() => {
                handleDelete(params.row.id);
              }}
            />
          </Fragment>
        );
      },
    },
  ];
  return (
    <div className="product-list">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default ProductList;
