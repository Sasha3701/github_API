export const Repos = ({ repos }) =>
  repos.map((repo, index) => (
    <div className="card mb-3" key={repo + index}>
      <div className="card-body">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </div>
    </div>
  ));
