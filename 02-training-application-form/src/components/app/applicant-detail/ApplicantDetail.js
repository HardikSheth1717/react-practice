import './ApplicantDetail.css';
import FormItem from '../form-item/FormItem';
import SingleLineTextBox from '../../ui-controls/text-box/single-line/SingleLineTextBox';
import LabeledSingleLineTextBox from '../../ui-controls/text-box/labeled-single-line/LabeledSingleLineTextBox';
import AddressBox from '../address/AddressBox';

const ApplicantDetail = props => {
    return (
        <div>
            <h2>Applicant Details</h2>
            <FormItem>
                <p>Name</p>
                <div className="name-item">
                    <SingleLineTextBox name="name" placeHolder="First" />
                    <SingleLineTextBox name="name" placeHolder="Last" />
                </div>
            </FormItem>
            <LabeledSingleLineTextBox title="Phone" name="name" />
            <LabeledSingleLineTextBox title="Fax" name="name" />
            <LabeledSingleLineTextBox title="Email" name="name" />
            <LabeledSingleLineTextBox title="Company name" name="name" />
            <AddressBox title="Address" />
        </div>
    );
};

export default ApplicantDetail;