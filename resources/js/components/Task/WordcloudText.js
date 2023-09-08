import React, { useState } from 'react';
import { Text } from '@chakra-ui/react';
import { scaleLog } from '@visx/scale';
import Wordcloud from '@visx/wordcloud/lib/Wordcloud';

var  WordData = {text: "" ,value: "" };
const colors = ['#143059', '#2F6B9A', '#82a6c2'];

const totoAfricaLyrics = [
    {
      text: 'told',
      value: 64,
    },
    {
      text: 'mistake',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'bad',
      value: 17,
    },
  ]
  console.log(totoAfricaLyrics);
const words = totoAfricaLyrics;

const fixedValueGenerator = () => 0.5;

function getRotationDegree() {
  const rand = Math.random();
  const degree = rand > 0.5 ? 60 : -60;
  return rand * degree;
}


export default function WordcloudText() {

  return (
    <div className="wordcloud">
      <Wordcloud
        words={words}
        width={200}
        height={200}
        fontSize={20}
        font={'Impact'}
        rotate={getRotationDegree}
        padding={2}
      >
        {(cloudWords) =>
          cloudWords.map((w, i) => (
            <Text
              key={w.text}
              fill={colors[i % colors.length]}
              textAnchor={'middle'}
              fontSize={w.size}
              fontFamily={w.font}
            >
              {w.text}
            </Text>
          ))
        }
      </Wordcloud>
      <style jsx="true">{`
        .wordcloud {
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        .wordcloud svg {
          margin: 1rem 0;
          cursor: pointer;
        }

        .wordcloud label {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          margin-right: 8px;
        }
        .wordcloud textarea {
          min-height: 100px;
        }
      `}</style>
    </div>
  );
}