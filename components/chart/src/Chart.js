import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryArea,
  VictoryClipContainer,
  VictoryAxis
} from 'victory';

import { roundMoney, formatMoney } from '../../../helpers/money';
import { formatDate } from '../../../helpers/date';

const Empty = ({ children }) => (
  <h3>
    {children}

    <style jsx>
      {`
         {
          font-size: 26px;
          color: #949494;
          text-align: center;
          margin: 100px auto;
        }
      `}
    </style>
  </h3>
);

export const Chart = ({ data = [] }) => (
  <>
    {data.length === 0 ? (
      <Empty>Sem valor no período</Empty>
    ) : (
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              `${formatDate(datum.x)}\n${formatMoney(datum.y)}`
            }
            labelComponent={
              <VictoryTooltip
                flyoutStyle={{
                  fill: 'white',
                  stroke: '#c9c9c9'
                }}
              />
            }
          />
        }
      >
        <VictoryAxis
          dependentAxis
          tickFormat={tick => `${roundMoney(tick)}`}
          style={{
            axis: { stroke: '#c9c9c9' },
            grid: { stroke: '#f1f1f1' },
            tickLabels: { fontSize: 13, padding: 15, fill: '#949494' }
          }}
        />
        <VictoryAxis
          index={0}
          tickCount={2}
          tickValues={[data[0].x, data[data.length - 1].x]}
          tickFormat={tick => `${formatDate(tick)}`}
          style={{
            axis: { stroke: '#c9c9c9' },
            grid: { stroke: '#f1f1f1' },
            tickLabels: { fontSize: 13, padding: 15, fill: '#949494' }
          }}
        />
        <VictoryArea
          groupComponent={
            <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
          }
          style={{
            data: {
              stroke: '#3276ff',
              strokeWidth: 5,
              strokeLinecap: 'round',
              fill: '#3276ff',
              fillOpacity: 0.3
            }
          }}
          data={data}
        />
      </VictoryChart>
    )}
  </>
);
