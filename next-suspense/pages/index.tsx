import type { NextPage } from "next";

type GameIndices = {
  game_indices: {
    game_index: number,
    version: {
      name: string,
    }[]
  }
}

type IndexInfo = {
  game_index: number,
    version: {
      name: string,
    }
}

function getIndex():Promise<IndexInfo[]> {
  return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => {
      return res.json().then(data => {
        return data.game_indices
      })
    });
}

let gameIndices: IndexInfo[] | undefined;

const Home: NextPage = () => {
  if (!gameIndices) {
    throw getIndex().then((res) => {
      gameIndices = res
    })
  }

  return (
    <div>
      <h1>Ditto Index</h1>
      <table>
        <thead>
          <tr>
            <th>Index No.</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {gameIndices.map(indices => {
            return <tr key={indices.version.name}>
              <td>{indices.game_index}</td>
              <td>{indices.version.name}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
