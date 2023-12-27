import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import ExpendableText from "../components/ExpendableText";
import useGame from "../hooks/useGame";
import DefinitionItem from "../components/DefinitionItem";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>GameDetailPage {game.name}</Heading>
      <ExpendableText text={game.description_raw} maxChar={300} />
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
