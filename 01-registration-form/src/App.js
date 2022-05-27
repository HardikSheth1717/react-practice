import RoundedContainer from './components/shared/rounded-container/RoundedContainer';
import BorderedPanel from './components/shared/bordered-panel/BorderedPanel';
import RadioButton from './components/ui-controls/radio-button/RadioButton';
import Form from './components/ui-controls/form/Form';
import EmailTextBox from './components/ui-controls/text-box/email/EmailTextBox';
import PasswordTextBox from './components/ui-controls/text-box/password/PasswordTextBox';
import SingeLineTextBox from './components/ui-controls/text-box/single-line/SingeLineTextBox';
import PrivacyPolicy from './components/privacy-policy/PrivacyPolicy';
import Button from './components/ui-controls/button/Button';

import './App.css';

function App() {
  return (
    <div>
      <RoundedContainer title="Registration">
        <Form action="/">
          <BorderedPanel>
            <RadioButton
              value="none"
              id="radioOne"
              name="account"
              checked
            >Personal</RadioButton>
            <RadioButton
              value="none"
              id="radioTwo"
              name="account"
              >Company</RadioButton>
          </BorderedPanel>

          <EmailTextBox id="email" name="email" />
          <SingeLineTextBox
            id="name"
            name="name"
            iconClass="fas fa-user"
            placeHolder="Name" />
          <PasswordTextBox id="password" name="password" />

          <BorderedPanel>
            <RadioButton
              value="none"
              id="male"
              name="gender"
              checked
              >Male</RadioButton>
            <RadioButton
              value="none"
              id="female"
              name="gender"
            >Female</RadioButton>
          </BorderedPanel>

          <div className="btn-block">
            <PrivacyPolicy />
            <Button buttonType="submit" href="/">Submit</Button>
          </div>
        </Form>
      </RoundedContainer>
    </div>
  );
}

export default App;
