import './PrivacyPolicy.css';

const PrivacyPolicy = props => {
    return (
        <div className="question">
            <p>Privacy Policy<span className="required">*</span></p>
            <div className="question-answer checkbox-item">
                <div>
                    <input type="checkbox" value="none" id="check_1" name="check" required />
                    <label htmlFor="check_1" className="check"><span>I agree to the <a href="https://www.w3docs.com/privacy-policy">privacy policy.</a></span></label>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;