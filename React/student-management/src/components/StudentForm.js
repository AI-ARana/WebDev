import React, { useState } from 'react';
import './StudentForm.css';

function StudentForm({ addStudent }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [registrationId, setRegistrationId] = useState('');
    const [degree, setDegree] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [guardianName, setGuardianName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && age && registrationId && degree && specialization && fatherName && contactNumber && email && address) {
            addStudent({
                name,
                age,
                registrationId,
                degree,
                specialization,
                fatherName,
                motherName,
                guardianName,
                contactNumber,
                email,
                address
            });
            // Reset all form fields
            setName('');
            setAge('');
            setRegistrationId('');
            setDegree('');
            setSpecialization('');
            setFatherName('');
            setMotherName('');
            setGuardianName('');
            setContactNumber('');
            setEmail('');
            setAddress('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder="Registration ID" value={registrationId} onChange={(e) => setRegistrationId(e.target.value)} />
            <input type="text" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
            <input type="text" placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
            <input type="text" placeholder="Father's Name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
            <input type="text" placeholder="Mother's Name" value={motherName} onChange={(e) => setMotherName(e.target.value)} />
            <input type="text" placeholder="Guardian's Name" value={guardianName} onChange={(e) => setGuardianName(e.target.value)} />
            <input type="tel" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} rows="3" />
            <button type="submit">Add Student</button>
        </form>
    );
}

export default StudentForm;
