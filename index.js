const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;

  return <button className={className}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Social Buttons</h1>
    <div className="btn-card">
      <Button text="Like" className="like-button btn" />
      <Button text="Comment" className="comment-button btn" />
      <Button text="Share" className="share-button btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
