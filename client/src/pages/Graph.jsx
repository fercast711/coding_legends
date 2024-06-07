import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useSelector } from 'react-redux';



const Graph = () => {
    const { data } = useSelector(state => state.filter)
  useEffect(() => {
    if(data.length === 0 || !data) return;
    const width = 800;
    const height = 600;
    const svg = d3.select('svg')
      .attr('width', width)
      .attr('height', height);

    const simulation = d3.forceSimulation()
      .force('link', d3.forceLink().id(d => d.id))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const nodes = [{ id: 'GST105', group: 'class' }, ...data.map(student => ({ id: student.cuenta.toString(), group: 'student' }))];
    const links = data.map(student => ({ source: 'GST105', target: student.cuenta.toString() }));

    const link = svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('class', 'link');

    const node = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(nodes)
      .enter().append('g');

    node.append('circle')
      .attr('r', 10)
      .attr('fill', d => d.group === 'class' ? '#ff0000' : '#69b3a2');

    node.append('text')
      .text(d => d.id)
      .attr('x', 12)
      .attr('y', 3);

    simulation
      .nodes(nodes)
      .on('tick', ticked);

    simulation.force('link')
      .links(links);

    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    }
  }, [data]);

  return (
    <div className='flex justify-center'>
      <svg></svg>
    </div>
  );
};

export default Graph;
