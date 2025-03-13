export default function Score({courseName, courseResults}) {
  function warn(score) {
    if (score < 50)
      return <td className="warning">{score}</td>
    return <td>{score}</td>
  }

  function stat(result) {
    var min = result[0].score;
    var max = result[0].score;
    var avg = 0;
    result.map(element => {
      avg += element.score;
      if (min > element.score) {
        min = element.score;
      }
      if (max < element.score) {
        max = element.score;
      }
    });
    return (
      <table className="scores">
        <thead>
          <tr>
            <th>AVERAGE</th>
            <th>MIN</th>
            <th>MAX</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {warn((avg / result.length).toFixed(2))}
            {warn(min)}
            {warn(max)}
          </tr>
        </tbody>
      </table>
    );
  }
  
  return (
    <div class="scores">
      <h1>{courseName}</h1>

      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            courseResults.map(element => (
            <tr>
              <td>{element.firstName}</td>
              <td>{element.lastName}</td>
              {warn(element.score)}
            </tr>
            ))
          }
        </tbody>
      </table>
      
      {stat(courseResults)}
    </div>
  );
}