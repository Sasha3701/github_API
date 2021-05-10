import { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { GithubContext } from "../context/github/githubContext";

export const Search = () => {

  const {show, hide} = useContext(AlertContext)

  const github = useContext(GithubContext)

  const [value, setValue] = useState('')

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      hide()
      github.search(value.trim())
    } else {
      show("Enter a user's nickname")
      github.clearUsers()
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Enter nickname"
        className="form-control"
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
        value={value}
      />
    </div>
  );
};
