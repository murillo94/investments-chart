import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryArea,
  VictoryClipContainer,
  VictoryAxis
} from 'victory';

import { Empty } from './Empty';

import { roundMoney, formatMoney } from '../../../utils/money';
import { formatDate } from '../../../utils/date';

export const Chart = ({ data = [] }) => (
  <>
    {data.length === 0 ? (
      <Empty>Sem valor no período</Empty>
    ) : (
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              `${formatDate(datum.x)}
           ${formatMoney(datum.y)}`
            }
            labelComponent={<VictoryTooltip flyoutStyle={{ fill: 'white' }} />}
          />
        }
      >
        <VictoryArea
          animate={{
            onLoad: { duration: 800 }
          }}
          groupComponent={
            <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
          }
          style={{
            data: {
              fill: '#91b1f2',
              stroke: '#0055ff',
              strokeWidth: 5,
              strokeLinecap: 'round'
            }
          }}
          data={data}
        />
        <VictoryAxis dependentAxis tickFormat={tick => `${roundMoney(tick)}`} />
        <VictoryAxis
          tickCount={2}
          tickValues={[data[0].x, data[data.length - 1].x]}
          tickFormat={tick => `${formatDate(tick)}`}
        />
      </VictoryChart>
    )}
  </>
);
