import React from 'react';

const AdditionalGrades = ({ id, grades }) => {
    const renderGrades = () => grades.map((grade, idx) => {
        const testnum = idx + 1;
        return (
            <li key={`${id}-${testnum}`} className="student-additional-grades">
                <span className="student-grades">Test {testnum}: <span>{grade} %</span></span>
            </li>
        );
    });

return (
    <ul className="stud-grad-additional">
        {renderGrades()}
    </ul>
    );      

};

export default AdditionalGrades;