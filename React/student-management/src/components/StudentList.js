import React from 'react';
import StudentCard from './StudentCard';

function StudentList({ students, deleteStudent }) {
    return (
        <div>
            {students.map((student) => (
                <StudentCard
                    key={student.id}
                    student={student}
                    deleteStudent={deleteStudent}
                />
            ))}
        </div>
    );
}

export default StudentList;
