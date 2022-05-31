import './DistributorDetail.css';
import LabeledSingleLineTextBox from '../../ui-controls/text-box/labeled-single-line/LabeledSingleLineTextBox';
import AddressBox from '../address/AddressBox';
import PrivacyPolicy from '../privacy-policy/PrivacyPolicy';
import Button from '../../ui-controls/button/Button';

const DistributorDetail = props => {
    return (
        <div>
            <h2>Distributor Details</h2>
            <LabeledSingleLineTextBox title="Contact name" name="name" />
            <LabeledSingleLineTextBox title="Distributor name" name="name" />
            <AddressBox title="Distributor Address" />
            <LabeledSingleLineTextBox title="Phone" name="name" />
            <LabeledSingleLineTextBox title="Fax" name="name" />
            <PrivacyPolicy />
            <div className="btn-block">
                <Button>Send</Button>
            </div>
        </div>
    );
};

export default DistributorDetail;