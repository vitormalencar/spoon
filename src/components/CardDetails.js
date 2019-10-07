// @flow
import React from "react";
import { Recipe } from "../hooks/useRecipes/types";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardSubTitle,
  CardLabel,
  CardLabels,
  CardDescription,
  CardAuthor,
  CardAvatar,
  CardAuthorInfo,
  CardDescriptionTitle
} from "../styles/CardStyles";

export default (item: Recipe) => {
  const { title, subtitle, tags, url, description, chef } = item;
  const AVATAR_URL = "https://i.pravatar.cc/100";
  return (
    <Card>
      <CardImage src={url} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle>{subtitle}</CardSubTitle>
        <CardLabels>
          {tags && tags.map(tag => <CardLabel key={tag}> {tag}</CardLabel>)}
        </CardLabels>
        <CardDescription>
          <CardDescriptionTitle>What's cooking</CardDescriptionTitle>
          {description}
        </CardDescription>
        <CardAuthor>
          <CardAvatar src={AVATAR_URL} />
          <div>
            <CardAuthorInfo>Shared with you by: {chef}</CardAuthorInfo>
            <CardAuthorInfo>Mjoy in cooking every day</CardAuthorInfo>
          </div>
        </CardAuthor>
      </CardContent>
    </Card>
  );
};
