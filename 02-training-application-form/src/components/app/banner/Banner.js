import './Banner.css';

const Banner = props => {
    return (
        <div className="banner">
          <h1>{props.children}</h1>
        </div>
    );
};

export default Banner;