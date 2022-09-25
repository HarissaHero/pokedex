export type HealthCheckProps = {
  status: {
    http: string;
    database: number;
  };
};

const Health = ({ status }: HealthCheckProps) => {
  return (
    <p>
      {status.http} + {status.database}
    </p>
  );
};

export default Health;
