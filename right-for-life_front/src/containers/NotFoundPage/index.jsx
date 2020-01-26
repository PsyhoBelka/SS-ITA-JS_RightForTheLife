import { Link } from "react-router-dom";
import { ErrorIndicator } from "../../components/ErrorIndicator";
import React from "react";

const NotFoundPage = () => (
  <ErrorIndicator
    message="Страница не найдена :("
    renderAction={() => <Link to="/">Вернуться на главную</Link>}
  />
);

export default NotFoundPage;