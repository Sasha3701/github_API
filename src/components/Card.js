import { Link } from "react-router-dom";

export const Card = ({user}) => (
  <div className="card">
    <img className="card-img-top" alt={user.login} src={user.avatar_url} />
    <div className="card-body">
      <h5 className="card-title">{user.login}</h5>
      <Link to={"/profile/" + user.login} className="btn btn-primary">
        Open
      </Link>
    </div>
  </div>
);
