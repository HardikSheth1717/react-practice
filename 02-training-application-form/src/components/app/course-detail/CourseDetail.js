import './CourseDetail.css';
import LabeledSingleLineTextBox from '../../ui-controls/text-box/labeled-single-line/LabeledSingleLineTextBox';
import LabeledDateTextBox from '../../ui-controls/text-box/labeled-date/LabeledDateTextBox';

const CourseDetail = props => {
    return (
        <div>
            <h2>Course Details</h2>
            <LabeledSingleLineTextBox title="Course code" name="name" />
            <LabeledSingleLineTextBox title="Location" name="name" />
            <LabeledDateTextBox title="Start date" name="name" />
        </div>
    );
};

export default CourseDetail;