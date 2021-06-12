import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StatefullTypeahead, StatefullTypeaheadProps } from '../components/typeahead_refactoed/statefull_typeahead';
import {searchMovieApi} from '../api';

export default {
  title: 'Example/StatefullTypeahead',
  component: StatefullTypeahead,
} as Meta;

const Template: Story<StatefullTypeaheadProps> = (args) => <StatefullTypeahead {...args} />;

export const MoviesStateLessTypeahead = Template.bind({});
MoviesStateLessTypeahead.args = {
  searchMovieApi:searchMovieApi
};
