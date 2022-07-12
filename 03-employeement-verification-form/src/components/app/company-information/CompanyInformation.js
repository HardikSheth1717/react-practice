import { useState, useEffect } from 'react';
import ContainerBox from '../../ui-controls/container-box/ContainerBox';
import SingleLine from '../../ui-controls/text-box/single-line/SingleLine';
import DropDown from '../../ui-controls/dropdown/DropDown';

const CompanyInformation = props => {
    const [companyDetail, setCompanyDetail] = useState(!props.companyData ? {
        companyName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    } : {
        companyName: props.companyData.companyName,
        address: props.companyData.address,
        city: props.companyData.city,
        state: props.companyData.state,
        zipCode: props.companyData.zipCode,
        country: props.companyData.country
    });

    useEffect(() => {
        props.onUpdateData(companyDetail);
    }, [companyDetail]);

    const companyNameChangeHandler = value => {
        setCompanyDetail(prevState => {
            return {
                ...prevState,
                companyName: value
            };
        });
    };

    const addressChangeHandler = value => {
        setCompanyDetail(prevState => {
            return {
                ...prevState,
                address: value
            };
        });
    };

    const cityChangeHandler = value => {
        setCompanyDetail(prevState => {
            return {
                ...prevState,
                city: value
            };
        });
    };

    const stateChangeHandler = value => {
        setCompanyDetail(prevState => {
            return {
                ...prevState,
                state: value
            };
        });
    };

    const zipCodeChangeHandler = value => {
        setCompanyDetail(prevState => {
            return {
                ...prevState,
                zipCode: value
            };
        });
    };

    const countryChangeHandler = value => {
        setCompanyDetail(prevState => {
            return {
                ...prevState,
                country: value
            };
        });
    };

    return (<ContainerBox title="Company Information">
        <SingleLine
            id="txtCompanyName"
            name="txtCompanyName"
            title="Company Name"
            placeHolder="Company name"
            required="true"
            value={companyDetail.companyName}
            onTextChange={companyNameChangeHandler}
        />

        <SingleLine
            id="txtAddress"
            name="txtAddress"
            title="Company Address"
            placeHolder="Company address"
            required="true"
            value={companyDetail.address}
            onTextChange={addressChangeHandler}
        />

        <SingleLine
            id="txtCity"
            name="txtCity"
            title="City"
            placeHolder="City"
            required="false"
            value={companyDetail.city}
            onTextChange={cityChangeHandler}
        />

        <SingleLine
            id="txtState"
            name="txtState"
            title="State / Region"
            placeHolder="State / Region"
            required="false"
            value={companyDetail.state}
            onTextChange={stateChangeHandler}
        />

        <SingleLine
            id="txtZipCode"
            name="txtZipCode"
            title="ZIP Code"
            placeHolder="ZIP Code"
            required="false"
            value={companyDetail.zipCode}
            onTextChange={zipCodeChangeHandler}
        />

        <DropDown
            id="txtCountry"
            name="txtCountry"
            title="Country"
            placeHolder="Country"
            value={companyDetail.country}
            onSelectionChange={countryChangeHandler}
        >
            <option disabled>Country</option>
            <option value="1">Russia</option>
            <option value="2">Germany</option>
            <option value="3">France</option>
            <option value="4">Armenia</option>
            <option value="5">USA</option>
            <option value="6">Spain</option>
            <option value="7">Italy</option>
        </DropDown>
    </ContainerBox>);
};

export default CompanyInformation;