import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpendableText from "../components/ExpendableText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>GameDetailPage {game.name}</Heading>
      <ExpendableText text={game.description_raw} maxChar={300} />
    </>
  );
};

export default GameDetailPage;
