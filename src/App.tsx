import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Song from "./Song";

export type OneSong = {
  title: string;
  album: string;
  genre: string;
  artist: string;
  _id: string;
};

const NavChild = styled.div`
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
`;

export const Nav = styled.div`
  padding: 1rem;
`;

const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c274c;
  color: white;
  padding: 0.7rem 2rem;
  border-radius: 5px;
`;

const StatButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #1c274c solid;
  padding: 0.7rem 2rem;
  border-radius: 5px;
`;

export const Body = styled.div`
  padding: 1rem;
  max-width: 1024px;
  margin: 0 auto;
`;

function App() {
  const [songs, setSongs] = useState<OneSong[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/songs")
      .then((value) => {
        return value.json();
      })
      .then((value) => {
        setSongs(value);
      });
  });

  const handleDelete = (id: string) => {
    try {
      fetch(`http://localhost:8080/api/v1/songs/${id}`, { method: "DELETE" })
        .then((value) => value.json())
        .then((value) => {
          console.log(value);
        });

      const data = songs.filter((song) => song._id != id);
      console.log(data);
      setSongs([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav>
        <NavChild>
          <svg
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0905 11.9629L19.3632 8.63087L20.9996 7.95235V7.49236C20.9996 6.37238 20.9996 5.4331 20.9118 4.68472C20.8994 4.57895 20.8848 4.4738 20.8686 4.37569C20.7841 3.86441 20.6348 3.38745 20.3465 2.98917C20.2024 2.79002 20.0235 2.61055 19.8007 2.45628C19.7589 2.42736 19.7156 2.39932 19.6707 2.3722L19.6617 2.36679C18.8901 1.90553 18.0228 1.93852 17.1293 2.14305C16.2652 2.34086 15.194 2.74368 13.8803 3.23763L11.5959 4.09656C10.9801 4.32806 10.4584 4.52419 10.049 4.72734C9.61332 4.94348 9.23805 5.1984 8.95662 5.57828C8.67519 5.95817 8.55831 6.36756 8.50457 6.81203C8.45406 7.22978 8.45408 7.7378 8.4541 8.33743V12.6016L10.0905 11.9629Z"
              fill="#1C274C"
            />
            <g opacity="0.5">
              <path
                d="M8.45455 16.1305C7.90347 15.8136 7.24835 15.6298 6.54545 15.6298C4.58735 15.6298 3 17.0558 3 18.8148C3 20.5738 4.58735 21.9998 6.54545 21.9998C8.50355 21.9998 10.0909 20.5738 10.0909 18.8148L10.0909 11.9627L8.45455 12.6014V16.1305Z"
                fill="#1C274C"
              />
              <path
                d="M19.3636 8.63067V14.1705C18.8126 13.8536 18.1574 13.6698 17.4545 13.6698C15.4964 13.6698 13.9091 15.0958 13.9091 16.8548C13.9091 18.6138 15.4964 20.0398 17.4545 20.0398C19.4126 20.0398 21 18.6138 21 16.8548L21 7.95215L19.3636 8.63067Z"
                fill="#1C274C"
              />
            </g>
          </svg>

          <h1>List of All Songs</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Link to="/create">
              <CreateButton>
                <div>Create</div>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                    fill="#ffffff"
                  />
                </svg>
              </CreateButton>
            </Link>
            <Link to="/statistics" style={{ textDecoration: "none" }}>
              <StatButton>Statistics</StatButton>
            </Link>
          </div>
        </NavChild>
      </Nav>

      <Body>
        {songs.length == 0 ? (
          <div>No Song Available</div>
        ) : (
          songs.map((song) => (
            <Song key={song._id} {...song} handleDelete={handleDelete} />
          ))
        )}
      </Body>
    </div>
  );
}

export default App;
