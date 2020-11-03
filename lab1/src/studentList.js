import React, { Component } from 'react'
import { createPortal } from 'react-dom';
import { data } from './App'

function AllStudents() {
    return (
        <div>
            {
                data.map((teacher, key) => (
                    <div key={key}>
                        {teacher.students.map((student, key) => (
                            <li key={key}>
                                {student.name}
                            </li>
                        ))}
                    </div>
                ))
            }
        </div>
    );
}

function DisplayStudent(props) {
    return (
        <div>
            <span>{props.name} {props.age}</span>
        </div>
    );
}

const getAllStudentNamesFromActiveTeachers = (data) => {

    const reduced = data.reduce((accumulator, teacher) => {
        return teacher.active ? [...accumulator, ...teacher.students] : [...accumulator];
    }, []);
    reduced.forEach(value => console.log(value));
    return reduced;
}
export default function StudentList() {

    // const tmp = data.map(teacher => teacher.students);
    // const allStudents = [].concat.apply([], tmp);
    const allStudents = getAllStudentNamesFromActiveTeachers(data);

    function CompareAge(s1, s2) {
        if (s1.name > s2.name) return 1;
        if (s1.name < s2.name) return -1;
        return 0;
    }
    const sortedStudents = [...allStudents];
    sortedStudents.sort(CompareAge);

    function oldStudentsFilter(num) {
        return num > 20;
    }
    const oldStudents = allStudents.filter((student) => oldStudentsFilter(student.age));

    return (
        <div>
            <button onClick={() => allStudents.map(student => DisplayStudent(student))}>
                All students
            </button>
            <button>Sort students</button>
            <button>Old students</button>
            {/* {allStudents.map(student => DisplayStudent(student))}
            <hr />
            {sortedStudents.map(student => DisplayStudent(student))}
            <hr />
            {oldStudents.map(student => DisplayStudent(student))} */}
        </div>
    );
}