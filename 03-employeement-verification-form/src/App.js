import { useState } from 'react';
import './App.css';
import Banner from './components/ui-controls/banner/Banner';
import CompanyInformation from './components/app/company-information/CompanyInformation';
import EmployeeInformation from './components/app/employee-information/EmployeeInformation';

function App() {
  const [employee, setEmployee] = useState({
    companyDetail: null,
    employeeDetail: null
  });

  const onChangeCompanyDetails = data => {
    setEmployee(prevState => {
      return {
        ...prevState,
        companyDetail: data
      };
    });
  };

  const onChangeEmployeeDetails = data => {
    setEmployee(prevState => {
      return {
        ...prevState,
        employeeDetail: data
      };
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    console.log(employee);
  };

  return (
    <div className="testbox">
      <form onSubmit={onFormSubmit}>
        <Banner />
        <p>Please fill out with the information that is requested below and submit the employment verification form. Thank you!</p>
        <hr />
        <CompanyInformation
          companyData={employee.companyDetail}
          onUpdateData={onChangeCompanyDetails}
        />
        <br />
        <EmployeeInformation
          employeeData={employee.employeeDetail}
          onUpdateData={onChangeEmployeeDetails}
        />
        <div className="btn-block">
          <button type="submit">APPLY</button>
        </div>
      </form>
    </div>
  );
}

export default App;
