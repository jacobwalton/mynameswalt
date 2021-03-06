import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <p className="footer">2021</p>
      <br />
      <p className="footer">Created by Walt</p>
      <br />
      <p className="footer">
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        CAVI{" "}
        <b>
          <em>||</em>
        </b>{" "}
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        SWAN
      </p>
    </div>
  );
};

export default Footer;
