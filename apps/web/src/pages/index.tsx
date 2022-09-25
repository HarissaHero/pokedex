import Health, { HealthCheckProps } from "../components/health";
import { BACKEND_URL } from "../helpers/env";

export default function Web(props: HealthCheckProps) {
  return (
    <div>
      <h1>Pokedex</h1>
      <Health status={props.status} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`${BACKEND_URL}/health`);
  const status = await response.json();

  return {
    props: { status },
  };
};
