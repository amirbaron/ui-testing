import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MoviesSearchWithLogic, MoviesSearchWithLogicProps } from '../components/movies_search_with_logic/movies_search_with_logic';

export default {
  title: 'Example/MoviesSearchWithLogic',
  component: MoviesSearchWithLogic,
} as Meta;

const Template: Story<MoviesSearchWithLogicProps> = (args) => <MoviesSearchWithLogic {...args} />;

export const MoviesSearchWithLogicExample = Template.bind({});
MoviesSearchWithLogicExample.args = {
  
};
