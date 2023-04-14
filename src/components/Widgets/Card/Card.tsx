import React from "react";
import { View } from "react-native";

interface CardProps {
  cardStyle: string;
  cardContent: React.ReactNode;
}

const Card = ({ cardStyle, cardContent }: CardProps) => {
  return <View className={cardStyle}>{cardContent}</View>;
};

export default Card;
