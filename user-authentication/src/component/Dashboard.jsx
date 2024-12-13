
import { useTable, useSortBy, usePagination } from 'react-table';
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


// Sample data for the table
const data = [
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    
    id: "1",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rose",
    gender: "Female",
    address: "New delhi",
    phone: "+91 9892019100",
    email: "rose12@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  
]


// Column for the table
const columns = [
  
  {
    Header: "ID",
    accessor: "id"
  },
  {
    Header: "Photo",
    accessor: "photo"
  },
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Gender",
    accessor: "gender"
  },
 
  {
    Header: "Address",
    accessor: "address"
  },
  {
    Header: "Phone No.",
    accessor: "phone"
  },
  {
    Header: "Email ID",
    accessor: "email"
  },
  {
    Header: "Action",
    accessor: "action"
  },
]


const Dashboard = () => {
  const navigate = useNavigate();



  //Using React Table hooks for sorting, pagination, and table properties
  const { getTableProps, gotoPage, state: { pageIndex }, pageCount, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, canPreviousPage, canNextPage } = useTable({
    columns,
    data
  }, useSortBy, usePagination);



  const handleLogout =  ()=>{
     localStorage.removeItem("token");
     localStorage.removeItem("user");
    navigate('/login');
    
  }
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">


      {/* Main content section*/}
      <div className="flex-1 flex flex-col">
        <div className='text-center'>

        <button onClick={handleLogout} className='bg-cyan-400 font-semibold text-white px-3 py-2 rounded-md my-2'>Logout</button>
        </div>

        <div className="flex-1 pt-0 px-4 bg-gray-100">

          <div className='bg-white w-full h-auto my-10 border-2 border-gray-300 rounded-md'>


            {/* Table section */}
            <div className='overflow-x-auto bg-white'>

              {/* Table */}
              <table {...getTableProps()} className='min-w-full table-auto border-collapse border border-gray-200'>
                <thead className='bg-gray-100'>
                  {
                    headerGroups.map((hg, i) => (

                      <tr key={i} {...hg.getHeaderGroupProps()} className="text-left text-gray-700">
                        {
                          hg.headers.map((header, i) => (
                            <th key={i}
                              {...header.getHeaderProps(header.getSortByToggleProps())}
                              className='px-4 py-2 font-semibold text-sm border-b border-gray-300'
                            >
                              {header.render("Header")}
                              {header.isSorted && (
                                <span>{header.isSortedDesc ? " ⬆" : " ⬇"}</span>
                              )}
                            </th>
                          ))
                        }
                      </tr>
                    ))
                  }
                </thead>

                <tbody {...getTableBodyProps()} className='divide-y divide-gray-200'>
                  {
                    page.map((row, i) => {
                      prepareRow(row);
                      return (
                        <tr key={i}
                          {...row.getRowProps()}
                          className="hover:bg-gray-50 transition duration-200"
                        >
                          {
                            row.cells.map((cell, i) => (
                              <td key={i}
                                {...cell.getCellProps()}
                                className='px-4 py-2 text-sm text-gray-800 whitespace-nowrap'
                              >
                                {cell.render("Cell")}
                              </td>
                            ))
                          }
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>


              {/* Pagenation controls */}
              <div className='flex gap-x-5 items-center justify-center my-5'>
                <button disabled={!canPreviousPage} onClick={previousPage} className=' text-gray-600'>{"<< Previous"}</button>
                {
                  [...Array(pageCount)].map((_, i) => (
                    <span
                      key={i}
                      onClick={() => gotoPage(i)}
                      className={`p-1 px-3 rounded-lg text-white cursor-pointer ${pageIndex === i ? "bg-gray-700 text-white" : "bg-gray-400 text-gray-900"
                        }`}
                    >
                      {i + 1}
                    </span>
                  ))
                }
                <button disabled={!canNextPage} onClick={nextPage} className='  text-gray-600'>{"Next >>"}</button>

              </div>

            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Dashboard;