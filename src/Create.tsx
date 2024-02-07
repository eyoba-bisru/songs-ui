import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import necessary dependencies
import styled from "styled-components";
import { Nav } from "./App";

// Styled components for the form
const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #1c274c;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #1c274c;
  }

  margin-top: 2rem;
`;

export const Create = () => {
  const [formData, setFormData] = useState({
    title: "",
    album: "",
    artist: "",
    genre: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/songs", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    setFormData({ album: "", artist: "", genre: "", title: "" });

    console.log("Form submitted:", formData);

    navigate("/", { replace: true });
  };

  return (
    <>
      <Nav>
        <h1 style={{ textAlign: "center" }}>Add Songs</h1>
      </Nav>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="title">Title:</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="chewatash"
          />

          <Label htmlFor="album">Tlbum:</Label>
          <Input
            type="album"
            id="album"
            name="album"
            value={formData.album}
            onChange={handleChange}
            required
            placeholder="Tikur Sew"
          />
          <Label htmlFor="artist">Artist:</Label>
          <Input
            type="artist"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
            placeholder="Teddy Afro"
          />
          <Label htmlFor="genre">Genre:</Label>
          <Input
            type="genre"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
            placeholder="Raggie"
          />

          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </>
  );
};
