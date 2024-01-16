import { Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, wlink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={wlink}
        className="p-card-a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <br />
            <span>click to check website</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
