import { useState, useEffect, useContext } from "react";
import { colors } from "/styles/theme";
import { useRouter } from "next/router";
import { SessionContext } from "/reducers/session";

import Loader from "/components/admin/Loader";

import { AUTH } from "/reducers/session";

const LoginPage = () => {
  const [session, dispatch] = useContext(SessionContext);
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    dispatch({ type: AUTH.GET_ADMIN });
  }, []);

  async function login() {
    dispatch({ type: AUTH.LOGIN, payload: credentials });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  if (session.loggedIn) {
    router.push("/admin");
  }

  return (
    <>
      <div className="container">
        {session.fetching && <Loader />}
        {!session.fetching && !session.loggedIn && (
          <>
            <div className="formContainer">
              <h2>Login</h2>
              {session.error.status && (
                <div className="error">{session.error.message}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    name="username"
                    type="text"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <button>Sign Up</button>
              </form>
            </div>
          </>
        )}
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
        .container {
          background-image: linear-gradient(
            to bottom right,
            ${colors.primary},
            rgb(52, 1, 77)
          );
          height: 100vh;
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
          height: 60%;
          width: 50%;
          max-width: 600px;
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
            font-family: "Pacifico", cursive;
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

export default LoginPage;
