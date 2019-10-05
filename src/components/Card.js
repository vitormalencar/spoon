// @flow
import React from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../hooks/useRecipes/types";

export default (item: Recipe) => {
  const { title, subtitle, tags, url } = item;
  return (
    <div className="card">
      <Link
        to={{
          pathname: `/recipe/${item.id}`,
          state: item
        }}
      >
        <img className="card__image" src={url} alt={"title"} />
      </Link>
      <div className="card__content">
        <Link
          to={{
            pathname: `/recipe/${item.id}`,
            state: item
          }}
        >
          <h2 className="card__title">{title}</h2>
        </Link>
        <h3 className="card__subtitle">{subtitle}</h3>
        <div className="card__labels">
          {tags && tags.map(tag => <span className="card__label">{tag}</span>)}
        </div>
      </div>
    </div>
  );
};
