import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  VictoryContainer,
  VictoryChart,
  VictoryTheme,
  VictoryPolarAxis,
  VictoryGroup,
  VictoryArea,
  VictoryLabel,
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
    <Container>
      <VictoryChart polar theme={VictoryTheme.material} domain={{y: [0, 1]}}>
        <VictoryGroup
          animate={{
            duration: 500,
            onLoad: {duration: 500},
          }}
          colorScale={['#303030', '#fae56d']}
          style={{
            data: {fillOpacity: 1, strokeWidth: 0},
          }}>
          {data.map((data, i) => {
            return <VictoryArea key={i} data={data} />;
          })}
        </VictoryGroup>
        {Object.keys(maxima).map((key, i) => {
          return (
            <VictoryPolarAxis
              key={i}
              dependentAxis
              style={{
                axisLabel: {
                  fontSize: 14,
                  fill: '#ffffff',
                  padding: 20,
                },
                grid: {
                  stroke: '#626262',
                  strokeWidth: 1,
                  opacity: 1,
                },
                axis: {stroke: '#e4e4e4', strokeWidth: 1, opacity: 0.2},
                tickLabels: {fill: 'none'},
              }}
              labelPlacement="vertical"
              tickValues={[0.4, 0.6, 0.8, 1.0]}
              axisValue={i + 1}
              label={key}
              tickFormat={(t) => Math.ceil(t * maxima[key])}
            />
          );
        })}
      </VictoryChart>
    </Container>
  );
};

export default RNRadar;
