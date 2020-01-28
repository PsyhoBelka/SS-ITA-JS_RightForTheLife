import { Link } from "react-router-dom";
import { ErrorIndicator } from "../../components/ErrorIndicator";
import React from "react";

export const NotFoundPage = () => (
  <ErrorIndicator
    message="Страница не найдена :("
    renderAction={() => <Link to="/">Вернуться на главную</Link>}
  />
);
