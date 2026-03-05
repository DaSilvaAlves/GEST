import React, { useState } from 'react';
import { Task } from '../types/index';
import { Button } from '../components/ui/Button';

const Feature3 = () => {
  const [id, setId] = useState(0);

  const handleSubmit = (event: React.Form<HTMLFormElement>) => {
    event.preventDefault();
    // Mark task as completed logic
    console.log(id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="number" value={id} onChange={(event) => setId(Number(event.target.value))} />
      </label>
      <Button type="submit">Marcar como Concluída</Button>
    </form>
  );
};

export default Feature3;