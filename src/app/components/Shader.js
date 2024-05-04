export const vertex = `
    void main() {
        vec3 newPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

    }
`
export const fragment = `
    void main() {
        gl_FragColor = vec4(1., 0., 0., 1.);
    }
`