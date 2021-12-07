import { Canvas, Circle, Group } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import { MyCustomShape } from '../src';

describe('template', () => {
  test('export', () => {
    const $container = document.createElement('div');
    $container.id = 'container';
    document.body.prepend($container);

    // create a renderer
    const renderer = new Renderer();

    // create a canvas
    const canvas = new Canvas({
      container: 'container',
      width: 600,
      height: 500,
      renderer,
    });

    const group = new Group();

    const circle = new Circle({
      style: {
        x: 10,
        y: 10,
        r: 20,
        fill: 'white',
      }
    });

    const myCustomShape = new MyCustomShape({
      style: {
        prop1: 'test',
      },
    });
    
    group.appendChild(circle);
    group.appendChild(myCustomShape);
    canvas.appendChild(group);

    // remove 2s later
    setTimeout(() => {
      myCustomShape.style.prop1 = 'test2';
      group.removeChild(myCustomShape);
    }, 2000);
  });
});
