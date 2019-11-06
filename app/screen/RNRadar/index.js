import React, {Fragment, useState} from 'react';
import {
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
  VictoryPolarAxis,
  VictoryGroup,
  VictoryArea,
  Arc,
} from 'victory-native';
import styled from 'styled-components';
const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #303030;
`;
const RNRadar = props => {
  const characterData = [
    {
      strength: 10,
      intelligence: 10,
      luck: 10,
      stealth: 10,
      charisma: 10,
      sexy: 10,
      health: 10,
      border: 10,
    },
    {
      strength: 5,
      intelligence: 8,
      luck: 3,
      stealth: 5,
      charisma: 2,
      sexy: 6,
      health: 9,
      border: 9,
    },
  ];
  const getMaxima = data => {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  };

  const processData = data => {
    const maxByGroup = getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return {x: key, y: d[key] / maxByGroup[key]};
      });
    };
    return data.map((datum) => makeDataArray(datum));
  };
  const [data] = useState(processData(characterData));
  const [maxima] = useState(getMaxima(characterData));
  return (
    <Fragment>
      <Container>
        <VictoryChart
          polar
          style={{
            parent: {
              zIndex: 10,
            },
          }}>
          {Object.keys(maxima).map((key, i) => {
            return (
              <VictoryPolarAxis
                key={i}
                dependentAxis
                style={{
                  parent: {
                    zIndex: 10,
                  },
                  axisLabel: {
                    fontSize: 14,
                    fill: '#ffffff',
                    padding: 15,
                  },
                  grid: {
                    stroke: '#626262',
                    strokeWidth: 3,
                    opacity: 1,
                  },
                  axis: {stroke: '#e4e4e4', strokeWidth: 1, opacity: 0.2},
                  tickLabels: {fill: 'none'},
                }}
                labelPlacement="perpendicular"
                tickValues={[0.4, 0.6, 0.8, 1.0]}
                axisValue={i + 1}
                label={key}
                tickFormat={() => null}
              />
            );
          })}
          <VictoryGroup
            animate={{
              duration: 500,
              onLoad: {duration: 500},
            }}
            colorScale={['rgba(48, 48, 48, 0)', '#fae56d']}
            style={{
              data: {fillOpacity: 1, strokeWidth: 0},
            }}>
            {data.map((data, i) => {
              return <VictoryArea key={i} data={data} />;
            })}
          </VictoryGroup>
          <VictoryScatter
            style={{
              data: {fill: '#b8b8b8'},
            }}
            size={3}
            data={[
              {x: 0, y: 1},
              {x: 1, y: 1},
              {x: 2, y: 1},
              {x: 3, y: 1},
              {x: 4, y: 1},
              {x: 5, y: 1},
              {x: 6, y: 1},
              {x: 7, y: 1},
            ]}
          />
        </VictoryChart>
      </Container>
    </Fragment>
  );
};

export default RNRadar;
