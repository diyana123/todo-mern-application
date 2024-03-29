import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  { text: 'Add Task', path: '.', icon: <FaWpforms /> },
  { text: 'All Tasks', path: 'allTasks', icon: <MdQueryStats /> },

];

export default links;