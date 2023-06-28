import { Fragment, useEffect } from "react";
import { useParams, Route, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
const QuotesDetails = (props) => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            LoadComments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
