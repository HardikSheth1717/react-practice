import { useState, useEffect } from 'react';
import ContainerBox from '../../ui-controls/container-box/ContainerBox';
import SingleLine from '../../ui-controls/text-box/single-line/SingleLine';
import DatePicker from '../../ui-controls/text-box/date/DatePicker';

const EmployeeInformation = props => {
    const [employeeDetail, setEmployeeDetail] = useState(!props.employeeData ? {
        employeeName: '',
        dob: '',
        email: '',
        position: ''
    } : {
        employeeName: props.employeeData.employeeName,
        dob: props.employeeData.dob,
        email: props.employeeData.email,
        position: props.employeeData.position
    });

    useEffect(() => {
        props.onUpdateData(employeeDetail);
    }, [employeeDetail]);

    const employeeNameChangeHandler = value => {
        setEmployeeDetail(prevState => {
            return {
                ...prevState,
                employeeName: value
            };
        });
    };

    const dobChangeHandler = value => {
        setEmployeeDetail(prevState => {
            return {
                ...prevState,
                dob: value
            };
        });
    };

    const emailChangeHandler = value => {
        setEmployeeDetail(prevState => {
            return {
                ...prevState,
                email: value
            };
        });
    };

    const positionChangeHandler = value => {
        setEmployeeDetail(prevState => {
            return {
                ...prevState,
                position: value
            };
        });
    };
    
    return (
        <ContainerBox title="Employee Information">
            <SingleLine
                id="txtEmployeeName"
                name="txtEmployeeName"
                title="Employee Name"
                placeHolder="Employee name"
                required="true"
                value={employeeDetail.employeeName}
                onTextChange={employeeNameChangeHandler}
            />

            <DatePicker
                id="txtBDate"
                name="txtBDate"
                title="Date of birth"
                placeHolder="dd/mm/yyyy"
                required="true"
                value={employeeDetail.dob}
                onTextChange={dobChangeHandler}
            />

            <SingleLine
                id="txtEmail"
                name="txtEmail"
                title="Email"
                placeHolder="Email"
                required="true"
                value={employeeDetail.email}
                onTextChange={emailChangeHandler}
            />

            <SingleLine
                id="txtPosition"
                name="txtPosition"
                title="Position"
                placeHolder="Position"
                required="true"
                value={employeeDetail.position}
                onTextChange={positionChangeHandler}
            />
        </ContainerBox>
    );
};

export default EmployeeInformation;