import React from 'react';
import { FilterTodosBy } from '../../utils/FilterTodosBy';
import cn from 'classnames';
import { Errors } from '../../utils/Errors';
interface Props {
  uncompletedTodos: number;
  filterBy: FilterTodosBy;
  setFilteredBy: (filterBy: FilterTodosBy) => void;
  hasError: Errors;
  setHasError: (hasError: Errors) => void;
  completedTodosLenght: number;
  handleDeleteAllCompleted: () => void;
}
export const Footer: React.FC<Props> = props => {
  const {
    uncompletedTodos,
    filterBy,
    setFilteredBy,
    completedTodosLenght,
    handleDeleteAllCompleted,
  } = props;

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {uncompletedTodos} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', {
            selected: filterBy === FilterTodosBy.All,
          })}
          data-cy="FilterLinkAll"
          onClick={() => setFilteredBy(FilterTodosBy.All)}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link', {
            selected: filterBy === FilterTodosBy.Active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => setFilteredBy(FilterTodosBy.Active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: filterBy === FilterTodosBy.Completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilteredBy(FilterTodosBy.Completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={completedTodosLenght === 0}
        onClick={handleDeleteAllCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
