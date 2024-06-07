import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useSelector } from 'react-redux';

const Graph = () => {
  const svgRef = useRef();
  const { data } = useSelector(state => state.filter);

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Crear un mapa para rastrear qué estudiantes están en qué aulas
    const aulaMap = new Map();
    data.forEach(student => {
      if (!aulaMap.has(student.aula_id)) {
        aulaMap.set(student.aula_id, []);
      }
      aulaMap.get(student.aula_id).push(student.cuenta.toString());
    });

    // Crear nodos para cada aula y enlaces entre aulas si comparten estudiantes
    const nodes = Array.from(aulaMap.keys()).map(aula_id => ({ 
      id: aula_id, 
      group: 'class', 
      studentCount: aulaMap.get(aula_id).length // Agregar cantidad de estudiantes por aula
    }));
    const links = [];
    for (let [aula1, students1] of aulaMap.entries()) {
      for (let [aula2, students2] of aulaMap.entries()) {
        if (aula1 !== aula2) {
          const sharedStudents = students1.filter(student => students2.includes(student));
          if (sharedStudents.length > 0) {
            links.push({ source: aula1, target: aula2 });
          }
        }
      }
    }

    // Configuración de la simulación
    const width = 800;
    const height = 600;
    const svg = d3.select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('max-width', '100%')
      .style('height', 'auto');

    svg.selectAll('*').remove(); // Limpiar contenido previo

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2));

    // Crear enlaces y nodos en el SVG
    const link = svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', 1.5);

    const node = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', 10)
      .attr('fill', '#69b3a2');

    // Añadir etiquetas a los nodos con la cantidad de estudiantes por aula
    const labels = svg.append('g')
      .attr('class', 'labels')
      .selectAll('text')
      .data(nodes)
      .enter().append('text')
      .text(d => `${d.id} (${d.studentCount})`)
      .attr('x', 12)
      .attr('y', 3);

    // Función para actualizar posiciones durante la simulación
    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      labels
        .attr('transform', d => `translate(${d.x},${d.y})`);
    }

    simulation
      .nodes(nodes)
      .on('tick', ticked);

    simulation.force('link')
      .links(links);
  }, [data]);

  return (
    <div className='flex justify-center'>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Graph;
