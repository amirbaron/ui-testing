import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StatefullMoviesSearch, StatefullMoviesSearchProps } from '../components/movies_search_refactored/statefull_movies_search';
import {searchMovieApi} from '../api';

export default {
  title: 'Example/StatefullMoviesSearch',
  component: StatefullMoviesSearch,
} as Meta;

const Template: Story<StatefullMoviesSearchProps> = (args) => <StatefullMoviesSearch {...args} />;

export const StatefullMoviesSearchExample = Template.bind({});
StatefullMoviesSearchExample.args = {
  searchMovieApi:searchMovieApi
};
