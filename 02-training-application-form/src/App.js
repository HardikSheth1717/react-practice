import './App.css';

import RoundedContainer from './components/shared/rouded-container/RoundedContainer';
import Form from './components/ui-controls/form/Form';
import Banner from './components/app/banner/Banner';
import ApplicantDetail from './components/app/applicant-detail/ApplicantDetail';

function App() {
  return (
    <RoundedContainer>
      <Form action="/">
        <Banner>Training Application Form</Banner>
        <ApplicantDetail />
      </Form>
    </RoundedContainer>
  );
}

export default App;
