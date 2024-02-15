import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat
        quasi dolores quibusdam dolorem quam, adipisci vero quo quisquam iure
        doloremque harum a numquam officia iusto blanditiis voluptatum
        distinctio nesciunt.
      </p>
    </div>
  );
}
