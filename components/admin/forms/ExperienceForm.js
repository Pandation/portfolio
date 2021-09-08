import { useState } from "react";
import { colors } from "../../../styles/theme";

const ExperienceForm = ({ method = "POST", id = "" }) => {
  const [formInput, setFormInput] = useState({
    jobTitle: "",
    society: "",
    place: "",
    date: "",
    language: "fr",
  });
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchData() {
    for(let input in formInput) {
        if(formInput[input] == "") return;
    }
    console.log(formInput)
    const data = await fetch("http://localhost:5000/api/portfolio/experience", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
      },
      body: JSON.stringify({ ...formInput }),
    });
    const result = await data.json();
    console.log(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleChange = (e) =>
    setFormInput({ ...formInput, [e.target.name]: e.target.value });

  return (
    <>
      <div className="container">
        <div className="formContainer">
          <h2>Add an Experience</h2>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="jobTitle">JobTitle</label>
              <input
                name="jobTitle"
                type="text"
                onChange={handleChange}
                required={method === "POST"}
              />
            </div>
            <div>
              <label htmlFor="society">Society</label>
              <input
                name="society"
                type="text"
                onChange={handleChange}
                required={method === "POST"}
              />
            </div>
            <div>
              <label htmlFor="place">Place</label>
              <input
                name="place"
                type="text"
                onChange={handleChange}
                required={method === "POST"}
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                name="date"
                type="text"
                onChange={handleChange}
                required={method === "POST"}
              />
            </div>
            <div>
              <select
                value={formInput.language}
                name="language"
                onChange={handleChange}
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
            <button>
              {method === "POST" && "Ajouter une expérience"}
              {!method === "POST" && "Editer une expérience"}
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
        .container {
          
          box-sizing: border-box;
           flex:1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 1.5em;
        }
        .formContainer {
          background-color: white;
          border-radius: 5px;
          display: flex;
          width: 80%;
          height: 80%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 50px;
          > .error {
            width: 80%;
            font-size: 0.8em;
            margin: 10px 0;
            padding: 10px;
            background-color: pink;
            border-radius: 5px;
            border: solid 1px red;
          }
          > h2 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 2em;
          }
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;

          > div {
            min-height: 100px;
            display: flex;
            flex-direction: column;
            font-weight: bold;
            width: 300px;
            > input {
              padding: 10px;
              font-size: 0.8em;
              height: 40px;
              outline-color: gray;
              border-radius: 5px;
              margin-top: 15px;

              border-color: lightgray;
            }
          }
          > button {
            border-radius: 5px;
            border: none;
            background-image: linear-gradient(
              to bottom right,
              ${colors.primary},
              rgb(104, 16, 145)
            );
            font-size: 1em;
            padding: 10px 20px;
            color: white;
            margin-top: 20px;
            &:hover {
              background-image: linear-gradient(
                to bottom right,
                rgb(124, 36, 161),
                rgb(94, 6, 135)
              );
              cursor: pointer;
            }
          }
        }
      `}</style>
    </>
  );
};

export default ExperienceForm;
