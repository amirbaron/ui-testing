import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TypeaheadWithLogic, TypeaheadWithLogicProps } from '../components/typeahead_with_logic/typeahead_with_logic';

export default {
  title: 'Example/TypeaheadWithLogic',
  component: TypeaheadWithLogic,
} as Meta;

const Template: Story<TypeaheadWithLogicProps> = (args) => <TypeaheadWithLogic {...args} />;

export const MoviesTypeahead = Template.bind({});
MoviesTypeahead.args = {
  
};
