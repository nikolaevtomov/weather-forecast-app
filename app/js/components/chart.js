'use strict';

import _ from 'lodash';
import React, { Conponent } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function avarage(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {

  return(
    <div className={`chart`}>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{avarage(props.data)} {props.units}</div>
    </div>
  );
}
