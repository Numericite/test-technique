const Card = (props) => {
  return (
    <div
      style={{
        width: "33%",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #dadada",
          borderRadius: "20px",
          padding: "10px",
          marginTop: "1rem",
          marginRight: "1rem",
        }}
      >
        <h2>{props.name}</h2>
        <p>Pays : {props.country}</p>
        <div>
          Liens : <br />
          {props.web_pages.map((link) => {
            return (
              <p key={link}>
                <a href={link} target="_blank">
                  {link}
                </a>
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
