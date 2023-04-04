import React, { Fragment, useState } from "react";
import "./userList.css";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows } from "../../dummyData";

import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="user-list-user">
            <img src={params.row.avatar} alt="" className="user-list-img" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },

    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transactions Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={"/user/" + params.row.id}>
              <button className="user-list-edit">Edit</button>
            </Link>
            <DeleteOutline
              className="user-list-delete"
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
    <div className="user-list">
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

export default UserList;
