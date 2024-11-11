import React from 'react';
import './StudentCard.css';

function StudentCard({ student, deleteStudent }) {
    return (
        <div className="student-card">
            <h2>{student.name}</h2>
            <div className="student-details">
                <div className="student-field">
                    <strong>Age:</strong> {student.age}
                </div>
                <div className="student-field">
                    <strong>Registration ID:</strong> {student.registrationId}
                </div>
                <div className="student-field">
                    <strong>Degree:</strong> {student.degree}
                </div>
                <div className="student-field">
                    <strong>Specialization:</strong> {student.specialization}
                </div>
                <div className="student-field">
                    <strong>Father's Name:</strong> {student.fatherName}
                </div>
                <div className="student-field">
                    <strong>Mother's Name:</strong> {student.motherName}
                </div>
                <div className="student-field">
                    <strong>Guardian's Name:</strong> {student.guardianName}
                </div>
                <div className="student-field">
                    <strong>Contact Number:</strong> {student.contactNumber}
                </div>
                <div className="student-field">
                    <strong>Email:</strong> {student.email}
                </div>
                <div className="student-field">
                    <strong>Address:</strong> {student.address}
                </div>
            </div>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </div>
    );
}

export default StudentCard;
