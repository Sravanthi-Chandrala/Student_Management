import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hitApi } from '@/src/CustomApi/apihit';
import { deleteStudent, fetchStudents, updateStudent } from '@/src/redux/slices/studentslice';
import { AppDispatch } from '@/src/redux/store';

interface ModalProps {
  isOpen: boolean;
  studentData: {
    studentName: string;
    cohort: string;
    courses: string[];
    status: boolean;
    id: string;
  } | null;
  onClose: () => void;
}

const Modal = ({ isOpen, studentData, onClose }: ModalProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [studentName, setStudentName] = useState<string>('');
  const [cohort, setCohort] = useState<string>('');
  const [courses, setCourses] = useState<string[]>([]);
  const [status, setStatus] = useState<boolean>(false);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    if (isOpen && studentData) {
      setStudentName(studentData.studentName);
      setCohort(studentData.cohort);
      setCourses(studentData.courses);
      setStatus(studentData.status);
      setId(studentData.id);
    }
  }, [isOpen, studentData]);

  const handleSave = async () => {
    const res = await hitApi({
      method: 'PUT',
      url: '/api/update',
      id,
      body: { studentName, cohort, courses, status },
    });

    if (res === 201) {
      dispatch(updateStudent({ studentName, cohort, courses, status, id }));
      alert('Data saved successfully');
    } else {
      alert('Failed request!');
    }
    onClose();
  };

  const handleDelete = async () => {
    const res = await hitApi({
      method: 'DELETE',
      url: '/api/delete',
      id,
    });

    if (res === 201) {
      dispatch(deleteStudent(id));
      alert('Data deleted successfully');
    } else {
      alert('Failed request!');
    }
    onClose();
  };

  const handleAdd = async () => {
    const res = await hitApi({
      method: 'POST',
      url: '/api/save',
      id,
      body: { studentName, cohort, courses, status },
    });

    if (res === 201) {
      dispatch(fetchStudents());
      alert('Data saved successfully');
    } else {
      alert('Failed request!');
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[50%] md:w-[30rem]">
        <h2 className="font-semibold text-lg mb-4">Edit Student Info</h2>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Cohort</label>
          <input
            type="text"
            value={cohort}
            onChange={(e) => setCohort(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Courses</label>
          <textarea
            value={courses.join(', ')}
            onChange={(e) =>
              setCourses(e.target.value.split(',').map((course) => course.trim()))
            }
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            rows={3}
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={status}
            onChange={() => setStatus((prev) => !prev)}
            className="mr-2"
          />
          <label className="font-medium text-gray-700">Active Status</label>
        </div>

        <div className="flex justify-end">
          {studentData ? (
            <>
              <button
                onClick={onClose}
                className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm"
              >
                Save
              </button>
              <button
                onClick={handleDelete}
                className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
              >
                Delete
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
              >
                Create
              </button>
              <button
                onClick={onClose}
                className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm"
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
