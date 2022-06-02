import React from "react";

const Table = ({ asteroidData }) => {
  console.log(asteroidData);
  const distance = asteroidData[0].close_approach_data[0].close_approach_date;
  console.log(distance);

  return (
    <>
      <table className="table w-full ">
        <thead className="table-header-group">
          <tr className="table-row text-blue border-t border-gray-200">
            <th className="table-cell p-4">Asteroid Name</th>
            <th className="table-cell">Diameter(km)</th>
            <th className="table-cell">Approach Date</th>
            <th className="table-cell">Pass Distance</th>
            <th className="table-cell">Velocity</th>
          </tr>
        </thead>
        <tbody className="">
          {asteroidData.map((asteroid) => {
            return (
              <tr className="border-t border-gray-200">
                <td className="text-center p-2">{asteroid.name}</td>
                <td className="text-center p-2">
                  {asteroid.estimated_diameter.meters.estimated_diameter_min}
                </td>
                <td className="text-center p-2">
                  {asteroid.close_approach_data[0].close_approach_date}
                </td>
                <td className="text-center p-2">
                  {asteroid.close_approach_data[0].miss_distance.kilometers}
                </td>
                <td className="text-center p-2">
                  {
                    asteroid.close_approach_data[0].relative_velocity
                      .kilometers_per_second
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
