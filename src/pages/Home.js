import { Alert } from "../components/Alert";
import React, { useContext } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { GithubContext } from "../context/github/githubContext";

export const Home = () => {
  const {loading, users} = useContext(GithubContext)

  return (
        <React.Fragment>
          <Alert />
          <Search />
          <div className="row">
            { loading ? <h1>Loading</h1> : 
            users.map(user => (
              <div key={user.id} className="col-sm-4 mb-4">
                <Card user={user}/>
              </div>
            ))}
          </div>
        </React.Fragment>
  );
};
