import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar() {
  return (<div style={{ width: 200, height: 200 }}>
    <CircularProgressbar value={66} />
  </div>)
}
