import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      {/* <p className="footer">2021</p> */}
      {/* <br /> */}
      <em style={{ fontSize: "12px" }}>
        <p className="footer">Created by Walt</p>
      </em>
      <br />
      <p className="footer">
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        CAVI <b></b> <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        SWAN
      </p>
    </div>
  );
};

export default Footer;
