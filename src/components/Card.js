// @flow
import React from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../hooks/useRecipes/types";
import {
  Card,
  CardImage,
  CardTitle,
  CardLabel,
  CardLabels,
  CardContent,
  CardSubTitle
} from "../styles/CardStyles";

export default (item: Recipe) => {
  const { title, subtitle, tags, url } = item;
  const path = { pathname: `/recipe/${item.id}`, state: item };
  return (
    <Card>
      <Link to={path}>
        <CardImage src={url} />
      </Link>
      <CardContent>
        <Link to={path}>
          <CardTitle>{title}</CardTitle>
          <CardSubTitle>{subtitle}</CardSubTitle>
        </Link>
        <CardLabels>
          {tags && tags.map(tag => <CardLabel key={tag}>{tag}</CardLabel>)}
        </CardLabels>
      </CardContent>
    </Card>
  );
};
