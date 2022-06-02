import { useState } from 'react';
import './AddressBox.css';
import SingleLineTextBox from '../../ui-controls/text-box/single-line/SingleLineTextBox';
import FormItem from '../form-item/FormItem';

const AddressBox = props => {
    const [address, setAddress] = useState(props.addressDetail ? {
        addressLine1: props.addressDetail.addressLine1,
        addressLine2: props.addressDetail.addressLine2,
        city: props.addressDetail.city,
        region: props.addressDetail.region,
        postalCode: props.addressDetail.postalCode,
        country: props.addressDetail.country
    } : {
        addressLine1: '',
        addressLine2: '',
        city: '',
        region: '',
        postalCode: '',
        country: ''
    });

    const addressLine1ChangeHandler = enteredValue => {
        setAddress(prevState => {
            return {
                ...prevState,
                addressLine1: enteredValue
            };
        });

        props.onUpdateContent(address);
    };

    const addressLine2ChangeHandler = enteredValue => {
        setAddress(prevState => {
            return {
                ...prevState,
                addressLine2: enteredValue
            };
        });

        props.onUpdateContent(address);
    };

    const cityChangeHandler = enteredValue => {
        setAddress(prevState => {
            return {
                ...prevState,
                city: enteredValue
            };
        });
        
        props.onUpdateContent(address);
    };

    const regionChangeHandler = enteredValue => {
        setAddress(prevState => {
            return {
                ...prevState,
                region: enteredValue
            };
        });
        
        props.onUpdateContent(address);
    };

    const postalCodeChangeHandler = enteredValue => {
        setAddress(prevState => {
            return {
                ...prevState,
                postalCode: enteredValue
            };
        });
        
        props.onUpdateContent(address);
    };

    const countryChangeHandler = event => {
        setAddress(prevState => {
            return {
                ...prevState,
                country: event.target.value
            };
        });
        
        props.onUpdateContent(address);
    };

    return (
        <FormItem>
            <p>{props.title}</p>
            <SingleLineTextBox
                name="txtAddressLine1"
                placeHolder="Street address"
                value={address.addressLine1}
                onChangeText={addressLine1ChangeHandler}
            />
            <SingleLineTextBox
                name="txtAddressLine2"
                placeHolder="Street address line 2"
                value={address.addressLine2}
                onChangeText={addressLine2ChangeHandler}
            />
            <div className="city-item">
                <SingleLineTextBox
                    name="txtCity"
                    placeHolder="City"
                    value={address.city}
                    onChangeText={cityChangeHandler}
                />
                <SingleLineTextBox
                    name="txtRegion"
                    placeHolder="Region"
                    value={address.region}
                    onChangeText={regionChangeHandler}
                />
                <SingleLineTextBox
                    name="txtPostalCode"
                    placeHolder="Postal / Zip code"
                    value={address.postalCode}
                    onChangeText={postalCodeChangeHandler}
                />
                <select value={address.country} onChange={countryChangeHandler}>
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