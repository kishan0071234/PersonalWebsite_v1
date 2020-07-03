import React from "react";
import Tree from "react-tree-graph";
import "react-tree-graph/dist/style.css";

export default function Skills() {
  let data = {
    name: "Skills",
    textProps: { x: -25, y: 25 },

    children: [
      {
        name: "Programming Languages",
        textProps: { x: -25, y: 19 },

        children: [
          {
            name: "Java",
            textProps: { x: -25, y: 19 },
            children: [
              {
                name: "Frameworks",
                textProps: { x: -25, y: 19 },
                children: [
                  {
                    name: "Spring Boot",
                    textProps: { x: -25, y: 19 },
                  },
                  {
                    name: "Spring Webflux",
                    textProps: { x: -25, y: 19 },
                  },
                ],
              },
            ],
          },
          {
            name: "Python",
            children: [],
            textProps: { x: -25, y: 19 },
          },
        ],
      },
      {
        name: "Web Development",
        textProps: { x: -25, y: 25 },
        children: [
          {
            name: "Javascript",
            textProps: { x: -25, y: 19 },
            children: [
              {
                name: "library",
                textProps: { x: -25, y: 19 },
                children: [
                  {
                    name: "React JS",
                    textProps: { x: -25, y: 19 },
                  },
                  {
                    name: "Redux",
                    textProps: { x: -25, y: 19 },
                  },
                ],
              },
            ],
          },
          {
            name: "HTML",
            textProps: { x: -25, y: 19 },
          },
          {
            name: "CSS",
            textProps: { x: -25, y: 19 },
          },
        ],
      },
      {
        name: "Databases",
        textProps: { x: -25, y: 19 },
        children: [
          {
            name: "MongoDB",
            textProps: { x: -25, y: 19 },
            children: [],
          },
          {
            name: "MySQL",
            textProps: { x: -25, y: 19 },
            children: [],
          },
        ],
      },
      {
        name: "Technologies",
        textProps: { x: -25, y: 19 },
        children: [
          {
            name: "Splunk",
            textProps: { x: -25, y: 19 },
            children: [],
          },
          {
            name: "Git",
            textProps: { x: -25, y: 19 },
            children: [],
          },
          {
            name: "Maven",
            textProps: { x: -25, y: 19 },
            children: [],
          },
          {
            name: "UML",
            textProps: { x: -25, y: 19 },
            children: [],
          },
        ],
      },
      {
        name: "Area of Interest",
        textProps: { x: -25, y: 19 },
        children: [
          {
            name: "Full Stack Development",
            textProps: { x: -25, y: 19 },
            children: [],
          },
          {
            name: "Machine Learning",
            textProps: { x: -25, y: 19 },
            children: [],
          },
          {
            name: "Cloud Development",
            textProps: { x: -22, y: 19 },
            children: [],
          },
        ],
      },
    ],
  };

  return (
    <Tree
      data={data}
      nodeRadius={15}
      margins={{ top: 100, bottom: 10, left: 30, right: 250 }}
      height={700}
      width={1100}
    />
  );
}
