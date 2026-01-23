import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const TableUserPaginate = (props) => {
  const { listUsers, pageCount } = props;
  const handlePageClick = (event) => {
    props.fetchListUsersWithPaginate(+event.selected + 1)
    props.setCurrentPage(+event.selected + 1)
    console.log(`User requested page number ${event.selected}}`);
  };
  console.log('render view');
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <th>{item.id}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button onClick={() => props.handleClickButtonView(item)} className='btn btn-secondary'>View</button>
                    <button
                      onClick={() => props.handleClickButtonUpdate(item)}
                      className='btn btn-warning mx-3'>Update</button>
                    <button onClick={() => props.handleClickButtonDelete(item)}
                      className='btn btn-danger '>Delete</button>
                  </td>
                </tr>
              )
            })
          }
          {listUsers && listUsers.length === 0 &&
            <tr>
              <td colSpan={'4'}> Not Found Data</td>
            </tr>}
        </tbody>
      </table>
      <div className="user-pagination d-flex justify-content-center">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"

          pageClassName="page-item"
          pageLinkClassName="page-link"   // ⭐ thêm dòng này
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"

          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"

          containerClassName="pagination justify-content-center"
          activeClassName="active"

          forcePage={props.currentPage - 1}
        />

      </div>
    </>
  )
}

export default TableUserPaginate;
