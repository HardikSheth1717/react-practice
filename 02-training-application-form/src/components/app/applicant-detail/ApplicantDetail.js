import { useState } from 'react';
import './ApplicantDetail.css';
import FormItem from '../form-item/FormItem';
import SingleLineTextBox from '../../ui-controls/text-box/single-line/SingleLineTextBox';
import LabeledSingleLineTextBox from '../../ui-controls/text-box/labeled-single-line/LabeledSingleLineTextBox';
import Button from '../../ui-controls/button/Button';
import AddressBox from '../address/AddressBox';

const ApplicantDetail = props => {
    const [applicant, setApplicant] = useState({
        firstName: props.firstName,
        lastName: props.lastName,
        phone: props.phone,
        fax: props.fax,
        email: props.email,
        companyName: props.companyName,
        address: props.address
    });

    const firstNameChangeHandler = enteredData => {
        setApplicant(prevState => {
            return {
                ...prevState,
                firstName: enteredData
            };
        })
    }

    const lastNameChangeHandler = enteredData => {
        setApplicant(prevState => {
            return {
                ...prevState,
                lastName: enteredData
            };
        })
    }

    const phoneChangeHandler = enteredData => {
        setApplicant(prevState => {
            return {
                ...prevState,
                phone: enteredData
            };
        })
    }

    const faxChangeHandler = enteredData => {
        setApplicant(prevState => {
            return {
                ...prevState,
                fax: enteredData
            };
        })
    }

    const emailChangeHandler = enteredData => {
        setApplicant(prevState => {
            return {
                ...prevState,
                email: enteredData
            };
        })
    }

    const companyChangeHandler = enteredData => {
        setApplicant(prevState => {
            return {
                ...prevState,
                companyName: enteredData
            };
        })
    }

    const addressDetailUpdateHandler = data => {
        setApplicant(prevState => {
            return {
                ...prevState,
                address: data
            }
        });
    };

    const submitApplicantHandler = () => {
        props.onSubmitApplicantData(applicant);
    }

    return (
        <div>
            <h2>Applicant Details</h2>
            <FormItem>
                <p>Name</p>
                <div className="name-item">
                    <SingleLineTextBox
                        name="txtFirstName"
                        placeHolder="First"
                        onChangeText={firstNameChangeHandler}
                    />
                    <SingleLineTextBox
                        name="txtLastName"
                        placeHolder="Last"
                        onChangeText={lastNameChangeHandler}
                    />
                </div>
            </FormItem>
            <LabeledSingleLineTextBox
                title="Phone"
                name="txtPhone"
                onChangeText={phoneChangeHandler}
            />
            <LabeledSingleLineTextBox
                title="Fax"
                name="txtFax"
                onChangeText={faxChangeHandler}
            />
            <LabeledSingleLineTextBox
                title="Email"
                name="txtEmail"
                onChangeText={emailChangeHandler}
            />
            <LabeledSingleLineTextBox
                title="Company name"
                name="txtCompanyName"
                onChangeText={companyChangeHandler}
            />
            <AddressBox 
            title="Address" 
            addressDetail={applicant.address}
            onUpdateContent={addressDetailUpdateHandler}
            />
            <div className="btn-block">
                <Button
                    onClickButton={submitApplicantHandler}
                >Send</Button>
            </div>
        </div>
    );
};

export default ApplicantDetail;