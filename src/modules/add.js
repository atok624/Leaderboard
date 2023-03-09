const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const traceId = '4MG00yRI3diShv69LIl6';
const addDataUrl = `${baseUrl}games/${traceId}/scores/`;

const addData = async (player, score) => {
  await fetch(addDataUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: player,
      score,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

export default addData;

const getID = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'My Game',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const myId = await res.json();
  return myId;
};

getID();