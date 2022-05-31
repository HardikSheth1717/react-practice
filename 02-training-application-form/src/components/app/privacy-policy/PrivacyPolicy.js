import './PrivacyPolicy.css';

const PrivacyPolicy = props => {
    return (
        <div class="question">
            <p>Privacy Policy<span class="required">*</span></p>
            <div class="question-answer checkbox-item">
                <div>
                    <input type="checkbox" value="none" id="check_1" name="check" required />
                    <label for="check_1" class="check"><span>I agree to the <a href="https://www.w3docs.com/privacy-policy">privacy policy.</a></span></label>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;