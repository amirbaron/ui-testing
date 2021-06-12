import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StatelessTypeahead, StatelessTypeaheadProps } from '../components/typeahead_refactoed/stateless_typeahead';

export default {
  title: 'Example/StatelessTypeahead',
  component: StatelessTypeahead,
} as Meta;

const Template: Story<StatelessTypeaheadProps> = (args) => <StatelessTypeahead {...args} />;

export const MoviesStateLessTypeahead = Template.bind({});
MoviesStateLessTypeahead.args = {
  currentSuggestedMovies: ["movie1", "movie2"],
  onChange: (value: string)=>{}
};
