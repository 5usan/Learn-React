import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      console.log(quoteA.id, 'asc');
      console.log(quoteB.id, 'asc');
      console.log((quoteA.id > quoteB.id) ? 1 : -1);
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      console.log(quoteA.id, 'des');
      console.log(quoteB.id, 'des');
      console.log(quoteA.id < quoteB.id ? 1 : -1);
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();

  const location = useLocation();
  console.log(location);

  const queryParams = new URLSearchParams(location.search); //URLSearchParams is default javascript constructor
   
  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    //history.push("/quotes?sort=" + (isSortingAscending ? 'des' : 'asc'));
    // history.push(`${location.pathname}?sort=${(isSortingAscending ? 'des' : 'asc')}`);
    history.push({
      pathname: location.pathname,
      search:`?sort=${(isSortingAscending ? 'des' : 'asc')}`
    })
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}> Sort {isSortingAscending ? "Descending" : "Ascending"} </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
