import React, { useState, Fragment } from 'react';
import { useEffect } from 'react';

import ReactFlow, { Background, Controls, MiniMap } from 'react-flow-renderer';
import CustomEdge from './custom.edge'

const initialElements = []

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
}

const MindNode = (props) => {

  const [elements, setElements] = useState(props.elements);

  useEffect(() => {
    if (props.elements) {
      setElements(props.elements)
    }
  }, [props.elements])


  const [name, setName] = useState("")

  const edgeTypes = {
    custom: CustomEdge,
  };


  return (
    <Fragment>

      <ReactFlow
        elements={elements}
        onLoad={onLoad}
        edgeTypes={
          edgeTypes
        }
        style={{ width: '100%', height: '90vh' }}
        onConnect={props.onConnect}
        connectionLineStyle={{ stroke: "#ddd", strokeWidth: 2 }}
        connectionLineType="bezier"
        snapToGrid={true}
        onNodeDrag={(id, e) => props.onNodeDrag(e)}
        snapGrid={[16, 16]}
        arrowHeadColor='blue' 
        onElementClick={(i, d) => props.onElementClick(i, d)}
      >
        <Background
          color="#888"
          gap={16}
        />
        <MiniMap
          nodeColor={n => {
            if (n.type === 'input') return 'blue';

            return '#FFCC00'
          }} />
        <Controls />
      </ReactFlow>
    </Fragment>
  )
}

export default MindNode;