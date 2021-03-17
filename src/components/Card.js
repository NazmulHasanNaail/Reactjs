const date =new Date();
const day=date.getDate();
const month=date.getMonth();
const year=date.getFullYear();


function Card( props) {
  const {title, desc}=props;
  return  <div className="card">
            <h2 className="title">{title}</h2>
            <p className="desc">{desc}</p>
            <span className="date">{day+"/"+month+"/"+year}</span>
        </div>
}
export default Card;