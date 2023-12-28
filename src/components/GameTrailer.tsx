import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

const GameTrailer = ({ gameId }: { gameId: number }) => {
  if (!gameId) return null;
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (error) throw error; // so react router catches is and shows the error
  if (isLoading) return <Spinner />;

  const first = trailers?.results[0];
  if (!first) return null;

  return (
    <video width="100%" controls src={first.data[480]} poster={first.preview}>
      Your browser does not support HTML video.
    </video>
  );
};

export default GameTrailer;
