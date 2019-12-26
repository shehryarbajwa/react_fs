import React from 'react';

const Course = ({ course, exercises }) => {
    return (
        <p>{course} exercises: {exercises}</p>
    )
}

export default Course;