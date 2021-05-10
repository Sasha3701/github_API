import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../context/github/githubContext";
import { Repos } from '../components/Repos'

export const Profile = ({ match }) => {
  const {getUser, getRepos, user, loading, repos} = useContext(GithubContext);

  const nameUser = match.params.name;

  useEffect(() => {
    getUser(nameUser);
    getRepos(nameUser);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  console.log(repos)

  return (
    <React.Fragment>
      <Link to={'/'} className='btn btn-link'>На главную</Link>
      <div className='card mb-4'>
        <div className='card-body'>
          <div className='row'>

            <div className='col-sm-3 text-center'>
              <img src={user.avatar_url} alt={user.name} style={{maxWidth: 200}}/>
              <h1>{user.name}</h1>
              {user.location && <p><strong>Location</strong>: {user.location}</p>}
            </div>

            <div className='col'>
              {
              user.bio &&
                <React.Fragment>
                  <h4>BIO</h4>
                  <p>{user.bio}</p>
                </React.Fragment>
              }
              <a href={user.html_url} rel="noreferrer" target='_blank' className='btn btn-dark'>Open profile</a>
              <ul>
                {user.login && <li><strong>Username: </strong>{user.login}</li>}
                {user.company && <li><strong>Company: </strong>{user.company}</li>}
                {user.blog && <li><strong>Website: </strong>{user.blog}</li>}
              </ul>
              <div className='badge badge-primary'>Followers: {user.followers}</div>
              <div className='badge badge-success'>Following: {user.following}</div>
              <div className='badge badge-info'>Repos: {user.public_repos}</div>
              <div className='badge badge-dark'>Gists: {user.public_gists}</div>
            </div>

          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </React.Fragment>
  );
};
