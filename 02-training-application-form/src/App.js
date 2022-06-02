import { useState } from 'react';
import './App.css';

import RoundedContainer from './components/shared/rouded-container/RoundedContainer';
import Form from './components/ui-controls/form/Form';
import Banner from './components/app/banner/Banner';
import ApplicantDetail from './components/app/applicant-detail/ApplicantDetail';
import CourseDetail from './components/app/course-detail/CourseDetail';
import DistributorDetail from './components/app/distributor-detail/DistributorDetail';
import PrivacyPolicy from './components/app/privacy-policy/PrivacyPolicy';
import Button from './components/ui-controls/button/Button';

function App() {
  const [ formData, setFormData ] = useState({
    applicantDetail: {},
    courseDetail: {},
    distributorDetail: {}
  });

  const applicantDataHandler = data => {
    console.log(data);
    setFormData(prevState => {
      return {
        ...prevState,
        applicantDetail: data
      };
    });

  };

  return (
    <RoundedContainer>
      <Form action="/">
        <Banner>Training Application Form</Banner>
        <ApplicantDetail onSubmitApplicantData={applicantDataHandler} />
        <CourseDetail />
        <DistributorDetail />
        <PrivacyPolicy />
        <div className="btn-block">
          <Button>Send</Button>
        </div>
      </Form>
    </RoundedContainer>
  );
}

export default App;
