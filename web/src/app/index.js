import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const carsQuery = gql`
  {
    cars {
      make
      topSpeed
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(carsQuery);
  if (error || loading) return null;

  return data.cars.map(car => (
    <div>
      Make: {car.make}, top speed: {car.topSpeed}
    </div>
  ));
};
