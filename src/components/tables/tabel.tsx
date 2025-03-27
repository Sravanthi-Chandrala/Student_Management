// @ts-nocheck
'use client';
import React, { useEffect, useState } from 'react'
import Modal from '@/src/assets/popup/popupModa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '@/src/redux/slices/studentslice';
import { AppDispatch, RootState } from '@/src/redux/store';


interface Student {
  studentName: string;
  cohort: string;
  courses: string[];
  status: boolean;
  id: string;
};

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentData, setStudentData] = useState<Student | null>(null);
  const data = useSelector((state: RootState) => state.studentReducer.students);
  const status = useSelector((state: RootState) => state.studentReducer.status);
  const error = useSelector((state: RootState) => state.studentReducer.error);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [dispatch, status]);

  //functions for formatting date and time client-side only
  function formatDateJoined(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    const dateObject = new Date(String(date));
    return dateObject.toLocaleDateString('en-GB', options).replace(/ /g, '.');
  }

  function formatLastLogin(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    const dateObject = new Date(String(date));
    const formattedTime = dateObject.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase();
    return dateObject.toLocaleDateString('en-GB', options).replace(/ /g, '.') + " " + formattedTime;
  }

  if (status === 'loading') {
    return (
      <div className="flex flex-row place-items-center w-full justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-8 border-t-transparent border-blue-200 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex justify-center place-items-centerw w-full min-h-screen text-red-200 text-sm">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className='w-full min-h-[89vh] bg-white pl-4 rounded-lg text-black'>
      <section className='p-5 flex flex-col sm:flex-row gap-4 justify-between bg-white'>
        <section className='flex flex-row gap-4 w-full flex-wrap'>

          {/* First select box */}
          <div className="relative w-full sm:w-[10rem] md:w-[18rem] lg:w-[20rem]">
            <select className="w-full bg-gray-100 h-[3rem] text-xs sm:text-sm rounded-lg p-2 pr-6 appearance-none hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <option value={'AY 2024-25'} className="hover:bg-gray-300">AY 2024-25</option>
              <option value={'AY 2023-24'} className="hover:bg-gray-300">AY 2023-24</option>
            </select>
            <div className="absolute top-0 right-0 h-full flex items-center justify-center pointer-events-none pr-3">
              <img className="w-4 h-4 sm:w-5 sm:h-5" src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png" alt="expand-arrow--v1" />
            </div>
          </div>

          {/* Second select box */}
          <div className="relative w-full sm:w-[10rem] md:w-[18rem] lg:w-[20rem]">
            <select className="w-full bg-gray-100 h-[3rem] text-xs sm:text-sm rounded-lg p-2 pr-6 appearance-none hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <option value={'CBSE 9'} className="hover:bg-gray-300">CBSE 9</option>
              <option value={'CBSE 10'} className="hover:bg-gray-300">CBSE 10</option>
            </select>
            <div className="absolute top-0 right-0 h-full flex items-center justify-center pointer-events-none pr-3">
              <img className="w-4 h-4 sm:w-5 sm:h-5" src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png" alt="expand-arrow--v1" />
            </div>
          </div>
        </section>

        {/* Add new student button */}
        <section className="w-full sm:w-[15rem]">
          <div className='w-full h-auto p-2 flex flex-row justify-center gap-4 place-items-center rounded-lg bg-gray-300 hover:bg-gray-400 transition-all'>
            <span className='text-xl sm:text-2xl font-bold text-gray-800'>+</span>
            <button
              onClick={() => { setStudentData(null); setIsModalOpen(true) }}
              className='text-xs sm:text-sm font-medium text-gray-800 hover:text-white transition-colors duration-300'>
              Add new Student
            </button>
          </div>
        </section>
      </section>




      {/* Scrollable container for the table */}
      <div className="overflow-x-auto max-w-full">
        <table className="w-full min-w-[70rem] sm:min-w-full table-auto border-collapse text-sm sm:text-base">
          <thead>
            <tr className="text-left border-b border-solid border-gray-300 text-sm sm:text-base font-bold text-gray-700">
              <th className="py-2 px-4">Student Name</th>
              <th className="py-2 px-4">Cohort</th>
              <th className="py-2 px-4">Courses</th>
              <th className="py-2 px-4">Date Joined</th>
              <th className="py-2 px-4">Last Login</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) => {
              return (
                <tr
                  onClick={() => {
                    setStudentData({
                      status: item.status,
                      studentName: item.studentName,
                      cohort: item.cohort,
                      courses: item.courses,
                      id: item.id ? item.id : ''
                    });
                    setIsModalOpen(true);
                  }}
                  key={index}
                  className="border-b border-solid border-gray-300 cursor-pointer text-sm sm:text-base"
                >
                  <td className="py-2 px-4">{item.studentName}</td>
                  <td className="py-2 px-4">{item.cohort} A</td>
                  <td className="py-2 px-4">
                    <div className='flex flex-wrap gap-2'>
                      {/* Course 1 */}
                      <section className='flex flex-row items-center max-w-[200px]'>
                        <div style={{ padding: "1rem", backgroundColor: "white", borderRadius: "50%", display: "inline-block" }}>
                          <img
                            width="35"
                            height="50"
                            src="https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F2244af71ad0c25f2cb0a8efa167491fb.png&w=280&q=75"
                            alt="user"
                            style={{ borderRadius: "50%", display: "block" }}
                          />
                        </div>

                        <span className='p-1 rounded-md bg-blue-100 w-[100px] text-center truncate'>{item.courses[0]}</span>
                      </section>
                      {/* Course 2 */}
                      <section className='flex flex-row items-center max-w-[200px]'>
                        <div style={{ padding: "1rem", backgroundColor: "white", borderRadius: "50%", display: "inline-block" }}>
                          <img
                            width="30"
                            height="30"
                            src="https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F50382765fd5648c7876d91cc37b27394.png&w=280&q=75"
                            alt="user"
                            style={{ borderRadius: "50%", display: "block" }}
                          />
                        </div>

                        <span className='p-1 rounded-md bg-blue-100 w-[100px] text-center truncate'>{item.courses[1]}</span>
                      </section>
                    </div>
                  </td>
                  <td className="py-2 px-4">{formatDateJoined(item.dateJoined)}</td>
                  <td className="py-2 px-4">{formatLastLogin(item.lastLogin)}</td>
                  <td className="py-2 px-4"><span className={`w-4 h-4 rounded-full inline-block ${item.status ? 'bg-green-500' : 'bg-red-500'}`}></span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Modal to display student data and to update or delete it */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          studentData={studentData}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Table;
