import { useState } from 'react';
import './CourseDetail.css';
import LabeledSingleLineTextBox from '../../ui-controls/text-box/labeled-single-line/LabeledSingleLineTextBox';
import LabeledDateTextBox from '../../ui-controls/text-box/labeled-date/LabeledDateTextBox';
import Button from '../../ui-controls/button/Button';

const CourseDetail = props => {
    const [courseDetail, setCourseDetail] = useState(props.courseData ? {
        courseCode: props.courseData.courseCode,
        location: props.courseData.location,
        startDate: props.courseData.startDate
    } :
        {
            courseCode: props.courseCode,
            location: props.location,
            startDate: props.startDate
        });

    const courseCodeChangeHandler = enteredText => {
        setCourseDetail(prevState => {
            return {
                ...prevState,
                courseCode: enteredText
            }
        });
    };

    const locationChangeHandler = enteredText => {
        setCourseDetail(prevState => {
            return {
                ...prevState,
                location: enteredText
            }
        });
    };

    const startDateChangeHandler = enteredText => {
        setCourseDetail(prevState => {
            return {
                ...prevState,
                startDate: enteredText
            }
        });
    };

    const submitCourseHandler = () => {
        props.onSubmitCourseDetailData(courseDetail);
    };

    return (
        <div>
            <h2>Course Details</h2>
            <LabeledSingleLineTextBox
                title="Course code"
                name="txtCourseCode"
                value={courseDetail.courseCode}
                onChangeText={courseCodeChangeHandler} />
            <LabeledSingleLineTextBox
                title="Location"
                name="txtLocation"
                value={courseDetail.location}
                onChangeText={locationChangeHandler}
            />
            <LabeledDateTextBox
                title="Start date"
                name="txtStartDate"
                value={courseDetail.startDate}
                onChangeText={startDateChangeHandler}
            />
            <div className="btn-block">
                <Button
                    onClickButton={submitCourseHandler}
                >Send</Button>
            </div>
        </div>
    );
};

export default CourseDetail;