import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StatelessMoviesSearch, StatelessMoviesSearchProps } from '../components/movies_search_refactored/stateless_movies_search';

export default {
  title: 'Example/StatelessMoviesSearch',
  component: StatelessMoviesSearch,
} as Meta;

const Template: Story<StatelessMoviesSearchProps> = (args) => <StatelessMoviesSearch {...args} />;

export const StatelessMoviesSearchWithMovies = Template.bind({});
StatelessMoviesSearchWithMovies.args = {
  currentSuggestedMovies: ["movie1", "movie2"],
  onChange: (value: string)=>{}
};
