import './AddressBox.css';
import SingleLineTextBox from '../../ui-controls/text-box/single-line/SingleLineTextBox';
import FormItem from '../form-item/FormItem';

const AddressBox = props => {
    return (
        <FormItem>
            <p>{props.title}</p>
            <SingleLineTextBox name="name" placeHolder="Street address" />
            <SingleLineTextBox name="name" placeHolder="Street address line 2" />
            <div className="city-item">
                <SingleLineTextBox name="name" placeHolder="City" />
                <SingleLineTextBox name="name" placeHolder="Region" />
                <SingleLineTextBox name="name" placeHolder="Postal / Zip code" />
                <select>
                    <option value="">Country</option>
                    <option value="1">Russia</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                    <option value="4">Armenia</option>
                    <option value="5">USA</option>
                </select>
            </div>
        </FormItem>
    );
};

export default AddressBox;