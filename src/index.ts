import { CustomElement, Circle, DisplayObjectConfig } from '@antv/g';

interface MyCustomShapeProps {
    prop1: string;
}

export class MyCustomShape extends CustomElement<MyCustomShapeProps> {
    constructor(config: DisplayObjectConfig<MyCustomShapeProps>) {
        super({
            ...config,
            type: 'test',
        });

        this.style.prop1;

        this.appendChild(new Circle({
            style: {
                x: 100,
                y: 100,
                r: 100,
                fill: 'red',
            }
        }));
    }

    connectedCallback() {
        console.log('disconnected');
    }

    disconnectedCallback() {
        console.log('disconnected');
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log('attribute changed', name, oldValue, newValue);
    }
}
